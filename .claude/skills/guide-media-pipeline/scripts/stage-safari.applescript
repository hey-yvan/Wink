-- Stage Safari: three Wink pages, oldest minimized, English guide in front.
-- Run as: osascript stage-safari.applescript <stage-x>
-- stage.sh has already proven no saved session was restored, so every
-- window here is demo-owned.
--
-- Window order is part of the storyboard: the picker lists windows by id
-- (creation order), so rows read zh guide (minimized) / landing / guide, the
-- guide is in front, and the picker clip's single ↓ + ⏎ visibly raises the
-- landing page. The ?v= query defeats Safari's cache (the worker sends
-- max-age=3600) so titles match the live copy; Safari's address pill shows
-- only the host, so it never appears on screen.
on run argv
	set sx to (item 1 of argv) as integer
	set v to do shell script "date +%s"
	set urls to {"https://wink.aixie.de/guide/zh?v=" & v, "https://wink.aixie.de/?v=" & v, "https://wink.aixie.de/guide?v=" & v}
	tell application "Safari"
		close every window
		repeat with u in urls
			make new document with properties {URL:u}
			delay 1.2
		end repeat
		delay 2
		-- window 1 = newest (guide), window 3 = oldest (zh)
		set bounds of window 3 to {sx + 300, 110, sx + 1620, 930}
		set bounds of window 2 to {sx + 330, 140, sx + 1650, 960}
		set bounds of window 1 to {sx + 360, 170, sx + 1680, 990}
		set miniaturized of window 3 to true
	end tell
end run
