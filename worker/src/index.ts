// Wink site — GENERATED from docs/design/landing/*.html by scripts/generate-worker-site.py.
// Do not edit the HTML literals by hand: edit the source files and regenerate.

const landingHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Wink is a menu-bar app that gives each app on your Mac its own keyboard shortcut. Caps Lock becomes a Hyper key: press a shortcut to bring an app forward, press it again to hide it. Free and open source, for macOS 15 or later.">
<meta name="color-scheme" content="light dark">
<title>Wink: keyboard shortcuts for your apps</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cmask id='m'%3E%3Crect width='32' height='32' fill='white'/%3E%3Ccircle cx='15' cy='9' r='11' fill='black'/%3E%3C/mask%3E%3Ccircle cx='16' cy='16' r='11' fill='%23FFB454' mask='url(%23m)'/%3E%3C/svg%3E">
</head>
<body>
<style>
  /* ---------- tokens ---------- */
  :root {
    --bg: #F3F5F9;
    --bg-glow: rgba(224, 138, 0, 0.06);
    --surface: #FFFFFF;
    --surface-2: #E9EDF4;
    --text: #171C26;
    --muted: #5A6478;
    --hairline: rgba(23, 28, 38, 0.12);
    --accent: #E08A00;
    --accent-ink: #96590A;
    --accent-soft: rgba(224, 138, 0, 0.14);
    --cta-bg: #171C26;
    --cta-text: #F6F8FC;
    --cta-hover: #232A38;
    --key-bg: #FFFFFF;
    --key-edge: #D4DAE4;
    --key-legend: #171C26;
    --win-shadow: 0 18px 44px rgba(23, 28, 38, 0.16);
    --panel-inner: #EDF0F6;
    --dot: rgba(23, 28, 38, 0.10);
    --term-bg: #10141E;
    --term-text: #C9D2E4;
    --ok: #4CAF6E;
    --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
    --sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", "Segoe UI", sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0A0D14;
      --bg-glow: rgba(255, 180, 84, 0.05);
      --surface: #131826;
      --surface-2: #1A2132;
      --text: #E9EDF6;
      --muted: #98A3BD;
      --hairline: rgba(152, 163, 189, 0.16);
      --accent: #FFB454;
      --accent-ink: #FFB454;
      --accent-soft: rgba(255, 180, 84, 0.13);
      --cta-bg: #FFB454;
      --cta-text: #1A1206;
      --cta-hover: #FFC377;
      --key-bg: #1A2132;
      --key-edge: #0A0D14;
      --key-legend: #E9EDF6;
      --win-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
      --panel-inner: #0D1120;
      --dot: rgba(152, 163, 189, 0.10);
    }
  }
  :root[data-theme="light"] {
    --bg: #F3F5F9;
    --bg-glow: rgba(224, 138, 0, 0.06);
    --surface: #FFFFFF;
    --surface-2: #E9EDF4;
    --text: #171C26;
    --muted: #5A6478;
    --hairline: rgba(23, 28, 38, 0.12);
    --accent: #E08A00;
    --accent-ink: #96590A;
    --accent-soft: rgba(224, 138, 0, 0.14);
    --cta-bg: #171C26;
    --cta-text: #F6F8FC;
    --cta-hover: #232A38;
    --key-bg: #FFFFFF;
    --key-edge: #D4DAE4;
    --key-legend: #171C26;
    --win-shadow: 0 18px 44px rgba(23, 28, 38, 0.16);
    --panel-inner: #EDF0F6;
    --dot: rgba(23, 28, 38, 0.10);
  }
  :root[data-theme="dark"] {
    --bg: #0A0D14;
    --bg-glow: rgba(255, 180, 84, 0.05);
    --surface: #131826;
    --surface-2: #1A2132;
    --text: #E9EDF6;
    --muted: #98A3BD;
    --hairline: rgba(152, 163, 189, 0.16);
    --accent: #FFB454;
    --accent-ink: #FFB454;
    --accent-soft: rgba(255, 180, 84, 0.13);
    --cta-bg: #FFB454;
    --cta-text: #1A1206;
    --cta-hover: #FFC377;
    --key-bg: #1A2132;
    --key-edge: #0A0D14;
    --key-legend: #E9EDF6;
    --win-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
    --panel-inner: #0D1120;
    --dot: rgba(152, 163, 189, 0.10);
  }

  /* ---------- base ---------- */
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--bg);
    background-image: radial-gradient(1100px 460px at 50% -120px, var(--bg-glow), transparent 70%);
    background-repeat: no-repeat;
    color: var(--text);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent-ink); text-decoration: none; }
  a:hover { text-decoration: underline; text-underline-offset: 3px; }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
  .wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
  h1, h2, h3 { text-wrap: balance; margin: 0; }
  p { margin: 0; }

  .eyebrow {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }

  /* ---------- nav ---------- */
  .nav {
    position: sticky; top: 0; z-index: 50;
    background: color-mix(in srgb, var(--bg) 84%, transparent);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--hairline);
  }
  .nav-inner { display: flex; align-items: center; gap: 28px; height: 60px; }
  .brand { display: flex; align-items: center; gap: 10px; color: var(--text); font-family: var(--mono); font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .brand:hover { text-decoration: none; }
  .nav-links { display: flex; gap: 24px; margin-left: auto; align-items: center; }
  .nav-links a:not(.btn) { color: var(--muted); font-size: 14px; font-weight: 500; }
  .nav-links a:not(.btn):hover { color: var(--text); text-decoration: none; }
  .nav .btn { height: 34px; padding: 0 14px; font-size: 13px; }
  @media (max-width: 720px) { .nav-links a:not(.btn) { display: none; } }

  /* logo mark */
  .mark .eye-open { transform-origin: 46px 16px; animation: blink 5.6s infinite; }
  @keyframes blink {
    0%, 91%, 100% { transform: scaleY(1); }
    94%, 96% { transform: scaleY(0.1); }
  }

  /* ---------- buttons ---------- */
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 46px; padding: 0 22px; border-radius: 10px;
    font-family: var(--sans); font-size: 15px; font-weight: 600;
    border: 1px solid transparent; cursor: pointer; white-space: nowrap;
  }
  .btn:hover { text-decoration: none; }
  .btn-primary, .btn-primary:hover, .btn-primary:visited { color: var(--cta-text); }
  .btn-primary { background: var(--cta-bg); }
  .btn-primary:hover { background: var(--cta-hover); }
  .btn-ghost { border-color: var(--hairline); color: var(--text); background: transparent; }
  .btn-ghost:hover { border-color: var(--muted); }

  /* ---------- hero ---------- */
  .hero { padding: 88px 0 0; text-align: center; }
  .hero-copy { display: flex; flex-direction: column; align-items: center; gap: 22px; }
  .dict { font-family: var(--mono); font-size: 13px; color: var(--muted); }
  .dict .word { color: var(--text); font-weight: 700; }
  .dict .ipa { color: var(--accent-ink); }
  .btn-2l { height: 58px; flex-direction: column; gap: 2px; padding: 0 24px; }
  .btn-sub { font-family: var(--mono); font-size: 10.5px; font-weight: 500; letter-spacing: 0.05em; opacity: 0.8; }
  .hstats { display: flex; gap: 44px; justify-content: center; flex-wrap: wrap; margin-top: 10px; }
  .hstat { display: flex; flex-direction: column; align-items: center; gap: 2px; max-width: 190px; }
  .hstat b { font-family: var(--mono); font-size: 30px; font-weight: 700; letter-spacing: -0.03em; color: var(--text); font-variant-numeric: tabular-nums; }
  .hstat span { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 0.03em; line-height: 1.5; }
  .hero h1 {
    font-family: var(--mono);
    font-size: clamp(42px, 7vw, 80px);
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1.02;
  }
  .hero h1 .dest { color: var(--accent-ink); }
  .hero .sub { color: var(--muted); font-size: 18px; max-width: 54ch; }
  .hero .sub strong { color: var(--text); font-weight: 600; }
  .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
  .hero-meta { font-family: var(--mono); font-size: 12.5px; color: var(--muted); letter-spacing: 0.02em; }

  /* ---------- scene (interactive desktop) ---------- */
  .scene-region { margin-top: 56px; }
  .scene {
    border: 1px solid var(--hairline);
    border-radius: 16px;
    overflow: hidden;
    background: var(--surface);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.10);
    text-align: left;
  }
  .scene-menubar {
    height: 32px; display: flex; align-items: center; gap: 10px;
    padding: 0 14px;
    background: color-mix(in srgb, var(--surface) 70%, var(--bg));
    border-bottom: 1px solid var(--hairline);
    font-family: var(--mono); font-size: 12px; color: var(--muted);
  }
  .scene-menubar .app-name { color: var(--text); font-weight: 600; }
  .scene-menubar .mb-right { margin-left: auto; display: flex; gap: 14px; align-items: center; }
  .scene-menubar .mb-right .ready { color: var(--accent-ink); }
  .scene-desk {
    position: relative; height: 336px;
    background-color: var(--panel-inner);
    background-image: radial-gradient(var(--dot) 1px, transparent 1px);
    background-size: 18px 18px;
    overflow: hidden;
  }
  .win {
    position: absolute; width: 56%; min-width: 250px;
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
    transition: transform 0.24s cubic-bezier(0.2, 0.8, 0.25, 1.15), opacity 0.18s ease, box-shadow 0.24s ease, filter 0.24s ease;
  }
  .win.is-front { box-shadow: var(--win-shadow); }
  .win:not(.is-front) { filter: brightness(0.95) saturate(0.9); }
  .win.is-hidden { transform: translateY(24px) scale(0.97) !important; opacity: 0; pointer-events: none; }
  .win-1 { left: 5%; top: 7%; }
  .win-2 { left: 22%; top: 18%; }
  .win-3 { left: 40%; top: 30%; }
  .win-bar { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-bottom: 1px solid var(--hairline); }
  .dots { display: flex; gap: 5px; }
  .dots i { width: 9px; height: 9px; border-radius: 50%; }
  .dots i:nth-child(1) { background: #E0655F; }
  .dots i:nth-child(2) { background: #E0A33E; }
  .dots i:nth-child(3) { background: #62B554; }
  .win-title { font-size: 12.5px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .url-pill {
    flex: 1; max-width: 210px; margin: 0 auto;
    font-family: var(--mono); font-size: 10.5px; color: var(--muted);
    background: var(--surface-2); border-radius: 6px;
    padding: 2px 10px; text-align: center;
    white-space: nowrap; overflow: hidden;
  }
  .win-body { padding: 13px 14px 16px; display: flex; flex-direction: column; gap: 8px; }
  .skl { height: 8px; border-radius: 4px; background: var(--surface-2); }
  .skl.hd { height: 12px; width: 52%; background: color-mix(in srgb, var(--text) 22%, var(--surface-2)); }
  .skl.w60 { width: 60%; } .skl.w85 { width: 85%; } .skl.w45 { width: 45%; } .skl.w75 { width: 75%; } .skl.w90 { width: 90%; }
  .term-body {
    background: var(--term-bg); color: var(--term-text);
    font-family: var(--mono); font-size: 11.5px; line-height: 1.9;
    padding: 12px 14px 16px;
  }
  .term-body .ps { color: #FFB454; }
  .term-body .ok { color: var(--ok); }
  .term-body .dim { opacity: 0.55; }
  .win-t .win-bar { background: color-mix(in srgb, var(--term-bg) 88%, #fff); border-bottom-color: rgba(255,255,255,0.06); }
  .win-t .win-title { color: #C9D2E4; }
  .win-t { border-color: rgba(255,255,255,0.08); }

  .scene-hud {
    position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--mono); font-size: 13px; color: var(--text);
    font-variant-numeric: tabular-nums;
    background: color-mix(in srgb, var(--surface) 92%, transparent);
    border: 1px solid var(--hairline);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
    padding: 8px 16px; border-radius: 99px;
    white-space: nowrap;
  }
  .scene-hud .act {
    padding: 1px 8px; border-radius: 99px;
    background: var(--accent-soft); color: var(--accent-ink);
    font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
  }
  .scene-hud.pop { animation: hudpop 0.22s ease; }
  @keyframes hudpop { 0% { transform: translateX(-50%) scale(0.94); } 100% { transform: translateX(-50%) scale(1); } }

  .scene-keys { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 26px; }
  .keycol { display: flex; flex-direction: column; align-items: center; gap: 7px; }
  .keycap {
    appearance: none; border: 1px solid var(--hairline); margin: 0;
    min-width: 56px; height: 56px; padding: 0 16px;
    border-radius: 12px;
    background: var(--key-bg);
    box-shadow: 0 3px 0 var(--key-edge);
    color: var(--key-legend);
    font-family: var(--mono); font-size: 19px; font-weight: 600;
    cursor: pointer;
    transition: transform 0.09s ease, box-shadow 0.09s ease, border-color 0.09s ease;
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  }
  .keycap:hover { border-color: var(--muted); }
  .keycap.is-pressed, .keycap:active {
    transform: translateY(3px);
    box-shadow: 0 0 0 var(--key-edge), 0 0 0 4px var(--accent-soft);
    border-color: var(--accent);
  }
  .keycap-hyper { padding: 0 20px; font-size: 15px; letter-spacing: 0.08em; }
  .keycap-hyper .caps { font-size: 20px; }
  .keycap-hyper.is-held { border-color: var(--accent); box-shadow: 0 3px 0 var(--key-edge), 0 0 0 4px var(--accent-soft); color: var(--accent-ink); }
  .key-label { font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
  .plus { align-self: center; margin-top: -22px; color: var(--muted); font-family: var(--mono); font-size: 15px; }
  .scene-hint { text-align: center; font-size: 12.5px; color: var(--muted); font-family: var(--mono); margin-top: 16px; }
  @media (max-width: 640px) { .scene-hint .desktop-only { display: none; } }

  /* ---------- interlude ---------- */
  .interlude { padding: 130px 0 26px; }
  .interlude .eyebrow { display: block; margin-bottom: 22px; }
  .interlude p {
    font-family: var(--mono);
    font-size: clamp(22px, 3.4vw, 38px);
    font-weight: 600;
    letter-spacing: -0.035em;
    line-height: 1.3;
    max-width: 26ch;
    text-wrap: balance;
  }
  .interlude .quiet { color: var(--muted); }
  .interlude mark {
    background: var(--accent-soft);
    color: var(--accent-ink);
    padding: 0 0.18em;
    border-radius: 6px;
  }

  /* ---------- sections ---------- */
  .section { padding: 104px 0 0; }
  .section-head { max-width: 660px; display: flex; flex-direction: column; gap: 14px; margin-bottom: 44px; }
  .section-head h2 {
    font-family: var(--mono);
    font-size: clamp(26px, 3.6vw, 40px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
  }
  .section-head .lede { color: var(--muted); font-size: 17px; max-width: 58ch; }

  /* ---------- keyboard map ---------- */
  .kbwrap { overflow-x: auto; padding-bottom: 8px; }
  .kb {
    display: flex; flex-direction: column; gap: 8px;
    width: max-content; margin: 0 auto;
    padding: 26px;
    background-color: var(--panel-inner);
    background-image: radial-gradient(var(--dot) 1px, transparent 1px);
    background-size: 18px 18px;
    border: 1px solid var(--hairline);
    border-radius: 18px;
  }
  .kb-row { display: flex; gap: 8px; }
  .kb-row.r2 { padding-left: 0; }
  .kb-row.r3 { padding-left: 66px; }
  .kb-row.r4 { justify-content: center; }
  .kcap {
    width: 52px; height: 52px; flex: none;
    border: 1px solid var(--hairline);
    border-radius: 10px;
    background: var(--key-bg);
    box-shadow: 0 2px 0 var(--key-edge);
    color: var(--muted);
    font-family: var(--mono); font-size: 14px; font-weight: 600;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease;
  }
  .kcap .lbl { font-size: 7.5px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1; }
  .kcap.bound { border-color: color-mix(in srgb, var(--accent) 55%, var(--hairline)); background: var(--accent-soft); color: var(--accent-ink); }
  .kcap.bound .lbl { color: var(--accent-ink); }
  .kcap:hover, .kcap.pulse { transform: translateY(-3px); box-shadow: 0 5px 0 var(--key-edge); }
  .kcap.bound:hover, .kcap.bound.pulse { border-color: var(--accent); box-shadow: 0 5px 0 var(--key-edge), 0 0 0 4px var(--accent-soft); }
  .kcap.wide { width: 110px; }
  .kcap.hyper { border-color: var(--accent); background: var(--accent-soft); color: var(--accent-ink); font-size: 12px; letter-spacing: 0.06em; }
  .kcap.space { width: 300px; }
  .kb-caption { text-align: center; font-family: var(--mono); font-size: 12px; color: var(--muted); margin-top: 18px; }
  body.caps-held .kcap.bound { transform: translateY(-3px); border-color: var(--accent); box-shadow: 0 5px 0 var(--key-edge), 0 0 0 4px var(--accent-soft); }
  body.caps-held .kcap.hyper, body.caps-held .keycap-hyper { border-color: var(--accent); box-shadow: 0 3px 0 var(--key-edge), 0 0 0 4px var(--accent-soft); color: var(--accent-ink); }

  /* ---------- showcases ---------- */
  .show {
    display: grid; grid-template-columns: 5fr 7fr; gap: 56px;
    align-items: center;
    padding: 84px 0 0;
  }
  .show.rev { grid-template-columns: 7fr 5fr; }
  .show.rev .show-copy { order: 2; }
  .show.rev .show-mock { order: 1; }
  @media (max-width: 880px) {
    .show, .show.rev { grid-template-columns: 1fr; gap: 34px; padding-top: 72px; }
    .show.rev .show-copy { order: 1; }
    .show.rev .show-mock { order: 2; }
  }
  .show-copy { display: flex; flex-direction: column; gap: 14px; align-items: flex-start; }
  .show-copy h3 {
    font-family: var(--mono);
    font-size: clamp(22px, 2.8vw, 30px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.2;
  }
  .show-copy p { color: var(--muted); font-size: 16px; max-width: 44ch; }
  .show-copy p strong { color: var(--text); font-weight: 600; }
  .show-mock {
    min-height: 280px;
    background-color: var(--panel-inner);
    background-image: radial-gradient(var(--dot) 1px, transparent 1px);
    background-size: 18px 18px;
    border: 1px solid var(--hairline);
    border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    padding: 34px 26px;
    overflow: hidden;
  }
  kbd {
    font-family: var(--mono); font-size: 0.86em;
    background: var(--surface-2); border: 1px solid var(--hairline);
    border-radius: 5px; padding: 1px 6px;
  }

  /* palette mock */
  .pal {
    width: min(380px, 100%);
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: 12px;
    box-shadow: var(--win-shadow);
    overflow: hidden;
  }
  .pal-q {
    display: flex; align-items: center; gap: 9px;
    padding: 12px 15px;
    font-family: var(--mono); font-size: 15px;
    border-bottom: 1px solid var(--hairline);
  }
  .pal-q .pal-glass { flex: none; color: var(--muted); }
  .pal-q .caret { width: 8px; height: 18px; background: var(--accent); animation: caret 1.1s steps(1) infinite; }
  @keyframes caret { 50% { opacity: 0; } }
  .pal-r { display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; font-size: 14px; }
  .pal-r .ret { font-family: var(--mono); font-size: 11.5px; color: var(--muted); }
  .pal-r.sel { background: var(--accent-soft); }
  .pal-r.sel .ret { color: var(--accent-ink); }
  .pal-r .app { display: flex; align-items: center; gap: 9px; }
  .app-dot { width: 18px; height: 18px; border-radius: 5px; flex: none; display: inline-flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 10px; font-weight: 700; color: #fff; }

  /* cycle mock */
  .cyc { width: min(400px, 100%); display: flex; flex-direction: column; align-items: center; gap: 20px; }
  .cyc-stack { position: relative; width: 100%; height: 190px; }
  .cyc-win {
    position: absolute; left: 50%; top: 0; width: 86%;
    background: var(--term-bg);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.25, 1.1), opacity 0.3s ease, filter 0.3s ease;
  }
  .cyc-win .win-bar { background: color-mix(in srgb, var(--term-bg) 88%, #fff); border-bottom-color: rgba(255,255,255,0.06); }
  .cyc-win .win-title { color: #C9D2E4; }
  .cyc-win .term-body { padding: 10px 13px 14px; font-size: 11px; }
  .cyc-win.p0 { transform: translateX(-50%) translateY(26px); z-index: 3; }
  .cyc-win.p1 { transform: translateX(-50%) translateY(13px) scale(0.94); z-index: 2; opacity: 0.75; filter: brightness(0.8); }
  .cyc-win.p2 { transform: translateX(-50%) translateY(0) scale(0.88); z-index: 1; opacity: 0.5; filter: brightness(0.65); }
  .cyc-hud {
    font-family: var(--mono); font-size: 13.5px;
    font-variant-numeric: tabular-nums;
    background: color-mix(in srgb, var(--surface) 92%, transparent);
    border: 1px solid var(--hairline);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.16);
    padding: 8px 18px; border-radius: 99px;
    white-space: nowrap;
  }
  .cyc-hud b { color: var(--accent-ink); font-weight: 600; }

  /* picker mock */
  .pick { width: min(360px, 100%); display: flex; flex-direction: column; gap: 7px; }
  .pick-row {
    display: flex; align-items: center; gap: 10px;
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 13.5px;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .pick-row .ret { margin-left: auto; font-family: var(--mono); font-size: 11px; color: var(--muted); opacity: 0; }
  .pick-row.sel { border-color: var(--accent); background: var(--accent-soft); }
  .pick-row.sel .ret { opacity: 1; color: var(--accent-ink); }
  .pick-cap { font-family: var(--mono); font-size: 11.5px; color: var(--muted); text-align: center; margin-top: 10px; }

  /* insights mock */
  .ins { width: min(420px, 100%); display: flex; flex-direction: column; gap: 18px; }
  .ins-panel {
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: 14px;
    padding: 22px;
    display: flex; flex-direction: column; gap: 18px;
  }
  .stat-row { display: flex; gap: 26px; flex-wrap: wrap; }
  .stat b { display: block; font-family: var(--mono); font-size: 24px; font-weight: 700; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
  .stat span { font-size: 11.5px; color: var(--muted); font-family: var(--mono); letter-spacing: 0.05em; text-transform: uppercase; }
  .heatmap-grid { display: grid; grid-template-columns: repeat(14, 1fr); gap: 4px; }
  .heatmap-grid i { aspect-ratio: 1; border-radius: 3px; background: var(--accent); display: block; }
  .heatmap-foot { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 10px; color: var(--muted); letter-spacing: 0.06em; margin-top: 6px; }
  .toast {
    display: flex; align-items: center; gap: 12px;
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: 12px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
    padding: 13px 16px;
    font-size: 13.5px;
  }
  .toast .msg b { font-weight: 600; }
  .toast .msg span { display: block; color: var(--muted); font-size: 12px; }
  .toast .acts { margin-left: auto; display: flex; gap: 7px; }
  .mini-btn {
    font-family: var(--mono); font-size: 11.5px; font-weight: 600;
    padding: 5px 11px; border-radius: 7px;
    border: 1px solid var(--hairline); color: var(--muted);
  }
  .mini-btn.pri { background: var(--cta-bg); color: var(--cta-text); border-color: transparent; }

  /* quiet mock */
  .quiet-stack { width: min(420px, 100%); display: flex; flex-direction: column; gap: 12px; }
  .sec-banner {
    display: flex; align-items: center; gap: 11px;
    background: var(--accent-soft);
    border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
    border-radius: 11px;
    padding: 12px 15px;
    font-family: var(--mono); font-size: 12.5px; color: var(--text);
  }
  .sec-banner .sig {
    width: 20px; height: 20px; border-radius: 50%; flex: none;
    background: var(--accent); color: var(--cta-text);
    display: inline-flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 13px; font-family: var(--mono);
  }
  .rule-row {
    display: flex; align-items: center; gap: 11px;
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: 11px;
    padding: 12px 15px;
    font-size: 13.5px;
  }
  .rule-row .chip-state { margin-left: auto; font-family: var(--mono); font-size: 11px; color: var(--accent-ink); background: var(--accent-soft); padding: 3px 10px; border-radius: 99px; letter-spacing: 0.05em; }
  .cli {
    background: var(--term-bg); color: var(--term-text);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 11px;
    font-family: var(--mono); font-size: 12.5px; line-height: 2.1;
    padding: 14px 17px;
    overflow-x: auto;
  }
  .cli .ps { color: #FFB454; }
  .cli .dim { opacity: 0.55; }

  /* ---------- also in the box ---------- */
  .list { border-top: 1px solid var(--hairline); }
  .list-row {
    display: grid; grid-template-columns: 220px 1fr; gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid var(--hairline);
  }
  @media (max-width: 640px) { .list-row { grid-template-columns: 1fr; gap: 6px; } }
  .list-row .term { font-family: var(--mono); font-size: 14px; font-weight: 600; color: var(--accent-ink); }
  .list-row .desc { color: var(--muted); font-size: 15px; }
  .list-row .desc kbd { font-size: 0.82em; }
  .chips { display: inline-flex; gap: 6px; flex-wrap: wrap; vertical-align: middle; }
  .chip { font-family: var(--mono); font-size: 11.5px; padding: 2px 9px; border-radius: 6px; border: 1px solid var(--hairline); color: var(--muted); }
  .chip.is-on { border-color: var(--accent); color: var(--accent-ink); background: var(--accent-soft); }

  /* ---------- principles ---------- */
  .principles { display: grid; grid-template-columns: repeat(3, 1fr); border-block: 1px solid var(--hairline); margin-top: 118px; }
  .principle { padding: 42px 28px; }
  .principle + .principle { border-left: 1px solid var(--hairline); }
  @media (max-width: 820px) {
    .principles { grid-template-columns: 1fr; }
    .principle + .principle { border-left: none; border-top: 1px solid var(--hairline); }
  }
  .principle h3 { font-family: var(--mono); font-size: 19px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; }
  .principle p { font-size: 14px; color: var(--muted); }

  /* ---------- film (code-drawn loop) ---------- */
  .film {
    margin: 0;
    border: 1px solid var(--hairline);
    border-radius: 16px;
    overflow: hidden;
    background: #0A0D14;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.14);
    aspect-ratio: 16 / 9;
  }
  .film video { display: block; width: 100%; height: 100%; object-fit: cover; }
  .film-caption {
    font-family: var(--mono); font-size: 12px; color: var(--muted);
    letter-spacing: 0.03em; margin-top: 14px; text-align: center;
  }

  /* ---------- download ---------- */
  .download { padding: 108px 0 96px; text-align: center; }
  .download-inner { display: flex; flex-direction: column; align-items: center; gap: 20px; }
  .download h2 { font-family: var(--mono); font-size: clamp(28px, 4.4vw, 50px); font-weight: 700; letter-spacing: -0.04em; }
  .download .ctas { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
  .download .meta { font-family: var(--mono); font-size: 13px; color: var(--muted); }
  .download .fine { font-size: 12.5px; color: var(--muted); max-width: 56ch; }

  /* ---------- footer ---------- */
  .footer { border-top: 1px solid var(--hairline); padding: 30px 0 44px; }
  .footer-inner { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
  .footer .brand { font-size: 15px; }
  .footer nav { display: flex; gap: 20px; margin-left: auto; }
  .footer a { color: var(--muted); font-size: 13.5px; }
  .footer .tagline { width: 100%; font-family: var(--mono); font-size: 12px; color: var(--muted); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .win, .keycap, .kcap, .cyc-win, .pick-row { transition: none; }
    .mark .eye-open, .pal-q .caret, .scene-hud.pop { animation: none; }
  }
</style>

<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="#top" aria-label="Wink home">
      <svg class="mark" width="34" height="17" viewBox="0 0 64 32" fill="none" aria-hidden="true">
        <mask id="wm1"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
        <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm1)"/>
        <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
      </svg>
      Wink
    </a>
    <nav class="nav-links" aria-label="Main">
      <a href="#map">The map</a>
      <a href="#features">Features</a>
      <a href="#insights">Insights</a>
      <a href="/guide">Guide</a>
      <a href="https://github.com/xrf9268-hue/Wink" rel="noopener">GitHub</a>
      <a class="btn btn-primary" href="https://github.com/xrf9268-hue/Wink/releases/latest" rel="noopener">Download</a>
    </nav>
  </div>
</header>

<main id="top">

  <!-- ================= hero ================= -->
  <section class="hero">
    <div class="wrap">
      <div class="hero-copy">
        <h1>One chord.<br><span class="dest">One destination.</span></h1>
        <p class="sub">Wink gives each app on your Mac its own keyboard shortcut. <strong>Caps&nbsp;Lock becomes a Hyper key</strong>, so each letter can open a different app. Press the shortcut to bring the app forward, and press it again to hide it.</p>
        <div class="hero-ctas">
          <a class="btn btn-primary btn-2l" href="https://github.com/xrf9268-hue/Wink/releases/latest" rel="noopener"><span>Download for macOS</span><span class="btn-sub">free · open source · direct DMG</span></a>
          <a class="btn btn-ghost btn-2l" href="https://github.com/xrf9268-hue/Wink" rel="noopener"><span>View on GitHub</span><span class="btn-sub">open source · Swift 6</span></a>
        </div>
        <div class="hstats">
          <div class="hstat"><b>26</b><span>letter keys, plus F-keys, arrows and Space</span></div>
          <div class="hstat"><b>0</b><span>thumbnails, so no Screen Recording permission</span></div>
          <div class="hstat"><b>1</b><span>key remapped: Caps&nbsp;Lock</span></div>
        </div>
      </div>

      <div class="scene-region">
        <div class="scene" aria-label="Interactive demo: press S, T or N to switch apps">
          <div class="scene-menubar">
            <svg class="mark" width="26" height="13" viewBox="0 0 64 32" fill="none" aria-hidden="true">
              <mask id="wm2"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
              <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm2)"/>
              <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
            </svg>
            <span class="app-name">Wink</span>
            <span class="mb-right"><span class="ready">⇪ ready</span><span>Mon 9:41</span></span>
          </div>
          <div class="scene-desk">
            <div class="win win-1" data-win="s">
              <div class="win-bar">
                <span class="dots"><i></i><i></i><i></i></span>
                <span class="url-pill">swift.org/documentation</span>
              </div>
              <div class="win-body"><span class="skl hd"></span><span class="skl w85"></span><span class="skl w90"></span><span class="skl w60"></span><span class="skl w75"></span></div>
            </div>
            <div class="win win-t win-2" data-win="t">
              <div class="win-bar">
                <span class="dots"><i></i><i></i><i></i></span>
                <span class="win-title">Terminal — zsh</span>
              </div>
              <div class="term-body">
                <div><span class="ps">$</span> swift build</div>
                <div class="dim">Compiling Wink (214 files)</div>
                <div><span class="ok">Build complete!</span> (2.14s)</div>
                <div><span class="ps">$</span> <span class="dim">▌</span></div>
              </div>
            </div>
            <div class="win win-3" data-win="n">
              <div class="win-bar">
                <span class="dots"><i></i><i></i><i></i></span>
                <span class="win-title">Notes — Ideas</span>
              </div>
              <div class="win-body"><span class="skl hd"></span><span class="skl w75"></span><span class="skl w45"></span><span class="skl w85"></span><span class="skl w60"></span></div>
            </div>
            <div class="scene-hud" id="scene-hud" aria-live="polite"></div>
          </div>
        </div>

        <div class="scene-keys">
          <div class="keycol">
            <button class="keycap keycap-hyper" id="key-hyper" type="button" aria-label="Hyper key (Caps Lock)"><span class="caps">⇪</span> hyper</button>
            <span class="key-label">caps lock</span>
          </div>
          <span class="plus">+</span>
          <div class="keycol"><button class="keycap" type="button" data-key="s">S</button><span class="key-label">Safari</span></div>
          <div class="keycol"><button class="keycap" type="button" data-key="t">T</button><span class="key-label">Terminal</span></div>
          <div class="keycol"><button class="keycap" type="button" data-key="n">N</button><span class="key-label">Notes</span></div>
        </div>
        <p class="scene-hint">click a key<span class="desktop-only">, or type <b>S</b>, <b>T</b> or <b>N</b></span></p>
      </div>
    </div>
  </section>

  <!-- ================= interlude ================= -->
  <section class="interlude">
    <div class="wrap">
      <span class="eyebrow">Why Wink</span>
      <p><span class="quiet">A window switcher shows every open window and waits for you to pick one.</span><br>In Wink, each app has a fixed shortcut, <mark>so you go straight to the app you want.</mark></p>
    </div>
  </section>

  <!-- ================= film ================= -->
  <section class="section" id="film">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Overview</p>
        <h2>The main features in 24 seconds</h2>
        <p class="lede">Bring an app forward and hide it, cycle its windows, hold to pick a window, find an app by typing two letters, and hold ⇪ to see every shortcut.</p>
      </div>
      <figure class="film">
        <video autoplay muted loop playsinline preload="metadata" poster="/media/wink-film-poster.png" src="/media/wink-film.mp4" width="1920" height="1080" aria-label="Animated walkthrough: Caps Lock becomes Hyper; Hyper+S summons and dismisses Safari; repeated Hyper+T cycles Terminal windows including a minimized one; holding Hyper+S opens the window picker; the search palette finds Figma in two letters; holding Caps Lock shows the keyboard map"></video>
      </figure>
      <p class="film-caption">an animation, not a screen recording · every feature shown is in the current release</p>
    </div>
  </section>

  <!-- ================= keyboard map ================= -->
  <section class="section" id="map">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">The map</p>
        <h2>Hold ⇪ to see all your shortcuts</h2>
        <p class="lede">If you forget a shortcut, hold the Hyper key. Wink shows every enabled shortcut in an overlay and hides it when you let go.</p>
      </div>
      <div class="kbwrap">
        <div class="kb" id="kb" aria-label="Keyboard map of app shortcuts"></div>
      </div>
      <p class="kb-caption">example bindings · hold your real ⇪ to try it on this page</p>
    </div>
  </section>

  <!-- ================= showcases ================= -->
  <section class="section" id="features" style="padding-top: 40px;">
    <div class="wrap">

      <div class="section-head">
        <p class="eyebrow">Features</p>
        <h2>Beyond showing and hiding apps</h2>
        <p class="lede">Showing and hiding apps is the basic feature. The others are listed roughly in the order you are likely to need them.</p>
      </div>

      <div class="show" style="padding-top: 24px;">
        <div class="show-copy">
          <p class="eyebrow">01 · cycle</p>
          <h3>Cycle through an app's windows</h3>
          <p>Press the shortcut again and Wink moves to the app's next window, <strong>including minimized ones</strong>, which <kbd>⌘\`</kbd> skips. A small HUD shows which window you are on. You can also set one shortcut that cycles the windows of whichever app is in front.</p>
        </div>
        <div class="show-mock">
          <div class="cyc" aria-hidden="true">
            <div class="cyc-stack">
              <div class="cyc-win" data-cyc="0">
                <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="win-title">api — zsh</span></div>
                <div class="term-body"><div><span class="ps">$</span> npm run dev</div><div class="dim">listening on :3000</div></div>
              </div>
              <div class="cyc-win" data-cyc="1">
                <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="win-title">build — watch</span></div>
                <div class="term-body"><div><span class="ps">$</span> swift build --watch</div><div class="dim">watching sources…</div></div>
              </div>
              <div class="cyc-win" data-cyc="2">
                <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="win-title">ssh — deploy</span></div>
                <div class="term-body"><div><span class="ps">$</span> ssh prod</div><div class="dim">connected</div></div>
              </div>
            </div>
            <div class="cyc-hud" id="cyc-hud"><b>1 / 3</b> · api — zsh</div>
          </div>
        </div>
      </div>

      <div class="show rev">
        <div class="show-copy">
          <p class="eyebrow">02 · the picker</p>
          <h3>Hold to pick a window</h3>
          <p>Hold the shortcut down and Wink lists that app's windows. The list shows <strong>icons and titles, not thumbnails,</strong> which is why Wink does not need the Screen Recording permission.</p>
        </div>
        <div class="show-mock">
          <div class="pick" aria-hidden="true">
            <div class="pick-row" data-pick="0"><span class="app-dot" style="background:#3D7FC4">S</span>Docs — Swift.org<span class="ret">⏎</span></div>
            <div class="pick-row" data-pick="1"><span class="app-dot" style="background:#3D7FC4">S</span>Pull Requests — GitHub<span class="ret">⏎</span></div>
            <div class="pick-row" data-pick="2"><span class="app-dot" style="background:#3D7FC4">S</span>Release notes<span class="ret">⏎</span></div>
            <p class="pick-cap">holding ⇪S · ↑↓ to choose · ⏎ to switch</p>
          </div>
        </div>
      </div>

      <div class="show">
        <div class="show-copy">
          <p class="eyebrow">03 · search to switch</p>
          <h3>Search for apps without a shortcut</h3>
          <p>For apps you use less often, open the search palette, type the first letters of the name and press <kbd>⏎</kbd>. <strong>This works for any app, including ones with no shortcut.</strong></p>
        </div>
        <div class="show-mock">
          <div class="pal" aria-hidden="true">
            <div class="pal-q"><svg class="pal-glass" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="4.6" stroke="currentColor" stroke-width="1.6"/><path d="M10.4 10.4 L14 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><span id="pal-q"></span><span class="caret"></span></div>
            <div id="pal-rs"></div>
          </div>
        </div>
      </div>

      <div class="show rev" id="insights">
        <div class="show-copy">
          <p class="eyebrow">04 · insights · local only</p>
          <h3>Usage stats, stored on your Mac</h3>
          <p>Wink records activations, streaks, time saved and your busiest hours in a SQLite file on your Mac. Nothing is uploaded. If you often switch to an app that has no shortcut, <strong>Wink suggests adding one.</strong></p>
        </div>
        <div class="show-mock">
          <div class="ins" aria-hidden="true">
            <div class="ins-panel">
              <div class="stat-row">
                <div class="stat"><b>1,284</b><span>activations</span></div>
                <div class="stat"><b>3.6 h</b><span>saved</span></div>
                <div class="stat"><b>16 d</b><span>streak</span></div>
              </div>
              <div>
                <div class="heatmap-grid" id="heatmap"></div>
                <div class="heatmap-foot"><span>8:00</span><span>your week, hour by hour</span><span>22:00</span></div>
              </div>
            </div>
            <div class="toast">
              <span class="app-dot" style="background:#8A63D2">F</span>
              <span class="msg"><b>Figma: 47 switches this week</b><span>No shortcut yet. Add one?</span></span>
              <span class="acts"><span class="mini-btn pri">Suggested</span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="show">
        <div class="show-copy">
          <p class="eyebrow">05 · quiet by design</p>
          <h3>Pausing, Secure Input and scripting</h3>
          <p>When a password field turns on Secure Input, the menu bar shows it. Shortcuts that use ordinary modifiers keep working, while the Caps&nbsp;Lock layer and Fn-row keys wait until Secure Input ends. Per-app rules pause your shortcuts automatically inside a VM or remote desktop app. Scripts can control Wink through the <kbd>wink://</kbd> URL scheme.</p>
        </div>
        <div class="show-mock">
          <div class="quiet-stack" aria-hidden="true">
            <div class="sec-banner"><span class="sig">!</span>Limited · Secure&nbsp;Input · Hyper resumes when it ends</div>
            <div class="rule-row"><span class="app-dot" style="background:#C24B4B">P</span>Parallels Desktop<span class="chip-state">auto-pause · on</span></div>
            <div class="cli"><div><span class="ps">$</span> open -g "wink://toggle?bundle=com.figma.Desktop"</div><div class="dim">wink://pause and wink://resume work the same way</div></div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ================= also in the box ================= -->
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Also in the box</p>
        <h2>Other features</h2>
      </div>
      <div class="list">
        <div class="list-row">
          <span class="term">frontmost behaviors</span>
          <span class="desc"><span class="chips"><span class="chip">Hide</span><span class="chip">Toggle</span><span class="chip">Focus</span><span class="chip is-on">Cycle</span></span>&nbsp; What a second press does. Set a global default and override it per shortcut.</span>
        </div>
        <div class="list-row">
          <span class="term">.winkrecipe</span>
          <span class="desc">Export your setup as a single file to keep in version control, share with others, or import on another Mac.</span>
        </div>
        <div class="list-row">
          <span class="term">简体中文</span>
          <span class="desc">Wink is available in English and Simplified Chinese.</span>
        </div>
        <div class="list-row">
          <span class="term">hyper, standard, or both</span>
          <span class="desc">Use the Hyper layer on Caps&nbsp;Lock, ordinary modifier combinations, or both. Letters, F-keys, arrows and Space can all be bound.</span>
        </div>
        <div class="list-row">
          <span class="term">set &amp; forget</span>
          <span class="desc">Launch at Login, signed updates installed from inside the app, and a pause-all switch in the menu bar.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= principles ================= -->
  <div class="wrap">
    <div class="principles">
      <div class="principle">
        <h3>No Screen Recording permission</h3>
        <p>The window picker and window cycling use the Accessibility API and show titles and icons, not thumbnails. Wink does not request Screen Recording.</p>
      </div>
      <div class="principle">
        <h3>Data stays on your Mac</h3>
        <p>There is no account, cloud sync or telemetry. Usage data is kept in a SQLite file you can delete at any time. The only network requests are update checks.</p>
      </div>
      <div class="principle">
        <h3>MIT license</h3>
        <p>Wink is written in Swift 6 and SwiftUI. The full source code is on GitHub.</p>
      </div>
    </div>
  </div>

  <!-- ================= download ================= -->
  <section class="download" id="download">
    <div class="wrap download-inner">
      <svg class="mark" width="64" height="32" viewBox="0 0 64 32" fill="none" aria-hidden="true" style="color:var(--accent-ink)">
        <mask id="wm3"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
        <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm3)"/>
        <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
      </svg>
      <h2>Download Wink</h2>
      <div class="ctas">
        <a class="btn btn-primary btn-2l" href="https://github.com/xrf9268-hue/Wink/releases/latest" rel="noopener"><span>Download for macOS</span><span class="btn-sub">free · macOS 15 (Sequoia) or later</span></a>
        <a class="btn btn-ghost btn-2l" href="https://github.com/xrf9268-hue/Wink/blob/main/CHANGELOG.md" rel="noopener"><span>Changelog</span><span class="btn-sub">what's new</span></a>
      </div>
      <p class="meta">automatic updates · signed update feed · uninstall by deleting the app</p>
      <p class="fine">Needs Accessibility to route shortcuts. Input Monitoring is requested only if you turn on the Hyper layer or Fn-row bindings. Current v0.7.5 is not notarized by Apple. After a blocked first launch, use System Settings → Privacy &amp; Security → Open Anyway if you trust the download.</p>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="wrap footer-inner">
    <a class="brand" href="#top">
      <svg class="mark" width="30" height="15" viewBox="0 0 64 32" fill="none" aria-hidden="true">
        <mask id="wm4"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
        <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm4)"/>
        <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
      </svg>
      Wink
    </a>
    <nav aria-label="Footer">
      <a href="/guide">Guide</a>
      <a href="https://github.com/xrf9268-hue/Wink" rel="noopener">GitHub</a>
      <a href="https://github.com/xrf9268-hue/Wink/blob/main/CHANGELOG.md" rel="noopener">Changelog</a>
      <a href="https://github.com/xrf9268-hue/Wink/blob/main/docs/privacy.md" rel="noopener">Privacy</a>
    </nav>
    <p class="tagline">for people who prefer the keyboard to the mouse</p>
  </div>
</footer>

<script>
  (function () {
    "use strict";

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function loopWhenVisible(el, fn, ms) {
      if (reduceMotion || !el) return;
      var visible = true;
      if ("IntersectionObserver" in window) {
        visible = false;
        new IntersectionObserver(function (entries) {
          visible = entries[0].isIntersecting;
        }, { threshold: 0.25 }).observe(el);
      }
      setInterval(function () {
        if (!document.hidden && visible) fn();
      }, ms);
    }

    /* ----- hero scene ----- */
    var APPS = { s: "Safari", t: "Terminal", n: "Notes" };
    var wins = {};
    document.querySelectorAll("[data-win]").forEach(function (el) { wins[el.getAttribute("data-win")] = el; });
    var caps = document.querySelectorAll(".keycap[data-key]");
    var hyperKey = document.getElementById("key-hyper");
    var hud = document.getElementById("scene-hud");

    var order = ["s", "t", "n"];
    var hidden = {};

    function frontmost() {
      for (var i = order.length - 1; i >= 0; i--) {
        if (!hidden[order[i]]) return order[i];
      }
      return null;
    }

    function render() {
      order.forEach(function (k, i) {
        var el = wins[k];
        el.style.zIndex = String(i + 1);
        el.classList.toggle("is-front", k === frontmost());
        el.classList.toggle("is-hidden", !!hidden[k]);
      });
    }

    function setHud(key, name, action) {
      hud.innerHTML = "";
      var text = document.createElement("span");
      text.textContent = "⇪" + key.toUpperCase() + " · " + name;
      var act = document.createElement("span");
      act.className = "act";
      act.textContent = action;
      hud.appendChild(text);
      hud.appendChild(act);
      hud.classList.remove("pop");
      void hud.offsetWidth;
      hud.classList.add("pop");
    }

    function flashKey(k) {
      hyperKey.classList.add("is-held");
      setTimeout(function () { hyperKey.classList.remove("is-held"); }, 420);
      caps.forEach(function (btn) {
        if (btn.getAttribute("data-key") === k) {
          btn.classList.add("is-pressed");
          setTimeout(function () { btn.classList.remove("is-pressed"); }, 180);
        }
      });
    }

    function press(k) {
      if (!APPS[k]) return;
      flashKey(k);
      if (hidden[k]) {
        delete hidden[k];
        order.splice(order.indexOf(k), 1); order.push(k);
        setHud(k, APPS[k], "summoned");
      } else if (frontmost() === k) {
        hidden[k] = true;
        setHud(k, APPS[k], "dismissed");
      } else {
        order.splice(order.indexOf(k), 1); order.push(k);
        setHud(k, APPS[k], "summoned");
      }
      render();
    }

    render();
    setHud("n", "Notes", "summoned");

    var SEQ = ["t", "s", "s", "n", "t", "t", "s", "n", "n", "t"];
    var seqIdx = 0;
    var pauseUntil = 0;
    loopWhenVisible(document.querySelector(".scene"), function () {
      if (Date.now() < pauseUntil) return;
      press(SEQ[seqIdx]);
      seqIdx = (seqIdx + 1) % SEQ.length;
    }, 2100);

    function userPress(k) { pauseUntil = Date.now() + 8000; press(k); }
    caps.forEach(function (btn) {
      btn.addEventListener("click", function () { userPress(btn.getAttribute("data-key")); });
    });
    function syncCaps(e) {
      if (!e.getModifierState) return;
      document.body.classList.toggle("caps-held", e.getModifierState("CapsLock"));
    }
    document.addEventListener("keydown", function (e) {
      syncCaps(e);
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      var k = e.key.toLowerCase();
      if (APPS[k]) userPress(k);
    });
    document.addEventListener("keyup", syncCaps);

    /* ----- keyboard map ----- */
    var BINDINGS = {
      S: "Safari", T: "Terminal", N: "Notes", F: "Figma",
      Z: "Zed", M: "Mail", C: "Calendar", G: "Ghostty"
    };
    var ROWS = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"],
      ["SPACE"]
    ];
    var kb = document.getElementById("kb");
    var boundEls = [];
    if (kb) {
      ROWS.forEach(function (row, ri) {
        var rowEl = document.createElement("div");
        rowEl.className = "kb-row r" + (ri + 1);
        row.forEach(function (key) {
          var cap = document.createElement("div");
          if (key === "CAPS") {
            cap.className = "kcap wide hyper";
            cap.textContent = "⇪ hyper";
          } else if (key === "SPACE") {
            cap.className = "kcap space";
            var lbl = document.createElement("span");
            lbl.className = "lbl";
            lbl.textContent = "also bindable";
            cap.appendChild(lbl);
          } else {
            cap.className = "kcap";
            cap.appendChild(document.createTextNode(key));
            if (BINDINGS[key]) {
              cap.classList.add("bound");
              var l = document.createElement("span");
              l.className = "lbl";
              l.textContent = BINDINGS[key];
              cap.appendChild(l);
              boundEls.push(cap);
            }
          }
          rowEl.appendChild(cap);
        });
        kb.appendChild(rowEl);
      });
    }
    var pulseIdx = 0;
    loopWhenVisible(kb, function () {
      if (!boundEls.length) return;
      var el = boundEls[pulseIdx % boundEls.length];
      el.classList.add("pulse");
      setTimeout(function () { el.classList.remove("pulse"); }, 650);
      pulseIdx++;
    }, 2600);

    /* ----- palette mock ----- */
    var QUERIES = [
      { q: "fi", hits: [["Figma", "#8A63D2", "F"], ["Firefox", "#D96B2B", "F"]] },
      { q: "te", hits: [["Terminal", "#2E3440", ">_"], ["TextEdit", "#7A8494", "T"]] },
      { q: "no", hits: [["Notes", "#D9A833", "N"], ["Notion", "#3A3F4A", "N"]] }
    ];
    var palQ = document.getElementById("pal-q");
    var palRs = document.getElementById("pal-rs");
    var palState = { qi: 0, ci: 0 };
    function renderPalRows(hits, showSel) {
      palRs.innerHTML = "";
      hits.forEach(function (h, i) {
        var row = document.createElement("div");
        row.className = "pal-r" + (showSel && i === 0 ? " sel" : "");
        var app = document.createElement("span");
        app.className = "app";
        var dot = document.createElement("span");
        dot.className = "app-dot";
        dot.style.background = h[1];
        dot.textContent = h[2];
        app.appendChild(dot);
        app.appendChild(document.createTextNode(h[0]));
        row.appendChild(app);
        var ret = document.createElement("span");
        ret.className = "ret";
        ret.textContent = showSel && i === 0 ? "⏎ switch" : "";
        row.appendChild(ret);
        palRs.appendChild(row);
      });
    }
    if (palQ && palRs) {
      renderPalRows(QUERIES[0].hits, true);
      palQ.textContent = QUERIES[0].q;
      palState.ci = QUERIES[0].q.length;
      loopWhenVisible(document.querySelector(".pal"), function () {
        var cur = QUERIES[palState.qi];
        if (palState.ci < cur.q.length) {
          palState.ci++;
          palQ.textContent = cur.q.slice(0, palState.ci);
          renderPalRows(cur.hits, palState.ci === cur.q.length);
        } else {
          palState.qi = (palState.qi + 1) % QUERIES.length;
          palState.ci = 0;
          palQ.textContent = "";
          renderPalRows(QUERIES[palState.qi].hits, false);
        }
      }, 900);
    }

    /* ----- cycle mock ----- */
    var cycWins = Array.prototype.slice.call(document.querySelectorAll("[data-cyc]"));
    var cycHud = document.getElementById("cyc-hud");
    var CYC_TITLES = ["api — zsh", "build — watch", "ssh — deploy"];
    var cycFront = 0;
    function renderCyc() {
      cycWins.forEach(function (el) {
        var idx = Number(el.getAttribute("data-cyc"));
        var pos = (idx - cycFront + 3) % 3;
        el.className = "cyc-win p" + pos;
      });
      cycHud.innerHTML = "";
      var b = document.createElement("b");
      b.textContent = (cycFront + 1) + " / 3";
      cycHud.appendChild(b);
      cycHud.appendChild(document.createTextNode(" · " + CYC_TITLES[cycFront]));
    }
    if (cycWins.length) {
      renderCyc();
      loopWhenVisible(document.querySelector(".cyc"), function () {
        cycFront = (cycFront + 1) % 3;
        renderCyc();
      }, 1700);
    }

    /* ----- picker mock ----- */
    var pickRows = Array.prototype.slice.call(document.querySelectorAll("[data-pick]"));
    var pickSel = 0;
    function renderPick() {
      pickRows.forEach(function (el, i) { el.classList.toggle("sel", i === pickSel); });
    }
    if (pickRows.length) {
      renderPick();
      loopWhenVisible(document.querySelector(".pick"), function () {
        pickSel = (pickSel + 1) % pickRows.length;
        renderPick();
      }, 1300);
    }

    /* ----- heatmap ----- */
    var LEVELS = [
      "01233210001221",
      "12344321012332",
      "23455432123443",
      "12344321123332",
      "01233210012221",
      "00122100001110",
      "00011000000100"
    ];
    var OPACITY = [0.07, 0.16, 0.3, 0.48, 0.68, 0.9];
    var grid = document.getElementById("heatmap");
    if (grid) {
      LEVELS.forEach(function (rowStr) {
        rowStr.split("").forEach(function (ch) {
          var cell = document.createElement("i");
          cell.style.opacity = String(OPACITY[Number(ch)]);
          grid.appendChild(cell);
        });
      });
    }

    /* ----- film ----- */
    if (reduceMotion) {
      document.querySelectorAll(".film video").forEach(function (v) {
        v.removeAttribute("autoplay");
        v.pause();
        v.setAttribute("controls", "");
      });
    }

  })();
</script>
</body>
</html>
`;

const guideHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="The Wink user guide: installation, permissions, shortcuts, the Hyper key, window cycling, search, insights, pausing, the wink:// URL scheme and troubleshooting.">
<meta name="color-scheme" content="light dark">
<title>Wink User Guide</title>
<link rel="alternate" hreflang="en" href="https://wink.aixie.de/guide">
<link rel="alternate" hreflang="zh-Hans" href="https://wink.aixie.de/guide/zh">
<link rel="alternate" hreflang="x-default" href="https://wink.aixie.de/guide">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cmask id='m'%3E%3Crect width='32' height='32' fill='white'/%3E%3Ccircle cx='15' cy='9' r='11' fill='black'/%3E%3C/mask%3E%3Ccircle cx='16' cy='16' r='11' fill='%23FFB454' mask='url(%23m)'/%3E%3C/svg%3E">
</head>
<body>
<style>
  /* ---------- tokens (verbatim from index.html) ---------- */
  :root {
    --bg: #F3F5F9;
    --bg-glow: rgba(224, 138, 0, 0.06);
    --surface: #FFFFFF;
    --surface-2: #E9EDF4;
    --text: #171C26;
    --muted: #5A6478;
    --hairline: rgba(23, 28, 38, 0.12);
    --accent: #E08A00;
    --accent-ink: #96590A;
    --accent-soft: rgba(224, 138, 0, 0.14);
    --cta-bg: #171C26;
    --cta-text: #F6F8FC;
    --cta-hover: #232A38;
    --key-bg: #FFFFFF;
    --key-edge: #D4DAE4;
    --key-legend: #171C26;
    --win-shadow: 0 18px 44px rgba(23, 28, 38, 0.16);
    --panel-inner: #EDF0F6;
    --dot: rgba(23, 28, 38, 0.10);
    --term-bg: #10141E;
    --term-text: #C9D2E4;
    --ok: #4CAF6E;
    --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
    --sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", "Segoe UI", sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0A0D14;
      --bg-glow: rgba(255, 180, 84, 0.05);
      --surface: #131826;
      --surface-2: #1A2132;
      --text: #E9EDF6;
      --muted: #98A3BD;
      --hairline: rgba(152, 163, 189, 0.16);
      --accent: #FFB454;
      --accent-ink: #FFB454;
      --accent-soft: rgba(255, 180, 84, 0.13);
      --cta-bg: #FFB454;
      --cta-text: #1A1206;
      --cta-hover: #FFC377;
      --key-bg: #1A2132;
      --key-edge: #0A0D14;
      --key-legend: #E9EDF6;
      --win-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
      --panel-inner: #0D1120;
      --dot: rgba(152, 163, 189, 0.10);
    }
  }
  :root[data-theme="light"] {
    --bg: #F3F5F9;
    --bg-glow: rgba(224, 138, 0, 0.06);
    --surface: #FFFFFF;
    --surface-2: #E9EDF4;
    --text: #171C26;
    --muted: #5A6478;
    --hairline: rgba(23, 28, 38, 0.12);
    --accent: #E08A00;
    --accent-ink: #96590A;
    --accent-soft: rgba(224, 138, 0, 0.14);
    --cta-bg: #171C26;
    --cta-text: #F6F8FC;
    --cta-hover: #232A38;
    --key-bg: #FFFFFF;
    --key-edge: #D4DAE4;
    --key-legend: #171C26;
    --win-shadow: 0 18px 44px rgba(23, 28, 38, 0.16);
    --panel-inner: #EDF0F6;
    --dot: rgba(23, 28, 38, 0.10);
  }
  :root[data-theme="dark"] {
    --bg: #0A0D14;
    --bg-glow: rgba(255, 180, 84, 0.05);
    --surface: #131826;
    --surface-2: #1A2132;
    --text: #E9EDF6;
    --muted: #98A3BD;
    --hairline: rgba(152, 163, 189, 0.16);
    --accent: #FFB454;
    --accent-ink: #FFB454;
    --accent-soft: rgba(255, 180, 84, 0.13);
    --cta-bg: #FFB454;
    --cta-text: #1A1206;
    --cta-hover: #FFC377;
    --key-bg: #1A2132;
    --key-edge: #0A0D14;
    --key-legend: #E9EDF6;
    --win-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
    --panel-inner: #0D1120;
    --dot: rgba(152, 163, 189, 0.10);
  }

  /* ---------- base (verbatim from index.html) ---------- */
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--bg);
    background-image: radial-gradient(1100px 460px at 50% -120px, var(--bg-glow), transparent 70%);
    background-repeat: no-repeat;
    color: var(--text);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent-ink); text-decoration: none; }
  a:hover { text-decoration: underline; text-underline-offset: 3px; }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
  .wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
  h1, h2, h3 { text-wrap: balance; margin: 0; }
  p { margin: 0; }

  .eyebrow {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }

  /* ---------- nav (verbatim from index.html) ---------- */
  .nav {
    position: sticky; top: 0; z-index: 50;
    background: color-mix(in srgb, var(--bg) 84%, transparent);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--hairline);
  }
  .nav-inner { display: flex; align-items: center; gap: 28px; height: 60px; }
  .brand { display: flex; align-items: center; gap: 10px; color: var(--text); font-family: var(--mono); font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .brand:hover { text-decoration: none; }
  .nav-links { display: flex; gap: 24px; margin-left: auto; align-items: center; }
  .nav-links a:not(.btn) { color: var(--muted); font-size: 14px; font-weight: 500; }
  .nav-links a:not(.btn):hover { color: var(--text); text-decoration: none; }
  .nav .btn { height: 34px; padding: 0 14px; font-size: 13px; }
  @media (max-width: 720px) { .nav-links a:not(.btn) { display: none; } }

  /* logo mark (verbatim) */
  .mark .eye-open { transform-origin: 46px 16px; animation: blink 5.6s infinite; }
  @keyframes blink {
    0%, 91%, 100% { transform: scaleY(1); }
    94%, 96% { transform: scaleY(0.1); }
  }

  /* ---------- buttons (verbatim) ---------- */
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 46px; padding: 0 22px; border-radius: 10px;
    font-family: var(--sans); font-size: 15px; font-weight: 600;
    border: 1px solid transparent; cursor: pointer; white-space: nowrap;
  }
  .btn:hover { text-decoration: none; }
  .btn-primary, .btn-primary:hover, .btn-primary:visited { color: var(--cta-text); }
  .btn-primary { background: var(--cta-bg); }
  .btn-primary:hover { background: var(--cta-hover); }
  .btn-ghost { border-color: var(--hairline); color: var(--text); background: transparent; }
  .btn-ghost:hover { border-color: var(--muted); }
  .btn-2l { height: 58px; flex-direction: column; gap: 2px; padding: 0 24px; }
  .btn-sub { font-family: var(--mono); font-size: 10.5px; font-weight: 500; letter-spacing: 0.05em; opacity: 0.8; }

  /* dictionary-entry eyebrow (verbatim) */
  .dict { font-family: var(--mono); font-size: 13px; color: var(--muted); }
  .dict .word { color: var(--text); font-weight: 700; }
  .dict .ipa { color: var(--accent-ink); }

  kbd {
    font-family: var(--mono); font-size: 0.86em;
    background: var(--surface-2); border: 1px solid var(--hairline);
    border-radius: 5px; padding: 1px 6px;
  }

  /* terminal block (verbatim) */
  .cli {
    background: var(--term-bg); color: var(--term-text);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 11px;
    font-family: var(--mono); font-size: 12.5px; line-height: 2.1;
    padding: 14px 17px;
    overflow-x: auto;
  }
  .cli .ps { color: #FFB454; }
  .cli .dim { opacity: 0.55; }

  /* chips (verbatim) */
  .chips { display: inline-flex; gap: 6px; flex-wrap: wrap; vertical-align: middle; }
  .chip { font-family: var(--mono); font-size: 11.5px; padding: 2px 9px; border-radius: 6px; border: 1px solid var(--hairline); color: var(--muted); }
  .chip.is-on { border-color: var(--accent); color: var(--accent-ink); background: var(--accent-soft); }

  /* list rows (verbatim) */
  .list { border-top: 1px solid var(--hairline); }
  .list-row {
    display: grid; grid-template-columns: 220px 1fr; gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid var(--hairline);
  }
  @media (max-width: 640px) { .list-row { grid-template-columns: 1fr; gap: 6px; } }
  .list-row .term { font-family: var(--mono); font-size: 14px; font-weight: 600; color: var(--accent-ink); }
  .list-row .desc { color: var(--muted); font-size: 15px; }
  .list-row .desc kbd { font-size: 0.82em; }

  /* dotted panel background (verbatim pattern) */
  .dotted-panel {
    background-color: var(--panel-inner);
    background-image: radial-gradient(var(--dot) 1px, transparent 1px);
    background-size: 18px 18px;
    border: 1px solid var(--hairline);
    border-radius: 16px;
  }

  /* ---------- footer (verbatim) ---------- */
  .footer { border-top: 1px solid var(--hairline); padding: 30px 0 44px; }
  .footer-inner { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
  .footer .brand { font-size: 15px; }
  .footer nav { display: flex; gap: 20px; margin-left: auto; }
  .footer a { color: var(--muted); font-size: 13.5px; }
  .footer .tagline { width: 100%; font-family: var(--mono); font-size: 12px; color: var(--muted); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .mark .eye-open { animation: none; }
  }

  /* =====================================================================
     Guide-specific CSS — same tokens, same idiom as index.html
     ===================================================================== */

  /* ---------- header block ---------- */
  .guide-hero { padding: 56px 0 28px; }
  .guide-hero-copy { display: flex; flex-direction: column; gap: 16px; max-width: 60ch; }
  .guide-hero h1 {
    font-family: var(--mono);
    font-size: clamp(36px, 6vw, 60px);
    font-weight: 700;
    letter-spacing: -0.045em;
    line-height: 1.04;
  }
  .guide-hero .sub { color: var(--muted); font-size: 17px; max-width: 56ch; }

  /* quick facts strip */
  .qf-row {
    display: flex; gap: 0;
    margin-top: 34px;
    padding: 4px 0;
  }
  .qf {
    flex: 1;
    display: flex; flex-direction: column; gap: 2px;
    padding: 14px 22px;
    border-left: 1px solid var(--hairline);
  }
  .qf:first-child { border-left: none; padding-left: 0; }
  .qf b { font-family: var(--mono); font-size: 26px; font-weight: 700; letter-spacing: -0.03em; color: var(--text); font-variant-numeric: tabular-nums; }
  .qf span { font-family: var(--mono); font-size: 11.5px; color: var(--muted); letter-spacing: 0.02em; line-height: 1.5; }
  @media (max-width: 640px) {
    .qf-row { flex-wrap: wrap; }
    .qf { flex: 1 1 45%; border-left: none; padding: 10px 0; }
  }

  /* ---------- two-column body ---------- */
  .guide-body { padding: 40px 0 0; }
  .guide-grid {
    display: grid;
    grid-template-columns: 176px minmax(0, 1fr);
    gap: 56px;
    align-items: start;
  }

  /* left rail TOC */
  .toc {
    position: sticky;
    top: 84px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    font-family: var(--mono);
    font-size: 12.5px;
    padding-bottom: 24px;
  }
  .toc a {
    color: var(--muted);
    padding: 7px 0 7px 13px;
    border-left: 2px solid transparent;
    letter-spacing: 0.01em;
  }
  .toc a:hover { color: var(--accent-ink); text-decoration: none; border-left-color: color-mix(in srgb, var(--accent) 45%, transparent); }
  .toc a.is-current { color: var(--accent-ink); border-left-color: var(--accent); font-weight: 600; }
  .toc a.toc-extra { margin-top: 8px; padding-top: 10px; border-top: 1px solid var(--hairline); color: var(--muted); }

  @media (max-width: 880px) {
    .guide-grid { grid-template-columns: 1fr; gap: 8px; }
    .toc {
      position: static;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4px 4px;
      padding: 0 0 20px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--hairline);
    }
    .toc a {
      padding: 4px 9px;
      border-left: none;
      border-radius: 99px;
      border: 1px solid transparent;
    }
    .toc a:hover { border-color: color-mix(in srgb, var(--accent) 45%, transparent); }
    .toc a.is-current { border-color: var(--accent); background: var(--accent-soft); }
    .toc a.toc-extra { margin-top: 0; padding-top: 4px; border-top: none; }
  }

  /* content column — min-width: 0 so .cli scrollers can't widen the grid track */
  .content { max-width: 70ch; min-width: 0; }

  .chapter { padding: 52px 0; border-top: 1px solid var(--hairline); }
  .chapter:first-of-type { padding-top: 0; border-top: none; }
  .chapter .eyebrow { display: block; margin-bottom: 16px; }
  .chapter h2 {
    font-family: var(--mono);
    font-size: clamp(21px, 2.6vw, 28px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin-bottom: 18px;
  }
  .chapter p { font-size: 16px; color: var(--text); margin-bottom: 15px; }
  .chapter p:last-child { margin-bottom: 0; }
  .chapter p.lead-chips { margin-bottom: 10px; color: var(--muted); }
  .chapter .chips { margin-bottom: 16px; }
  .chapter strong { font-weight: 600; }
  .chapter .cli { margin: 4px 0 16px; }

  /* closing "also, briefly" section */
  .closing { padding: 52px 0; border-top: 1px solid var(--hairline); }
  .closing .eyebrow { display: block; margin-bottom: 14px; }
  .closing h2 {
    font-family: var(--mono);
    font-size: clamp(21px, 2.6vw, 28px);
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 22px;
  }

  /* final cross-link */
  .guide-cta {
    padding: 52px 0 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .guide-cta h2 {
    font-family: var(--mono);
    font-size: clamp(24px, 3.2vw, 34px);
    font-weight: 700;
    letter-spacing: -0.035em;
  }
  .guide-cta .sub { color: var(--muted); font-size: 15px; }

  /* ---------- media figures ---------- */
  .fig { margin: 22px 0 6px; }
  .fig video, .fig img {
    display: block; width: 100%; height: auto;
    border: 1px solid var(--hairline);
    border-radius: 12px;
    background: var(--panel-inner);
  }
  .fig figcaption {
    font-family: var(--mono); font-size: 11.5px; color: var(--muted);
    letter-spacing: 0.03em; margin-top: 8px;
  }
  .fig .only-dark { display: none; }
  @media (prefers-color-scheme: dark) {
    .fig .only-light { display: none; }
    .fig .only-dark { display: block; }
  }
  :root[data-theme="light"] .fig .only-light { display: block; }
  :root[data-theme="light"] .fig .only-dark { display: none; }
  :root[data-theme="dark"] .fig .only-light { display: none; }
  :root[data-theme="dark"] .fig .only-dark { display: block; }
</style>

<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="/" aria-label="Wink home">
      <svg class="mark" width="34" height="17" viewBox="0 0 64 32" fill="none" aria-hidden="true">
        <mask id="wm1"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
        <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm1)"/>
        <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
      </svg>
      Wink
    </a>
    <nav class="nav-links" aria-label="Main">
      <a href="/">Home</a>
      <a href="/guide/zh" lang="zh-Hans">中文</a>
      <a href="https://github.com/xrf9268-hue/Wink" rel="noopener">GitHub</a>
      <a class="btn btn-primary" href="https://github.com/xrf9268-hue/Wink/releases/latest" rel="noopener">Download</a>
    </nav>
  </div>
</header>

<main id="top">

  <!-- ================= header ================= -->
  <section class="guide-hero">
    <div class="wrap">
      <div class="guide-hero-copy">
        <h1>User guide</h1>
        <p class="sub">This guide covers setup, permissions, frontmost behaviors, the Hyper layer and the <kbd>wink://</kbd> URL scheme, in roughly the order you will use them.</p>
      </div>
      <div class="qf-row">
        <div class="qf"><b>11</b><span>chapters</span></div>
        <div class="qf"><b>2</b><span>permissions, one of them only if needed</span></div>
        <div class="qf"><b>0</b><span>thumbnails, so no Screen Recording permission</span></div>
      </div>
    </div>
  </section>

  <!-- ================= two-column body ================= -->
  <section class="guide-body">
    <div class="wrap guide-grid">

      <nav class="toc" aria-label="Chapters">
        <a href="#install">00 · install</a>
        <a href="#permissions">01 · permissions</a>
        <a href="#first-chord">02 · first shortcut</a>
        <a href="#frontmost">03 · frontmost</a>
        <a href="#hyper">04 · hyper layer</a>
        <a href="#windows">05 · windows</a>
        <a href="#search">06 · search</a>
        <a href="#insights">07 · insights</a>
        <a href="#quiet">08 · pausing</a>
        <a href="#sharing">09 · sharing</a>
        <a href="#troubleshooting">10 · troubleshooting</a>
        <a href="#extras" class="toc-extra">other settings</a>
      </nav>

      <div class="content">

        <!-- 00 -->
        <article class="chapter" id="install">
          <p class="eyebrow">00 · install</p>
          <h2>Install Wink</h2>
          <p>Grab the DMG from <a href="https://github.com/xrf9268-hue/Wink/releases/latest" rel="noopener">GitHub Releases</a> and drag Wink into Applications. The current release v0.7.5 is ad-hoc signed and <strong>not notarized by Apple</strong>. If macOS blocks this trusted download, first try opening it, then go to <strong>System Settings → Privacy &amp; Security → Open Anyway</strong> and confirm Open. A damaged-app or malware warning is different: stop and check the download source.</p>
          <p>On a new install with no shortcuts configured, Wink opens Settings when it launches.</p>
          <p>Wink requires macOS 15 (Sequoia) or later.</p>
        </article>

        <!-- 01 -->
        <article class="chapter" id="permissions">
          <p class="eyebrow">01 · permissions</p>
          <h2>Permissions</h2>
          <p class="lead-chips">Wink uses at most two permissions:</p>
          <p class="chips">
            <span class="chip is-on">Accessibility · required</span>
            <span class="chip">Input Monitoring · conditional</span>
            <span class="chip">Screen Recording · never</span>
          </p>
          <p><strong>Accessibility</strong> is required. Wink uses it to route every shortcut you record, both standard and Hyper. Grant it in <strong>System Settings → Privacy &amp; Security → Accessibility</strong>, or follow the banner at the top of <strong>Settings → Shortcuts</strong> until it goes away.</p>
          <p><strong>Input Monitoring</strong> is requested only when your setup needs it: when you turn on the Hyper Key or bind a key on the Fn row. If you use neither, Wink does not ask for it. The Permissions card in <strong>Settings → General</strong> marks each permission Granted, Needed or Optional based on your current configuration.</p>
          <p><strong>Screen Recording</strong> is not needed. The window picker and window cycling read window titles and icons through the Accessibility API, and Wink does not capture your screen.</p>
        </article>

        <!-- 02 -->
        <article class="chapter" id="first-chord">
          <p class="eyebrow">02 · your first shortcut</p>
          <h2>Add your first shortcut</h2>
          <p>Open <strong>Settings → Shortcuts</strong>. The <strong>New Shortcut</strong> card asks for two things: a target app and a key combination. Find the app by name, choose it from <strong>Recently Used</strong> or <strong>All Apps</strong>, or use <strong>Browse…</strong> for apps outside the usual folders. Then click the Shortcut field and press the combination. It needs at least one modifier (⌘⌥⌃⇧), unless you bind it on the Hyper layer (chapter 04).</p>
          <figure class="fig">
            <img class="only-light" src="/media/settings-shortcuts-en-light.png" width="860" height="816" alt="Settings → Shortcuts: three Hyper shortcuts and the New Shortcut card" loading="lazy">
            <img class="only-dark" src="/media/settings-shortcuts-en-dark.png" width="860" height="816" alt="Settings → Shortcuts: three Hyper shortcuts and the New Shortcut card" loading="lazy">
            <figcaption>Settings → Shortcuts with three shortcuts and the New Shortcut card.</figcaption>
          </figure>
          <p>Click <strong>Add Shortcut</strong>. The shortcut works right away in every app. Press it once and Wink brings the target app forward, launching it first if it is not running. What a second press does depends on the frontmost behavior (chapter 03).</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-first-chord-v2.mp4" width="1600" height="1000" aria-label="Pressing Hyper+S summons Safari, pressing again dismisses it"></video>
            <figcaption>⇪S pressed three times: show Safari, hide it, show it again. Recorded from the released app.</figcaption>
          </figure>
          <p>The app list also has a <strong>Current App</strong> entry at the top. A shortcut bound to it acts on whichever app is frontmost, so you do not need a separate binding for each app.</p>
        </article>

        <!-- 03 -->
        <article class="chapter" id="frontmost">
          <p class="eyebrow">03 · frontmost behaviors</p>
          <h2>What a second press does</h2>
          <p class="lead-chips">When you press a shortcut for an app that is already frontmost, Wink does one of four things:</p>
          <p class="chips">
            <span class="chip">Hide</span>
            <span class="chip is-on">Toggle</span>
            <span class="chip">Focus</span>
            <span class="chip">Cycle</span>
          </p>
          <p><strong>Hide</strong> hides the app whenever it is frontmost, even if Wink did not bring it forward.</p>
          <p><strong>Toggle</strong> is the default. It hides the app only after its activation has finished, so a quick double press does not hide a window that is still opening.</p>
          <p><strong>Focus</strong> never hides the app. It unhides and unminimizes all of the app's windows and keeps the app in front.</p>
          <p><strong>Cycle</strong> moves to the app's next window instead of hiding it. Apps with a single window behave differently; see chapter 05.</p>
          <p>Set the default in <strong>Settings → General</strong> under <strong>“When target is frontmost”</strong>, or override it for one shortcut from that row's ⋯ menu.</p>
          <figure class="fig">
            <img class="only-light" src="/media/settings-general-en-light.png" width="860" height="816" alt="Settings → General with the When target is frontmost segmented control" loading="lazy">
            <img class="only-dark" src="/media/settings-general-en-dark.png" width="860" height="816" alt="Settings → General with the When target is frontmost segmented control" loading="lazy">
            <figcaption>Settings → General. The default is set under “When target is frontmost”.</figcaption>
          </figure>
        </article>

        <!-- 04 -->
        <article class="chapter" id="hyper">
          <p class="eyebrow">04 · the hyper layer</p>
          <h2>Use Caps Lock as a Hyper key</h2>
          <p>Turn on <strong>Hyper Key</strong> in <strong>Settings → General</strong> and Caps Lock works as an extra modifier. Holding it is the same as holding <kbd>⌃⌥⇧⌘</kbd>, so a single letter is enough for a shortcut: hold Caps Lock and press the letter.</p>
          <p>While Hyper Key is on, the key no longer works as Caps Lock. Tapping it by itself does nothing: no shortcut, no capital letters, no indicator light. Turn Hyper Key off to get normal Caps Lock back. If you release Caps Lock slightly before the letter, Wink still treats it as one shortcut, as long as the gap is under about 80 milliseconds.</p>
          <p>To see your shortcuts, hold Caps Lock for just over half a second without pressing another key. An overlay lists every enabled shortcut, Hyper or not, and closes when you let go. It requires Hyper Key to be on and at least one enabled Hyper shortcut. Settings notes this under the toggle.</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-cheatsheet-v2.mp4" width="1600" height="1000" aria-label="Holding Caps Lock brings up the cheat sheet overlay listing every shortcut"></video>
            <figcaption>Hold ⇪ a little longer than for a shortcut to show the overlay.</figcaption>
          </figure>
        </article>

        <!-- 05 -->
        <article class="chapter" id="windows">
          <p class="eyebrow">05 · windows</p>
          <h2>Cycle through an app's windows</h2>
          <p>Set a shortcut's frontmost behavior to <strong>Cycle</strong> (chapter 03), then press the shortcut again while its app is frontmost. Each press moves to the next window, including minimized ones. A small HUD shows your position and the window title (<kbd>2/5</kbd> · window title) on the display where that window is.</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-cycle-v2.mp4" width="1600" height="1000" aria-label="Repeating Hyper+T steps through Terminal windows while a HUD counts along"></video>
            <figcaption>⇪T pressed repeatedly. The HUD counts the windows, including minimized ones.</figcaption>
          </figure>
          <p>If the app has one window or none, there is nothing to cycle. A shortcut for a specific app then behaves like Toggle and hides the app. A Current App shortcut does nothing, so it never hides the app you are working in.</p>
          <p>To pick a window from a list instead, choose <strong>Hold Action → Window Picker</strong> in the shortcut row's ⋯ menu. Then hold the shortcut instead of tapping it. A list of the app's windows appears, with minimized windows marked. Use ↑↓ to choose and ⏎ to switch. The list shows icons and titles, not thumbnails, which is why Wink does not need Screen Recording.</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-picker-v2.mp4" width="1600" height="1000" aria-label="Holding Hyper+S opens a window list, the down arrow picks a window, Return raises it"></video>
            <figcaption>Hold ⇪S, then use ↑↓ and ⏎. The list shows titles and icons.</figcaption>
          </figure>
        </article>

        <!-- 06 -->
        <article class="chapter" id="search">
          <p class="eyebrow">06 · search to switch</p>
          <h2>Switch to an app by searching</h2>
          <p>Set a shortcut for the palette in <strong>Settings → General → Search Palette</strong>. You record it the same way as any other shortcut. Press it, type a few letters of an app's name (localized names also match) and press <kbd>⏎</kbd>. Wink switches to the app, launching it first if it is not running.</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-palette-v2.mp4" width="1600" height="1000" aria-label="The search palette opens, safa is typed, Return switches to Safari"></video>
            <figcaption>⇪Space, type “safa”, press ⏎. Safari comes back from hidden.</figcaption>
          </figure>
          <p>Before you type anything, the list shows recently used apps first, so the app you just left is usually at the top. Background agents and helper processes are not listed.</p>
        </article>

        <!-- 07 -->
        <article class="chapter" id="insights">
          <p class="eyebrow">07 · insights</p>
          <h2>Insights</h2>
          <p><strong>Settings → Insights</strong> totals your activations, an estimated time saved (three seconds per switch, added up), your current streak of consecutive active days, and an hourly heatmap of when you use Wink. Switch between <strong>today</strong>, <strong>7 days</strong>, and <strong>30 days</strong> with the control at the top.</p>
          <figure class="fig">
            <img class="only-light" src="/media/settings-insights-en-light.png" width="860" height="816" alt="Settings → Insights: activations, time saved, streak, hourly heatmap, most-used list" loading="lazy">
            <img class="only-dark" src="/media/settings-insights-en-dark.png" width="860" height="816" alt="Settings → Insights: activations, time saved, streak, hourly heatmap, most-used list" loading="lazy">
            <figcaption>Insights: activations, time saved, streak and hourly heatmap.</figcaption>
          </figure>
          <p>This data is stored in a local SQLite file and is never uploaded. The Privacy page describes this in detail.</p>
          <p>Turn on <strong>“Suggest shortcuts from app usage”</strong> in Settings → General, and Wink counts which apps come to the front, stored locally. An app you switch to often but have not bound appears in the <strong>Suggested shortcuts</strong> card with its count for the period and a note to add a shortcut in Shortcuts. Wink does not add the shortcut for you. If you turn the toggle off, Wink stops counting and deletes the counts it has collected.</p>
        </article>

        <!-- 08 -->
        <article class="chapter" id="quiet">
          <p class="eyebrow">08 · pausing</p>
          <h2>Secure Input and pausing</h2>
          <p class="lead-chips">The menu bar pill shows Wink's current state:</p>
          <p class="chips">
            <span class="chip is-on">Ready</span>
            <span class="chip">Limited · Secure Input</span>
            <span class="chip">Paused</span>
            <span class="chip">Paused · &lt;App&gt;</span>
          </p>
          <p>When a password field or secure prompt turns on macOS Secure Input, the pill changes to <strong>Limited · Secure Input</strong>. Hyper and Fn-row shortcuts stop working until it ends, because they use the event tap that Secure Input blocks. Shortcuts with ordinary modifier keys keep working. Wink returns to normal as soon as Secure Input ends.</p>
          <p>Add an app under <strong>“Pause in exception apps”</strong> in Settings → General, for example a VM or remote-desktop client. Wink pauses whenever that app is frontmost, and the pill shows its name (<strong>Paused · Parallels Desktop</strong>). Caps Lock works as normal Caps Lock while that app is in front.</p>
          <p>To pause everything, use <strong>“Pause all shortcuts”</strong> in the menu bar.</p>
        </article>

        <!-- 09 -->
        <article class="chapter" id="sharing">
          <p class="eyebrow">09 · sharing &amp; scripting</p>
          <h2>Export, import and scripting</h2>
          <p>You can save all your shortcuts to one file. <strong>Export…</strong> in <strong>Settings → Shortcuts</strong> writes a <kbd>.winkrecipe</kbd>; <strong>Import…</strong> reads one back. Before importing, Wink shows which shortcuts are <strong>Ready</strong>, which <strong>Conflicts</strong> and which are <strong>Unresolved</strong>. Then you choose <strong>Skip Conflicts</strong> or <strong>Replace Existing</strong>.</p>
          <p>Apple's Shortcuts app also discovers four localized Wink actions: <strong>Pause Wink</strong>, <strong>Resume Wink</strong>, <strong>Show Wink Search Palette</strong>, and <strong>Open Wink Settings</strong>. The Settings action can jump straight to Shortcuts, General, or Insights; Pause and Resume change only your manual pause, without overriding an exception app that is keeping capture paused.</p>
          <p>Scripts and other apps can control Wink with the <kbd>wink://</kbd> URL scheme:</p>
          <div class="cli">
            <div><span class="ps">$</span> open -g "wink://toggle?bundle=com.google.Chrome"</div>
            <div><span class="ps">$</span> open -g "wink://focus?bundle=com.google.Chrome"</div>
            <div><span class="ps">$</span> open -g "wink://search"</div>
            <div><span class="ps">$</span> open -g "wink://open-settings?tab=insights"</div>
            <div class="dim">wink://pause · wink://resume · wink://open-settings</div>
          </div>
          <p><kbd>focus</kbd> is idempotent: it brings an installed app forward but never hides it or cycles its windows when it is already frontmost. The only Settings tabs accepted are <kbd>shortcuts</kbd>, <kbd>general</kbd>, and <kbd>insights</kbd>.</p>
          <p>Always call it with <kbd>open -g</kbd>. A plain <kbd>open</kbd> activates Wink to deliver the URL, so your target app is no longer frontmost and every toggle becomes a plain activate. <kbd>-g</kbd> keeps Wink in the background so the toggle sees the real frontmost state. Toggle requests respect the same per-bundle cooldown as a real keypress, but URL-triggered app actions never count toward Insights.</p>
          <p>A custom URL scheme does not authenticate who called it. Wink accepts only the commands and parameters above, validates bundle identifiers against installed apps, and ignores malformed or unknown input. There are no <kbd>callback</kbd>, <kbd>x-success</kbd>, or other completion callbacks: successful URL delivery does not prove that macOS completed the asynchronous activation request.</p>
        </article>


        <!-- 10 -->
        <article class="chapter" id="troubleshooting">
          <p class="eyebrow">10 · troubleshooting</p>
          <h2>When a shortcut does nothing</h2>
          <p>There are three possible causes, and each has a different fix. Capture may be <strong>paused</strong> on purpose. macOS may have withdrawn a <strong>permission</strong>. Or the <strong>route</strong> the shortcut uses may not be ready. The menu bar pill shows the first case (<strong>Paused</strong>, <strong>Limited · Secure Input</strong>), but it does not check permissions or Carbon registration, so <strong>Ready</strong> does not rule those out. If the pill reads Ready and a shortcut still does nothing, look at <em>which</em> shortcuts stopped working.</p>
          <div class="list">
            <div class="list-row">
              <span class="term">the pill says Paused</span>
              <span class="desc">Nothing is broken. Capture is off on purpose, and all shortcuts stop while it is. Either you paused Wink from the menu bar, or the frontmost app is on your <strong>“Pause in exception apps”</strong> list (VMs and remote desktops are on it by default). In that case the pill shows the app's name: <strong>Paused · Parallels Desktop</strong>. Resume from the menu bar, or take the app off the list. Checking permissions or routes will not help while the pill reads Paused.</span>
            </div>
            <div class="list-row">
              <span class="term">only some shortcuts stopped</span>
              <span class="desc">The shortcuts that stopped use the same route. Plain modifier shortcuts (<kbd>⌃⌥K</kbd>) use Carbon hot keys. Hyper shortcuts use the event tap. Fn-row bindings use both: Carbon delivers the key press, and a small observer, which needs <strong>Input Monitoring</strong>, confirms the physical Fn key. If either part stops, they stop. If the pill reads <strong>Limited · Secure Input</strong>, an app is holding Secure Input, which blocks both the event tap and the Fn observer. This clears by itself. If Hyper <em>and</em> Fn-row shortcuts stopped together, check <strong>Input Monitoring</strong> in System Settings → Privacy &amp; Security, since both depend on it. If <em>only</em> Fn-row shortcuts stopped while Hyper still works, the cause is either a Carbon registration failure or the Fn observer not starting (Hyper uses a different tap, so it is not affected). The diagnostics export lists each failed binding with its reason, and an unavailable observer names itself there.</span>
            </div>
            <div class="list-row">
              <span class="term">all shortcuts stopped</span>
              <span class="desc">Look at which routes your shortcuts use. If all of them are on the Hyper layer or Fn-row keys, a revoked <strong>Input Monitoring</strong> permission stops all of them, so check that first (same path as above). Plain modifier shortcuts use Carbon through <strong>Accessibility</strong>. Check it in System Settings → Privacy &amp; Security. If Wink is listed and switched on, switch it <strong>off and on again</strong>, because an outdated grant looks the same as a working one. The diagnostics export shows whether each route is ready.</span>
            </div>
            <div class="list-row">
              <span class="term">after an update</span>
              <span class="desc">macOS ties a permission to the app's signature, not its name or path. A build signed differently from the one you granted is a different app as far as TCC is concerned, and both permissions have to be granted again. Notarization does not change this: notarization decides whether Gatekeeper lets the app open, and TCC decides what it may do after that. They are separate, and the diagnostics export names the signing mode so you can tell which build you are running.</span>
            </div>
            <div class="list-row">
              <span class="term">only in one app</span>
              <span class="desc">That app is probably holding Secure Input, for example in a password field, a lock screen or a remote-desktop session. The pill reads <strong>Limited · Secure Input</strong> and it clears itself. If the app is a VM or remote desktop you use for long stretches, add it under <strong>“Pause in exception apps”</strong>.</span>
            </div>
            <div class="list-row">
              <span class="term">the app moved or is gone</span>
              <span class="desc">Wink binds to a bundle identifier, not a path, so moving an app is fine. If you delete the app, its row stays and shows the app as unavailable.</span>
            </div>
          </div>
          <p class="lead-chips">If none of this explains the problem, export a diagnostics report:</p>
          <p><strong>Settings → General → Diagnostics</strong> has <strong>Reveal Log</strong> and <strong>Export…</strong>. The export shows you every file and everything in it <em>before</em> anything is written, and nothing leaves the Mac unless you send it.</p>
          <p>Your user name, home folder path, passwords, tokens, and the query strings on any web address are removed. Application names and bundle identifiers are <em>kept</em>, because the report is not useful without them. They do show which apps you have shortcuts for. Read the preview before you share it.</p>
          <p>When you file something, the useful report is short: Wink's version, your macOS version, what you pressed and what you expected, which kind of shortcut it was, and the export attached.</p>
        </article>

        <!-- closing -->
        <section class="closing" id="extras">
          <p class="eyebrow">Other settings</p>
          <h2>Updates, login and language</h2>
          <div class="list">
            <div class="list-row">
              <span class="term">updates</span>
              <span class="desc">The in-app Sparkle panel handles checking, downloading, and installing without leaving Wink. <strong>Check for Updates…</strong> lives in the menu bar; <strong>Automatic Updates</strong> in Settings → General turns background checks and downloads on or off.</span>
            </div>
            <div class="list-row">
              <span class="term">launch &amp; menu bar</span>
              <span class="desc"><strong>Launch at Login</strong> and <strong>Show Menu Bar Icon</strong> are both toggles in Settings → General.</span>
            </div>
            <div class="list-row">
              <span class="term">languages</span>
              <span class="desc">English and 简体中文. Choose the language in System Settings → General → Language &amp; Region.</span>
            </div>
            <div class="list-row">
              <span class="term">help</span>
              <span class="desc">Wink is open source. The code, issue tracker and development history are on GitHub.</span>
            </div>
          </div>
        </section>

        <!-- final cross-link -->
        <div class="guide-cta">
          <p class="eyebrow">Get Wink</p>
          <h2>Download Wink</h2>
          <p class="sub">Free and open source, for macOS 15 or later.</p>
          <a class="btn btn-primary btn-2l" href="/#download"><span>Download for macOS</span><span class="btn-sub">free · open source · direct DMG</span></a>
        </div>

      </div>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="wrap footer-inner">
    <a class="brand" href="/">
      <svg class="mark" width="30" height="15" viewBox="0 0 64 32" fill="none" aria-hidden="true">
        <mask id="wm4"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
        <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm4)"/>
        <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
      </svg>
      Wink
    </a>
    <nav aria-label="Footer">
      <a href="https://github.com/xrf9268-hue/Wink" rel="noopener">GitHub</a>
      <a href="https://github.com/xrf9268-hue/Wink/blob/main/CHANGELOG.md" rel="noopener">Changelog</a>
      <a href="https://github.com/xrf9268-hue/Wink/blob/main/docs/privacy.md" rel="noopener">Privacy</a>
    </nav>
    <p class="tagline">for people who prefer the keyboard to the mouse</p>
  </div>
</footer>

<script>
  (function () {
    "use strict";
    var links = Array.prototype.slice.call(document.querySelectorAll(".toc a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });

    var sections = Object.keys(map)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    var current = links[0];
    current.classList.add("is-current");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var next = map[entry.target.id];
        if (!next || next === current) return;
        if (current) current.classList.remove("is-current");
        current = next;
        current.classList.add("is-current");
      });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("video[autoplay]").forEach(function (v) {
        v.removeAttribute("autoplay");
        v.pause();
        v.setAttribute("controls", "");
      });
    }
  })();
</script>
</body>
</html>
`;

const guideZhHtml = `<!doctype html>
<html lang="zh-Hans">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Wink 使用手册：安装、权限、快捷键、Hyper 键、窗口轮换、搜索、洞察、暂停、wink:// 协议和故障排查。">
<meta name="color-scheme" content="light dark">
<title>Wink 使用手册</title>
<link rel="alternate" hreflang="en" href="https://wink.aixie.de/guide">
<link rel="alternate" hreflang="zh-Hans" href="https://wink.aixie.de/guide/zh">
<link rel="alternate" hreflang="x-default" href="https://wink.aixie.de/guide">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cmask id='m'%3E%3Crect width='32' height='32' fill='white'/%3E%3Ccircle cx='15' cy='9' r='11' fill='black'/%3E%3C/mask%3E%3Ccircle cx='16' cy='16' r='11' fill='%23FFB454' mask='url(%23m)'/%3E%3C/svg%3E">
</head>
<body>
<style>
  /* ---------- tokens (verbatim from index.html) ---------- */
  :root {
    --bg: #F3F5F9;
    --bg-glow: rgba(224, 138, 0, 0.06);
    --surface: #FFFFFF;
    --surface-2: #E9EDF4;
    --text: #171C26;
    --muted: #5A6478;
    --hairline: rgba(23, 28, 38, 0.12);
    --accent: #E08A00;
    --accent-ink: #96590A;
    --accent-soft: rgba(224, 138, 0, 0.14);
    --cta-bg: #171C26;
    --cta-text: #F6F8FC;
    --cta-hover: #232A38;
    --key-bg: #FFFFFF;
    --key-edge: #D4DAE4;
    --key-legend: #171C26;
    --win-shadow: 0 18px 44px rgba(23, 28, 38, 0.16);
    --panel-inner: #EDF0F6;
    --dot: rgba(23, 28, 38, 0.10);
    --term-bg: #10141E;
    --term-text: #C9D2E4;
    --ok: #4CAF6E;
    --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
    --sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", "Segoe UI", sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0A0D14;
      --bg-glow: rgba(255, 180, 84, 0.05);
      --surface: #131826;
      --surface-2: #1A2132;
      --text: #E9EDF6;
      --muted: #98A3BD;
      --hairline: rgba(152, 163, 189, 0.16);
      --accent: #FFB454;
      --accent-ink: #FFB454;
      --accent-soft: rgba(255, 180, 84, 0.13);
      --cta-bg: #FFB454;
      --cta-text: #1A1206;
      --cta-hover: #FFC377;
      --key-bg: #1A2132;
      --key-edge: #0A0D14;
      --key-legend: #E9EDF6;
      --win-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
      --panel-inner: #0D1120;
      --dot: rgba(152, 163, 189, 0.10);
    }
  }
  :root[data-theme="light"] {
    --bg: #F3F5F9;
    --bg-glow: rgba(224, 138, 0, 0.06);
    --surface: #FFFFFF;
    --surface-2: #E9EDF4;
    --text: #171C26;
    --muted: #5A6478;
    --hairline: rgba(23, 28, 38, 0.12);
    --accent: #E08A00;
    --accent-ink: #96590A;
    --accent-soft: rgba(224, 138, 0, 0.14);
    --cta-bg: #171C26;
    --cta-text: #F6F8FC;
    --cta-hover: #232A38;
    --key-bg: #FFFFFF;
    --key-edge: #D4DAE4;
    --key-legend: #171C26;
    --win-shadow: 0 18px 44px rgba(23, 28, 38, 0.16);
    --panel-inner: #EDF0F6;
    --dot: rgba(23, 28, 38, 0.10);
  }
  :root[data-theme="dark"] {
    --bg: #0A0D14;
    --bg-glow: rgba(255, 180, 84, 0.05);
    --surface: #131826;
    --surface-2: #1A2132;
    --text: #E9EDF6;
    --muted: #98A3BD;
    --hairline: rgba(152, 163, 189, 0.16);
    --accent: #FFB454;
    --accent-ink: #FFB454;
    --accent-soft: rgba(255, 180, 84, 0.13);
    --cta-bg: #FFB454;
    --cta-text: #1A1206;
    --cta-hover: #FFC377;
    --key-bg: #1A2132;
    --key-edge: #0A0D14;
    --key-legend: #E9EDF6;
    --win-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
    --panel-inner: #0D1120;
    --dot: rgba(152, 163, 189, 0.10);
  }

  /* ---------- base (verbatim from index.html) ---------- */
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--bg);
    background-image: radial-gradient(1100px 460px at 50% -120px, var(--bg-glow), transparent 70%);
    background-repeat: no-repeat;
    color: var(--text);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent-ink); text-decoration: none; }
  a:hover { text-decoration: underline; text-underline-offset: 3px; }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
  .wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
  h1, h2, h3 { text-wrap: balance; margin: 0; }
  p { margin: 0; }

  .eyebrow {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }

  /* ---------- nav (verbatim from index.html) ---------- */
  .nav {
    position: sticky; top: 0; z-index: 50;
    background: color-mix(in srgb, var(--bg) 84%, transparent);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--hairline);
  }
  .nav-inner { display: flex; align-items: center; gap: 28px; height: 60px; }
  .brand { display: flex; align-items: center; gap: 10px; color: var(--text); font-family: var(--mono); font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .brand:hover { text-decoration: none; }
  .nav-links { display: flex; gap: 24px; margin-left: auto; align-items: center; }
  .nav-links a:not(.btn) { color: var(--muted); font-size: 14px; font-weight: 500; }
  .nav-links a:not(.btn):hover { color: var(--text); text-decoration: none; }
  .nav .btn { height: 34px; padding: 0 14px; font-size: 13px; }
  @media (max-width: 720px) { .nav-links a:not(.btn) { display: none; } }

  /* logo mark (verbatim) */
  .mark .eye-open { transform-origin: 46px 16px; animation: blink 5.6s infinite; }
  @keyframes blink {
    0%, 91%, 100% { transform: scaleY(1); }
    94%, 96% { transform: scaleY(0.1); }
  }

  /* ---------- buttons (verbatim) ---------- */
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 46px; padding: 0 22px; border-radius: 10px;
    font-family: var(--sans); font-size: 15px; font-weight: 600;
    border: 1px solid transparent; cursor: pointer; white-space: nowrap;
  }
  .btn:hover { text-decoration: none; }
  .btn-primary, .btn-primary:hover, .btn-primary:visited { color: var(--cta-text); }
  .btn-primary { background: var(--cta-bg); }
  .btn-primary:hover { background: var(--cta-hover); }
  .btn-ghost { border-color: var(--hairline); color: var(--text); background: transparent; }
  .btn-ghost:hover { border-color: var(--muted); }
  .btn-2l { height: 58px; flex-direction: column; gap: 2px; padding: 0 24px; }
  .btn-sub { font-family: var(--mono); font-size: 10.5px; font-weight: 500; letter-spacing: 0.05em; opacity: 0.8; }

  /* dictionary-entry eyebrow (verbatim) */
  .dict { font-family: var(--mono); font-size: 13px; color: var(--muted); }
  .dict .word { color: var(--text); font-weight: 700; }
  .dict .ipa { color: var(--accent-ink); }

  kbd {
    font-family: var(--mono); font-size: 0.86em;
    background: var(--surface-2); border: 1px solid var(--hairline);
    border-radius: 5px; padding: 1px 6px;
  }

  /* terminal block (verbatim) */
  .cli {
    background: var(--term-bg); color: var(--term-text);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 11px;
    font-family: var(--mono); font-size: 12.5px; line-height: 2.1;
    padding: 14px 17px;
    overflow-x: auto;
  }
  .cli .ps { color: #FFB454; }
  .cli .dim { opacity: 0.55; }

  /* chips (verbatim) */
  .chips { display: inline-flex; gap: 6px; flex-wrap: wrap; vertical-align: middle; }
  .chip { font-family: var(--mono); font-size: 11.5px; padding: 2px 9px; border-radius: 6px; border: 1px solid var(--hairline); color: var(--muted); }
  .chip.is-on { border-color: var(--accent); color: var(--accent-ink); background: var(--accent-soft); }

  /* list rows (verbatim) */
  .list { border-top: 1px solid var(--hairline); }
  .list-row {
    display: grid; grid-template-columns: 220px 1fr; gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid var(--hairline);
  }
  @media (max-width: 640px) { .list-row { grid-template-columns: 1fr; gap: 6px; } }
  .list-row .term { font-family: var(--mono); font-size: 14px; font-weight: 600; color: var(--accent-ink); }
  .list-row .desc { color: var(--muted); font-size: 15px; }
  .list-row .desc kbd { font-size: 0.82em; }

  /* dotted panel background (verbatim pattern) */
  .dotted-panel {
    background-color: var(--panel-inner);
    background-image: radial-gradient(var(--dot) 1px, transparent 1px);
    background-size: 18px 18px;
    border: 1px solid var(--hairline);
    border-radius: 16px;
  }

  /* ---------- footer (verbatim) ---------- */
  .footer { border-top: 1px solid var(--hairline); padding: 30px 0 44px; }
  .footer-inner { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
  .footer .brand { font-size: 15px; }
  .footer nav { display: flex; gap: 20px; margin-left: auto; }
  .footer a { color: var(--muted); font-size: 13.5px; }
  .footer .tagline { width: 100%; font-family: var(--mono); font-size: 12px; color: var(--muted); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .mark .eye-open { animation: none; }
  }

  /* =====================================================================
     Guide-specific CSS — same tokens, same idiom as index.html
     ===================================================================== */

  /* ---------- header block ---------- */
  .guide-hero { padding: 56px 0 28px; }
  .guide-hero-copy { display: flex; flex-direction: column; gap: 16px; max-width: 60ch; }
  .guide-hero h1 {
    font-family: var(--mono);
    font-size: clamp(36px, 6vw, 60px);
    font-weight: 700;
    letter-spacing: -0.045em;
    line-height: 1.04;
  }
  .guide-hero .sub { color: var(--muted); font-size: 17px; max-width: 56ch; }

  /* quick facts strip */
  .qf-row {
    display: flex; gap: 0;
    margin-top: 34px;
    padding: 4px 0;
  }
  .qf {
    flex: 1;
    display: flex; flex-direction: column; gap: 2px;
    padding: 14px 22px;
    border-left: 1px solid var(--hairline);
  }
  .qf:first-child { border-left: none; padding-left: 0; }
  .qf b { font-family: var(--mono); font-size: 26px; font-weight: 700; letter-spacing: -0.03em; color: var(--text); font-variant-numeric: tabular-nums; }
  .qf span { font-family: var(--mono); font-size: 11.5px; color: var(--muted); letter-spacing: 0.02em; line-height: 1.5; }
  @media (max-width: 640px) {
    .qf-row { flex-wrap: wrap; }
    .qf { flex: 1 1 45%; border-left: none; padding: 10px 0; }
  }

  /* ---------- two-column body ---------- */
  .guide-body { padding: 40px 0 0; }
  .guide-grid {
    display: grid;
    grid-template-columns: 176px minmax(0, 1fr);
    gap: 56px;
    align-items: start;
  }

  /* left rail TOC */
  .toc {
    position: sticky;
    top: 84px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    font-family: var(--mono);
    font-size: 12.5px;
    padding-bottom: 24px;
  }
  .toc a {
    color: var(--muted);
    padding: 7px 0 7px 13px;
    border-left: 2px solid transparent;
    letter-spacing: 0.01em;
  }
  .toc a:hover { color: var(--accent-ink); text-decoration: none; border-left-color: color-mix(in srgb, var(--accent) 45%, transparent); }
  .toc a.is-current { color: var(--accent-ink); border-left-color: var(--accent); font-weight: 600; }
  .toc a.toc-extra { margin-top: 8px; padding-top: 10px; border-top: 1px solid var(--hairline); color: var(--muted); }

  @media (max-width: 880px) {
    .guide-grid { grid-template-columns: 1fr; gap: 8px; }
    .toc {
      position: static;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4px 4px;
      padding: 0 0 20px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--hairline);
    }
    .toc a {
      padding: 4px 9px;
      border-left: none;
      border-radius: 99px;
      border: 1px solid transparent;
    }
    .toc a:hover { border-color: color-mix(in srgb, var(--accent) 45%, transparent); }
    .toc a.is-current { border-color: var(--accent); background: var(--accent-soft); }
    .toc a.toc-extra { margin-top: 0; padding-top: 4px; border-top: none; }
  }

  /* content column — min-width: 0 so .cli scrollers can't widen the grid track */
  .content { max-width: 70ch; min-width: 0; }

  .chapter { padding: 52px 0; border-top: 1px solid var(--hairline); }
  .chapter:first-of-type { padding-top: 0; border-top: none; }
  .chapter .eyebrow { display: block; margin-bottom: 16px; }
  .chapter h2 {
    font-family: var(--mono);
    font-size: clamp(21px, 2.6vw, 28px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin-bottom: 18px;
  }
  .chapter p { font-size: 16px; color: var(--text); margin-bottom: 15px; }
  .chapter p:last-child { margin-bottom: 0; }
  .chapter p.lead-chips { margin-bottom: 10px; color: var(--muted); }
  .chapter .chips { margin-bottom: 16px; }
  .chapter strong { font-weight: 600; }
  .chapter .cli { margin: 4px 0 16px; }

  /* closing "also, briefly" section */
  .closing { padding: 52px 0; border-top: 1px solid var(--hairline); }
  .closing .eyebrow { display: block; margin-bottom: 14px; }
  .closing h2 {
    font-family: var(--mono);
    font-size: clamp(21px, 2.6vw, 28px);
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 22px;
  }

  /* final cross-link */
  .guide-cta {
    padding: 52px 0 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .guide-cta h2 {
    font-family: var(--mono);
    font-size: clamp(24px, 3.2vw, 34px);
    font-weight: 700;
    letter-spacing: -0.035em;
  }
  .guide-cta .sub { color: var(--muted); font-size: 15px; }

  /* ---------- media figures ---------- */
  .fig { margin: 22px 0 6px; }
  .fig video, .fig img {
    display: block; width: 100%; height: auto;
    border: 1px solid var(--hairline);
    border-radius: 12px;
    background: var(--panel-inner);
  }
  .fig figcaption {
    font-family: var(--mono); font-size: 11.5px; color: var(--muted);
    letter-spacing: 0.03em; margin-top: 8px;
  }
  .fig .only-dark { display: none; }
  @media (prefers-color-scheme: dark) {
    .fig .only-light { display: none; }
    .fig .only-dark { display: block; }
  }
  :root[data-theme="light"] .fig .only-light { display: block; }
  :root[data-theme="light"] .fig .only-dark { display: none; }
  :root[data-theme="dark"] .fig .only-light { display: none; }
  :root[data-theme="dark"] .fig .only-dark { display: block; }
</style>

<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="/" aria-label="Wink 首页">
      <svg class="mark" width="34" height="17" viewBox="0 0 64 32" fill="none" aria-hidden="true">
        <mask id="wm1"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
        <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm1)"/>
        <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
      </svg>
      Wink
    </a>
    <nav class="nav-links" aria-label="主导航">
      <a href="/">首页</a>
      <a href="/guide" lang="en">English</a>
      <a href="https://github.com/xrf9268-hue/Wink" rel="noopener">GitHub</a>
      <a class="btn btn-primary" href="https://github.com/xrf9268-hue/Wink/releases/latest" rel="noopener">下载</a>
    </nav>
  </div>
</header>

<main id="top">

  <!-- ================= header ================= -->
  <section class="guide-hero">
    <div class="wrap">
      <div class="guide-hero-copy">
        <h1>使用手册</h1>
        <p class="sub">本手册介绍安装、权限、前台行为、Hyper 层和 <kbd>wink://</kbd> 协议，大致按使用顺序排列。</p>
      </div>
      <div class="qf-row">
        <div class="qf"><b>11</b><span>个章节</span></div>
        <div class="qf"><b>2</b><span>项权限，其中一项按需申请</span></div>
        <div class="qf"><b>0</b><span>张缩略图，因此不需要屏幕录制权限</span></div>
      </div>
    </div>
  </section>

  <!-- ================= two-column body ================= -->
  <section class="guide-body">
    <div class="wrap guide-grid">

      <nav class="toc" aria-label="章节">
        <a href="#install">00 · 安装</a>
        <a href="#permissions">01 · 权限</a>
        <a href="#first-chord">02 · 第一个快捷键</a>
        <a href="#frontmost">03 · 前台行为</a>
        <a href="#hyper">04 · Hyper 层</a>
        <a href="#windows">05 · 窗口</a>
        <a href="#search">06 · 搜索</a>
        <a href="#insights">07 · 洞察</a>
        <a href="#quiet">08 · 暂停</a>
        <a href="#sharing">09 · 分享</a>
        <a href="#troubleshooting">10 · 故障排查</a>
        <a href="#extras" class="toc-extra">其他设置</a>
      </nav>

      <div class="content">

        <!-- 00 -->
        <article class="chapter" id="install">
          <p class="eyebrow">00 · 安装</p>
          <h2>安装</h2>
          <p>从 <a href="https://github.com/xrf9268-hue/Wink/releases/latest" rel="noopener">GitHub Releases</a> 下载 DMG，把 Wink 拖进"应用程序"文件夹。当前版本 v0.7.5 使用临时签名，<strong>尚未通过 Apple 公证</strong>。若 macOS 阻止打开且你信任下载来源，先尝试启动一次，再进入<strong>系统设置 → 隐私与安全性 → 仍要打开</strong>，确认打开。若提示已损坏或包含恶意软件，请停止安装并核验来源。</p>
          <p>全新安装且尚未配置任何快捷键时，Wink 启动后会自动打开设置窗口。</p>
          <p>Wink 需要 macOS 15（Sequoia）或更高版本。</p>
        </article>

        <!-- 01 -->
        <article class="chapter" id="permissions">
          <p class="eyebrow">01 · 权限</p>
          <h2>权限</h2>
          <p class="lead-chips">Wink 最多需要两项权限：</p>
          <p class="chips">
            <span class="chip is-on">辅助功能 · 必需</span>
            <span class="chip">输入监控 · 视情况而定</span>
            <span class="chip">屏幕录制 · 从不</span>
          </p>
          <p><strong>辅助功能（Accessibility）</strong>是必需的。你录制的所有快捷键，不论是标准组合键还是 Hyper 组合，都通过这套 API 生效。可以在<strong>系统设置 → 隐私与安全性 → 辅助功能</strong>中授权，也可以按<strong>设置 → 快捷键</strong>顶部提示条的步骤操作，完成后提示条会消失。</p>
          <p><strong>输入监控（Input Monitoring）</strong>只在需要时申请：开启 Hyper 键，或把快捷键绑到 Fn 键行时，Wink 才会请求这项权限。两者都不用，就不会请求。<strong>设置 → 通用</strong>里的权限卡片会根据当前配置，把每项权限标为已授权、待授权或可选。</p>
          <p><strong>屏幕录制（Screen Recording）</strong>不需要。窗口选择器和窗口轮换通过辅助功能 API 读取窗口标题和图标，Wink 不会截取屏幕内容。</p>
        </article>

        <!-- 02 -->
        <article class="chapter" id="first-chord">
          <p class="eyebrow">02 · 第一个快捷键</p>
          <h2>添加第一个快捷键</h2>
          <p>打开<strong>设置 → 快捷键</strong>。<strong>新建快捷键</strong>卡片需要填两项：目标应用和组合键。目标应用可以按名称搜索，可以从<strong>最近使用</strong>或<strong>所有应用</strong>中选择，不在常见目录里的应用用<strong>浏览...</strong>查找。然后点击快捷键输入框，按下组合键。组合键至少要包含一个修饰键（⌘⌥⌃⇧）；绑在 Hyper 层上则没有这个限制（见第 04 章）。</p>
          <figure class="fig">
            <img class="only-light" src="/media/settings-shortcuts-zh-light.png" width="860" height="816" alt="设置 → 快捷键：三个 Hyper 快捷键与新建快捷键卡片" loading="lazy">
            <img class="only-dark" src="/media/settings-shortcuts-zh-dark.png" width="860" height="816" alt="设置 → 快捷键：三个 Hyper 快捷键与新建快捷键卡片" loading="lazy">
            <figcaption>设置 → 快捷键：已添加三个快捷键，下方是新建快捷键卡片。</figcaption>
          </figure>
          <p>点击<strong>添加快捷键</strong>后，快捷键立即在所有应用中生效。按一次，Wink 会把目标应用带到前台；应用未运行时会先启动它。再按一次的效果取决于前台行为设置（见第 03 章）。</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-first-chord-v2.mp4" width="1600" height="1000" aria-label="按下 Hyper+S 唤出 Safari，再按一次收起"></video>
            <figcaption>⇪S 连按三次：唤出、收起、再唤出。录制自正式版本。</figcaption>
          </figure>
          <p>应用列表顶部有一项<strong>当前应用</strong>。绑定到它的快捷键会作用于当前在前台的应用，不必为每个应用分别绑定。</p>
        </article>

        <!-- 03 -->
        <article class="chapter" id="frontmost">
          <p class="eyebrow">03 · 前台行为</p>
          <h2>再按一次的效果</h2>
          <p class="lead-chips">目标应用已在前台时按下它的快捷键，Wink 有四种处理方式：</p>
          <p class="chips">
            <span class="chip">隐藏</span>
            <span class="chip is-on">切换</span>
            <span class="chip">聚焦</span>
            <span class="chip">轮换</span>
          </p>
          <p><strong>隐藏</strong>：只要应用在前台就隐藏它，即使它不是由 Wink 带到前台的。</p>
          <p><strong>切换</strong>：默认行为。应用完成激活后才会被隐藏，所以快速连按两下时，不会把还在打开的窗口隐藏掉。</p>
          <p><strong>聚焦</strong>：从不隐藏。取消该应用所有窗口的隐藏和最小化，并让它保持在前台。</p>
          <p><strong>轮换</strong>：不隐藏，而是切换到该应用的下一个窗口。只有一个窗口的应用另有处理，见第 05 章。</p>
          <p>在<strong>设置 → 通用</strong>的<strong>「当目标已在前台时」</strong>下设置默认行为，也可以从某一行的 ⋯ 菜单里单独覆盖某个快捷键。</p>
          <figure class="fig">
            <img class="only-light" src="/media/settings-general-zh-light.png" width="860" height="816" alt="设置 → 通用：包含「当目标已在前台时」分段控件" loading="lazy">
            <img class="only-dark" src="/media/settings-general-zh-dark.png" width="860" height="816" alt="设置 → 通用：包含「当目标已在前台时」分段控件" loading="lazy">
            <figcaption>设置 → 通用：默认行为在「当目标已在前台时」中设置。</figcaption>
          </figure>
        </article>

        <!-- 04 -->
        <article class="chapter" id="hyper">
          <p class="eyebrow">04 · Hyper 层</p>
          <h2>把 Caps Lock 用作 Hyper 键</h2>
          <p>在<strong>设置 → 通用</strong>里打开<strong>Hyper 键（Hyper Key）</strong>后，Caps Lock 会成为一个额外的修饰键。按住它等于同时按住 <kbd>⌃⌥⇧⌘</kbd>，所以一个字母就能组成快捷键：按住 Caps Lock，再按字母。</p>
          <p>Hyper 键开启期间，这个键不再具有 Caps Lock 功能。单独按一下不会有任何效果：不触发快捷键，不切换大写，指示灯也不亮。关闭 Hyper 键即可恢复 Caps Lock。如果 Caps Lock 比字母键稍早松开，只要间隔在大约 80 毫秒以内，Wink 仍会识别为同一个快捷键。</p>
          <p>想查看已绑定的快捷键，可以单独按住 Caps Lock 半秒多。浮层会列出所有已启用的快捷键（包括非 Hyper 的），松手后关闭。此功能需要开启 Hyper 键，并且至少有一个已启用的 Hyper 快捷键。设置中开关下方有相应说明。</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-cheatsheet-v2.mp4" width="1600" height="1000" aria-label="按住 Caps Lock 后出现列出所有快捷键的速查表浮层"></video>
            <figcaption>按住 ⇪ 的时间比按快捷键稍长，浮层就会出现。</figcaption>
          </figure>
        </article>

        <!-- 05 -->
        <article class="chapter" id="windows">
          <p class="eyebrow">05 · 窗口</p>
          <h2>轮换应用的窗口</h2>
          <p>把某个快捷键的前台行为设为<strong>轮换</strong>（第 03 章），然后在该应用位于前台时再次按快捷键。每按一次切换到下一个窗口，最小化的窗口也包括在内。HUD 会在该窗口所在的显示器上显示当前位置和窗口标题（<kbd>2/5</kbd> · 窗口标题）。</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-cycle-v2.mp4" width="1600" height="1000" aria-label="重复按 Hyper+T 依次切换 Terminal 窗口，HUD 显示位置"></video>
            <figcaption>连续按 ⇪T。HUD 显示当前位置，最小化的窗口也会轮到。</figcaption>
          </figure>
          <p>如果应用只有一个窗口或没有窗口，就无法轮换。这时，绑定具体应用的快捷键会按切换处理，隐藏该应用；绑定到当前应用的快捷键则不做任何操作，以免把你正在使用的应用隐藏。</p>
          <p>如果想从列表中选择窗口，可以在快捷键所在行的 ⋯ 菜单中选择<strong>长按动作 → 窗口选择器</strong>，之后长按快捷键即可。屏幕上会列出该应用的窗口，最小化的窗口带有标记。用 ↑↓ 选择，按 ⏎ 切换。列表只显示图标和标题，不显示缩略图，因此 Wink 不需要屏幕录制权限。</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-picker-v2.mp4" width="1600" height="1000" aria-label="长按 Hyper+S 打开窗口列表，方向键选择，回车聚焦"></video>
            <figcaption>长按 ⇪S，再用 ↑↓ 和 ⏎。列表显示标题和图标。</figcaption>
          </figure>
        </article>

        <!-- 06 -->
        <article class="chapter" id="search">
          <p class="eyebrow">06 · 搜索切换</p>
          <h2>搜索并切换应用</h2>
          <p>在<strong>设置 → 通用 → 搜索面板</strong>中为面板设置快捷键，录制方式与其他快捷键相同。按下后输入应用名称的前几个字母（也可以匹配本地化名称），再按 <kbd>⏎</kbd>。Wink 会切换到该应用；应用未运行时会先启动它。</p>
          <figure class="fig">
            <video autoplay muted loop playsinline src="/media/guide-palette-v2.mp4" width="1600" height="1000" aria-label="搜索面板打开，输入 safa，回车切换到 Safari"></video>
            <figcaption>⇪Space，输入“safa”，按 ⏎。已隐藏的 Safari 回到前台。</figcaption>
          </figure>
          <p>还没输入内容时，列表把最近切换过的应用排在前面，刚离开的应用通常就在第一位。后台代理和辅助进程不会出现在列表中。</p>
        </article>

        <!-- 07 -->
        <article class="chapter" id="insights">
          <p class="eyebrow">07 · 洞察</p>
          <h2>洞察</h2>
          <p><strong>设置 → 洞察</strong>会汇总你的触发次数、估算节省的时间（每次切换按三秒累计）、当前连续活跃的天数，以及一张按小时显示使用情况的热力图。用顶部的控件在<strong>今天</strong>、<strong>7 天</strong>、<strong>30 天</strong>之间切换。</p>
          <figure class="fig">
            <img class="only-light" src="/media/settings-insights-zh-light.png" width="860" height="816" alt="设置 → 洞察：触发次数、节省时间、连续天数、每小时热力图与使用最多列表" loading="lazy">
            <img class="only-dark" src="/media/settings-insights-zh-dark.png" width="860" height="816" alt="设置 → 洞察：触发次数、节省时间、连续天数、每小时热力图与使用最多列表" loading="lazy">
            <figcaption>洞察：触发次数、节省的时间、连续天数和每小时热力图。</figcaption>
          </figure>
          <p>这些数据保存在本地的 SQLite 文件中，不会上传。详见隐私页面。</p>
          <p>在设置 → 通用里打开<strong>「根据应用使用情况推荐快捷键」</strong>，Wink 会在本地统计各应用被切换到前台的次数。经常使用但还没有快捷键的应用会出现在<strong>建议的快捷键</strong>卡片中，显示该时段内的次数，并提示你到"快捷键"中添加。Wink 不会自动绑定。关闭这个开关后，Wink 会停止统计，并删除已收集的数据。</p>
        </article>

        <!-- 08 -->
        <article class="chapter" id="quiet">
          <p class="eyebrow">08 · 暂停</p>
          <h2>安全输入与暂停</h2>
          <p class="lead-chips">菜单栏的状态徽标显示 Wink 当前的状态：</p>
          <p class="chips">
            <span class="chip is-on">就绪</span>
            <span class="chip">受限 · 安全输入</span>
            <span class="chip">已暂停</span>
            <span class="chip">已暂停 · &lt;应用&gt;</span>
          </p>
          <p>密码框或安全提示框开启 macOS 安全输入（Secure Input）时，状态徽标会变为<strong>受限 · 安全输入</strong>。Hyper 层和 Fn 键行快捷键依赖的事件通道会被安全输入拦截，因此在安全输入结束前暂时失效；普通修饰键快捷键不受影响。安全输入结束后自动恢复。</p>
          <p>在设置 → 通用的<strong>「在例外应用中暂停」</strong>中添加应用（例如虚拟机或远程桌面客户端）后，只要该应用在前台，Wink 就会暂停，状态徽标显示应用名称（<strong>已暂停 · Parallels Desktop</strong>）。在此期间 Caps Lock 恢复原本的功能。</p>
          <p>要暂停全部快捷键，使用菜单栏中的<strong>「暂停所有快捷键」</strong>。</p>
        </article>

        <!-- 09 -->
        <article class="chapter" id="sharing">
          <p class="eyebrow">09 · 分享与脚本</p>
          <h2>导出、导入与脚本</h2>
          <p>所有快捷键可以保存为一个文件。<strong>设置 → 快捷键</strong>里的<strong>导出…</strong>会写出一个 <kbd>.winkrecipe</kbd>；<strong>导入…</strong>再把它读回来。导入前会先显示预览，列出哪些<strong>就绪</strong>、哪些<strong>冲突</strong>、哪些<strong>未解析</strong>，再由你选择<strong>跳过冲突项</strong>或<strong>替换现有项</strong>。</p>
          <p>Apple 的「快捷指令」App 还会发现四个本地化 Wink 操作：<strong>暂停 Wink</strong>、<strong>恢复 Wink</strong>、<strong>显示 Wink 搜索面板</strong>和<strong>打开 Wink 设置</strong>。设置操作可以直接跳到快捷键、通用或洞察；暂停与恢复只改变你的手动暂停，不会覆盖仍在让捕获保持暂停的例外应用。</p>
          <p>脚本和其他应用可以通过 <kbd>wink://</kbd> 协议控制 Wink：</p>
          <div class="cli">
            <div><span class="ps">$</span> open -g "wink://toggle?bundle=com.google.Chrome"</div>
            <div><span class="ps">$</span> open -g "wink://focus?bundle=com.google.Chrome"</div>
            <div><span class="ps">$</span> open -g "wink://search"</div>
            <div><span class="ps">$</span> open -g "wink://open-settings?tab=insights"</div>
            <div class="dim">wink://pause · wink://resume · wink://open-settings</div>
          </div>
          <p><kbd>focus</kbd> 是幂等的：它会把已安装的 App 带到前台，但目标已经在前台时绝不会隐藏它，也不会轮换它的窗口。设置页只接受 <kbd>shortcuts</kbd>、<kbd>general</kbd> 和 <kbd>insights</kbd> 三个 tab 值。</p>
          <p>始终用 <kbd>open -g</kbd> 调用它。单纯的 <kbd>open</kbd> 会先激活 Wink 来投递这个 URL，这样目标应用会被判定为“不在前台”，每次切换都会变成单纯的激活。加上 <kbd>-g</kbd>，Wink 保持在后台，切换才能读到真实的前台状态。Toggle 请求遵守和真实按键一样的按应用冷却时间，但 URL 触发的应用操作从不计入洞察。</p>
          <p>自定义 URL 协议无法认证调用方。Wink 只接受上面列出的命令和参数，会根据已安装 App 校验 bundle identifier，并忽略格式错误或未知的输入。协议不提供 <kbd>callback</kbd>、<kbd>x-success</kbd> 或其他完成回调：URL 投递成功不代表 macOS 已经完成异步激活请求。</p>
        </article>


        <!-- 10 -->
        <article class="chapter" id="troubleshooting">
          <p class="eyebrow">10 · 故障排查</p>
          <h2>快捷键没有反应</h2>
          <p>快捷键没有反应，可能有三种原因，处理方法各不相同：捕获被有意<strong>暂停</strong>；macOS 收回了<strong>权限</strong>；或者该快捷键使用的<strong>通道</strong>没有就绪。状态徽标只显示第一种情况（<strong>已暂停</strong>、<strong>受限 · 安全输入</strong>），不检查权限和 Carbon 注册，所以显示<strong>就绪</strong>并不能排除后两种。状态徽标显示就绪、快捷键仍然没反应时，先看<em>哪些</em>快捷键失灵了。</p>
          <div class="list">
            <div class="list-row">
              <span class="term">状态徽标显示已暂停</span>
              <span class="desc">这不是故障。捕获被有意关闭，暂停期间所有快捷键都不响应。原因可能是你在菜单栏手动暂停了 Wink，也可能是前台应用在<strong>「在例外应用中暂停」</strong>列表中（虚拟机和远程桌面默认在列表里），此时状态徽标会显示应用名称：<strong>已暂停 · Parallels Desktop</strong>。从菜单栏恢复，或把该应用移出列表即可。显示已暂停时，检查权限或通道都没有用。</span>
            </div>
            <div class="list-row">
              <span class="term">只有一部分失灵</span>
              <span class="desc">失灵的快捷键使用同一条通道。普通修饰键组合（<kbd>⌃⌥K</kbd>）使用 Carbon 热键；Hyper 组合键使用事件监听；Fn 行绑定两者都用：按键由 Carbon 送达，另有一个需要<strong>输入监控</strong>权限的观察器确认物理 Fn 键，任一部分停止工作都会失灵。因此：状态徽标显示<strong>受限 · 安全输入</strong>时，是某个应用占用了安全输入，事件监听和 Fn 观察器都收不到按键，结束后会自动恢复。Hyper <em>和</em> Fn 行一起失灵时，到「系统设置 → 隐私与安全性」检查<strong>输入监控</strong>，两者都依赖这项权限。<em>只有</em> Fn 行失灵而 Hyper 正常时，原因可能是 Carbon 注册失败，也可能是 Fn 观察器没有启动（Hyper 使用另一个事件监听，所以不受影响）。诊断导出会列出每个失败的绑定及原因，观察器不可用时也会注明。</span>
            </div>
            <div class="list-row">
              <span class="term">全部失灵</span>
              <span class="desc">要看你的快捷键使用哪条通道，而不是失灵了几个。如果所有绑定都在 Hyper 层或 Fn 行，<strong>输入监控</strong>权限被撤销就会让它们全部失灵，请先检查这项（路径同上）。普通修饰键组合通过 Carbon 生效，依赖<strong>辅助功能</strong>权限：到「系统设置 → 隐私与安全性」检查，如果 Wink 已列出且开关已打开，把它<strong>关掉再打开</strong>，因为失效的授权看起来和有效的完全一样。诊断导出会列出每条通道是否就绪。</span>
            </div>
            <div class="list-row">
              <span class="term">更新之后</span>
              <span class="desc">macOS 把权限绑定在 App 的<strong>签名</strong>上，而不是名称或路径。签名方式和你当初授权时不同的构建，在 TCC 眼里就是另一个 App，两个权限都要重新授予。公证不影响这一点：公证决定 Gatekeeper 是否允许 App 打开，TCC 决定 App 打开后能做什么，两者相互独立。诊断导出里会写明签名方式，方便你判断自己在跑哪种构建。</span>
            </div>
            <div class="list-row">
              <span class="term">只在某个 App 里失灵</span>
              <span class="desc">该应用很可能占用了安全输入，例如密码框、锁屏或远程桌面会话。状态徽标会显示<strong>受限 · 安全输入</strong>，结束后自动恢复。如果是你长时间使用的虚拟机或远程桌面，可以把它加入<strong>「在例外应用中暂停」</strong>。</span>
            </div>
            <div class="list-row">
              <span class="term">App 被移动或删除了</span>
              <span class="desc">Wink 绑定的是 Bundle ID 而不是路径，所以移动 App 没问题。如果删除了应用，对应的行会保留，并标记为「应用不可用」。</span>
            </div>
          </div>
          <p class="lead-chips">如果以上都不能解释问题，可以导出诊断信息：</p>
          <p><strong>设置 → 通用 → 诊断信息</strong>里有<strong>显示日志</strong>和<strong>导出…</strong>。导出会在写入<em>之前</em>把每个文件和其中的全部内容展示给你，除非你自己发出去，否则不会离开这台 Mac。</p>
          <p>你的用户名、个人文件夹路径、密码、令牌，以及网址中的查询参数都会被移除。应用名称和 Bundle ID 会<em>保留</em>，因为没有它们报告就没有参考价值；它们也会显示你为哪些应用设置了快捷键。分享前先看一眼预览。</p>
          <p>提交问题时，有用的报告很短：Wink 版本、macOS 版本、你按了什么、期待发生什么、属于哪一类快捷键，再附上导出。</p>
        </article>

        <!-- closing -->
        <section class="closing" id="extras">
          <p class="eyebrow">其他设置</p>
          <h2>更新、登录启动与语言</h2>
          <div class="list">
            <div class="list-row">
              <span class="term">更新</span>
              <span class="desc">应用内置的 Sparkle 面板负责检查、下载和安装，全程不用离开 Wink。<strong>检查更新…</strong>在菜单栏里；<strong>自动更新</strong>在设置 → 通用里，控制后台检查和下载的开关。</span>
            </div>
            <div class="list-row">
              <span class="term">启动与菜单栏</span>
              <span class="desc"><strong>登录时启动</strong>和<strong>显示菜单栏图标</strong>都是设置 → 通用里的开关。</span>
            </div>
            <div class="list-row">
              <span class="term">语言</span>
              <span class="desc">支持英文和简体中文，在系统设置 → 通用 → 语言与地区中设置。</span>
            </div>
            <div class="list-row">
              <span class="term">帮助</span>
              <span class="desc">Wink 是开源软件。源代码、问题反馈和开发记录都在 GitHub 上。</span>
            </div>
          </div>
        </section>

        <!-- final cross-link -->
        <div class="guide-cta">
          <p class="eyebrow">获取 Wink</p>
          <h2>下载 Wink</h2>
          <p class="sub">免费、开源，支持 macOS 15 或更高版本。</p>
          <a class="btn btn-primary btn-2l" href="/#download"><span>下载 macOS 版</span><span class="btn-sub">免费 · 开源 · 直接下载 DMG</span></a>
        </div>

      </div>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="wrap footer-inner">
    <a class="brand" href="/">
      <svg class="mark" width="30" height="15" viewBox="0 0 64 32" fill="none" aria-hidden="true">
        <mask id="wm4"><rect width="64" height="32" fill="#fff"/><circle cx="13" cy="9" r="11" fill="#000"/></mask>
        <circle cx="14" cy="16" r="11" fill="currentColor" mask="url(#wm4)"/>
        <circle class="eye-open" cx="46" cy="16" r="9" fill="currentColor"/>
      </svg>
      Wink
    </a>
    <nav aria-label="页脚">
      <a href="https://github.com/xrf9268-hue/Wink" rel="noopener">GitHub</a>
      <a href="https://github.com/xrf9268-hue/Wink/blob/main/CHANGELOG.md" rel="noopener">更新日志</a>
      <a href="https://github.com/xrf9268-hue/Wink/blob/main/docs/privacy.md" rel="noopener">隐私</a>
    </nav>
    <p class="tagline">为习惯用键盘操作的人设计</p>
  </div>
</footer>

<script>
  (function () {
    "use strict";
    var links = Array.prototype.slice.call(document.querySelectorAll(".toc a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });

    var sections = Object.keys(map)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    var current = links[0];
    current.classList.add("is-current");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var next = map[entry.target.id];
        if (!next || next === current) return;
        if (current) current.classList.remove("is-current");
        current = next;
        current.classList.add("is-current");
      });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("video[autoplay]").forEach(function (v) {
        v.removeAttribute("autoplay");
        v.pause();
        v.setAttribute("controls", "");
      });
    }
  })();
</script>
</body>
</html>
`;

type Env = { MEDIA: R2Bucket };

const HTML_HEADERS = {
  "content-type": "text/html;charset=UTF-8",
  "cache-control": "public, max-age=3600",
};

// Guide media (demo videos, settings screenshots) lives in the release bucket
// under wink/guide/. Single-range support is required: Safari probes with
// `Range: bytes=0-1` and refuses <video> playback if the server ignores it.
async function serveMedia(request: Request, env: Env, pathname: string): Promise<Response> {
  const name = pathname.slice("/media/".length);
  if (!/^[a-z0-9-]+\.(mp4|png)$/.test(name)) {
    return new Response("not found", { status: 404 });
  }
  const key = `wink/guide/${name}`;
  const headers: Record<string, string> = {
    "content-type": name.endsWith(".mp4") ? "video/mp4" : "image/png",
    "cache-control": "public, max-age=86400",
    "accept-ranges": "bytes",
  };

  const match = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("range") ?? "");
  if (match && (match[1] !== "" || match[2] !== "")) {
    const head = await env.MEDIA.head(key);
    if (!head) return new Response("not found", { status: 404 });
    const size = head.size;
    let start: number;
    let end: number;
    if (match[1] === "") {
      const suffix = Number(match[2]);
      if (suffix === 0) {
        return new Response(null, { status: 416, headers: { "content-range": `bytes */${size}` } });
      }
      start = Math.max(0, size - suffix);
      end = size - 1;
    } else {
      start = Number(match[1]);
      end = match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
    }
    if (start > end || start >= size) {
      return new Response(null, { status: 416, headers: { "content-range": `bytes */${size}` } });
    }
    const object = await env.MEDIA.get(key, { range: { offset: start, length: end - start + 1 } });
    if (!object) return new Response("not found", { status: 404 });
    return new Response(object.body, {
      status: 206,
      headers: {
        ...headers,
        "content-range": `bytes ${start}-${end}/${size}`,
        "content-length": String(end - start + 1),
      },
    });
  }

  const object = await env.MEDIA.get(key);
  if (!object) return new Response("not found", { status: 404 });
  return new Response(object.body, {
    headers: { ...headers, "content-length": String(object.size) },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname.startsWith("/media/")) {
      return serveMedia(request, env, pathname);
    }
    if (pathname === "/guide/zh" || pathname === "/guide/zh/") {
      return new Response(guideZhHtml, { headers: HTML_HEADERS });
    }
    if (pathname === "/guide" || pathname === "/guide/") {
      return new Response(guideHtml, { headers: HTML_HEADERS });
    }
    return new Response(landingHtml, { headers: HTML_HEADERS });
  },
};
