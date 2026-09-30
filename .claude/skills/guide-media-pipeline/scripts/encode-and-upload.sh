#!/bin/zsh
# Composite the recorded clips and upload all media to R2.
# Usage: encode-and-upload.sh <version-suffix>   e.g. v2 → guide-cycle-v2.mp4
#
# Clips go through docs/design/film/tools/compose.mjs: brand backdrop,
# rounded screen, eased camera push-ins, keycast chips, and the palette's
# privacy cross-fade. Camera keys, trims and cover ranges live in
# docs/design/film/tools/guide-clips.json; retime them there if the
# recording script's pacing changes. Output is 1600x1000 (guide <video>
# width/height attrs must match). Each run publishes under a new suffix:
# the worker caches /media for a day, so overwriting a name would serve
# stale video.
set -eu
VER="${1:?usage: encode-and-upload.sh <version-suffix, e.g. v3>}"
HERE="${0:A:h}"
REPO="${HERE:h:h:h:h}"
WORK="${WINK_MEDIA_WORK:-$HOME/.cache/wink-guide-media}"
MEDIA="$WORK/composed"
FILM="$REPO/docs/design/film"

[ -d "$FILM/node_modules/playwright" ] || (cd "$FILM" && npm install --no-fund --no-audit)
(cd "$FILM" && node tools/compose.mjs "$WORK/rec" "$MEDIA")

echo "REVIEW GATE: inspect every clip and screenshot before uploading."
echo "  e.g. ffmpeg -i $MEDIA/guide-cycle.mp4 -vf fps=2,scale=480:-2,tile=6x3 -frames:v 1 sheet.png"
echo "  the palette clip must show no app list other than the staged query"
read -r "?Upload $MEDIA/*.mp4 (as *-$VER.mp4) and $WORK/shots/*.png to wink-releases/wink/guide/ ? [y/N] " yn
[ "$yn" = "y" ] || { echo "aborted before upload"; exit 1; }

for f in "$MEDIA"/guide-*.mp4; do
  npx --yes wrangler@latest r2 object put "wink-releases/wink/guide/${f:t:r}-$VER.mp4" \
    --file "$f" --content-type video/mp4 --remote
done
for f in "$WORK"/shots/*.png(N); do
  npx --yes wrangler@latest r2 object put "wink-releases/wink/guide/${f:t}" \
    --file "$f" --content-type image/png --remote
done
echo "UPLOAD_DONE — point guide*.html at /media/guide-<clip>-$VER.mp4, then verify:"
echo "  curl -sI -H 'Range: bytes=0-1' https://wink.aixie.de/media/guide-cycle-$VER.mp4"
