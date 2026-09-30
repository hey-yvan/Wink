#!/bin/zsh
# Stage the demo environment for guide media recording.
# Backs up the user's Wink state, installs the demo config, dresses the set.
set -eu
HERE="${0:A:h}"
WORK="${WINK_MEDIA_WORK:-$HOME/.cache/wink-guide-media}"
BACKUP="$WORK/backup-$(date +%Y%m%d-%H%M%S)"
APPSUP="$HOME/Library/Application Support/Wink"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$WORK" "$BACKUP"
# Stage display origin (global x). The right-hand display is the stage;
# record-clips.sh must use the same value.
SX="${WINK_STAGE_X:-1920}"

# Refuse to stage over a live user session: step 5 creates and closes
# Safari and Terminal windows, which must never eat real work. Quit them
# yourself, then re-run. (Step 5 additionally aborts — windows untouched —
# if Resume hands the launch a saved session; running is not the only way
# real windows can be present.)
for app in Safari Terminal; do
  if pgrep -xq "$app"; then
    echo "ABORT: $app is running — quit it first, then re-run stage.sh" >&2
    exit 1
  fi
done

# A single Resume-restored Terminal window is indistinguishable from the
# fresh window a plain launch creates, and step 5 closes that window.
# Rule the case out before launching anything: the effective "keep
# windows on quit" setting (global, with a per-app override) must be off
# for Terminal.
# The brand wallpaper is part of the recording contract: without it the
# full-screen clips capture — and the upload step publishes — whatever
# personal wallpaper the user runs. Refuse before touching anything.
if [ ! -x "$CHROME" ]; then
  echo "ABORT: Google Chrome not found at $CHROME — it renders the brand wallpaper" >&2
  echo "(a hard prerequisite: recording without it leaks the user's own desktop)." >&2
  exit 1
fi

resume_global=$(defaults read -g NSQuitAlwaysKeepsWindows 2>/dev/null || echo 0)
resume_term=$(defaults read com.apple.Terminal NSQuitAlwaysKeepsWindows 2>/dev/null || echo "$resume_global")
if [ "$resume_term" = "1" ]; then
  echo "ABORT: Resume is enabled for Terminal (NSQuitAlwaysKeepsWindows) — a restored" >&2
  echo "window would be indistinguishable from the fresh launch window and staging" >&2
  echo "would close it. Turn ON 'Close windows when quitting an application' in" >&2
  echo "System Settings > Desktop & Dock, then re-run stage.sh." >&2
  exit 1
fi

# 0. tools
if [ ! -x "$WORK/winkkeys" ]; then
  swiftc -O "$HERE/winkkeys.swift" -o "$WORK/winkkeys"
fi

# 1. backup (config dir + defaults). restore.sh needs this directory.
# A never-launched install has no Application Support dir yet (the app
# creates it lazily); an empty one is behaviorally identical for Wink,
# so initialize it rather than letting the copy abort the run.
mkdir -p "$APPSUP"
cp -a "$APPSUP/" "$BACKUP/AppSupport/"
# On current macOS an absent com.wink.app domain exports as an empty
# plist with exit 0 (verified on 15.6); the fallback covers versions
# where export refuses, so restore.sh always has a file to import (an
# empty domain and an absent one read identically to the app)
defaults export com.wink.app "$BACKUP/com.wink.app.plist" 2>/dev/null || \
  plutil -create binary1 "$BACKUP/com.wink.app.plist"
defaults read -g AppleInterfaceStyle > "$BACKUP/appearance.txt" 2>/dev/null || echo Light > "$BACKUP/appearance.txt"
# record current wallpapers, one path per desktop line, for restore.sh
osascript > "$BACKUP/wallpapers.txt" 2>/dev/null <<'EOS' || true
set out to ""
tell application "System Events"
  repeat with d in desktops
    set out to out & (picture of d) & linefeed
  end repeat
end tell
return out
EOS
# Notes is launched mid-recording by the ⇪N demo chord; record whether
# it was already running so restore.sh can tell demo cleanup from
# session damage when it quits Notes
pgrep -xq Notes && touch "$BACKUP/notes-was-running" || true
echo "backup: $BACKUP"

# 2. demo config + synthetic usage, app in English
pkill -x Wink || true; sleep 0.6
cp "$HERE/demo-shortcuts.json" "$APPSUP/shortcuts.json"
# 0.7.5+ keeps shortcuts in Profiles/ and treats shortcuts.json as a
# read-only mirror: writing the mirror alone is ignored (the gate sees the
# user's real count). With Profiles/ gone, launch runs the first-run
# migration and imports the demo file as the Default profile. The original
# Profiles/ is in $BACKUP/AppSupport and restore.sh puts it back whole.
rm -rf "$APPSUP/Profiles"
python3 "$HERE/make-demo-usage.py" "$WORK/demo-usage.db"
cp "$WORK/demo-usage.db" "$APPSUP/usage.db"
defaults write com.wink.app AppleLanguages -array en
# Pin EVERY setting the shoot depends on instead of inheriting the user's
# profile — the whole-domain defaults backup restores their real values:
# - hyperKeyEnabled: the demo chords are F19-driven through the
#   interception tap; a Hyper-off profile routes them via Carbon and every
#   injected chord is inert while the count gate still passes.
# - hyperCheatSheetEnabled: the cheat-sheet clip records nothing if the
#   user turned the sheet off.
# - suggestShortcutsFromUsage: the Insights screenshot's Suggested card
#   renders only when the toggle is on (and seeding app_activations is
#   pointless otherwise).
# - menuBarIconVisible: shoot-settings.sh opens Settings through the menu
#   bar item; a hidden icon breaks the whole screenshot matrix.
# - shortcutsPaused / frontmostExceptionsEnabled: a paused profile or an
#   exception rule matching a staged app would silently disarm the demos.
defaults write com.wink.app hyperKeyEnabled -bool true
defaults write com.wink.app hyperCheatSheetEnabled -bool true
defaults write com.wink.app suggestShortcutsFromUsage -bool true
defaults write com.wink.app menuBarIconVisible -bool true
defaults write com.wink.app shortcutsPaused -bool false
defaults write com.wink.app frontmostExceptionsEnabled -bool false
# the debug log persists across sessions — remember where it ends so the
# gate below only accepts evidence from THIS launch, not a qualifying
# line left by an earlier (possibly staged) session
WINKLOG="$HOME/.config/Wink/debug.log"
log_offset=$(wc -l 2>/dev/null < "$WINKLOG" || echo 0)
open -a /Applications/Wink.app; sleep 1.5

