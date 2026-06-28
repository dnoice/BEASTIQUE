#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
✒ Metadata
    - Title: BQ Linocut Trace (BEASTIQUE Edition - v1.6)
    - File Name: bq_linocut_trace.py
    - Relative Path: BEASTIQUE/tools/bq_linocut_trace.py
    - Artifact Type: CLI
    - Version: 1.6.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Automated trace stage for the BEASTIQUE render pipeline. Walks the
    studio/collections tree for the forge's `*-bw_*.png` renders of ANY style
    (linocut, low-poly, silhouette, woodcut, …) and runs each
    through Potrace at the house PRODUCTION defaults, writing a vector `.svg`
    into a traces/ subdir beside its source PNG. The PNG is read-only input; the
    SVG is the product.
    The production defaults are tuned to survive the detail-heavy categories
    (insects, birds) end to end without per-file babysitting — a few clean
    keepers from the hard categories is the goal, not a perfect first pass.

✒ Changelog:
    - 1.6.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Repo restructure. The
      pipeline tree moved under studio/: renders are now walked at
      studio/collections/ (the --root default is project-anchored to it, like
      STATE_DIR, so it resolves the same from any CWD) and bookkeeping lives in
      studio/state/trace/ (was pipeline-state/trace/). Ledger keys are the source
      path relative to --root, so the move leaves them unchanged — no re-tracing.
      Tracing behavior is otherwise identical.
    - 1.5.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Single-path output.
      Potrace emits one <path> per black blob (dozens–hundreds); the tracer now
      consolidates them into ONE <path> element per SVG (concatenating the `d`
      data, which preserves winding/holes and is visually identical) so each
      trace is a single tidy path object for Inkscape. Anchor-node count is
      unchanged by the merge.
    - 1.4.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Style-agnostic. The
      default glob is now **/*-bw_*.png, so the tracer picks up every house
      render style (linocut, low-poly, silhouette, woodcut) instead of only
      linocut; slug parsing handles the {slug}_{style}-bw_{NN} naming. Narrow to
      one style with --glob (e.g. **/*_low-poly-bw_*.png). SVGs still land in the
      sibling traces/ folder.
    - 1.3.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Traces subdir. SVG
      output now lands in a traces/ subdir beside the source PNG
      (<render-dir>/traces/<name>.svg), created on demand, keeping the vector
      products cleanly separated from the read-only PNG inputs instead of mixed
      into the same folder. is_done and the invert pass follow the new location.
    - 1.2.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Output organization +
      Windows fix. The ledger and per-run log now resolve into one
      project-anchored folder (pipeline-state/trace/) no matter which directory
      the tool is launched from, so `run` and `status` always agree and nothing
      is dumped beside the working directory; a ledger/runs-log path that
      carries its own directory (or is absolute) is still honored verbatim. The
      traced SVGs remain the product and still land beside their source PNG.
      Also forced UTF-8 on stdout/stderr so the box-drawing headers and flag
      glyphs no longer crash a legacy Windows console (cp1252).
    - 1.1.0 (2026-06-25) [Anthropic - Claude Opus 4.8] — Aim-Twice hardening
      pass. Added: a --force overwrite guard that shows the count and requires
      confirmation before overwriting existing SVGs (protecting hand-developed
      comps), bypassable with --yes and refused non-interactively without it;
      preflight param validation (blacklevel/alphamax/opttolerance/turdsize/
      max/workers) that aborts before any tracing; a fail-fast Pillow check at
      run start; and an overwrite-count line in plan when --force is set.
    - 1.0.0 (2026-06-25) [Anthropic - Claude Opus 4.8] — Initial release.

