# Install Wink

Requires macOS 15 or later. Download the DMG from [official GitHub Releases](https://github.com/xrf9268-hue/Wink/releases/latest).

1. Open the DMG and drag Wink into Applications.
2. Open Wink from Applications, then eject the DMG. Keep one installed copy to avoid granting permissions to a different build.
3. The current public release v0.7.5 is ad-hoc signed and has not been notarized by Apple. If macOS blocks it because the developer cannot be verified, and you trust the download, open System Settings → Privacy & Security → Open Anyway after the first launch attempt. Confirm Open.
4. Grant Accessibility when prompted. Input Monitoring is also needed for Hyper shortcuts and standard Fn+F-row bindings. After changing Input Monitoring, quit and reopen Wink.
5. Add a shortcut for an installed app. Press it to bring the app forward, then press again to hide it with the default Toggle behavior.

## Trust and updates

Wink is [MIT licensed](../LICENSE). Configuration and usage insights stay local; see [Privacy](privacy.md) for permissions and network access.

Sparkle update signatures and GitHub build provenance do not substitute for Apple Developer ID signing or notarization. Current releases may provide signed updates while still requiring manual first-install approval. Check each release's notes for its signing status. Advanced users can follow [artifact verification](../VERIFYING_RELEASES.md).

Use Check for Updates in Wink for subsequent releases. A change in signing identity can require granting permissions again to the installed copy.

## If installation fails

- No Open Anyway button: attempt to launch the app first. A managed Mac may require your administrator's approval.
- A damaged-app or malware alert: stop and verify the download/source; do not treat it as the unidentified-developer warning.
- No shortcut response: check the permissions for the copy in Applications, restart Wink after changing Input Monitoring, and check the shortcut status in Settings.
- Do not disable Gatekeeper globally or remove quarantine attributes to install Wink.

Apple documents the supported exception flow in [Safely open apps on your Mac](https://support.apple.com/en-us/102445).

## Uninstall

Quit Wink, then move Wink from Applications to the Trash. This removes the app, not your saved settings and shortcuts. Export any shortcut recipes you want to keep before removing local data.
