#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
✒ Metadata
    - Title: BQ Render Forge (BEASTIQUE Edition - v1.9)
    - File Name: bq_linocut_forge.py
    - Relative Path: BEASTIQUE/tools/bq_linocut_forge.py
    - Artifact Type: CLI
    - Version: 1.9.1
    - Date: 2026-07-09
    - Update: Thursday, July 09, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.9.1 (2026-07-09) [Anthropic - Claude Fable 5] — Fetch-hint fix. The
      "Fetch when complete" line printed after a batch submit now includes
      --style and --quality. Without them, fetch fell back to the linocut
      default, filtered every entry out, and reported all items as errors
      ("status 200") despite a healthy batch — exactly what bit the first
      stencil-wave fetch. The style filter itself is unchanged; fetch has
      always required the submit-time flags, the hint just never said so.
    - 1.9.0 (2026-07-09) [Anthropic - Claude Fable 5] — Brand-work routing.
      Entry.out_path now files ID blocks into their own leaf folders under
      <style>/<quality>/: 1xx (icons) → icons/, 2xx (banners) → banners/;
      species renders (0xx) stay flat. Existing icon/banner renders were moved
      to match and their ledger file paths rewritten, so skip logic (ledger OR
      on-disk) stays airtight. mkdir(parents=True) at every write site already
      covers the new leaves — fetch/sync/batch land routed with no flag changes.
    - 1.8.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Repo restructure +
      material retirement. Paths repointed to the new pro layout: renders now
      live under studio/collections/ (was collections/) and bookkeeping under
      studio/state/forge/ (was pipeline-state/forge/); the --out default is now
      project-anchored (studio/collections) like STATE_DIR, so it resolves the
      same from any working directory. The material and material-classic styles
      were retired (codices + renders deleted) and removed from STYLE_CODE — the
      roster is seven styles again. The deployable site moved to site/, but the
      forge never touched it. Ledger idempotency keys are unaffected.
    - 1.7.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Renamed BQ Linocut
      Forge → BQ Render Forge (run headers → "BEASTIQUE Render Forge"). The tool
      drives nine styles now (linocut, low-poly, silhouette, woodcut, line-art,
      stencil, geo-line, material, material-classic), so linocut-specific
      branding was misleading. Behavior unchanged; the script filename stays
      bq_linocut_forge.py for now to avoid breaking invocations and docs. Also
      added the geo-line style (GEOL) — the animal drawn purely from straight
      line segments, no curves, no fills — and the full-color material hero
      styles material (MATL, Endangered-25 codex v1.1) and material-classic
      (MATC, codex v1.0); both are NOT BW trace styles (the tracer ignores them).
    - 1.6.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Added two trace-light
      styles to the roster: line-art (LINE) and stencil (STEN). A crystalline
      silhouette/low-poly hybrid was trialed and cut — its output was visually
      indistinguishable from low-poly, not worth a separate style. Woodcut stays
      selectable but is deprecated for tracing — its hatching traces to ~20k+
      nodes per image (Inkscape freezer); keep woodcut as raster only.
    - 1.5.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Multi-style support.
      Added --style (linocut | low-poly | silhouette | woodcut). The BQ id now
      carries the style as its second segment, BQ-<STYLE>-<CLASS>-<NUM>; --style
      both filters the libraries to that code and routes output to
      collections/<gallery>-beasts/<style>/<quality>/. Libraries glob as
      *_prompts.md (covers the legacy *_linocut_prompts.md and new per-style
      files). Fully backward-compatible: the default --style linocut keeps every
      existing BQ-LINO-* library and its linocut/ output path unchanged.
    - 1.4.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Quality-routed renders.
      Outputs now land in collections/{gallery}-beasts/linocut/{quality}/ instead
      of flat in linocut/, so a high pass and a medium pass of the same beast no
      longer collide and never need a manual move into a quality folder. Skip
      logic is unchanged in spirit — idempotency is still keyed on bq_id+variant,
      so already-rendered images are never re-billed; the on-disk check simply
      now looks in the quality subdir (which matches where finished renders
      already live). fetch gained a --quality flag so batch downloads route into
      the same subdir (pass the quality the batch was built with). Also forced
      UTF-8 on stdout/stderr so the box-drawing headers no longer crash a legacy
      Windows console (cp1252) — the same fix already applied to the tracer.
    - 1.3.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Output organization.
      The ledger and per-run log now resolve into one project-anchored folder
      (pipeline-state/forge/) no matter which directory the forge is launched
      from, so bookkeeping no longer lands in the project root next to the
      site files; the per-quality ledgers (forge_ledger_medium.json,
      forge_ledger_high.json) and their run logs move there automatically when
      passed as bare names. A --ledger/--runs-log path that carries its own
      directory (or is absolute) is still honored verbatim. Rendered images are
      unchanged — they remain the product and still write into the house tree
      under --out.
    - 1.2.0 (2026-06-25) [Anthropic - Claude Opus 4.8] — Instrumentation pass.
      Per-image metrics now captured from the API response: real token usage
              (input/output/total), generation latency, and retry count, all written
      into the ledger. Each run appends a rollup line to forge_runs.jsonl
      (settings, counts, wall time, summed tokens, estimated spend, timestamp)
      for cross-run history. Token counts are authoritative; the dollar figure
      remains the labeled estimate (the OpenAI dashboard is the true bill).
      fetch captures batch usage the same way. Added --runs-log.
    - 1.1.0 (2026-06-25) [Anthropic - Claude Opus 4.8] — Aim-Twice hardening
      pass. Added: --only (cherry-pick beasts by id), --max (cap a run), --yes
      (skip the prompt); a spend-confirmation gate on sync/batch that shows the
      bill and refuses to spend in a non-interactive shell without --yes;
      preflight validation (size/divisibility, variant range, transparent+jpeg
      conflict, unmatched --only tokens) that aborts before any API call; a
      `status` mode that summarizes the ledger per gallery; clean Ctrl+C
      handling that saves the ledger and reports partial progress; backoff
      jitter on retries.
    - 1.0.0 (2026-06-25) [Anthropic - Claude Opus 4.8] — Initial release.

