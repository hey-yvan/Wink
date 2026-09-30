// Deterministic frame renderer for film.html.
//   node tools/render.mjs                 → out/wink-film.mp4 (+ poster PNG)
//   node tools/render.mjs --stills 3.9,12 → out/still-<t>.png (default: storyboard beats)
//   --fps 60  --from 0 --to 24  --crf 20  --out name.mp4
// Each frame is seek(t) with t = i / fps; nothing depends on wall-clock playback.
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "out");
mkdirSync(OUT, { recursive: true });

const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`);
  if (i < 0) return def;
  const v = args[i + 1];
  return v && !v.startsWith("--") ? v : true;
};
const fps = Number(opt("fps", 60));
const crf = Number(opt("crf", 20));
const POSTER_T = 16.9;
const BEATS = [0.2, 1.6, 3.1, 3.6, 4.1, 5.2, 5.5, 6.3, 6.9, 7.8, 8.9, 9.95, 10.4, 11.3, 12.3, 12.6, 13.9, 14.8, 15.6, 16.9, 18.6, 19.0, 19.5, 20.9, 21.4, 23.2, 23.95];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(resolve(ROOT, "film.html")).href + "?render=1");
await page.evaluate(() => document.fonts.ready);
const duration = await page.evaluate(() => window.DURATION);
const shot = async t => {
  await page.evaluate(t => window.seek(t), t);
  return page.screenshot({ type: "png", clip: { x: 0, y: 0, width: 1920, height: 1080 } });
};

const stills = opt("stills", null);
if (stills) {
  const times = stills === true ? BEATS : String(stills).split(",").map(Number);
  for (const t of times) writeFileSync(resolve(OUT, `still-${t.toFixed(2)}.png`), await shot(t));
  console.log(`wrote ${times.length} stills to ${OUT}`);
} else {
  const from = Number(opt("from", 0));
  const to = Number(opt("to", duration));
  const n = Math.round((to - from) * fps);
  const file = resolve(OUT, opt("out", "wink-film.mp4"));
  const ff = spawn("ffmpeg", [
    "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-crf", String(crf), "-pix_fmt", "yuv420p", "-profile:v", "high",
    "-movflags", "+faststart", "-an", file,
  ], { stdio: ["pipe", "inherit", "inherit"] });
  const started = Date.now();
  for (let i = 0; i < n; i++) {
    const buf = await shot(from + i / fps);
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
    if (i % 120 === 0) console.log(`frame ${i}/${n}  ${((Date.now() - started) / 1000).toFixed(0)}s`);
  }
  ff.stdin.end();
  await new Promise((r, j) => ff.on("close", c => (c === 0 ? r() : j(new Error(`ffmpeg exited ${c}`)))));
  writeFileSync(resolve(OUT, "wink-film-poster.png"), await shot(POSTER_T));
  console.log(`wrote ${file} (${n} frames, ${((Date.now() - started) / 1000).toFixed(0)}s)`);
}
await browser.close();
