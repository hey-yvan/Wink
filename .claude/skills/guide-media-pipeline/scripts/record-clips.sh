#!/bin/zsh
# Record the five guide demo clips on the stage display.
# Requires stage.sh to have run. ~2 minutes; the machine must be hands-off.
#
# Besides the .mov files this writes rec/events.tsv: one line per injected
# input (clip, seconds since the capture was launched, label). compose.mjs
# uses it to place the keycast chips and camera moves; the capture's own
# start latency is calibrated there from the first frame change.
set -eu
zmodload zsh/datetime
WORK="${WINK_MEDIA_WORK:-$HOME/.cache/wink-guide-media}"
SX="${WINK_STAGE_X:-1920}"          # stage display origin (global x), same as stage.sh
K="$WORK/winkkeys"
R="$WORK/rec"
mkdir -p "$R"
EV="$R/events.tsv"
: > "$EV"

# Panels open on the display under the pointer (gotcha #8). Park it on the
# stage's right edge, mid-height: off every staged window, and away from the
# top/bottom edges where the menu bar or Dock would slide in.
park_mouse() {
  python3 -c "
import Quartz
ev = Quartz.CGEventCreateMouseEvent(None, Quartz.kCGEventMouseMoved, ($SX + 1917, 540), 0)
Quartz.CGEventPost(Quartz.kCGHIDEventTap, ev)"
}

front() { osascript -e "tell application \"$1\" to activate" >/dev/null 2>&1; }
# Each clip shows only its protagonist app: hide the other one first.
hide() { osascript -e "tell application \"System Events\" to set visible of process \"$1\" to false" >/dev/null 2>&1; }

CLIP="" T0=0
record() { # $1=name $2=seconds; screencapture never overwrites (gotcha #1)
  CLIP=$1
  rm -f "$R/$1.mov"
  T0=$EPOCHREALTIME
  screencapture -v -V "$2" -R "$SX,0,1920,1080" "$R/$1.mov" &
  CAP=$!
  sleep 2.0
}
ev() { printf '%s\t%.3f\t%s\n' "$CLIP" $(( EPOCHREALTIME - T0 )) "$1" >> "$EV"; }

# wait propagates screencapture's exit status, so a failed recording
# (Screen Recording revoked, disk full) aborts here under set -e instead
# of silently reporting ALL_CLIPS_DONE; the size check catches an exit-0
# capture that still wrote nothing
finish() {
  if ! wait $CAP 2>/dev/null; then
    echo "CAPTURE FAILED (screencapture exit nonzero): $1" >&2; exit 1
  fi
  [ -s "$R/$1.mov" ] || { echo "CAPTURE FAILED (empty/missing): $1" >&2; exit 1; }
  echo "clip done: $1"
}

# ---------- A: first chord (Safari summon / dismiss / summon) ----------
front Terminal; hide Safari; sleep 1.2; park_mouse
record clip-first-chord 12
ev "⇪ S";  "$K" chord 1 150;  sleep 2.3
ev "⇪ S";  "$K" chord 1 150;  sleep 2.3
ev "⇪ S";  "$K" chord 1 150;  sleep 2.4
finish clip-first-chord

# ---------- B: cycle Terminal windows (incl. minimized) ----------
front Terminal; hide Safari; sleep 1.2; park_mouse
record clip-cycle 13
ev "⇪ T";  "$K" chord 17 150; sleep 1.9
ev "⇪ T";  "$K" chord 17 150; sleep 1.9
ev "⇪ T";  "$K" chord 17 150; sleep 1.9
ev "⇪ T";  "$K" chord 17 150; sleep 2.2
finish clip-cycle

# ---------- C: hold to pick a window (Safari picker) ----------
front Safari; hide Terminal; sleep 1.2; park_mouse
record clip-picker 14
ev "hold ⇪ S"; "$K" chord 1 1300; sleep 1.5   # hold past threshold; picker stays after release
ev "↓";    "$K" key 125;      sleep 1.1   # rows: zh (minimized) / landing / guide(front): ↓ lands on landing
ev "⏎";    "$K" key 36;       sleep 2.6
finish clip-picker

# ---------- D: search palette (pre-hide Safari: #403 workaround) ----------
front Terminal; hide Safari; sleep 1.2; park_mouse   # the commit will visibly spring Safari back
record clip-palette 9
# The palette's empty state lists the user's RUNNING apps, and every partial
# query lists their installed ones. Type the whole query as one burst the
# moment the field has focus; compose.mjs cross-fades over that span
# (guide-clips.json "cover"), so none of it reaches the published clip.
ev "⇪ Space"; "$K" chord 49 150; sleep 0.35
ev "S"; "$K" type safa; ev "A"; ev "F"; ev "A"   # staged app ONLY
sleep 1.6
ev "⏎";    "$K" key 36;       sleep 2.6
finish clip-palette

# ---------- E: cheat sheet (hold Hyper alone) ----------
front Terminal; hide Safari; sleep 1.2; park_mouse
record clip-cheatsheet 9
ev "hold ⇪"; "$K" f19 2600;   sleep 1.8
finish clip-cheatsheet

ls -la "$R"
cat "$EV"
echo ALL_CLIPS_DONE
