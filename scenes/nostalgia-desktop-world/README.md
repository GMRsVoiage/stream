# Nostalgia.exe Desktop World — OBS overlay v1

Status: implemented in GitHub; **OBS visual test still pending**.

This scene is a **transparent 1920×1080 browser overlay for FRAME ELEMENTS ONLY**. Do not use it as a replacement for the native game or webcam sources. There is no JavaScript, permanent video loop, background-image download, blur or external dependency. The previously approved alerts and Buddy are unchanged.

## Files

- `overlay.html` + `overlay.css`: frame layer for Gameplay, Webcam and Nostalgia Messenger chat.
- Background artwork: **approved concept reference, not included here as a repository binary yet**. Import the clean approved image separately as an OBS Image source. The annotated layout mockup is NOT the final background.

## OBS native setup (1920×1080 canvas)

Add sources from bottom to top in this order:
1. **Image**: Nostalgia.exe Desktop World clean static art, fill screen.
2. **Game/Display Capture** (crop and scale to gameplay interior; can use existing full-screen gameplay scene instead).
3. **Video Capture Device**: camera source into Webcam interior.
4. **Chat Browser Source**: existing Buddy/chat widget, positioned inside Chat interior.
5. **Browser Source**: open `overlay.html` via local file or hosted URL; width 1920, height 1080. This source contains ONLY borders/titlebars; it is transparent between panels.
6. **Existing fullscreen Streamlabs alerts**: keep above frames; preserve their approved individual HTML/CSS/JS.

Reference positions (in native 1920×1080 canvas; frame outer boxes):

| Region | X | Y | Width | Height |
|---|---:|---:|---:|---:|
| Gameplay outer | 240 | 129 | 1219 | 720 |
| Webcam outer | 1486 | 36 | 407 | 242 |
| Chat outer | 1486 | 292 | 407 | 620 |

Approximate usable interiors after the thin borders and UI title/footer:
- Gameplay: x 242, y 160, width 1215, height 667. Recommended capture source aspect ratio **16:9** (e.g. 1184×666), centered in this interior.
- Webcam: x 1488, y 67, width 403, height 209. May crop 16:9 slightly or adjust `--cam-h` to fit a source.
- Chat: x 1488, y 323, width 403, height 564. Set the chat Browser Source to this size and keep its own background transparent.

Note: percentages in `overlay.css` are authoritative; these pixel coordinates are rounded guidance. Keep OBS canvas/source dimensions at 1920×1080. Do not stretch this overlay differently from the canvas.

### Customize

At the start of `overlay.css`, edit `--game-x/y/w/h`, `--cam-x/y/w/h`, `--chat-x/y/w/h`. They are percentage coordinates relative to the full canvas.

The artwork is deliberately separate from these HTML frames. The current version is a working *layout foundation*, **not** finished game/video/chat integration. Chat messages are still rendered by your existing chat source; this HTML never impersonates live events.

### Planned scene variants

- Gameplay: current clean version, with the option to hide the decorative gameplay frame and run gameplay full-screen later.
- Just Chatting: wider camera and more of the background visible.
- BRB: future Voya mini-desktop platform, monitor and motion layer. No Voya behaviors included in v1.

Keep the actual camera and game as native OBS sources: CSS frame decorations alone are cheap, but rendering game footage or permanent effects inside browser would waste resources.
