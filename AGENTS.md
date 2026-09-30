# AGENTS.md — GMRsVoiage Stream Identity

## 1. Purpose

This directory contains the visual identity and reusable design system for the
GMRsVoiage livestream ecosystem.

The current work is a rebranding from the previous identity:

- Old name: `Rafaelmanu001`
- Current name: `GMRsVoiage`

New work must use `GMRsVoiage` unless explicitly working with legacy assets.

This repository is not only a collection of images. It should become the source
of truth for the visual language used across:

- OBS scenes
- webcam overlays
- Twitch chat
- alerts
- donation/sub goals
- Starting / BRB / Ending scenes
- Streamer.bot interactions
- HTML/CSS browser sources
- stream widgets
- future GMRsVoiage streaming assets

---

## 2. Visual direction

The primary visual identity is:

> Classic Vaporwave interpreted as a retro-futuristic interface system.

The intention is NOT to modernize Vaporwave into a generic contemporary
"neon futuristic" aesthetic.

A defining characteristic of the identity is the contrast between:

- old technology
- imagined futures
- early digital interfaces
- classical imagery
- nostalgic computer graphics

### Visual hierarchy

Use approximately:

- 60% Classic Vaporwave
- 30% Windows XP / early-web interface language
- 10% Frutiger Aero

These percentages are conceptual, not strict mathematical requirements.

---

## 3. Classic Vaporwave — primary identity

Use Vaporwave as the primary visual foundation.

Preferred elements include:

- Greco-Roman statues and busts
- palm trees
- wireframe grids
- checkerboards
- sunset discs
- magenta / pink / purple / blue gradients
- geometric shapes
- collage composition
- image cutouts
- old-computer graphics
- pixel or low-resolution details
- subtle dithering
- subtle grain
- VHS / CRT references when appropriate
- simple retro 3D
- late-1980s / 1990s imagined-future imagery
- generous negative space

Vaporwave elements should generally look intentionally synthetic, dated,
collaged, or digitally processed.

Do not automatically make elements photorealistic.

---

## 4. Windows XP / early web — interface language

Windows XP and early Web-era interfaces are primarily used for functional UI.

Good uses include:

- chat containers
- alert windows
- dialog boxes
- notification popups
- title bars
- progress bars
- buttons
- context menus
- status indicators
- goal widgets
- small information panels

The interface may resemble an alternate version of Windows XP designed inside
a Vaporwave universe.

Do not reproduce Windows XP exactly everywhere.

Use it as a recognizable interaction language.

Conceptual examples:

```text
[Vaporwave background]

┌─ Donation received ──────────────[x]─┐
│                                      │
│  Fulano enviou R$ 5,00              │
│                                      │
│                    [ OK ]            │
└──────────────────────────────────────┘
```

```text
┌─ Twitch Chat ───────────────────[_][□][x]─┐
│                                           │
│ GMRFan: mensagem                          │
│ User02: mensagem                          │
│                                           │
└───────────────────────────────────────────┘
```

---

## 5. Frutiger Aero — secondary accent

Frutiger Aero should be used sparingly.

Appropriate elements:

- water
- bubbles
- blue skies
- green/natural accents
- soft reflections
- translucent plastic
- glossy buttons
- rounded interface details
- occasional glass effects

Frutiger Aero must not become the dominant visual language.

It is an accent layer that can soften or contrast the darker Vaporwave
environment.

---

## 6. Avoid

Do not drift toward generic modern streaming aesthetics.

Avoid excessive use of:

- cyberpunk
- RGB-gaming aesthetics
- modern sci-fi HUDs
- glassmorphism
- chrome everywhere
- heavy bloom
- excessive glow
- excessive particles
- excessive lens flares
- complex holographic interfaces
- high-detail futuristic machinery
- "AI generated futuristic UI" appearance
- glossy premium SaaS aesthetics
- decorative elements that reduce gameplay readability

Neon is allowed, but neon should not be the entire design.

The desired feeling is closer to:

> "the future as imagined by older digital culture"

than:

> "a futuristic interface designed in the 2020s."

---

## 7. Composition

Gameplay is the primary content.

Any gameplay overlay must preserve a large unobstructed area for the game.

Preferred structure:

```text
┌─────────────────────────────────────┬──────────────┐
│            optional goal            │    webcam    │
│                                     ├──────────────┤
│                                     │              │
│                                     │     chat     │
│             gameplay                │              │
│                                     │              │
│                                     │              │
│                                     │              │
└─────────────────────────────────────┴──────────────┘
```

The exact dimensions may change, but the principle should remain:

> Content first, branding second.

Decorations should usually live near:

- corners
- borders
- unused margins
- panel boundaries

Avoid putting decorative assets over important game HUD elements.

---

## 8. Webcam

The webcam overlay should be its own reusable component.

Preferred characteristics:

- relatively thin frame
- transparent interior
- classic Vaporwave details
- optional statue, palm, grid or checkerboard accent
- limited glow
- readable at stream resolution

Do not permanently bake the webcam feed into background artwork.

Expected separation:

```text
background
webcam-video
webcam-overlay
```

---

## 9. Chat

The Twitch chat should preferably be implemented using HTML/CSS/JS rather than
baked into a static image.

Conceptually:

```text
Twitch messages
      ↓
chat logic
      ↓
HTML
      ↓
GMRsVoiage CSS theme
      ↓
OBS Browser Source
```

The chat should resemble a retro desktop application or communication window.

Suggested visual influences:

- Windows XP
- MSN Messenger
- early web chatrooms
- IRC clients
- old desktop applications

while using the GMRsVoiage Vaporwave palette.

Messages must remain readable.

