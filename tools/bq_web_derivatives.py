#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
✒ Metadata
    - Title: BQ Web Derivatives (BEASTIQUE Edition - v1.0)
    - File Name: bq_web_derivatives.py
    - Relative Path: tools/bq_web_derivatives.py
    - Artifact Type: CLI
    - Version: 1.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Generates every web-served derivative from the print masters, enforcing
    the house rule: masters are sacred, the site serves WebP derivatives only
    (thumbs/ at 400px for grids and the wall, web/ at 900-1920px for heroes,
    carousels, banners, and Ledger cards). Idempotent — existing derivatives
    are skipped unless --force, so it is safe to re-run after adding new
    masters anywhere in the tree.

✒ Key Features:
    - One command regenerates the full derivative tree (or one --group)
    - Groups: category (thumbs for all five category dirs), featured
      (400px thumb + 1600px web), landing (1800px hero), banners (1920px),
      ledger (900px from the studio mini-series heroes), logos (128px nav mark)
    - Idempotent by default; --force rebuilds; --dry-run reports without writing
    - Skips masters OneDrive has not hydrated rather than crashing mid-run
    - Prints per-file results and a per-group rollup

✒ Usage Instructions:
    Run from anywhere — paths are anchored to the project root (the parent of
    tools/). Requires Pillow (declared inline for uv).

        $ uv run tools/bq_web_derivatives.py                 # everything, skip existing
        $ uv run tools/bq_web_derivatives.py --group featured
        $ uv run tools/bq_web_derivatives.py --force         # rebuild all
        $ uv run tools/bq_web_derivatives.py --dry-run       # report only

✒ Examples:
    $ uv run tools/bq_web_derivatives.py
    $ uv run tools/bq_web_derivatives.py --group category --dry-run
    $ uv run tools/bq_web_derivatives.py --group landing --force
    $ uv run tools/bq_web_derivatives.py --group ledger

✒ Command-Line Arguments:
    Input:
        --group NAME     category | featured | landing | banners | ledger |
                         logos | all (default all)
    Processing:
        --force          Regenerate even if the derivative already exists
    Safety / Output:
        --dry-run        List what would be written; write nothing

✒ Other Important Information:
    - Dependencies: Pillow>=10 (declared inline via PEP 723).
    - Compatible platforms: All (Python 3.11+).
    - Output policy mirrors docs/EXPERIENCE-MAP.md: thumbs/ 400px q82,
      web/ per-group widths q80-82, logos 128px q90. Nothing the landing
      page references should exceed ~600 KB.
    - Masters are never modified or moved; this tool only writes derivatives.
---------
"""

# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "Pillow>=10",
# ]
# ///

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image

# Same fix the forge carries: box-drawing headers crash a cp1252 console
for _stream in (sys.stdout, sys.stderr):
    if hasattr(_stream, "reconfigure"):
        _stream.reconfigure(encoding="utf-8", errors="replace")

Image.MAX_IMAGE_PIXELS = None  # print masters exceed PIL's default safety cap

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "site" / "assets" / "images"
LOGOS = ROOT / "site" / "assets" / "logos"
MINISERIES = ROOT / "studio" / "source-art" / "mini-series"

CATEGORIES = ["aquatic", "avian", "insecta", "mammalian", "reptilian"]
MASTER_EXTS = {".png", ".webp", ".jpg", ".jpeg"}


def convert(src: Path, dst: Path, width: int, quality: int,
            force: bool, dry: bool) -> str:
    """Write a WebP derivative of src at the given max width. Returns status."""
    if dst.exists() and not force:
        return "skip"
    if dry:
        return "would-write"
    try:
        img = Image.open(src)
        img.load()
    except OSError:
        return "unreadable (cloud-only placeholder?)"
    if img.width > width:
        h = round(img.height * width / img.width)
        img = img.resize((width, h), Image.LANCZOS)
    dst.parent.mkdir(parents=True, exist_ok=True)
    has_alpha = img.mode in ("RGBA", "LA") or (
        img.mode == "P" and "transparency" in img.info)
    img = img.convert("RGBA" if has_alpha else "RGB")
    img.save(dst, "WEBP", quality=quality, method=6)
    return f"{dst.stat().st_size // 1024}KB"


def masters_in(folder: Path):
    if not folder.is_dir():
        return []
    return sorted(p for p in folder.iterdir()
                  if p.suffix.lower() in MASTER_EXTS and p.is_file())


def run_group(group: str, force: bool, dry: bool) -> tuple[int, int]:
    """Returns (written, skipped)."""
    written = skipped = 0

    def do(src: Path, dst: Path, width: int, quality: int = 82):
        nonlocal written, skipped
        result = convert(src, dst, width, quality, force, dry)
        if result == "skip":
            skipped += 1
        else:
            written += 1
            print(f"  {dst.relative_to(ROOT)} <- {result}")

    if group == "category":
        for cat in CATEGORIES:
            for src in masters_in(IMG / cat):
                do(src, IMG / "thumbs" / cat / (src.stem + ".webp"), 400)

    elif group == "featured":
        for src in masters_in(IMG / "featured"):
            do(src, IMG / "thumbs" / "featured" / (src.stem + ".webp"), 400)
            do(src, IMG / "web" / "featured" / (src.stem + ".webp"), 1600, 80)

    elif group == "landing":
        for src in masters_in(IMG / "landing"):
            do(src, IMG / "web" / "landing" / (src.stem + ".webp"), 1800, 80)
            do(src, IMG / "thumbs" / "landing" / (src.stem + ".webp"), 400)

    elif group == "banners":
        for src in masters_in(IMG / "banners"):
            do(src, IMG / "web" / "banners" / (src.stem + ".webp"), 1920, 80)
            do(src, IMG / "thumbs" / "banners" / (src.stem + ".webp"), 400)

    elif group == "ledger":
        if MINISERIES.is_dir():
            for ep in sorted(MINISERIES.iterdir()):
                hero = ep / "hero.png"
                if hero.is_file():
                    do(hero, IMG / "web" / "ledger" / (ep.name + ".webp"), 900)

    elif group == "logos":
        src = LOGOS / "bq_logo.png"
        if src.is_file():
            do(src, LOGOS / "bq_logo_128.webp", 128, 90)

    return written, skipped


def main() -> int:
    groups = ["category", "featured", "landing", "banners", "ledger", "logos"]
    ap = argparse.ArgumentParser(description="BEASTIQUE web derivative generator")
    ap.add_argument("--group", choices=groups + ["all"], default="all")
    ap.add_argument("--force", action="store_true",
                    help="regenerate even if the derivative exists")
    ap.add_argument("--dry-run", action="store_true",
                    help="report without writing")
    args = ap.parse_args()

    selected = groups if args.group == "all" else [args.group]
    mode = "DRY-RUN" if args.dry_run else ("FORCE" if args.force else "incremental")
    print(f"═══ BEASTIQUE Web Derivatives · {mode} ═══")

    total_w = total_s = 0
    for g in selected:
        print(f"[{g}]")
        w, s = run_group(g, args.force, args.dry_run)
        total_w += w
        total_s += s
        print(f"  -> {w} written, {s} up to date")

    print(f"\ndone: {total_w} derivative(s) written, {total_s} already current")
    return 0


if __name__ == "__main__":
    sys.exit(main())