✒ Key Features:
    - PNG → SVG via Potrace at the house PRODUCTION defaults (Brightness Cutoff
      0.400 / Speckles 5 / Smooth 1.00 / Optimize 3.500), chosen to keep fine
      structure (insect legs, feather barbs) from dissolving on busy subjects.
    - Linework SVG for every subject — the reliable, fully-automated product.
    - Honest about white-on-white: a true silhouette of a near-white animal on
      a white ground CANNOT be traced (no tonal boundary to find). Those
      subjects are FLAGGED for a manual silhouette close, not given a misleading
      auto-output. See OTHER IMPORTANT INFORMATION.
    - Optional `--invert-too`: emits an extra `_invert.svg` (white-line-on-black
      inverted scan) — a legitimate alternate treatment, NOT a fillable
      silhouette. Opt-in, named honestly.
    - Node count logged per SVG and per run — a consistent fidelity metric for
      the harness (at THESE params; not comparable to the 0.500/10/5.000
      harness-baseline numbers).
    - Modes: plan (inventory), run (trace), status (ledger + node stats).
    - Idempotent ledger keyed by source PNG; Ctrl+C saves and reports.
    - Aim-Twice guards: a --force overwrite confirmation that protects
      hand-developed SVGs, preflight param validation, and a fail-fast Pillow
      check — all before any tracing begins.
    - Per-run rollup appended to trace_runs.jsonl for cross-run history.
    - Concurrent; --max caps a run; --force re-traces.
    - Dependency-light: Pillow (PEP 723) plus the system `potrace` binary.

✒ Usage Instructions:
    Requires the `potrace` binary on PATH (Win: scoop/choco install potrace, or
    the potrace.org binary; Debian/Termux: apt/pkg install potrace) and Pillow
    (handled by `uv run`).

    Inventory what would be traced (no work):
        $ uv run bq_linocut_trace.py plan --root studio/collections

    Trace the whole tree at the production defaults:
        $ uv run bq_linocut_trace.py run --root studio/collections

    Also emit the inverted white-on-black look:
        $ uv run bq_linocut_trace.py run --root studio/collections --invert-too

    Check progress / node stats:
        $ uv run bq_linocut_trace.py status

✒ Examples:
    $ uv run bq_linocut_trace.py plan --root studio/collections
    $ uv run bq_linocut_trace.py run --root studio/collections
    $ uv run bq_linocut_trace.py run --root studio/collections --max 8 --workers 8
    $ uv run bq_linocut_trace.py run --root studio/collections/insecta-beasts --opttolerance 2.0
    $ uv run bq_linocut_trace.py run --root studio/collections --invert-too
    $ uv run bq_linocut_trace.py status --ledger trace_ledger.json

✒ Command-Line Arguments:
    Modes (positional):
        plan                    Inventory PNGs to trace; no work
        run                     Trace PNG → SVG at the production defaults
        status                  Summarize the ledger + node stats
    Input:
        --root DIR              Tree to walk (default studio/collections)
        --glob PATTERN          Override the PNG glob
    Trace params (production defaults):
        --blacklevel N          Brightness cutoff 0-1 (default 0.400)
        --turdsize N            Speckle suppression in px (default 5)
        --alphamax N            Corner smoothness (default 1.00)
        --opttolerance N        Curve optimization (default 3.500)
    Invert (opt-in):
        --invert-too            Also emit an inverted _invert.svg per file
        --invert-blacklevel N   Blacklevel for the invert pass only
    Processing / Output:
        --workers N             Concurrency (default 4)
        --max N                 Cap this run to N source PNGs
        --force                 Re-trace even if the SVG already exists
        --yes                   Skip the --force overwrite confirmation
        --ledger FILE           Ledger name (default trace_ledger.json); a bare
                                name lands in studio/state/trace/, a path with
                                a directory is used as-is
        --runs-log FILE         Per-run rollup JSONL (default trace_runs.jsonl);
                                same studio/state/trace/ resolution as --ledger

✒ Other Important Information:
    - Dependencies: Pillow>=10 (PEP 723 inline) and the `potrace` CLI binary
      (system; checked at startup with a clear install message if missing).
    - Compatible platforms: All (Python 3.11+). Tested target: AURA (Win 11)
      and Z-Fold 6 Termux/proot Ubuntu.
    - WHITE-ON-WHITE TRUTH: a near-white animal rendered on a white ground has
      no tonal boundary between body and background, so NO trace (inverted or
      not, at any threshold) yields a clean body silhouette — invert just fills
      the whole frame. The true silhouette for these is a hand-close of the
      outer contour in Inkscape, or a re-render on a tonal background. This tool
      FLAGS the white cohort (see WHITE_COHORT below) and produces clean
      linework for them; it does not fake a silhouette.
    - PRODUCTION vs HARNESS params: these defaults (0.400/5/1.00/3.500) are for
      end-to-end production. The harness comparison baseline (0.500/10/1.00/
      5.000) is a different, stricter setting; node counts from the two are not
      directly comparable.
    - The PNG is read-only; SVGs are written into a traces/ subdir beside it.
      Nothing is overwritten except the target SVG (and only on --force).
    - OUTPUT ORGANIZATION: products (SVGs) live in <render-dir>/traces/, separate
      from the PNG inputs; bookkeeping (ledger + run log) lives in
      studio/state/trace/ anchored to the project root, so it never scatters
      into whatever directory you ran from. Pass a --ledger/--runs-log path with
      its own directory to override.
