// Composite raw guide recordings into finished clips.
//
//   node tools/compose.mjs <rec-dir> <out-dir> [clip ...] [--stills]
//
// <rec-dir> holds clip-*.mov and events.tsv from record-clips.sh. Per-clip
// camera moves, trims and cover ranges live in guide-clips.json next to this
// file. --stills writes a contact frame per camera key instead of video.
import { chromium } from "playwright";
import { spawnSync, spawn } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const stills = args.includes("--stills");
const [recDir, outDir, ...only] = args.filter(a => !a.startsWith("--")).map((a, i) => (i < 2 ? resolve(a) : a));
const SPECS = JSON.parse(readFileSync(join(HERE, "guide-clips.json"), "utf8"));
const FPS = 60;
mkdirSync(outDir, { recursive: true });

const events = {};
for (const line of readFileSync(join(recDir, "events.tsv"), "utf8").trim().split("\n")) {
  const [clip, t, label] = line.split("\t");
  (events[clip.replace(/^clip-/, "")] ??= []).push({ t: Number(t), label });
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(join(HERE, "compose.html")).href);
await page.evaluate(() => document.fonts.ready);

for (const [name, spec] of Object.entries(SPECS)) {
  if (only.length && !only.includes(name)) continue;
  const mov = join(recDir, `clip-${name}.mov`);
  if (!existsSync(mov)) { console.log(`skip ${name}: no recording`); continue; }
  const [t0, t1] = spec.trim;
  const duration = t1 - t0;

  // constant-rate frames of the trimmed range (screencapture writes VFR)
  const fdir = join(outDir, `.frames-${name}`);
  rmSync(fdir, { recursive: true, force: true });
  mkdirSync(fdir, { recursive: true });
  spawnSync("ffmpeg", ["-loglevel", "error", "-i", mov, "-vf", `fps=${FPS},trim=start=${t0}:end=${t1 + 0.5},setpts=PTS-STARTPTS`,
    "-q:v", "2", join(fdir, "%05d.jpg")], { stdio: "inherit" });
  const nSrc = readdirSync(fdir).length;
  const srcAt = t => pathToFileURL(join(fdir, String(Math.min(nSrc, Math.max(1, Math.round(t * FPS) + 1))).padStart(5, "0") + ".jpg")).href;

  const evs = (events[name] ?? []).map(e => ({ ...e, t: e.t - t0 + (spec.keyLead ?? 0) }));
  for (const [i, u] of Object.entries(spec.until ?? {})) evs[i].until = u - t0;
  await page.evaluate(s => window.setup(s), {
    duration,
    events: evs,
    camera: spec.camera.map(k => ({ ...k, t: k.t - t0 })),
  });

  const sourceFor = t => {
    const abs = t + t0;
    for (const c of spec.cover ?? []) {
      if (abs >= c.from && abs <= c.to) {
        const p = (abs - c.from) / (c.to - c.from);
        return { a: srcAt(c.from - t0), b: srcAt(c.to - t0), mix: p * p * (3 - 2 * p) };
      }
    }
    return { a: srcAt(t) };
  };

  if (stills) {
    const ts = spec.camera.map(k => k.t - t0).concat(evs.map(e => e.t + 0.6)).filter(t => t >= 0 && t < duration).sort((a, b) => a - b);
    for (const t of ts) {
      await page.evaluate(([t, s]) => window.frame(t, s), [t, sourceFor(t)]);
      await page.screenshot({ path: join(outDir, `${name}-${t.toFixed(2)}.png`) });
    }
    console.log(`${name}: ${ts.length} stills`);
    continue;
  }

  const file = join(outDir, `guide-${name}.mp4`);
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", file],
    { stdio: ["pipe", "inherit", "inherit"] });
  const n = Math.round(duration * FPS);
  const started = Date.now();
  for (let i = 0; i < n; i++) {
    const t = i / FPS;
    await page.evaluate(([t, s]) => window.frame(t, s), [t, sourceFor(t)]);
    const buf = await page.screenshot({ type: "png" });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
  }
  ff.stdin.end();
  await new Promise((r, j) => ff.on("close", c => (c === 0 ? r() : j(new Error(`ffmpeg ${c}`)))));
  rmSync(fdir, { recursive: true, force: true });
  console.log(`${name}: ${file} (${n} frames, ${((Date.now() - started) / 1000).toFixed(0)}s)`);
}
await browser.close();
