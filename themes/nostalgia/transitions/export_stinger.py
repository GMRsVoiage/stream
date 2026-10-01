#!/usr/bin/env python3
"""Export a transparent 1920x1080 VP9 WebM OBS Stinger from app-switch.html.

Requires: Python playwright + its Chromium browser, FFmpeg with libvpx-vp9.
The HTML source owns all artwork, color and animation timing. This script
samples its deterministic window.renderFrame(seconds) function at each frame.
"""
import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path
from urllib.parse import urlencode

DURATION_SECONDS = 1.2
VALID_TARGETS = ("generic", "messenger", "broadcast", "away", "portal", "logout")


def export(target: str, output: Path, fps: int, width: int, height: int) -> None:
    if not shutil.which("ffmpeg"):
        raise RuntimeError("FFmpeg is required (with libvpx-vp9 support).")
    try:
        from playwright.sync_api import sync_playwright
    except ImportError as exc:
        raise RuntimeError("Install Playwright: pip install playwright && python -m playwright install chromium") from exc

    html = Path(__file__).with_name("app-switch.html").resolve()
    if not html.exists():
        raise FileNotFoundError(html)
    output.parent.mkdir(parents=True, exist_ok=True)

    # Include an exact final all-transparent frame; do not stretch or speed up.
    frame_count = round(DURATION_SECONDS * fps) + 1
    with tempfile.TemporaryDirectory(prefix="nostalgia-stinger-") as temp_dir:
        frames = Path(temp_dir)
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            context = browser.new_context(
                viewport={"width": width, "height": height},
                device_scale_factor=1,
                color_scheme="light",
                reduced_motion="reduce",
            )
            page = context.new_page()
            url = html.as_uri() + "?" + urlencode({"export": "1", "to": target})
            page.goto(url, wait_until="load")
            page.evaluate("document.fonts.ready")
            if not page.evaluate("typeof window.renderFrame === 'function'"):
                raise RuntimeError("The HTML animation did not initialize.")
            for i in range(frame_count):
                seconds = min(DURATION_SECONDS, i / fps)
                page.evaluate("(seconds) => window.renderFrame(seconds)", seconds)
                page.screenshot(path=str(frames / f"{i:04d}.png"),
                                omit_background=True, animations="disabled")
                if i % 10 == 0 or i == frame_count - 1:
                    print(f"Captured frame {i + 1}/{frame_count}", flush=True)
            context.close()
            browser.close()

        cmd = [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-framerate", str(fps),
            "-i", str(frames / "%04d.png"),
            "-c:v", "libvpx-vp9", "-pix_fmt", "yuva420p",
            "-auto-alt-ref", "0", "-crf", "31", "-b:v", "0",
            "-an", "-metadata", "title=Nostalgia.exe App Switch Stinger",
            str(output),
        ]
        subprocess.run(cmd, check=True)
    print(f"Created: {output}", flush=True)
    print("OBS Stinger transition point: 600 ms (video: 1200 ms; +1 transparent end frame).")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--to", choices=VALID_TARGETS, default="generic",
                        help="The announced destination app.")
    parser.add_argument("--output", type=Path, default=Path("app-switch.webm"))
    parser.add_argument("--fps", type=int, choices=(24, 30, 60), default=30)
    parser.add_argument("--size", choices=("1920x1080", "1280x720"), default="1920x1080")
    args = parser.parse_args()
    width, height = [int(value) for value in args.size.split("x")]
    export(args.to, args.output, args.fps, width, height)


if __name__ == "__main__":
    main()