# 3. verify the trigger index took all four entries (gotcha #2)
"$WORK/winkkeys" chord 45 150 >/dev/null; sleep 0.5   # ⇪N — forces an attemptStart line
"$WORK/winkkeys" chord 45 150 >/dev/null; sleep 0.3   # toggle Notes back off
line=$(tail -n +$((log_offset + 1)) "$WINKLOG" 2>/dev/null | grep attemptStart | tail -1)
# Gate on BOTH the index count and a live interception tap: eventTap=false
# (Input Monitoring missing, tap failed) records perfectly inert clips
# while the counts still look right.
case "$line" in
  *"shortcuts=4"*"triggerIndex=4"*"eventTap=true"*) echo "trigger index + event tap OK" ;;
  *) echo "STAGING GATE FAILED (need shortcuts=4 triggerIndex=4 eventTap=true): ${line:-<no fresh attemptStart line from this launch>}" >&2; exit 1 ;;
esac

# 4. set dressing: brand wallpaper (Chrome verified in the preflight), no
# overlay apps
"$CHROME" --headless=new --disable-gpu --screenshot="$WORK/wink-wallpaper.png" \
  --window-size=1920,1080 --hide-scrollbars "file://$HERE/wallpaper.html" 2>/dev/null
[ -s "$WORK/wink-wallpaper.png" ] || { echo "ABORT: wallpaper render produced no PNG" >&2; exit 1; }
osascript -e "tell application \"System Events\" to set picture of every desktop to POSIX file \"$WORK/wink-wallpaper.png\""
killall WallpaperAgent 2>/dev/null || true
# macOS 26+ ignores `set picture` for dynamic/landscape wallpapers, so the
# stage would still show the user's desktop. Cover the stage display with a
# click-through desktop-level window instead (restore.sh kills it).
if [ ! -x "$WORK/backdrop" ] || [ "$HERE/backdrop.swift" -nt "$WORK/backdrop" ]; then
  swiftc -O "$HERE/backdrop.swift" -o "$WORK/backdrop"
fi
pkill -x backdrop 2>/dev/null || true
nohup "$WORK/backdrop" "$WORK/wink-wallpaper.png" "$SX" >/dev/null 2>&1 &
sleep 1
# record whether PomoFox was running before pausing it — restore.sh must
# not hand back a session with an app the user never had open
if pgrep -xq PomoFox; then
  touch "$BACKUP/pomofox-was-running"
  pkill -x PomoFox 2>/dev/null || true
  echo "PomoFox paused for the shoot"
fi

python3 "$HERE/make-term-scenes.py" "$WORK"

# 5. stage Safari (3 windows, one minimized) and Terminal (3, one minimized).
# The preflight only proves neither app is RUNNING — Resume (or Safari's
# "opens with: All windows from last session") can hand `launch` the
# user's saved session as live windows. Never close a window carrying
# real content: quit the app untouched instead (quit re-saves the session
# losslessly) and abort.
if ! osascript <<'EOF'
tell application "Safari"
  launch
  delay 1.5
  repeat with w in (get every window)
    repeat with t in (get every tab of w)
      set u to URL of t
      if u is not missing value and u is not "" and u is not "favorites://" then
        error "session window restored at launch"
      end if
    end repeat
  end repeat
end tell
EOF
then
  osascript -e 'tell application "Safari" to quit' 2>/dev/null || true
  echo "ABORT: Safari restored a saved session at launch — staging would destroy it." >&2
  echo "Safari was quit with those windows intact. Close them in Safari yourself (or" >&2
  echo "set Safari opens with 'A new window'), quit it again, then re-run stage.sh." >&2
  exit 1
fi
# Only demo-owned windows can exist now: build the storyboard's three pages
# (order and cache-busting explained in stage-safari.applescript).
osascript "$HERE/stage-safari.applescript" "$SX"
# The resume preflight up top rules out a Resume-restored single window,
# so one window here is Terminal's own fresh launch window; more than one
# means something restored anyway — abort without touching them.
mkdir -p "$WORK/stage/api" "$WORK/stage/build" "$WORK/stage/deploy"
if ! osascript "$HERE/stage-terminal.applescript" "$SX" "$WORK"
then
  osascript -e 'tell application "Terminal" to quit' 2>/dev/null || true
  echo "ABORT: Terminal restored saved windows at launch — staging would destroy" >&2
  echo "their scrollback. Terminal was quit with them intact. Close them yourself," >&2
  echo "quit it again, then re-run stage.sh." >&2
  exit 1
fi
echo "STAGED — record with record-clips.sh, restore with restore.sh $BACKUP"