Never sacrifice text contrast for aesthetics.

---

## 10. Alerts

Alerts should behave like events happening inside the fictional GMRsVoiage
computer/interface environment.

Examples:

- donation → desktop dialog
- follow → notification balloon
- subscription → installation/completion dialog
- raid → system warning or large popup
- errors/jokes → fake Windows error

Animations should generally be short.

Avoid keeping large alerts permanently on screen.

---

## 11. Asset separation

Whenever practical, visual elements must remain modular.

Prefer:

```text
assets/
├── backgrounds/
├── webcam/
├── statues/
├── palms/
├── grids/
├── checkerboards/
├── icons/
├── textures/
├── windows/
└── logos/
```

Do not produce one giant image when the individual layers would be useful
independently.

For example, a scene should ideally be composable as:

```text
background
+ gameplay
+ webcam
+ webcam frame
+ chat HTML
+ goal HTML
+ alerts HTML
```

This makes OBS scenes easier to maintain and animate.

---

## 12. HTML/CSS architecture

Reusable visual values should live in CSS variables.

Example:

```css
:root {
  --gmrs-bg: #120b2e;

  --gmrs-purple: #6c36a8;
  --gmrs-magenta: #e83e9b;
  --gmrs-pink: #ff75b5;

  --gmrs-cyan: #46d9e8;
  --gmrs-blue: #3549a7;

  --gmrs-light: #f4edf5;

  --gmrs-border-width: 2px;
  --gmrs-shadow: 3px 3px 0 rgba(20, 5, 40, 0.6);
}
```

These colors are starting values, not yet immutable brand standards.

Do not duplicate arbitrary colors throughout different widgets.

Prefer shared tokens.

---

## 13. Performance

These assets run inside a livestream environment.

Performance matters.

Prefer:

- CSS over JavaScript animation where practical
- transform and opacity for animations
- static images for static decorations
- OBS native sources for large video/media assets
- a limited number of Browser Sources
- reusable Browser Sources where appropriate

Avoid:

- large continuous blur effects
- dozens of animated particles
- expensive backdrop filters
- unnecessarily large canvases
- high-frequency JavaScript layout changes
- animations that continue while invisible

Visual complexity must justify its performance cost.

---

## 14. OBS philosophy

Do not move everything into HTML simply because HTML is available.

Recommended split:

```text
OBS native sources
├── gameplay
├── webcam
├── static images
├── video backgrounds
└── media

Browser Sources
├── chat
├── alerts
├── goals
├── dynamic text
└── interactive widgets
```

---

## 15. Responsive/browser-source requirements

Browser-source components should target OBS first.

Default target resolution:

```text
1920x1080
```

Components should tolerate scaling when practical.

Do not rely on:

- browser scrollbars
- user interaction
- hover states for essential information
- browser-specific manual setup

OBS should be able to load the component and use it immediately.

---

## 16. Naming

Use clear English filenames and paths for implementation unless an existing
project convention requires otherwise.

Examples:

```text
webcam-frame.png
vaporwave-grid.png
chat-window.html
chat-window.css
starting.html
brb.html
ending.html
goal-bar.html
```

User-facing text may be Portuguese.

Do not introduce new `Rafaelmanu001` branding.

Legacy references may remain only where necessary for migration.

---

## 17. Repository structure

The repository currently contains areas such as:

```text
assets/
css/
js/
render/
scenes/
index.html
```

Preserve this structure unless a restructuring has a clear benefit.

New reusable branding assets belong under `assets/`.

Reusable CSS belongs under `css/`.

Reusable JavaScript belongs under `js/`.

Scenes belong under `scenes/`.

Generated/exported previews may belong under `render/`.

---

## 18. Source assets vs rendered assets

Whenever possible, distinguish editable/source assets from final exports.

Example:

```text
assets/
├── source/
└── export/
```

Do not repeatedly recompress source images.

Do not overwrite higher-quality originals with OBS-optimized versions.

---

## 19. Security

Never commit:

- Twitch OAuth tokens
- Streamer.bot credentials
- OBS WebSocket passwords
- Home Assistant tokens
- API keys
- webhook secrets
- private donation credentials

Use environment variables, ignored local configuration files, or another
appropriate secret-management mechanism.

Any example configuration must use placeholders.

Example:

```env
TWITCH_TOKEN=YOUR_TOKEN_HERE
```

Never real credentials.

---

## 20. Rebranding rule

When modifying an existing asset, first determine whether it belongs to the old
Rafaelmanu001 identity.

When appropriate:

```text
Rafaelmanu001
      ↓
GMRsVoiage
```

But do not blindly replace strings where they represent:

- historical data
- URLs that still require the old handle
- IDs
- external integration identifiers

Migration must preserve functionality.

---

## 21. Design review checklist

Before considering a visual component complete, verify:

1. Does it visibly belong to GMRsVoiage?
2. Is Vaporwave still the dominant aesthetic?
3. Does it retain older digital/retro characteristics?
4. Is Windows XP being used as interface language rather than decoration only?
5. Is Frutiger Aero secondary rather than dominant?
6. Is there too much glow, glass or visual noise?
7. Is text readable at stream size?
8. Does it obstruct gameplay?
9. Can useful elements be reused separately?
10. Is the component reasonably lightweight for OBS?
11. Does it avoid legacy Rafaelmanu001 branding?
12. Are secrets and credentials absent?

If several answers are negative, revise before treating the work as complete.

---

## 22. Current design principle

When uncertain between two directions, prefer:

> simpler, older-looking, recognizable Vaporwave

over:

> more detailed, polished, modern futuristic design.

The age and imperfection of the visual language are part of the identity.