✒ Description:
    Bulk image-generation driver for the BEASTIQUE prompt libraries (any style).
    Reads the curated `*_beasts_linocut_prompts.md` files directly, assembles
    each entry into an API-ready prompt (folding the negative-prompt line into
    the body, since the OpenAI image API has no negative parameter), and drives
    the GPT Image API to render the collection. Runs in modes: plan (dry-run,
    spends nothing), sync (live, immediate, concurrent), batch (the async
    50%-off path), fetch (download a finished batch), and status (ledger
    report).

✒ Key Features:
    - Parses the house linocut .md libraries — no prompt re-keying; the .md is
      the single source of truth.
    - Folds each "Negative prompt:" line into the prompt body (the image API
      takes one prompt string; there is no negative_prompt parameter).
    - Modes: plan, sync, batch, fetch, status.
    - Spend-confirmation gate: live modes show the estimate and require a y/N,
      bypassable with --yes; a non-interactive shell without --yes will not
      spend.
    - Preflight validation aborts before any API call on bad size, out-of-range
      variants, a transparent+jpeg conflict, or unmatched --only tokens.
    - --only cherry-picks beasts by id (full BQ-LINO-… or class-num like
      INS-010); --max caps a run; --collections filters by gallery.
    - Idempotent JSON ledger keyed by id+variant — interrupted or repeated runs
      never re-bill an image that already landed; Ctrl+C saves and reports.
    - Per-image metrics logged to the ledger: real token usage, latency, and
      retries; each run appends a rollup to forge_runs.jsonl for history.
    - Variant fan-out maps to the house naming slot: variant N writes
      `{slug}_linocut-bw_{NN}.png`, so options sit side by side.
    - Files outputs into the house tree, organized by style then quality:
      studio/collections/{gallery}-beasts/{style}/{quality}/, with merged
      galleries (REP+AMP → reptilian, INS+ARA → insecta) honored.
    - Bookkeeping is organized, not flat: the ledger and per-run log resolve into
      studio/state/forge/ anchored to the project root, so they never scatter
      into whatever directory the forge was launched from (override with a
      --ledger/--runs-log path that includes its own directory).
    - Indicative cost table for the current GPT Image lineup with a batch
      discount applied; flagged as estimate-only, verify against live pricing.
    - Dependency-light: only the `openai` SDK; PEP 723 inline deps.

✒ Usage Instructions:
    Set OPENAI_API_KEY in the environment first. Always run `plan` before
    spending — it proves the parse and shows the bill. Live modes then confirm
    the spend with a y/N (use --yes to skip in scripts).

    Dry-run the whole library (no spend):
        $ uv run bq_linocut_forge.py plan --libs studio/prompts/linocut

    Calibrate four hand-picked beasts at medium:
        $ uv run bq_linocut_forge.py sync --libs studio/prompts/linocut \\
            --only MAM-008,INS-010,INS-027,MAM-020 --quality medium

    Submit the full library as a batch (50% off, async up to 24h):
        $ uv run bq_linocut_forge.py batch --libs studio/prompts/linocut
        $ uv run bq_linocut_forge.py fetch --batch-id batch_abc123 \\
            --libs studio/prompts/linocut

    Check progress:
        $ uv run bq_linocut_forge.py status --ledger forge_ledger.json

✒ Examples:
    $ uv run bq_linocut_forge.py plan --libs studio/prompts/linocut
    $ uv run bq_linocut_forge.py sync --libs studio/prompts/linocut --only INS-010,INS-027
    $ uv run bq_linocut_forge.py sync --libs studio/prompts/linocut --collections insecta --max 6
    $ uv run bq_linocut_forge.py sync --libs studio/prompts/linocut --variants 3 --quality high --yes
    $ uv run bq_linocut_forge.py batch --libs studio/prompts/linocut --quality medium
    $ uv run bq_linocut_forge.py fetch --batch-id batch_abc123 --libs studio/prompts/linocut
    $ uv run bq_linocut_forge.py status

✒ Command-Line Arguments:
    Modes (positional):
        plan                    Parse + estimate, no API calls, no spend
        sync                    Live concurrent generation (confirms spend)
        batch                   Build + upload + submit a Batch job (confirms)
        fetch                   Download + write a completed Batch job
        status                  Summarize the ledger per gallery
    Input:
        --libs DIR              Folder of *_prompts.md (required for
                                plan/sync/batch/fetch)
        --style NAME            linocut | low-poly | silhouette | woodcut |
                                line-art | stencil | geo-line
                                (default linocut). Filters libraries to
                                BQ-<STYLE>-* and sets the output subdir.
                                woodcut is raster-only (too node-heavy to trace).
        --collections X[,Y]     Filter by gallery slug (mammalian, aquatic,
                                avian, reptilian, insecta). Default: all.
        --only ID[,ID]          Cherry-pick beasts by id (BQ-LINO-INS-010 or
                                INS-010). Overrides nothing; narrows the set.
    Processing:
        --model NAME            GPT Image model (default gpt-image-2)
        --quality {low,medium,high,auto}   Default medium
        --size WxH              Default 1536x1024 (landscape)
        --background {opaque,transparent,auto}  Default opaque (white)
        --output-format {png,webp,jpeg}    Default png
        --variants N            Images per prompt, 1-10 (default 1)
        --max N                 Cap this run to N images (after skip)
        --workers N             Sync concurrency (default 4)
    Safety / Output:
        --yes                   Skip the spend confirmation (scripts/CI)
        --out DIR               Render root (default studio/collections)
        --ledger FILE           Ledger name (default forge_ledger.json); a bare
                                name lands in studio/state/forge/, a path with
                                a directory is used as-is
        --runs-log FILE         Per-run rollup JSONL (default forge_runs.jsonl);
                                same studio/state/forge/ resolution as --ledger
        --batch-id ID           Batch id (fetch mode)
        --force                 Ignore ledger; regenerate even if present

✒ Other Important Information:
    - Dependencies: openai>=1.40 (declared inline via PEP 723). Stdlib only
      otherwise. No Pillow needed — images are written as raw bytes.
    - Compatible platforms: All (Python 3.11+). Tested target: AURA (Win 11)
      and Z-Fold 6 Termux/proot Ubuntu.
    - Cost: the price table is INDICATIVE. Verify against the live OpenAI image
      calculator before a large run. Batch applies a flat 0.5 multiplier.
    - Safety: `plan` never calls the API. `sync`/`batch` require OPENAI_API_KEY
      and a confirmed spend. The ledger makes every mode re-runnable.
    - The image API returns base64 always (no URL option for GPT Image); this
      tool decodes and writes bytes itself.
