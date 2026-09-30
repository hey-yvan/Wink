#!/usr/bin/env python3
"""Write the three staged Terminal windows' contents (ANSI text) into WORK.

stage.sh `cat`s each file into its window so no clip opens on an empty
prompt, which was the main reason the first recordings read as unfinished.
Everything here is invented demo output: no real hosts, users or paths.
"""
import sys
from pathlib import Path

out = Path(sys.argv[1])
out.mkdir(parents=True, exist_ok=True)

A = "\033[38;5;215m"  # amber prompt
G = "\033[32m"
D = "\033[2m"
B = "\033[1m"
R = "\033[0m"
P = f"{A}~/src/api{R} {D}main{R} ❯ "

scenes = {
    "api": f"""{P}npm run dev

{D}> api@2.4.0 dev
> node --watch src/server.js{R}

{G}✓{R} config loaded {D}(.env.local){R}
{G}✓{R} connected to postgres {D}localhost:5432/api_dev{R}
{B}listening on{R} {G}http://localhost:3000{R}

{D}09:40:02{R}  GET   /health             {G}200{R}   3 ms
{D}09:40:05{R}  POST  /v1/sessions        {G}201{R}  41 ms
{D}09:40:05{R}  GET   /v1/me              {G}200{R}   9 ms
{D}09:40:11{R}  GET   /v1/projects?page=2 {G}200{R}  17 ms
{D}09:40:18{R}  PATCH /v1/projects/42     {G}200{R}  23 ms
""",
    "build": f"""{A}~/src/app{R} {D}main{R} ❯ swift build --watch

{D}Building for debugging...{R}
[214/214] Compiling App ShortcutStore.swift
{G}Build complete!{R} {D}(2.14s){R}

{D}watching Sources/ for changes…{R}
{D}09:40:12{R}  changed  Sources/App/HotKeyCenter.swift
[3/3] Compiling App HotKeyCenter.swift
{G}Build complete!{R} {D}(0.61s){R}
{D}09:41:03{R}  changed  Sources/App/Settings/GeneralView.swift
[2/2] Compiling App GeneralView.swift
{G}Build complete!{R} {D}(0.48s){R}
""",
    "deploy": f"""{A}~/src/site{R} {D}main{R} ❯ ssh deploy@staging

{D}Last login: Mon Sep 29 09:38:11 2026{R}
deploy@staging:~$ ./release.sh 2.4.0
{G}✓{R} pulled   {D}a41c9e2{R}
{G}✓{R} tests    {D}312 passed{R}
{G}✓{R} built    {D}dist/ 1.8 MB{R}
{G}✓{R} swapped  {D}blue → green{R}
{B}released 2.4.0{R} {D}in 48s{R}
deploy@staging:~$ """,
}
for name, text in scenes.items():
    (out / f"term-{name}.txt").write_text(text)
print(f"wrote {len(scenes)} terminal scenes to {out}")