---------
"""

# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "pillow>=10",
# ]
# ///

from __future__ import annotations

import argparse
import concurrent.futures as cf
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
from dataclasses import dataclass
from pathlib import Path

# --------------------------------------------------------------------------- #
# House constants                                                             #
# --------------------------------------------------------------------------- #

# PRODUCTION defaults — tuned to run end to end and keep fine detail alive on
# the busy categories (insects, birds), where heavy optimization was dissolving
# legs/antennae/feather barbs. Inkscape Trace Bitmap → Potrace CLI:
#   Inkscape "Brightness Cutoff / Threshold 0.400" → potrace -k/--blacklevel
#   Inkscape "Speckles 5"                           → potrace -t/--turdsize
#   Inkscape "Smooth corners 1.00"                  → potrace -a/--alphamax
#   Inkscape "Optimize 3.500"                       → potrace -O/--opttolerance
# (The harness comparison baseline is the stricter 0.500/10/1.00/5.000.)
PRODUCTION_DEFAULTS = {
    "blacklevel": 0.400,
    "turdsize": 5,
    "alphamax": 1.00,
    "opttolerance": 3.500,
}

# Near-white-VALUE subjects (white body on white ground). These get clean
# linework and a FLAG — a true silhouette is a manual close, not a trace. This
# set is by slug (the part before `_<style>-bw_`); edit to match your renders.
WHITE_COHORT = {
    "beluga-whale",
    "polar-bear",
    "snowy-owl",
    "arctic-fox",
    "harp-seal-pup",
}

# Style-agnostic: matches every house render, named {slug}_{style}-bw_{NN}.png
# (linocut, low-poly, silhouette, woodcut, …). Narrow with --glob for one style.
DEFAULT_GLOB = "**/*-bw_*.png"
STEM_SPLIT = "-bw"

# Force UTF-8 on stdout/stderr so the box-drawing headers and flag glyphs
# survive a legacy code page (Windows consoles default to cp1252, which can't
# encode ═ ⚠ ⚑ ✓ and would otherwise crash every mode). errors="replace" keeps
# output flowing on any terminal that still can't render a glyph.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

# ANSI palette echo (gold headers, slate dim). Honors NO_COLOR.
_USE_COLOR = sys.stdout.isatty() and os.environ.get("NO_COLOR") is None
def _c(code: str, s: str) -> str:
    return f"\033[{code}m{s}\033[0m" if _USE_COLOR else s
GOLD = lambda s: _c("38;5;179", s)
DIM = lambda s: _c("2", s)
RED = lambda s: _c("38;5;131", s)
OK = lambda s: _c("38;5;108", s)
WARN = lambda s: _c("38;5;179", s)


# --------------------------------------------------------------------------- #
# Node counting (harness metric)                                              #
# --------------------------------------------------------------------------- #

_CMD_RE = re.compile(r"([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)")
_NUM_RE = re.compile(r"-?\d*\.?\d+(?:[eE][-+]?\d+)?")
_D_RE = re.compile(r'\bd\s*=\s*"([^"]*)"')
_TUPLE_DIV = {"M": 2, "L": 2, "T": 2, "H": 1, "V": 1, "C": 6, "S": 4, "Q": 4, "A": 7}


def count_nodes(svg_text: str) -> tuple[int, int]:
    """Count path anchor nodes and subpaths in an SVG (consistent proxy)."""
    nodes = 0
    subpaths = 0
    for d in _D_RE.findall(svg_text):
        for cmd, args in _CMD_RE.findall(d):
            up = cmd.upper()
            if up == "Z":
                continue
            nums = _NUM_RE.findall(args)
            div = _TUPLE_DIV.get(up, 2)
            seg = max(1, len(nums) // div) if nums else (1 if up in "ML" else 0)
            if up == "M":
                subpaths += 1
            nodes += seg
    return nodes, subpaths


# --------------------------------------------------------------------------- #
# Potrace plumbing                                                            #
# --------------------------------------------------------------------------- #

def find_potrace() -> str | None:
    return shutil.which("potrace")


def png_to_pgm(png_path: Path, pgm_path: Path) -> None:
    """Read the PNG (read-only) and write a grayscale PGM for Potrace.

    Potrace thresholds the graymap at --blacklevel, reproducing the Inkscape
    'Brightness Cutoff' step. The source PNG is never modified.
    """
    from PIL import Image
    with Image.open(png_path) as im:
        im.convert("L").save(pgm_path, format="PPM")


_PATH_D_RE = re.compile(r'<path\b[^>]*\bd="([^"]*)"')
_PATH_EL_RE = re.compile(r'[ \t]*<path\b[^>]*>\n?')


def consolidate_paths(out_svg: Path) -> None:
    """Collapse Potrace's many <path> blobs into ONE <path> element.

    Potrace emits one <path> per black region (dozens–hundreds), all sharing the
    parent <g>'s fill and winding rule. Concatenating every path's `d` data into
    a single <path> preserves the subpath winding (so holes still render) and is
    visually identical, but hands downstream tools (Inkscape) one tidy path
    object instead of a pile of fragments. Node/anchor count is unchanged.
    """
    txt = out_svg.read_text(encoding="utf-8")
    ds = _PATH_D_RE.findall(txt)
    if len(ds) <= 1:
        return
    merged = '<path d="' + " ".join(d.strip() for d in ds) + '"/>\n'
    txt = _PATH_EL_RE.sub("", txt)                 # drop the individual paths
    txt = txt.replace("</g>", merged + "</g>", 1)  # reinsert the single merged path
    out_svg.write_text(txt, encoding="utf-8")


def run_potrace(potrace: str, pgm: Path, out_svg: Path,
                params: dict, invert: bool) -> None:
    cmd = [
        potrace, str(pgm), "--svg", "-o", str(out_svg),
        "-k", str(params["blacklevel"]),
        "-t", str(int(params["turdsize"])),
        "-a", str(params["alphamax"]),
        "-O", str(params["opttolerance"]),
    ]
    if invert:
        cmd.append("-i")
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
    if r.returncode != 0 or not out_svg.exists():
        raise RuntimeError(f"potrace exit {r.returncode}: {r.stderr.strip()[:200]}")
    consolidate_paths(out_svg)


# --------------------------------------------------------------------------- #
# Output organization                                                         #
# --------------------------------------------------------------------------- #

# Ledgers and run logs are STATE, not products — they belong in one predictable
# place, not wherever the tool happened to be invoked from. Anchor them to
# <project-root>/studio/state/trace/ (project root = this file's parent's
# parent, i.e. tools/..), so `run` launched from the project root and `status`
# launched from tools/ read and write the SAME files. The traced SVGs are the
# product and still land beside their source PNG; only the bookkeeping moves.
PROJECT_ROOT = Path(__file__).resolve().parent.parent
STATE_DIR = PROJECT_ROOT / "studio" / "state" / "trace"

# Tree to walk default — project-anchored (like STATE_DIR) so it resolves the
# same from any CWD. Walks studio/collections/<gallery>-beasts/… for renders.
DEFAULT_ROOT = str(PROJECT_ROOT / "studio" / "collections")


def resolve_state_path(value: str) -> Path:
    """Route a bare filename into STATE_DIR; honor any path with a directory.

    `--ledger trace_ledger.json`            → studio/state/trace/trace_ledger.json
    `--ledger sub/x.json` or an absolute path → used verbatim (explicit override)
    """
    p = Path(value)
    if p.is_absolute() or p.parent != Path("."):
        return p
    return STATE_DIR / p.name


# --------------------------------------------------------------------------- #
# Ledger + run report                                                         #
# --------------------------------------------------------------------------- #

def load_ledger(path: Path) -> dict:
    if path.exists():
        try:
            return json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            return {}
    return {}


def save_ledger(path: Path, ledger: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(ledger, indent=2, ensure_ascii=False), encoding="utf-8")
    tmp.replace(path)


def write_run_report(path: Path, record: dict) -> None:
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(record, ensure_ascii=False) + "\n")
    except OSError:
        pass


# --------------------------------------------------------------------------- #
# Work units                                                                  #
# --------------------------------------------------------------------------- #

@dataclass
class Job:
    png: Path
    rel: str
    slug: str
    is_white: bool
    want_invert: bool


def slug_of(png: Path) -> str:
    # Filenames are {slug}_{style}-bw_{NN}; slug and style are each
    # underscore-free, so drop the -bw… tail then strip the trailing _{style}.
    stem = png.stem
    base = stem.split(STEM_SPLIT)[0] if STEM_SPLIT in stem else stem
    return base.rsplit("_", 1)[0] if "_" in base else base


def traces_dir(png: Path) -> Path:
    """Vector output lives in a traces/ subdir beside the PNG, keeping the SVG
    products separate from the read-only PNG inputs in each render folder."""
    return png.parent / "traces"


def discover(root: Path, glob: str, invert_too: bool) -> list[Job]:
    jobs: list[Job] = []
    for png in sorted(root.glob(glob)):
        if "_invert" in png.stem:          # never trace our own invert outputs
            continue
        slug = slug_of(png)
        try:
            rel = png.relative_to(root).as_posix()
        except ValueError:
            rel = png.as_posix()
        jobs.append(Job(png, rel, slug, slug in WHITE_COHORT, invert_too))
    return jobs


def expected_svgs(job: Job) -> list[Path]:
    tdir = traces_dir(job.png)
    out = [tdir / f"{job.png.stem}.svg"]
    if job.want_invert:
        out.append(tdir / f"{job.png.stem}_invert.svg")
    return out


def is_done(job: Job, ledger: dict, force: bool) -> bool:
    if force:
        return False
    if ledger.get(job.rel, {}).get("status") == "done":
        return True
    return all(p.exists() for p in expected_svgs(job))


# --------------------------------------------------------------------------- #
# Trace one job                                                               #
# --------------------------------------------------------------------------- #

def trace_job(potrace: str, job: Job, params: dict,
              invert_blacklevel: float | None) -> tuple[Job, dict | None, str]:
    t0 = time.perf_counter()
    try:
        results: dict = {}
        with tempfile.TemporaryDirectory() as td:
            pgm = Path(td) / "in.pgm"
            png_to_pgm(job.png, pgm)

            tdir = traces_dir(job.png)
            tdir.mkdir(parents=True, exist_ok=True)

            lw = tdir / f"{job.png.stem}.svg"
            run_potrace(potrace, pgm, lw, params, invert=False)
            n, s = count_nodes(lw.read_text(encoding="utf-8", errors="ignore"))
            results["linework"] = {"svg": lw.name, "nodes": n, "subpaths": s}

            if job.want_invert:
                iv = tdir / f"{job.png.stem}_invert.svg"
                p2 = dict(params)
                if invert_blacklevel is not None:
                    p2["blacklevel"] = invert_blacklevel
                run_potrace(potrace, pgm, iv, p2, invert=True)
                n2, s2 = count_nodes(iv.read_text(encoding="utf-8", errors="ignore"))
                results["invert"] = {"svg": iv.name, "nodes": n2, "subpaths": s2}

        secs = round(time.perf_counter() - t0, 2)
        return job, {"results": results, "secs": secs, "white": job.is_white}, ""
    except Exception as ex:  # noqa: BLE001
        return job, None, f"{type(ex).__name__}: {ex}"


# --------------------------------------------------------------------------- #
# Modes                                                                       #
# --------------------------------------------------------------------------- #

def _params_from_args(args) -> dict:
    return {
        "blacklevel": args.blacklevel,
        "turdsize": args.turdsize,
        "alphamax": args.alphamax,
        "opttolerance": args.opttolerance,
    }


def validate_params(args) -> list[str]:
    """Hard preflight checks on trace params. Empty list = cleared to proceed."""
    errs: list[str] = []
    if not (0.0 <= args.blacklevel <= 1.0):
        errs.append(f"--blacklevel {args.blacklevel} out of range 0.0–1.0")
    if args.turdsize < 0:
        errs.append(f"--turdsize {args.turdsize} must be >= 0")
    if not (0.0 <= args.alphamax <= 1.3334):
        errs.append(f"--alphamax {args.alphamax} out of range 0.0–1.3334")
    if args.opttolerance < 0:
        errs.append(f"--opttolerance {args.opttolerance} must be >= 0")
    ib = getattr(args, "invert_blacklevel", None)
    if ib is not None and not (0.0 <= ib <= 1.0):
        errs.append(f"--invert-blacklevel {ib} out of range 0.0–1.0")
    if getattr(args, "max", None) is not None and args.max < 1:
        errs.append("--max must be >= 1")
    if getattr(args, "workers", 1) < 1:
        errs.append("--workers must be >= 1")
    return errs


def _check_pillow() -> None:
    try:
        import PIL  # noqa: F401
    except ImportError:
        sys.exit(RED("Pillow not installed. Run via `uv run` or "
                     "`pip install pillow`."))


def _overwrite_count(todo: list[Job]) -> int:
    return sum(1 for j in todo if any(p.exists() for p in expected_svgs(j)))


def confirm_overwrite(n: int, assume_yes: bool) -> bool:
    """Gate a --force run that would overwrite existing (maybe developed) SVGs."""
    print(WARN(f"  ⚠ --force will OVERWRITE {n} existing SVG(s) — including any "
               f"you have hand-developed."))
    if assume_yes:
        print(DIM("    --yes set; proceeding."))
        return True
    if not sys.stdin.isatty():
        print(RED("    Non-interactive shell and --yes not set — refusing to "
                  "overwrite. Aborting."))
        return False
    try:
        ans = input("    Proceed and overwrite? [y/N] ").strip().lower()
    except (EOFError, KeyboardInterrupt):
        print()
        return False
    return ans in ("y", "yes")


def cmd_plan(args) -> int:
    root = Path(args.root)
    if not root.is_dir():
        print(RED(f"  --root is not a directory: {root}"))
        return 1
    perrs = validate_params(args)
    if perrs:
        print(RED("  Preflight errors:"))
        for e in perrs:
            print(RED(f"    • {e}"))
        return 1
    jobs = discover(root, args.glob, args.invert_too)
    if not jobs:
        print(RED(f"  No PNGs matched {args.glob} under {root}"))
        return 1
    ledger = load_ledger(resolve_state_path(args.ledger))
    todo = [j for j in jobs if not is_done(j, ledger, args.force)]
    if args.max is not None:
        todo = todo[:args.max]

    whites = sorted({j.slug for j in jobs if j.is_white})
    svg_count = sum(len(expected_svgs(j)) for j in todo)

    print(GOLD("═══ BEASTIQUE Linocut Trace · PLAN (no work) ═══"))
    print(f"  root ............. {root}")
    print(f"  PNGs found ....... {len(jobs)}")
    print(f"  to trace ......... {len(todo)}  ({len(jobs)-len(todo)} skipped — done)")
    print(f"  SVGs to write .... {svg_count}"
          + (DIM("  (incl. _invert variants)") if args.invert_too else ""))
    if args.force:
        print(WARN(f"  ⚠ --force set: {_overwrite_count(todo)} existing SVG(s) "
                   f"would be OVERWRITTEN"))
    print()
    print(GOLD("  Production defaults"))
    print(f"      blacklevel ..... {args.blacklevel}")
    print(f"      turdsize ....... {args.turdsize}")
    print(f"      alphamax ....... {args.alphamax}")
    print(f"      opttolerance ... {args.opttolerance}")
    if whites:
        print()
        print(WARN(f"  ⚠ {len(whites)} white-value subject(s) present: "
                   + ", ".join(whites)))
        print(DIM("    These get clean linework. A true silhouette is a manual "
                  "contour close in Inkscape —"))
        print(DIM("    no trace yields one from a white-on-white render. See the "
                  "pipeline note."))
    if find_potrace() is None:
        print()
        print(RED("  ⚠ potrace binary NOT found on PATH — `run` will fail until "
                  "it's installed."))
    print()
    print(OK("  Plan complete. No SVGs were written."))
    return 0


def cmd_run(args) -> int:
    root = Path(args.root)
    if not root.is_dir():
        print(RED(f"  --root is not a directory: {root}"))
        return 1
    perrs = validate_params(args)
    if perrs:
        print(RED("  Preflight errors:"))
        for e in perrs:
            print(RED(f"    • {e}"))
        return 1
    potrace = find_potrace()
    if potrace is None:
        print(RED("  potrace binary not found on PATH."))
        print(DIM("    Windows:  scoop install potrace   (or choco, or potrace.org)"))
        print(DIM("    Debian/Termux:  apt install potrace   /   pkg install potrace"))
        return 1
    _check_pillow()

    jobs = discover(root, args.glob, args.invert_too)
    if not jobs:
        print(RED(f"  No PNGs matched {args.glob} under {root}"))
        return 1
    ledger_path = resolve_state_path(args.ledger)
    runs_path = resolve_state_path(args.runs_log)
    ledger = load_ledger(ledger_path)
    todo = [j for j in jobs if not is_done(j, ledger, args.force)]
    if args.max is not None:
        todo = todo[:args.max]

    print(GOLD("═══ BEASTIQUE Linocut Trace · RUN ═══"))
    print(f"  to trace: {len(todo)}   skipped: {len(jobs)-len(todo)}   "
          f"workers: {args.workers}")
    if not todo:
        print(OK("  Nothing to do — every PNG already has its SVG."))
        return 0

    if args.force:
        ow = _overwrite_count(todo)
        if ow and not confirm_overwrite(ow, args.yes):
            print(DIM("  Aborted — no files overwritten."))
            return 0

    params = _params_from_args(args)
    done = errc = 0
    failed: list[str] = []
    node_tally: list[int] = []
    interrupted = False
    wall0 = time.perf_counter()
    pool = cf.ThreadPoolExecutor(max_workers=args.workers)
    try:
        futs = {pool.submit(trace_job, potrace, j, params, args.invert_blacklevel): j
                for j in todo}
        for fut in cf.as_completed(futs):
            job, res, err = fut.result()
            if res is None:
                errc += 1
                failed.append(job.rel)
                ledger[job.rel] = {"status": "error", "error": err,
                                   "ts": int(time.time())}
                print(RED(f"  ✗ {job.rel}: {err}"))
            else:
                done += 1
                lw = res["results"]["linework"]
                node_tally.append(lw["nodes"])
                extra = ""
                if "invert" in res["results"]:
                    iv = res["results"]["invert"]
                    node_tally.append(iv["nodes"])
                    extra = DIM(f"  +invert {iv['nodes']}n")
                flag = WARN("  ⚑white") if job.is_white else ""
                ledger[job.rel] = {"status": "done", "white": job.is_white,
                                   "results": res["results"], "secs": res["secs"],
                                   "params": params, "ts": int(time.time())}
                print(OK(f"  ✓ {job.slug}")
                      + DIM(f"  {lw['nodes']}n / {lw['subpaths']}p  "
                            f"({res['secs']}s)") + extra + flag)
            if (done + errc) % 20 == 0:
                save_ledger(ledger_path, ledger)
    except KeyboardInterrupt:
        interrupted = True
        print()
        print(WARN("  Interrupted — saving ledger and shutting down cleanly…"))
    finally:
        pool.shutdown(wait=False, cancel_futures=True)
        save_ledger(ledger_path, ledger)

    wall = round(time.perf_counter() - wall0, 1)
    mean_n = round(sum(node_tally) / len(node_tally)) if node_tally else 0
    write_run_report(runs_path, {
        "ts": int(time.time()), "iso": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "root": str(root), "params": params,
        "traced": done, "errors": errc, "interrupted": interrupted,
        "svgs": len(node_tally), "nodes_total": sum(node_tally),
        "nodes_mean": mean_n, "wall_secs": wall,
    })

    print()
    print(GOLD(f"  {'Stopped' if interrupted else 'Done'}: {done} traced, "
               f"{errc} errors  ·  {wall}s wall"))
    if node_tally:
        print(DIM(f"  {len(node_tally)} SVGs · nodes: total {sum(node_tally)}, "
                  f"mean {mean_n}, min {min(node_tally)}, max {max(node_tally)}"))
    print(DIM(f"  ledger: {ledger_path}  ·  run log: {runs_path}"))
    if failed:
        print(DIM("  Failed: " + ", ".join(failed[:12])
                  + (" …" if len(failed) > 12 else "")))
    return 0 if errc == 0 and not interrupted else 2


def cmd_status(args) -> int:
    ledger_path = resolve_state_path(args.ledger)
    ledger = load_ledger(ledger_path)
    print(GOLD("═══ BEASTIQUE Linocut Trace · STATUS ═══"))
    print(f"  ledger: {ledger_path}")
    if not ledger:
        print(DIM("  Ledger is empty — nothing traced yet."))
        return 0

    done = [v for v in ledger.values() if v.get("status") == "done"]
    errs = [k for k, v in ledger.items() if v.get("status") == "error"]
    whites = [k for k, v in ledger.items()
              if v.get("status") == "done" and v.get("white")]
    nodes: list[int] = []
    inverts = 0
    for v in done:
        res = v.get("results", {})
        if "linework" in res:
            nodes.append(res["linework"].get("nodes", 0))
        if "invert" in res:
            inverts += 1
            nodes.append(res["invert"].get("nodes", 0))

    print()
    print(OK(f"  done {len(done)}") + "   "
          + (RED(f"error {len(errs)}") if errs else DIM("error 0")))
    if inverts:
        print(DIM(f"  invert variants: {inverts}"))
    if whites:
        print(WARN(f"  ⚑ {len(whites)} white-value subject(s) — silhouette is a "
                   f"manual close, not traced"))
    if nodes:
        nodes.sort()
        mean_n = round(sum(nodes) / len(nodes))
        med = nodes[len(nodes) // 2]
        print(GOLD("  Node stats (all SVGs)"))
        print(DIM(f"    count {len(nodes)} · mean {mean_n} · median {med} · "
                  f"min {nodes[0]} · max {nodes[-1]}"))
    if errs:
        print()
        print(RED(f"  {len(errs)} error(s): ") + DIM(", ".join(errs[:12])
              + (" …" if len(errs) > 12 else "")))
    return 0


# --------------------------------------------------------------------------- #
# CLI                                                                         #
# --------------------------------------------------------------------------- #

def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="bq_linocut_trace.py",
        description="BEASTIQUE linocut automated trace stage (PNG → SVG via Potrace).",
    )
    sub = p.add_subparsers(dest="mode", required=True)

    def common(sp):
        sp.add_argument("--root", default=DEFAULT_ROOT, help="Tree to walk")
        sp.add_argument("--glob", default=DEFAULT_GLOB, help="PNG glob pattern")
        sp.add_argument("--blacklevel", type=float,
                        default=PRODUCTION_DEFAULTS["blacklevel"])
        sp.add_argument("--turdsize", type=float,
                        default=PRODUCTION_DEFAULTS["turdsize"])
        sp.add_argument("--alphamax", type=float,
                        default=PRODUCTION_DEFAULTS["alphamax"])
        sp.add_argument("--opttolerance", type=float,
                        default=PRODUCTION_DEFAULTS["opttolerance"])
        sp.add_argument("--invert-too", action="store_true", dest="invert_too",
                        help="Also emit an inverted _invert.svg (white-on-black "
                             "look; NOT a silhouette)")
        sp.add_argument("--invert-blacklevel", type=float, default=None,
                        dest="invert_blacklevel",
                        help="Blacklevel for the invert pass only")
        sp.add_argument("--max", type=int, default=None)
        sp.add_argument("--force", action="store_true")
        sp.add_argument("--yes", action="store_true",
                        help="Skip the --force overwrite confirmation")
        sp.add_argument("--ledger", default="trace_ledger.json")
        sp.add_argument("--runs-log", default="trace_runs.jsonl", dest="runs_log")

    sp_plan = sub.add_parser("plan", help="Inventory PNGs to trace; no work")
    common(sp_plan)
    sp_plan.set_defaults(func=cmd_plan)

    sp_run = sub.add_parser("run", help="Trace PNG → SVG at the production defaults")
    common(sp_run)
    sp_run.add_argument("--workers", type=int, default=4)
    sp_run.set_defaults(func=cmd_run)

    sp_status = sub.add_parser("status", help="Summarize the ledger + node stats")
    sp_status.add_argument("--ledger", default="trace_ledger.json")
    sp_status.set_defaults(func=cmd_status)

    return p


def main() -> int:
    args = build_parser().parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())