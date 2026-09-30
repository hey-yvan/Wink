-- Stage Terminal: three windows with demo output, one minimized.
-- Run as: osascript stage-terminal.applescript <stage-x> <work-dir>
-- stage.sh has already proven Terminal launched with at most its own fresh
-- window, so closing it destroys nothing.
--
-- Title hygiene: a temporary "WinkDemo" profile drops the size/device/shell
-- components, and each window cds into WORK/stage/<name> and reports it
-- (update_terminal_cwd), so titles read "api — -zsh" instead of
-- "<user> — -zsh — 146×41". restore.sh deletes the profile.
on run argv
	set sx to (item 1 of argv) as integer
	set work to item 2 of argv
	set names to {"api", "build", "deploy"}
	tell application "Terminal"
		launch
		delay 1
		if (count of windows) > 1 then error "saved windows restored at launch"
		close every window
		if not (exists settings set "WinkDemo") then
			set s to make new settings set with properties {name:"WinkDemo"}
		else
			set s to settings set "WinkDemo"
		end if
		set title displays custom title of s to false
		set title displays device name of s to false
		set title displays shell path of s to false
		set title displays window size of s to false
		set title displays settings name of s to false
		repeat with i from 1 to 3
			do script ""
			delay 0.6
		end repeat
		-- window 1 is the newest (deploy); window 3 the oldest (api)
		set frames to {{sx + 480, 290, sx + 1540, 760}, {sx + 430, 240, sx + 1490, 710}, {sx + 380, 190, sx + 1440, 660}}
		repeat with i from 1 to 3
			set current settings of window i to s
			set bounds of window i to item i of frames
		end repeat
		delay 0.6
		repeat with i from 1 to 3
			set n to item (4 - i) of names
			do script "cd " & quoted form of (work & "/stage/" & n) & "; update_terminal_cwd; clear; cat " & quoted form of (work & "/term-" & n & ".txt") & "; PROMPT=''; RPROMPT=''; precmd_functions=()" in window i
			delay 0.4
		end repeat
		delay 1
		set miniaturized of window 3 to true
	end tell
end run
