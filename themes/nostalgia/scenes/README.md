# Nostalgia.exe — Starting Soon + BRB

**Status:** First implementation ready for OBS visual testing. These are new theme-native scenes; existing `scenes/starting.html` (AquaWave), gameplay frames, webcam scene, alert files and Buddy are unchanged.

Both Browser Sources are **1920×1080**, transparent over the **approved static Desktop World background** already used in OBS. Do not point OBS at GitHub `blob` URLs, which are GitHub's code viewer. Use local files with their neighboring CSS files (repo checkout) or publish under static hosting.

## Starting Soon

- `starting.html` imports `desktop-world.css` and `starting.css`.
- On page load: login (0–3.3s) → connection (3.3–7.7s) → portal (7.7–11.7s) → stays on **A LIVE JÁ VAI COMEÇAR**.
- CSS-only sequence: no live counters, event claims, video, permanent particle effects, JS or additional Browser Source.
- In OBS set the Browser Source to reload when scene becomes active if you want the login sequence on **every** entrance; leave this unchecked if you prefer not to restart it when returning to the scene.
- Put this source above the static background; music/audio remain separate OBS sources.

## BRB

- `brb.html` imports `desktop-world.css` and `brb.css`.
- Fixed **JÁ VOLTO!** status window, illustrated lightweight desktop hub on the left and transparent chat monitor on the right.
- The Voya placement is a **temporary designated slot, not final character art**. Add Voya as a separate OBS media/image source when their artwork is approved and publishing rights confirmed. Do not commit personal reference photos.
- Chat monitor **does not fetch or fake messages**. Put the existing real chat Browser Source **below the BRB HTML overlay but above the background**. Set chat background transparent, and position its content within the clear region.
- Suggested native 1920×1080 chat source placement (rounded): **X 1151, Y 226, W 657, H 632**. Check visually in OBS and adjust source if its built-in padding differs.
- Layout source order, from top to bottom:
  1. BRB HTML overlay (1920×1080)
  2. Real chat widget Browser Source (transparent)
  3. Static Desktop World background (same artwork as existing gameplay)
- Existing raid/follow/sub/donation alerts can stay on top if you want alerts active while away.
- No webcam automatically appears in BRB; opt in via nested `WEBCAM` source if desired.

## Common

- Design is tuned for a **1920×1080 OBS canvas**, with CSS percentages only for the scene composition. No need to use separate CSS in OBS when loading HTML as a local file; CSS files must remain in the same directory.
- Both scenes use the same fictional Windows-era application styling. Existing assets and `NOSTALGIA_SPEC.md` remain authoritative, and aesthetic approval still depends on your OBS screenshots.
- Performance: lightweight HTML/CSS over static image, no background video, no requestAnimationFrame, no external dependencies.
- For animation reset, right click Starting Browser Source and **Refresh browser source**; if OBS does not re-run the startup when switching scenes, check **Refresh browser when scene becomes active** in its properties.
- Future BRB: replace temporary Voya slot with approved character artwork, add occasional idle/walking motion only if performance allows, and optionally display chat inside a separate MSN monitor when source placement is confirmed.
