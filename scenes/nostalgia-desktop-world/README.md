# Nostalgia.exe Desktop World — OBS overlay v1.2

Status: gameplay placement adjusted and reported working by user; the webcam frame has been removed from this overlay.

This scene is a **transparent 1920×1080 browser overlay for FRAME ELEMENTS ONLY**. Do not use it as a replacement for the native game or webcam sources. There is no JavaScript, permanent video loop, background-image download, blur or external dependency. The previously approved alerts and Buddy are unchanged.

## Files

- `overlay.html` + `overlay.css`: frame layer for Gameplay and Nostalgia Messenger chat. The webcam frame belongs exclusively to the nested OBS `WEBCAM` scene.
- Background artwork: **approved concept reference, not included here as a repository binary yet**. Import the clean approved image separately as an OBS Image source. The annotated layout mockup is NOT the final background.

## OBS native setup (1920×1080 canvas)

Add sources from bottom to top in this order:
1. **Image**: Nostalgia.exe Desktop World clean static art, fill screen.
2. **Game/Display Capture** (crop and scale to gameplay interior; can use existing full-screen gameplay scene instead).
3. **Nested OBS Scene `WEBCAM`**: camera and its future independent Nostalgia Cam frame. Position it freely; no webcam frame remains in this overlay.
4. **Chat Browser Source**: existing Buddy/chat widget, positioned inside Chat interior.
5. **Browser Source**: open `overlay.html` via local file or hosted URL; width 1920, height 1080. This source contains ONLY borders/titlebars; it is transparent between panels.
6. **Existing fullscreen Streamlabs alerts**: keep above frames; preserve their approved individual HTML/CSS/JS.

Reference positions (in native 1920×1080 canvas; frame outer boxes):

| Region | X | Y | Width | Height |
|---|---:|---:|---:|---:|
| Gameplay outer | 240 | 129 | 1190 | 720 |
| Chat outer | 1486 | 292 | 407 | 620 |

Approximate usable interiors after the thin borders and UI title/footer:
- Gameplay **inner capture**: **x 243, y 160, width 1184, height 666** (16:9). This region excludes titlebar, 2px frame and bottom status line. The gameplay frame intentionally has a slightly wider margin than the video.\n- In OBS select the *game/display capture source*, not the HTML overlay source: Transform → Edit Transform; Position **243, 160**; Bounding Box **Scale to inner bounds** / **1184×666** (or transform using the native source and crop as appropriate). Keep the capture BELOW the transparent overlay in the sources stack. For a full-HD source, scaling to 1184×666 is precisely 16:9, without distortion.\n- Avoid setting the capture to the outer frame box (1190×720), because then the game extends behind the titlebar and status footer. OBS Display Capture of OBS itself will naturally show a recursive preview; test with a game or another window.
- Webcam: no reserved HTML border. Keep the position and transform already approved by the user in OBS, and apply the new Nostalgia Cam border inside the reusable `WEBCAM` scene when ready.
- Chat: x 1488, y 323, width 403, height 564. Set the chat Browser Source to this size and keep its own background transparent.

Note: percentages in `overlay.css` are authoritative; these pixel coordinates are rounded guidance. Keep OBS canvas/source dimensions at 1920×1080. Do not stretch this overlay differently from the canvas.

### Customize

At the start of `overlay.css`, edit `--game-x/y/w/h`, `--chat-x/y/w/h`. They are percentage coordinates relative to the full canvas.

The artwork is deliberately separate from these HTML frames. The current version is a working *layout foundation*, **not** finished game/video/chat integration. Chat messages are still rendered by your existing chat source; this HTML never impersonates live events.

### Planned scene variants

- Gameplay: current clean version, with the option to hide the decorative gameplay frame and run gameplay full-screen later.
- Just Chatting: wider camera and more of the background visible.
- BRB: future Voya mini-desktop platform, monitor and motion layer. No Voya behaviors included in v1.

Keep the actual camera and game as native OBS sources: CSS frame decorations alone are cheap, but rendering game footage or permanent effects inside browser would waste resources.
