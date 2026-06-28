<!--
✒ Metadata
    - Title: Render Pipeline & Style Guide (BEASTIQUE Edition - v1.1)
    - File Name: PIPELINE.md
    - Relative Path: docs/PIPELINE.md
    - Artifact Type: docs
    - Version: 1.1.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Restructure refresh.
      Repointed every path to the pro layout (studio/prompts, studio/collections,
      studio/state); the deployable site now lives under site/. Dropped the
      retired material + material-classic styles — the roster is seven styles.
    - 1.0.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Initial pipeline + style
      guide covering the forge → trace flow and the style roster.

✒ Description:
    The single reference for the BEASTIQUE render pipeline: how a prompt becomes a
    PNG (forge) and then a vector SVG (trace), the nine art styles and their trace
    behavior, and the folder/naming conventions that hold it all together. Read
    this before adding a style, a species, or a render run.

✒ Key Features:
    - The prompt-library → forge → trace flow, end to end.
    - Style roster: kind, id code, trace weight, library, and output folder.
    - The collections folder convention and the node budget.
    - Where bookkeeping (ledgers/run logs) lives and why.

✒ Other Important Information:
    - Dependencies: tools/bq_linocut_forge.py (v1.7.0+), tools/bq_linocut_trace.py
      (v1.5.0+), the system `potrace` binary, Pillow, and the OpenAI SDK (forge).
    - Node counts are measured at the production trace defaults; figures move as
      libraries and renders change.
---------
-->

# BEASTIQUE — Render Pipeline & Style Guide

How a prompt becomes art, the nine styles, and the conventions that keep it tidy.

## The Flow

```text
studio/prompts/<style>/*_prompts.md    (prompt libraries, BQ-<STYLE>-<CLS>-<NUM>)
        │  bq_linocut_forge.py  (BQ Render Forge) — GPT Image API
        ▼
studio/collections/<gallery>-beasts/<style>/<quality>/<slug>_<style>…NN.png  (renders)
        │  bq_linocut_trace.py — Potrace, single-path output
        ▼
studio/collections/<gallery>-beasts/<style>/<quality>/traces/<name>.svg      (vectors)
```

- **Forge** reads a style's library, filters by `--style`, and writes PNGs into
  the house tree. Bookkeeping (ledger + run log) goes to `studio/state/forge/`.
- **Trace** walks the tree for `*-bw_*.png` renders and writes one consolidated
  `<path>` SVG into the sibling `traces/` folder. Bookkeeping →
  `studio/state/trace/`.
- Both tools anchor their bookkeeping to the project root, so they behave the
  same no matter which directory you run them from.

## Folder Convention

```text
studio/collections/<gallery>-beasts/<style>/<quality>/
├── <slug>_<style>-bw_01.png     ← render (read-only input to the tracer)
└── traces/
    └── <slug>_<style>-bw_01.svg ← vector product (single <path>)
```

- **Galleries (5):** `aquatic` · `avian` · `insecta` · `mammalian` · `reptilian`.
  The forge maps a BQ id's class segment to a gallery: MAM→mammalian, AQU→aquatic,
  AVI→avian, REP/AMP→reptilian, INS/ARA→insecta. Filing is by ecology (the
  ~90%-submerged rule files marine reptiles/fish under aquatic).
- **Quality:** `medium` · `high` (the forge `--quality`).
- **Hand work** lives in `studio/workbench/` — never traced, never forged.

## Style Roster

Seven styles. "B&W trace" styles vectorize cleanly; the raster style does not.

| Style | Code | Kind | Trace weight (mean · range) | Library |
| ----- | ---- | ---- | --------------------------- | ------- |
| silhouette | SILH | B&W trace | **135** · 36–307 | `silhouette/` |
| stencil | STEN | B&W trace | **227** · 58–645 | `stencil/` |
| line-art | LINE | B&W trace | **506** · 149–1,096 | `line-art/` |
| low-poly | LOPO | B&W trace | **957** · 168–1,919 | `low-poly/` |
| geo-line | GEOL | B&W trace | ultra-light (straight segments) | `geo-line/` |
| linocut | LINO | B&W trace | **~7–13k** (heavy, established) | `linocut/` (5 libs) |
| woodcut | WOOD | raster-only | ~23k — **do not trace** | `woodcut/` |

- **Trace-light champions** (silhouette, stencil, line-art, low-poly, geo-line)
  all land in the ideal band and never freeze Inkscape.
- **woodcut** renders are kept as raster only — its hatching traces to ~20k+
  nodes. Trace per-style (e.g. `--glob "**/*_silhouette-bw_*.png"`) so a
  full-tree trace never pulls woodcut in.

## Node Budget

Measured at the production trace defaults. Keep traces here:

- **1–5k** ideal · **6–8k** fine · **9–10k** pushing it · **>10k** rejected.

Every flat-fill B&W style sits far under the ceiling; linocut runs hot but is the
established baseline; woodcut is out of bounds (raster only).

## Prompt Libraries

- One folder per style under `studio/prompts/<style>/`, globbed as `*_prompts.md`.
- Ids: `BQ-<STYLE>-<CLASS>-<NUM>` (e.g. `BQ-LOPO-MAM-002`). The forge filters a
  run to the requested `--style`'s code.

## Typical Commands

```powershell
# Dry-run (no spend) — always plan first
uv run tools/bq_linocut_forge.py plan --libs studio/prompts/silhouette --style silhouette

# Forge a style (confirms the spend; --yes to skip)
uv run tools/bq_linocut_forge.py sync --libs studio/prompts/silhouette --style silhouette --quality medium --ledger forge_ledger_silhouette-medium.json --runs-log forge_runs_silhouette-medium.jsonl

# Trace one style's renders (skips woodcut by being specific)
uv run tools/bq_linocut_trace.py run --root studio/collections --glob "**/*_silhouette-bw_*.png"
```
