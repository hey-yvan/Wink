# Wink film

The 24-second loop in the landing page's **In motion** section (`/media/wink-film.mp4`).
It is drawn entirely in code: `film.html` is one page whose every pixel is a pure
function of time. `seek(t)` computes the whole frame, and the page has no CSS
transitions or animations, so any `t` renders the same way in the browser preview
and in the offline renderer.

## Files

| Path | What it is |
| --- | --- |
| `film.html` | The film. Open it directly to preview it. Keys: space = play/pause, ←/→ = one frame (shift = 1 s). `?t=12.3` freezes on one moment. |
| `tools/render.mjs` | Playwright renderer. It steps `seek(i / fps)` one frame at a time, pipes PNG frames to ffmpeg, and writes `out/wink-film.mp4` plus `out/wink-film-poster.png`. |
| `package.json` | Pins Playwright. `node_modules/` and `out/` are gitignored. |

## Render

```bash
cd docs/design/film
npm install
npx playwright install chromium-headless-shell   # first time only
node tools/render.mjs --stills                   # storyboard beats → out/still-*.png
node tools/render.mjs --stills 3.95,12.1         # specific moments
node tools/render.mjs                            # full film: 1920×1080, 60 fps, H.264 CRF 20
node tools/render.mjs --from 9.5 --to 13 --out picker.mp4   # one segment
```

A full render takes about 2 minutes on an M-series Mac: 1440 frames, about 2.4 MB of output.
Fonts come from the local system: SF Mono and SF Pro. Render on macOS with SF Mono
installed, or the type falls back to Menlo.

## Timeline (seconds)

| t | Beat | The morphing object |
| --- | --- | --- |
| 0–2.8 | A ⌘Tab-style switcher hunts through ten apps | switcher strip |
| 2.8–6.6 | Caps Lock becomes Hyper. ⇪S summons Safari, then dismisses it. ⇪T brings Terminal forward | the strip becomes the hyper keycap, with an S/T key beside it |
| 6.6–9.8 | Repeated ⇪T cycles build → deploy; the minimized window flies out of the Dock | the keycap becomes the HUD pill (`n / 3`) |
| 9.8–12.4 | Holding ⇪S fills the 300 ms hold ring, then opens the picker. ↓↓⏎ picks Release notes | the HUD becomes the picker |
| 12.4–15.3 | ⇪Space opens the palette. `fi` → Figma | the picker becomes the palette |
| 15.3–18.5 | Holding ⇪ brings up the keyboard map; bound keys light up one by one | the palette becomes the keyboard panel |
| 18.5–22.7 | The panel shrinks to an amber dot, which becomes the Wink mark and winks. *One chord. One destination.* | the dot becomes the logo |
| 22.7–24 | The end card crossfades into frame 0 | the loop seam (first vs last frame PSNR ≈ 44.5 dB) |

Beats, captions, keycast and window events are data tables at the top of the
script (`EVENTS`, `CAPTIONS`, `KEYCAST`, `BLOB`, …). Retime them there.

## Publish

```bash
npx wrangler r2 object put wink-releases/wink/guide/wink-film.mp4 --file out/wink-film.mp4 --content-type video/mp4 --remote
npx wrangler r2 object put wink-releases/wink/guide/wink-film-poster.png --file out/wink-film-poster.png --content-type image/png --remote
```

The worker serves `/media/<name>` from `wink/guide/`, with Range support.
The page itself is regenerated with `scripts/generate-worker-site.py`.

## Provenance

Every visual is original: the Wink mark, hand-built UI mocks, and letter tiles
standing in for app icons. No third-party footage, fonts or music ships in the
file. It is silent on purpose, because the landing page autoplays it muted.

## Guide clips (compose)

`tools/compose.mjs` turns the raw recordings from the `guide-media-pipeline`
skill into the `/guide` videos (`guide-<clip>-vN.mp4`, 1600×1000, 60 fps). It
uses the same approach as the film, where `compose.html` renders every frame
as a pure function of `t`. Each frame gets the brand backdrop, the recording
inside a rounded screen, an eased virtual camera (≤ ~2× so the 1× source stays
sharp), keycast chips from `events.tsv`, and optional `cover` ranges that
cross-fade over frames that must not be published.

```bash
node tools/compose.mjs ~/.cache/wink-guide-media/rec out/guide --stills   # one still per camera key + event
node tools/compose.mjs ~/.cache/wink-guide-media/rec out/guide [clip ...]  # render
```

Per-clip trims, camera keys and covers are in `tools/guide-clips.json`.
`tools/calibrate.py` checks how the event log lines up with a recording (the
offset is normally ~0).
