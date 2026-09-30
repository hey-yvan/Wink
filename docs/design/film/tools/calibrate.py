#!/usr/bin/env python3
"""Align record-clips.sh's events.tsv with each recorded .mov.

events.tsv times are seconds since `screencapture` was *launched*; the movie
starts a little later. The first injected input always changes the screen
(a window raises, a HUD or panel appears), so the first frame change after
a quiet lead-in marks event 1. offset = event1_time - change_time.

Usage: calibrate.py <rec-dir>   → writes <rec-dir>/timeline.json
"""
import json
import subprocess
import sys
from pathlib import Path

import numpy as np

rec = Path(sys.argv[1])
events = {}
for line in (rec / "events.tsv").read_text().splitlines():
    clip, t, label = line.split("\t")
    events.setdefault(clip, []).append({"t": float(t), "label": label})

W, H, FPS = 192, 108, 60
out = {}
for clip, evs in events.items():
    mov = rec / f"{clip}.mov"
    raw = subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-i", str(mov), "-vf", f"fps={FPS},scale={W}:{H},format=gray",
         "-f", "rawvideo", "-"], capture_output=True, check=True).stdout
    frames = np.frombuffer(raw, np.uint8).reshape(-1, H, W).astype(np.int16)
    diff = np.abs(np.diff(frames, axis=0)).mean(axis=(1, 2))
    # first real change after 0.3 s (skip encoder warm-up frames)
    start = int(0.3 * FPS)
    idx = next((i for i in range(start, len(diff)) if diff[i] > 0.35), None)
    if idx is None:
        raise SystemExit(f"{clip}: no frame change found")
    change_t = (idx + 1) / FPS
    offset = evs[0]["t"] - change_t
    duration = len(frames) / FPS
    out[clip] = {
        "duration": round(duration, 3),
        "offset": round(offset, 3),
        "events": [{"t": round(e["t"] - offset, 3), "label": e["label"]} for e in evs],
    }
    print(f"{clip:22s} dur {duration:6.2f}  offset {offset:+.3f}  first change {change_t:.3f}")

(rec / "timeline.json").write_text(json.dumps(out, indent=2, ensure_ascii=False))
print(f"wrote {rec / 'timeline.json'}")
