// backdrop <png> <stage-x>: cover the stage display with the brand wallpaper.
//
// On macOS 26+ System Events' `set picture of desktop` silently does nothing
// against the new dynamic/landscape wallpapers, so the recording showed the
// user's own desktop. Instead of fighting the wallpaper system, this draws a
// borderless, click-through window just above the desktop level on the stage
// display: every normal window sits above it, nothing of the user's settings
// changes, and killing the process removes it. It never activates (accessory
// policy, no key/main window), so it can't be chosen as the next frontmost app
// when Wink hides a target.
import AppKit

let args = CommandLine.arguments
guard args.count >= 3, let image = NSImage(contentsOfFile: args[1]), let sx = Double(args[2]) else {
  FileHandle.standardError.write("usage: backdrop <png> <stage-x>\n".data(using: .utf8)!)
  exit(1)
}
let app = NSApplication.shared
app.setActivationPolicy(.accessory)
guard let screen = NSScreen.screens.first(where: { abs($0.frame.minX - sx) < 1 }) else {
  FileHandle.standardError.write("no screen at x=\(sx)\n".data(using: .utf8)!)
  exit(1)
}
let win = NSWindow(contentRect: screen.frame, styleMask: .borderless, backing: .buffered, defer: false)
win.setFrame(screen.frame, display: false)
win.level = NSWindow.Level(rawValue: Int(CGWindowLevelForKey(.desktopIconWindow)) + 1)
win.collectionBehavior = [.canJoinAllSpaces, .stationary, .ignoresCycle]
win.ignoresMouseEvents = true
win.isOpaque = true
win.hasShadow = false
let view = NSImageView(frame: NSRect(origin: .zero, size: screen.frame.size))
view.image = image
view.imageScaling = .scaleAxesIndependently
win.contentView = view
win.orderFrontRegardless()
signal(SIGTERM) { _ in exit(0) }
app.run()