---------
"""

# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "openai>=1.40",
# ]
# ///

from __future__ import annotations

import argparse
import base64
import concurrent.futures as cf
import json
import os
import random
import re
import sys
import time
from dataclasses import dataclass, field
from pathlib import Path

# --------------------------------------------------------------------------- #
# House constants                                                             #
# --------------------------------------------------------------------------- #

# Class-code → primary gallery folder. Merged galleries collapse here:
# REP + AMP both file under reptilian; INS + ARA both under insecta.
CLASS_TO_GALLERY = {
    "MAM": "mammalian",
    "AQU": "aquatic",
    "AVI": "avian",
    "REP": "reptilian",
    "AMP": "reptilian",
    "INS": "insecta",
    "ARA": "insecta",
}

# Art-style name → id-segment code. The BQ id carries the style as its second
# segment: BQ-<STYLE>-<CLASS>-<NUM> (e.g. BQ-LOPO-MAM-001). --style both filters
# the libraries to the matching code and names the output subdir. linocut is the
# legacy default, so existing BQ-LINO-* libraries keep working unchanged.
STYLE_CODE = {
    "linocut": "LINO",
    "low-poly": "LOPO",
    "silhouette": "SILH",
    "woodcut": "WOOD",
    "line-art": "LINE",
    "stencil": "STEN",
    "geo-line": "GEOL",
    "specimen": "SPEC",        # full-color species-page hero/fact art (NOT traced)
}

# Indicative per-image USD prices (sync). Batch applies BATCH_MULTIPLIER.
# "sq" = 1024x1024; "wide" = landscape/portrait (1536x1024 / 1024x1536).
# VERIFY against the live calculator before a large run.
PRICE_TABLE = {
    "gpt-image-2": {
        "low":    {"sq": 0.006, "wide": 0.005},
        "medium": {"sq": 0.053, "wide": 0.041},
        "high":   {"sq": 0.211, "wide": 0.165},
    },
    "gpt-image-1.5": {
        "low":    {"sq": 0.009, "wide": 0.009},
        "medium": {"sq": 0.058, "wide": 0.045},
        "high":   {"sq": 0.200, "wide": 0.160},
    },
    "gpt-image-1-mini": {
        "low":    {"sq": 0.005, "wide": 0.005},
        "medium": {"sq": 0.015, "wide": 0.012},
        "high":   {"sq": 0.052, "wide": 0.036},
    },
}
BATCH_MULTIPLIER = 0.5
STANDARD_SIZES = {"1024x1024", "1536x1024", "1024x1536", "auto"}

# Force UTF-8 on stdout/stderr so the box-drawing headers and glyphs survive a
# legacy code page (Windows consoles default to cp1252, which can't encode ═ ⚠
# and would otherwise crash every mode, including dry-run plan). errors="replace"
# keeps output flowing on any terminal that still can't render a glyph.
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
NAVY = lambda s: _c("38;5;67", s)
DIM = lambda s: _c("2", s)
RED = lambda s: _c("38;5;131", s)
OK = lambda s: _c("38;5;108", s)
WARN = lambda s: _c("38;5;179", s)


# --------------------------------------------------------------------------- #
# Data model                                                                  #
# --------------------------------------------------------------------------- #

@dataclass
class Entry:
    """One parsed prompt-library entry."""
    bq_id: str
    cls: str
    num: int
    name: str
    sci: str
    iucn: str
    slug: str
    out_stem: str          # e.g. monarch-butterfly_linocut-bw
    prompt_body: str
    negative: str
    style_code: str = "LINO"   # BQ-<STYLE>- segment; LINO is the legacy default
    gallery: str = field(init=False)

    def __post_init__(self) -> None:
        self.gallery = CLASS_TO_GALLERY.get(self.cls, self.cls.lower())

    def assembled_prompt(self) -> str:
        """Fold the negative line into the body (image API takes one string)."""
        body = self.prompt_body.strip()
        neg = self.negative.strip()
        if neg.lower().startswith("negative prompt:"):
            neg = neg.split(":", 1)[1].strip()
        if not neg:
            return body
        return (
            f"{body}\n\n"
            f"Strictly avoid all of the following (hard negative constraints): "
            f"{neg}"
        )

    def out_name(self, variant: int) -> str:
        return f"{self.out_stem}_{variant:02d}.png"

    def out_path(self, out_root: Path, variant: int, quality: str,
                 style: str) -> Path:
        # Renders are organized by style THEN quality (under --out, default
        # studio/collections):
        # <out>/{gallery}-beasts/{style}/{quality}/{slug}_{style}-bw_{NN}.png
        # so different art styles and quality passes never collide flat.
        # ID blocks route brand work into their own leaf folders so icons and
        # banners never mix with the species renders: 1xx → icons/, 2xx →
        # banners/. Species (0xx) stay flat.
        leaf = out_root / f"{self.gallery}-beasts" / style / quality
        if 100 <= self.num <= 199:
            leaf = leaf / "icons"
        elif 200 <= self.num <= 299:
            leaf = leaf / "banners"
        return leaf / self.out_name(variant)

    def ledger_key(self, variant: int) -> str:
        return f"{self.bq_id}__v{variant}"


# --------------------------------------------------------------------------- #
# Parser                                                                      #
# --------------------------------------------------------------------------- #

_RE_HEADER = re.compile(r"^### (BQ-([A-Z]+)-([A-Z]+)-(\d+))\s+·\s+(.+?)\s*$")
_RE_SLUG = re.compile(r"slug\s+`([^`]+)`")
_RE_OUT = re.compile(r"output\s+`([^`]+)`")
_RE_SCI = re.compile(r"^\*(.+?)\*")
_RE_IUCN = re.compile(r"·\s*(?:IUCN\s+)?([A-Z]{2,3}[\u2020\u2021*]?)\s*·")
_RE_OUT_STEM = re.compile(r"^(.*)_\d+\.\{png,svg\}$")


def parse_library(md_path: Path) -> list[Entry]:
    """Parse one *_prompts.md into a list of Entry objects."""
    text = md_path.read_text(encoding="utf-8")
    lines = text.split("\n")
    entries: list[Entry] = []
    i, n = 0, len(lines)

    while i < n:
        m = _RE_HEADER.match(lines[i])
        if not m:
            i += 1
            continue
        bq_id, style_code, cls, num_s, name = (
            m.group(1), m.group(2), m.group(3), m.group(4), m.group(5))

        j = i + 1
        while j < n and lines[j].strip() == "":
            j += 1
        meta = lines[j] if j < n else ""
        sci_m = _RE_SCI.search(meta)
        slug_m = _RE_SLUG.search(meta)
        out_m = _RE_OUT.search(meta)
        iucn_m = _RE_IUCN.search(meta)
        if not (slug_m and out_m):
            i = j + 1
            continue
        sci = sci_m.group(1) if sci_m else ""
        iucn = iucn_m.group(1) if iucn_m else ""
        slug = slug_m.group(1)
        out_raw = out_m.group(1)
        stem_m = _RE_OUT_STEM.match(out_raw)
        out_stem = stem_m.group(1) if stem_m else f"{slug}_linocut-bw"

        k = j + 1
        while k < n and lines[k].strip() != "```text":
            k += 1
        if k >= n:
            i = j + 1
            continue
        block: list[str] = []
        k += 1
        while k < n and lines[k].strip() != "```":
            block.append(lines[k])
            k += 1
        block_text = "\n".join(block).strip()

        if "Negative prompt:" in block_text:
            body, neg = block_text.split("Negative prompt:", 1)
            body, neg = body.strip(), neg.strip()
        else:
            body, neg = block_text, ""

        entries.append(Entry(
            bq_id=bq_id, cls=cls, num=int(num_s), name=name,
            sci=sci, iucn=iucn, slug=slug, out_stem=out_stem,
            prompt_body=body, negative=neg, style_code=style_code,
        ))
        i = k + 1

    return entries


def load_all(libs_dir: Path, collections: list[str] | None,
             style: str | None = None) -> list[Entry]:
    """Parse every library in libs_dir, optionally filtered by gallery and style.

    Libraries glob as `*_prompts.md` (covers both the legacy
    `*_linocut_prompts.md` files and new per-style libraries). When a style is
    given, only entries whose BQ id carries that style code are kept, so a mixed
    libraries folder still resolves to a single style per run.
    """
    out: list[Entry] = []
    for md in sorted(libs_dir.glob("*_prompts.md")):
        out.extend(parse_library(md))
    if style:
        code = STYLE_CODE.get(style, style.upper())
        out = [e for e in out if e.style_code == code]
    if collections:
        wanted = {c.strip().lower() for c in collections}
        out = [e for e in out if e.gallery in wanted]
    return out


def apply_only(entries: list[Entry], tokens: list[str]) -> tuple[list[Entry], list[str]]:
    """Narrow to entries matching any --only token; report unmatched tokens."""
    toks = [t.upper() for t in tokens]
    matched: set[str] = set()
    kept: list[Entry] = []
    for e in entries:
        for t in toks:
            if e.bq_id == t or e.bq_id.endswith("-" + t):
                kept.append(e)
                matched.add(t)
                break
    unmatched = [t for t in toks if t not in matched]
    return kept, unmatched


# --------------------------------------------------------------------------- #
# Output organization                                                         #
# --------------------------------------------------------------------------- #

# Ledgers and run logs are STATE, not products — they belong in one predictable
# place, not wherever the tool happened to be invoked from. Anchor them to
# <project-root>/studio/state/forge/ (project root = this file's parent's
# parent, i.e. tools/..), so a run from the project root and a `status` from
# tools/ read and write the SAME files. Rendered images are the product and
# still land in the house tree under --out; only the bookkeeping moves.
PROJECT_ROOT = Path(__file__).resolve().parent.parent
STATE_DIR = PROJECT_ROOT / "studio" / "state" / "forge"

# Render root default — project-anchored (like STATE_DIR) so it resolves the
# same from any CWD. Renders land in studio/collections/<gallery>-beasts/…
DEFAULT_OUT = str(PROJECT_ROOT / "studio" / "collections")


def resolve_state_path(value: str) -> Path:
    """Route a bare filename into STATE_DIR; honor any path with a directory.

    `--ledger forge_ledger_medium.json`       → studio/state/forge/forge_ledger_medium.json
    `--ledger sub/x.json` or an absolute path → used verbatim (explicit override)
    """
    p = Path(value)
    if p.is_absolute() or p.parent != Path("."):
        return p
    return STATE_DIR / p.name


# --------------------------------------------------------------------------- #
# Ledger (idempotency)                                                        #
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


def _extract_usage(usage) -> dict:
    """Normalize an image-API usage object/dict to a compact token record."""
    if usage is None:
        return {}
    if hasattr(usage, "model_dump"):
        try:
            usage = usage.model_dump()
        except Exception:  # noqa: BLE001
            usage = {}
    if not isinstance(usage, dict):
        return {}
    return {
        "input_tokens": usage.get("input_tokens"),
        "output_tokens": usage.get("output_tokens"),
        "total_tokens": usage.get("total_tokens"),
    }


def write_run_report(path: Path, record: dict) -> None:
    """Append one run summary as a JSONL line (cross-run history)."""
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(record, ensure_ascii=False) + "\n")
    except OSError:
        pass


# --------------------------------------------------------------------------- #
# Cost                                                                        #
# --------------------------------------------------------------------------- #

def _size_class(size: str) -> str:
    return "sq" if size.strip().lower() in ("1024x1024", "auto") else "wide"


def price_per_image(model: str, quality: str, size: str, batch: bool) -> float | None:
    q = "medium" if quality == "auto" else quality
    tbl = PRICE_TABLE.get(model, {}).get(q)
    if not tbl:
        return None
    base = tbl[_size_class(size)]
    return base * (BATCH_MULTIPLIER if batch else 1.0)


# --------------------------------------------------------------------------- #
# Units                                                                       #
# --------------------------------------------------------------------------- #

@dataclass
class Unit:
    """A single image job: one entry, one variant."""
    entry: Entry
    variant: int


def build_units(entries: list[Entry], variants: int, ledger: dict,
                out_root: Path, force: bool, quality: str, style: str,
                max_units: int | None = None) -> tuple[list[Unit], int]:
    """Expand entries × variants into jobs, skipping ones already done.

    --max caps the count AFTER the skip pass, so it limits fresh work only.
    """
    units: list[Unit] = []
    skipped = 0
    for e in entries:
        for v in range(1, variants + 1):
            key = e.ledger_key(v)
            done = ledger.get(key, {}).get("status") == "done"
            on_disk = e.out_path(out_root, v, quality, style).exists()
            if not force and (done or on_disk):
                skipped += 1
                continue
            units.append(Unit(e, v))
    if max_units is not None and len(units) > max_units:
        units = units[:max_units]
    return units, skipped


# --------------------------------------------------------------------------- #
# Validation + confirmation (the Aim-Twice gates)                             #
# --------------------------------------------------------------------------- #

def validate_run(args) -> list[str]:
    """Return a list of hard errors. Empty means cleared to proceed."""
    errs: list[str] = []

    size = args.size.strip().lower()
    if size not in STANDARD_SIZES:
        if not re.fullmatch(r"\d+x\d+", size):
            errs.append(f"--size '{args.size}' is not WxH or a standard size")
        else:
            w, h = (int(x) for x in size.split("x"))
            if w % 16 or h % 16:
                errs.append(f"--size {w}x{h}: gpt-image-2 needs both sides "
                            f"divisible by 16")
            ar = w / h
            if not (1 / 3 <= ar <= 3):
                errs.append(f"--size {w}x{h}: aspect must be between 1:3 and 3:1")

    if not (1 <= args.variants <= 10):
        errs.append("--variants must be between 1 and 10")

    if getattr(args, "max", None) is not None and args.max < 1:
        errs.append("--max must be >= 1")

    if args.background == "transparent" and args.output_format == "jpeg":
        errs.append("--background transparent requires --output-format png or "
                    "webp (jpeg has no alpha)")

    return errs


def confirm_spend(n_units: int, ppi: float | None, batch: bool,
                  assume_yes: bool) -> bool:
    """Show the bill and gate on a y/N unless --yes. Refuse non-interactive."""
    label = "BATCH" if batch else "SYNC"
    est = f"~${ppi * n_units:.2f}" if ppi is not None else "UNKNOWN (no price row)"
    print(GOLD(f"  ⚠ About to generate {n_units} image(s) via {label}. "
               f"Estimated spend: {est}"))
    if assume_yes:
        print(DIM("    --yes set; proceeding without prompt."))
        return True
    if not sys.stdin.isatty():
        print(RED("    Non-interactive shell and --yes not set — refusing to "
                  "spend. Aborting."))
        return False
    try:
        ans = input("    Proceed with the spend? [y/N] ").strip().lower()
    except (EOFError, KeyboardInterrupt):
        print()
        return False
    return ans in ("y", "yes")


# --------------------------------------------------------------------------- #
# Mode: plan                                                                  #
# --------------------------------------------------------------------------- #

def _resolve_entries(args) -> tuple[list[Entry], list[str]] | None:
    """Shared load + collections + only resolution. None on hard failure."""
    libs = Path(args.libs)
    if not libs.is_dir():
        print(RED(f"  --libs path is not a directory: {libs}"))
        return None
    mds = list(libs.glob("*_prompts.md"))
    if not mds:
        print(RED(f"  No *_prompts.md files found in {libs}"))
        return None
    entries = load_all(libs, _split_csv(args.collections),
                       getattr(args, "style", None))
    unmatched: list[str] = []
    only = _split_csv(getattr(args, "only", None))
    if only:
        entries, unmatched = apply_only(entries, only)
    return entries, unmatched


def cmd_plan(args) -> int:
    resolved = _resolve_entries(args)
    if resolved is None:
        return 1
    entries, unmatched = resolved

    errs = validate_run(args)
    if errs:
        print(RED("  Preflight errors:"))
        for e in errs:
            print(RED(f"    • {e}"))
        return 1
    if unmatched:
        print(WARN(f"  ⚠ --only tokens matched nothing: {', '.join(unmatched)}"))
    if not entries:
        print(RED("  No entries selected. Check --collections / --only."))
        return 1

    out_root = Path(args.out)
    ledger = load_ledger(resolve_state_path(args.ledger))
    units, skipped = build_units(entries, args.variants, ledger, out_root,
                                 args.force, args.quality, args.style,
                                 getattr(args, "max", None))

    by_gallery: dict[str, int] = {}
    for e in entries:
        by_gallery[e.gallery] = by_gallery.get(e.gallery, 0) + 1

    print(GOLD("═══ BEASTIQUE Render Forge · PLAN (dry-run, no spend) ═══"))
    print(f"  libraries dir .... {Path(args.libs)}")
    print(f"  entries selected . {len(entries)} across {len(by_gallery)} galleries")
    for g in sorted(by_gallery):
        print(DIM(f"      {g:<11} {by_gallery[g]:>3}"))
    print(f"  variants/prompt .. {args.variants}")
    cap = f"  (capped at {args.max})" if getattr(args, "max", None) else ""
    print(f"  to generate ...... {len(units)}  ({skipped} skipped — already done){cap}")
    print()
    print(GOLD("  Render settings"))
    print(f"      style .......... {args.style}  →  <gallery>-beasts/{args.style}/{args.quality}/")
    print(f"      model .......... {args.model}")
    print(f"      quality ........ {args.quality}")
    print(f"      size ........... {args.size}")
    print(f"      background ..... {args.background}")
    print(f"      output format .. {args.output_format}")
    print()

    ppi_sync = price_per_image(args.model, args.quality, args.size, batch=False)
    ppi_batch = price_per_image(args.model, args.quality, args.size, batch=True)
    print(GOLD("  Cost estimate (INDICATIVE — verify live before large runs)"))
    if ppi_sync is None:
        print(WARN(f"      No price row for {args.model}/{args.quality}; "
                   f"cannot estimate."))
    else:
        nu = len(units)
        print(f"      per image ...... sync ${ppi_sync:.4f}   batch ${ppi_batch:.4f}")
        print(f"      this run ({nu:>3}) . " + OK(f"sync ${ppi_sync*nu:6.2f}") +
              "   " + OK(f"batch ${ppi_batch*nu:6.2f}"))
    print()

    sample = entries[0]
    ap = sample.assembled_prompt()
    print(GOLD(f"  Sample assembled prompt — {sample.bq_id} · {sample.name}"))
    print(DIM(f"      {len(ap)} chars (limit 32000); negative folded in: "
              f"{'yes' if sample.negative else 'no'}"))
    print()
    print(OK("  Plan complete. Nothing was generated and no credits were spent."))
    return 0


# --------------------------------------------------------------------------- #
# Mode: sync                                                                  #
# --------------------------------------------------------------------------- #

def _make_client():
    try:
        from openai import OpenAI
    except ImportError:
        sys.exit(RED("openai SDK not installed. Run via `uv run` or "
                     "`pip install openai`."))
    if not os.environ.get("OPENAI_API_KEY"):
        sys.exit(RED("OPENAI_API_KEY is not set in the environment."))
    return OpenAI()


def _gen_one(client, unit: Unit, args) -> tuple[Unit, bytes | None, str, dict]:
    """Generate one image with retry/backoff+jitter.

    Returns (unit, bytes|None, err, metrics) where metrics is
    {"secs": float, "retries": int, "tokens": {input/output/total}}.
    """
    from openai import APIError, RateLimitError, APITimeoutError
    prompt = unit.entry.assembled_prompt()
    kwargs = dict(
        model=args.model, prompt=prompt, n=1, size=args.size,
        quality=args.quality, output_format=args.output_format,
        background=args.background, moderation="auto",
    )
    delay = 2.0
    retries = 0
    t0 = time.perf_counter()
    for _ in range(5):
        try:
            resp = client.images.generate(**kwargs)
            secs = round(time.perf_counter() - t0, 2)
            data = base64.b64decode(resp.data[0].b64_json)
            metrics = {"secs": secs, "retries": retries,
                       "tokens": _extract_usage(getattr(resp, "usage", None))}
            return unit, data, "", metrics
        except (RateLimitError, APITimeoutError):
            retries += 1
            time.sleep(delay + random.uniform(0, 1))
            delay = min(delay * 2, 30)
        except APIError as ex:
            return (unit, None, f"APIError: {getattr(ex, 'message', ex)}",
                    {"secs": round(time.perf_counter() - t0, 2),
                     "retries": retries, "tokens": {}})
        except Exception as ex:  # noqa: BLE001
            return (unit, None, f"{type(ex).__name__}: {ex}",
                    {"secs": round(time.perf_counter() - t0, 2),
                     "retries": retries, "tokens": {}})
    return (unit, None, "exhausted retries (rate limit / timeout)",
            {"secs": round(time.perf_counter() - t0, 2),
             "retries": retries, "tokens": {}})


def cmd_sync(args) -> int:
    resolved = _resolve_entries(args)
    if resolved is None:
        return 1
    entries, unmatched = resolved
    errs = validate_run(args)
    if errs:
        print(RED("  Preflight errors:"))
        for e in errs:
            print(RED(f"    • {e}"))
        return 1
    if unmatched:
        print(WARN(f"  ⚠ --only tokens matched nothing: {', '.join(unmatched)}"))
    if not entries:
        print(RED("  No entries selected."))
        return 1

    out_root = Path(args.out)
    ledger_path = resolve_state_path(args.ledger)
    ledger = load_ledger(ledger_path)
    units, skipped = build_units(entries, args.variants, ledger, out_root,
                                 args.force, args.quality, args.style,
                                 getattr(args, "max", None))

    print(GOLD("═══ BEASTIQUE Render Forge · SYNC (live) ═══"))
    print(f"  to generate: {len(units)}   skipped: {skipped}   workers: {args.workers}")
    if not units:
        print(OK("  Nothing to do — everything is already forged."))
        return 0

    ppi = price_per_image(args.model, args.quality, args.size, batch=False)
    if not confirm_spend(len(units), ppi, batch=False, assume_yes=args.yes):
        print(DIM("  Aborted — no spend."))
        return 0

    client = _make_client()
    done = errc = 0
    failed_ids: list[str] = []
    interrupted = False
    sum_secs = 0.0
    sum_out_tokens = 0
    sum_retries = 0
    wall0 = time.perf_counter()
    pool = cf.ThreadPoolExecutor(max_workers=args.workers)
    try:
        futs = {pool.submit(_gen_one, client, u, args): u for u in units}
        for fut in cf.as_completed(futs):
            unit, data, err, metrics = fut.result()
            key = unit.entry.ledger_key(unit.variant)
            sum_secs += metrics.get("secs", 0) or 0
            sum_retries += metrics.get("retries", 0) or 0
            sum_out_tokens += (metrics.get("tokens") or {}).get("output_tokens") or 0
            if data is None:
                errc += 1
                failed_ids.append(key)
                ledger[key] = {"status": "error", "error": err,
                               "secs": metrics.get("secs"),
                               "retries": metrics.get("retries"),
                               "ts": int(time.time())}
                print(RED(f"  ✗ {unit.entry.bq_id} v{unit.variant}: {err}"))
            else:
                path = unit.entry.out_path(out_root, unit.variant,
                                           args.quality, args.style)
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(data)
                done += 1
                ledger[key] = {"status": "done", "file": str(path),
                               "model": args.model, "quality": args.quality,
                               "size": args.size, "secs": metrics.get("secs"),
                               "retries": metrics.get("retries"),
                               "tokens": metrics.get("tokens"),
                               "ts": int(time.time())}
                tok = (metrics.get("tokens") or {}).get("output_tokens")
                tok_s = f" · {tok} tok" if tok else ""
                print(OK(f"  ✓ {unit.entry.bq_id} v{unit.variant} → {path.name}")
                      + DIM(f"  ({metrics.get('secs')}s{tok_s})"))
            if (done + errc) % 10 == 0:
                save_ledger(ledger_path, ledger)
    except KeyboardInterrupt:
        interrupted = True
        print()
        print(WARN("  Interrupted — saving ledger and shutting down cleanly…"))
    finally:
        pool.shutdown(wait=False, cancel_futures=True)
        save_ledger(ledger_path, ledger)

    wall = round(time.perf_counter() - wall0, 1)
    est_cost = round(ppi * done, 4) if ppi is not None else None
    write_run_report(resolve_state_path(args.runs_log), {
        "ts": int(time.time()), "iso": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "mode": "sync", "model": args.model, "quality": args.quality,
        "size": args.size, "background": args.background,
        "variants": args.variants, "only": args.only,
        "collections": args.collections, "requested": len(units),
        "generated": done, "errors": errc, "interrupted": interrupted,
        "wall_secs": wall, "sum_gen_secs": round(sum_secs, 1),
        "retries": sum_retries, "output_tokens": sum_out_tokens,
        "est_cost_usd": est_cost,
    })

    print()
    print(GOLD(f"  {'Stopped' if interrupted else 'Done'}: {done} written, "
               f"{errc} errors  ·  {wall}s wall"))
    if sum_out_tokens:
        print(DIM(f"  output tokens: {sum_out_tokens}  ·  retries: {sum_retries}"))
    if est_cost is not None:
        print(DIM(f"  est. spend this run: ~${est_cost:.2f}  "
                  f"(authoritative figure: OpenAI dashboard)"))
    print(DIM(f"  ledger: {ledger_path}  ·  run log: {resolve_state_path(args.runs_log)}"))
    if failed_ids:
        print(DIM("  Failed (retry with --force or just re-run): "
                  + ", ".join(failed_ids[:12])
                  + (" …" if len(failed_ids) > 12 else "")))
    return 0 if errc == 0 and not interrupted else 2


# --------------------------------------------------------------------------- #
# Mode: batch (build + upload + submit)                                       #
# --------------------------------------------------------------------------- #

def cmd_batch(args) -> int:
    resolved = _resolve_entries(args)
    if resolved is None:
        return 1
    entries, unmatched = resolved
    errs = validate_run(args)
    if errs:
        print(RED("  Preflight errors:"))
        for e in errs:
            print(RED(f"    • {e}"))
        return 1
    if unmatched:
        print(WARN(f"  ⚠ --only tokens matched nothing: {', '.join(unmatched)}"))
    if not entries:
        print(RED("  No entries selected."))
        return 1

    out_root = Path(args.out)
    ledger_path = resolve_state_path(args.ledger)
    ledger = load_ledger(ledger_path)
    units, skipped = build_units(entries, args.variants, ledger, out_root,
                                 args.force, args.quality, args.style,
                                 getattr(args, "max", None))
    if not units:
        print(OK("  Nothing to submit — everything is already forged."))
        return 0

    jsonl_path = (Path(args.batch_input) if args.batch_input
                  else Path(args.libs) / "forge_batch_input.jsonl")
    with jsonl_path.open("w", encoding="utf-8") as fh:
        for u in units:
            body = {
                "model": args.model, "prompt": u.entry.assembled_prompt(),
                "n": 1, "size": args.size, "quality": args.quality,
                "output_format": args.output_format,
                "background": args.background, "moderation": "auto",
            }
            fh.write(json.dumps({
                "custom_id": u.entry.ledger_key(u.variant),
                "method": "POST", "url": "/v1/images/generations", "body": body,
            }, ensure_ascii=False) + "\n")

    print(GOLD("═══ BEASTIQUE Render Forge · BATCH (submit) ═══"))
    print(f"  requests: {len(units)}   skipped: {skipped}")
    print(f"  JSONL: {jsonl_path}")
    if args.no_submit:
        print(OK("  --no-submit set: JSONL written, not uploaded."))
        return 0

    ppi = price_per_image(args.model, args.quality, args.size, batch=True)
    if not confirm_spend(len(units), ppi, batch=True, assume_yes=args.yes):
        print(DIM("  Aborted — JSONL written but not submitted."))
        return 0

    client = _make_client()
    up = client.files.create(file=open(jsonl_path, "rb"), purpose="batch")
    batch = client.batches.create(
        input_file_id=up.id, endpoint="/v1/images/generations",
        completion_window="24h",
        metadata={"project": "BEASTIQUE", "kind": "linocut-forge"},
    )
    for u in units:
        ledger[u.entry.ledger_key(u.variant)] = {
            "status": "submitted", "batch_id": batch.id, "ts": int(time.time())}
    save_ledger(ledger_path, ledger)
    print(OK(f"  Submitted. batch id: {batch.id}  status: {batch.status}"))
    print(DIM(f"  Fetch when complete:  uv run bq_linocut_forge.py fetch "
              f"--batch-id {batch.id} --libs {args.libs} "
              f"--style {args.style} --quality {args.quality}"))
    return 0


# --------------------------------------------------------------------------- #
# Mode: fetch (poll + download + write)                                       #
# --------------------------------------------------------------------------- #

def cmd_fetch(args) -> int:
    if not args.batch_id:
        print(RED("fetch requires --batch-id."))
        return 1
    libs = Path(args.libs)
    entries = load_all(libs, None, getattr(args, "style", None))
    by_key = {}
    for e in entries:
        for v in range(1, 11):
            by_key[e.ledger_key(v)] = (e, v)

    out_root = Path(args.out)
    ledger_path = resolve_state_path(args.ledger)
    ledger = load_ledger(ledger_path)
    client = _make_client()

    batch = client.batches.retrieve(args.batch_id)
    print(GOLD("═══ BEASTIQUE Render Forge · FETCH ═══"))
    print(f"  batch {args.batch_id}: {batch.status}")
    counts = getattr(batch, "request_counts", None)
    if counts:
        print(DIM(f"  completed {counts.completed}/{counts.total}, "
                  f"failed {counts.failed}"))
    if batch.status not in ("completed", "failed", "cancelled", "expired"):
        print(DIM("  Not finished yet. Re-run fetch later."))
        return 0
    if not getattr(batch, "output_file_id", None):
        print(RED("  No output file (batch may have wholly failed)."))
        if getattr(batch, "error_file_id", None):
            print(DIM(client.files.content(batch.error_file_id).text[:1000]))
        return 2

    content = client.files.content(batch.output_file_id).text
    done = errc = 0
    sum_out_tokens = 0
    for line in content.splitlines():
        if not line.strip():
            continue
        rec = json.loads(line)
        cid = rec.get("custom_id", "")
        ent = by_key.get(cid)
        resp = rec.get("response") or {}
        status = resp.get("status_code")
        body = resp.get("body") or {}
        if ent is None or status != 200 or "data" not in body:
            errc += 1
            ledger[cid] = {"status": "error",
                           "error": json.dumps(body)[:300], "ts": int(time.time())}
            print(RED(f"  ✗ {cid}: status {status}"))
            continue
        e, v = ent
        path = e.out_path(out_root, v, args.quality, args.style)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(base64.b64decode(body["data"][0]["b64_json"]))
        done += 1
        usage = _extract_usage(body.get("usage"))
        sum_out_tokens += (usage or {}).get("output_tokens") or 0
        ledger[cid] = {"status": "done", "file": str(path),
                       "batch_id": args.batch_id, "tokens": usage,
                       "ts": int(time.time())}
        print(OK(f"  ✓ {cid} → {path.name}"))
    save_ledger(ledger_path, ledger)
    write_run_report(resolve_state_path(args.runs_log), {
        "ts": int(time.time()), "iso": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "mode": "fetch", "batch_id": args.batch_id,
        "generated": done, "errors": errc, "output_tokens": sum_out_tokens,
    })
    print()
    print(GOLD(f"  Fetched: {done} written, {errc} errors."))
    if sum_out_tokens:
        print(DIM(f"  output tokens: {sum_out_tokens}"))
    return 0 if errc == 0 else 2


# --------------------------------------------------------------------------- #
# Mode: status                                                                #
# --------------------------------------------------------------------------- #

def cmd_status(args) -> int:
    ledger_path = resolve_state_path(args.ledger)
    ledger = load_ledger(ledger_path)
    print(GOLD("═══ BEASTIQUE Render Forge · STATUS ═══"))
    print(f"  ledger: {ledger_path}")
    if not ledger:
        print(DIM("  Ledger is empty — nothing forged yet."))
        return 0

    status_counts: dict[str, int] = {}
    gallery_done: dict[str, int] = {}
    errors: list[str] = []
    for key, rec in ledger.items():
        st = rec.get("status", "?")
        status_counts[st] = status_counts.get(st, 0) + 1
        if st == "error":
            errors.append(key)
        if st == "done":
            m = re.match(r"BQ-LINO-([A-Z]+)-", key)
            if m:
                g = CLASS_TO_GALLERY.get(m.group(1), m.group(1).lower())
                gallery_done[g] = gallery_done.get(g, 0) + 1

    print()
    print(GOLD("  By status"))
    for st in sorted(status_counts):
        col = OK if st == "done" else (RED if st == "error" else DIM)
        print("    " + col(f"{st:<10} {status_counts[st]:>4}"))
    if gallery_done:
        print()
        print(GOLD("  Done by gallery"))
        for g in sorted(gallery_done):
            print(DIM(f"    {g:<11} {gallery_done[g]:>4}"))
    if errors:
        print()
        print(RED(f"  {len(errors)} error(s): ") + DIM(", ".join(errors[:12])
              + (" …" if len(errors) > 12 else "")))
    return 0


# --------------------------------------------------------------------------- #
# Helpers / CLI                                                                #
# --------------------------------------------------------------------------- #

def _split_csv(s: str | None) -> list[str] | None:
    if not s:
        return None
    return [x for x in (p.strip() for p in s.split(",")) if x]


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="bq_linocut_forge.py",
        description="BEASTIQUE multi-style bulk image-generation forge (GPT Image API).",
    )
    sub = p.add_subparsers(dest="mode", required=True)

    def common(sp, *, spend: bool):
        sp.add_argument("--libs", required=True, help="Folder of *_prompts.md")
        sp.add_argument("--style", default="linocut",
                        choices=list(STYLE_CODE.keys()),
                        help="Art style: filters libraries to BQ-<STYLE>-* and "
                             "writes to studio/collections/<gallery>-beasts/<style>/")
        sp.add_argument("--collections", default=None,
                        help="Comma list of gallery slugs to include")
        sp.add_argument("--only", default=None,
                        help="Comma list of beast ids (BQ-LINO-INS-010 or INS-010)")
        sp.add_argument("--model", default="gpt-image-2")
        sp.add_argument("--quality", default="medium",
                        choices=["low", "medium", "high", "auto"])
        sp.add_argument("--size", default="1536x1024")
        sp.add_argument("--background", default="opaque",
                        choices=["opaque", "transparent", "auto"])
        sp.add_argument("--output-format", default="png",
                        choices=["png", "webp", "jpeg"], dest="output_format")
        sp.add_argument("--variants", type=int, default=1)
        sp.add_argument("--max", type=int, default=None,
                        help="Cap this run to N images (after skip)")
        sp.add_argument("--out", default=DEFAULT_OUT, help="Render root")
        sp.add_argument("--ledger", default="forge_ledger.json")
        sp.add_argument("--runs-log", default="forge_runs.jsonl", dest="runs_log",
                        help="JSONL file appended with one summary per run")
        sp.add_argument("--force", action="store_true",
                        help="Regenerate even if ledger/disk already has it")
        if spend:
            sp.add_argument("--yes", action="store_true",
                            help="Skip the spend confirmation prompt")

    sp_plan = sub.add_parser("plan", help="Dry-run: parse + estimate, no spend")
    common(sp_plan, spend=False)
    sp_plan.set_defaults(func=cmd_plan, yes=True)

    sp_sync = sub.add_parser("sync", help="Live concurrent generation")
    common(sp_sync, spend=True)
    sp_sync.add_argument("--workers", type=int, default=4)
    sp_sync.set_defaults(func=cmd_sync)

    sp_batch = sub.add_parser("batch", help="Build + upload + submit a Batch job")
    common(sp_batch, spend=True)
    sp_batch.add_argument("--batch-input", default=None, dest="batch_input")
    sp_batch.add_argument("--no-submit", action="store_true", dest="no_submit",
                          help="Write the JSONL but do not upload/submit")
    sp_batch.set_defaults(func=cmd_batch)

    sp_fetch = sub.add_parser("fetch", help="Download + write a completed Batch")
    sp_fetch.add_argument("--libs", required=True)
    sp_fetch.add_argument("--batch-id", required=True, dest="batch_id")
    sp_fetch.add_argument("--out", default=DEFAULT_OUT)
    sp_fetch.add_argument("--style", default="linocut",
                          choices=list(STYLE_CODE.keys()),
                          help="Art style subdir to route fetched files into; "
                               "match the --style used to build the batch")
    sp_fetch.add_argument("--quality", default="medium",
                          choices=["low", "medium", "high", "auto"],
                          help="Quality subdir to route fetched files into; "
                               "match the --quality used to build the batch")
    sp_fetch.add_argument("--ledger", default="forge_ledger.json")
    sp_fetch.add_argument("--runs-log", default="forge_runs.jsonl", dest="runs_log")
    sp_fetch.set_defaults(func=cmd_fetch)

    sp_status = sub.add_parser("status", help="Summarize the ledger")
    sp_status.add_argument("--ledger", default="forge_ledger.json")
    sp_status.set_defaults(func=cmd_status)

    return p


def main() -> int:
    args = build_parser().parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())