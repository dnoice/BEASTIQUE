<!--
✒ Metadata
    - Title: Directory Reorganization Audit (BEASTIQUE Edition - v1.1)
    - File Name: REORG-AUDIT.md
    - Relative Path: docs/REORG-AUDIT.md
    - Artifact Type: docs
    - Version: 1.1.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    A thorough pre-flight audit for restructuring the BEASTIQUE root into a
    professional, scalable layout. Maps every moving part of the engine — the
    website, the art-production pipeline, the tooling, and the docs — and every
    path coupling a reorg would touch, then proposes a target structure and a
    phased, low-risk migration. NOTHING is moved by this document; it is the plan.

✒ Key Features:
    - Full current-state inventory (sizes, file counts, purpose) of every root item.
    - The complete coupling/risk map: frontend paths, tool-hardcoded paths, doc
      cross-references, and the asset web-vs-raw split.
    - A pro-grade target structure with rationale and a current → target mapping.
    - A phased migration plan with the exact code edits, verification, and rollback.

✒ Other Important Information:
    - Status: EXECUTED 2026-06-27 — migration complete; retained as the record.
    - Measured 2026-06-27 from the working tree; collections/ is live (forge
      running), so its counts drift. Sizes are logical (st_size), not on-disk.
---------
-->

# BEASTIQUE — Directory Reorganization Audit

A pre-flight map of the whole engine and a professional restructure plan.
**Status: EXECUTED 2026-06-27** — the migration described here has been carried
out (see the completion note at the bottom). Retained as the record of the move.

## 1. Executive Summary

The root mixes **three unrelated concerns** with no grouping, which is the core
problem: a deployable **website**, an art-**production pipeline**, and project
**docs** all sit side by side. The specific smells you flagged:

- `categories/`, `collections/`, `species/` adjacent at root — two are website,
  one is pipeline output; the naming collision invites mistakes.
- The frontend is scattered: `css/`, `js/`, `index.html` at root, `assets/` off
  on its own, `data/` loose.

**The good news (de-risk headline):** the website is **100% relative-path**
(no root-absolute `/…` links anywhere), so the entire site can move *as a unit*
into one folder and every internal link keeps working. The pipeline tree
(`collections/`, `pipeline-state/`, `docs/prompts/`) is **not referenced by the
site at all**, and the only code that hardcodes these paths is a short, known
set of defaults in the two Python tools.

**Recommended target:** four clean domains — `site/` (deploy), `studio/`
(production), `tools/` (CLIs), `docs/` (project docs) — detailed in §4.

## 2. Current-State Inventory

Measured 2026-06-27. Total: **6,970 files · 527 dirs · 24.8 GB logical**.

| Root item | Logical | Files | Domain | Notes |
| --------- | ------- | ----- | ------ | ----- |
| `assets/` | 24.1 GB | 5,832 | mixed | web media **and** raw art — needs splitting (§3.4) |
| `collections/` | 939 MB | 862 | pipeline | forge renders + traces (live; growing) |
| `species/` | 375 MB | 152 | website | self-contained per-species mini-sites |
| `docs/` | 1.0 MB | 21 | mixed | project docs **and** the prompt-libs + a stray jsonl |
| `data/` | 0.6 MB | 42 | website | `categories.json`, `species.json`, `color-palettes/` |
| `pipeline-state/` | 0.3 MB | 20 | pipeline | forge/trace ledgers + run logs |
| `categories/` | 0.2 MB | 5 | website | 5 category landing pages |
| `js/` | 0.1 MB | 12 | website | landing + modules |
| `css/` | 0.1 MB | 4 | website | global/landing/category + components |
| `tools/` | 0.1 MB | 5 | tooling | the Python CLIs |
| `mockups/` | <0.1 MB | 3 | scratch | design experiments (sos-frame, species-v2) |
| root files | — | 8 | mixed | `index.html` (web), `favicon.ico`/`robots.txt` (web), `README.md`/`LICENSE`/`BLUEPRINT-V2.md`/`PROJECT-AUDIT.md` (docs), `desktop.ini` (OneDrive) |

### 2.1 `assets/` breakdown (the 24 GB)

| Subdir | Logical | Files | Web-referenced? |
| ------ | ------- | ----- | --------------- |
| `holding-area/` | 17.4 GB | 4,494 | **No** — staging dump |
| `custom-designs/` | 4.0 GB | 348 | No (2 incidental refs) |
| `images/` | 2.1 GB | 505 | **Yes** — 281 site refs |
| `mini-series/` | 371 MB | 424 | No (+ has `node_modules/`) |
| `logos/` | 183 MB | 4 | **Yes** — 5 site refs |
| `homepage-assets/` | 113 MB | 50 | **No** — 0 refs |
| `prompts/` | 0.8 MB | 4 | No |
| `icons/` | 0.1 MB | 3 | No |

Only **`images/` and `logos/`** are served by the site. Everything else is raw
working art.

### 2.2 `docs/` is two things at once

Project docs (`BLUEPRINT-V2.md` at root, `PROJECT-AUDIT.md`, `PIPELINE.md`,
`PROJECT-TREE.md`, `beastique-dna.md`, `BEASTIQUE_RESONANT_RED_LIST_ATLAS_TOP15.md`,
`pipelines/`) **plus** the entire production prompt-library tree
(`docs/prompts/<style>/` + the two Endangered-25 codices) **plus** a stray
`docs/prompts/forge_manifest-medium.jsonl`. The prompt-libs are production
inputs, not docs.

### 2.3 Embedded HTML (not site pages)

Beyond the real site pages, HTML is buried inside assets and species folders
(`assets/custom-designs/typography/.../specimen.html`,
`assets/holding-area/data/index.html`, `species/*/assets/.../*.html`, `mockups/`).
These are experiments/sub-assets and **must travel with their parent folder**,
never treated as top-level pages.

### 2.4 `species/` deep-dive

Each species under `species/` is a **fully self-contained mini-site**: its own
`css/` (≈12 component files behind `main.css`), its own `js/main.js`, and its own
`assets/` + `docs/`. The page loads **only local** `css/main.css` + `js/main.js`
— **no dependency on root `css/`, `js/`, or `assets/`**. The only outward links
are navigational: `../../index.html` (home, ×8) and `../../categories/<cat>.html`
(×4). Nothing reaches up for resources.

A species folder is therefore **portable** — it works wherever it sits, as long
as a home page and the category pages live two levels up. The unit-move keeps
that true (`site/index.html`, `site/categories/`, `site/species/<n>/`).

| Species | Page? | Files | Notes |
| ------- | ----- | ----- | ----- |
| amur-leopard | built | 46 | full page (css/js/assets/docs) |
| beluga-sturgeon | built | 31 | full page |
| kākāpō | built | 56 | full page + 3 embedded data-viz HTML; **non-ASCII folder name (ā)** |
| butterfly | **stub** | 4 | **no `index.html`** — only asset experiments |
| _template | scaffold | 15 | static copy + `SPECIES-GUIDE.md`; no token placeholders (copy-and-edit) |
| assets/ | **empty** | 0 | stray empty `species/assets/svg-icons-elements/` |

The site's data layer is `data/`: `species.json` (per-species `id`, `category`,
`conservation_status`, `thumbnail: assets/images/<cat>/…`, `page: species/<id>/`,
`hasPage`) and `categories.json` (per-category colors/copy). These JSON hold
**relative** paths the landing/category JS resolves against the loading page (see
§3.1).

## 3. Coupling & Risk Map (the part that matters)

### 3.1 Frontend path coupling — LOW risk

All site links are **relative**. Aggregate references across every `.html`:
`assets/` ×279 · `css/` ×16 · `js/` ×10 · `species/` ×5 · `categories/` ×5.
Depth pattern:

- `index.html` (root) → `css/…`, `js/…`, `assets/…`, `species/<n>/`, `categories/<n>.html`
- `categories/*.html` (1 deep) → `../css/…`, `../assets/…`, sibling `*.html`, `../index.html`
- `species/<n>/index.html` (2 deep) → local `css/main.css`, local `assets/…`, `../../index.html`, `../../categories/<n>.html`
- `data/` is JS-fetched; `categories.json` / `species.json` are consumed by the
  landing/category JS and carry **relative** paths (`assets/images/<cat>/…`,
  `page: species/<id>/`) that resolve against the loading page. The unit-move
  preserves every relative position, so these keep resolving unchanged.
- `species/` pages are self-contained (local css/js/assets); their only outward
  links are `../../index.html` and `../../categories/<cat>.html` (see §2.4).

**Consequence:** if `index.html`, `css/`, `js/`, `assets/` (web subset), `data/`,
`categories/`, and `species/` all move **together** into one folder preserving
their relative positions, **every link and fetch keeps resolving**. No HTML/CSS/JS
edits required.

### 3.2 Tool-hardcoded paths — MEDIUM risk (small, known surface)

The only code that bakes in these paths (in `tools/`):

| File · line | Literal | Reorg action |
| ----------- | ------- | ------------ |
| `bq_linocut_forge.py:1144` | `--out default="collections"` | → new collections path |
| `bq_linocut_forge.py:1173` | `--out default="collections"` (fetch) | → new collections path |
| `bq_linocut_trace.py:765` | `--root default="collections"` | → new collections path |
| `bq_linocut_forge.py:474-475` | `PROJECT_ROOT=__file__.parent.parent` · `STATE_DIR=PROJECT_ROOT/"pipeline-state"/"forge"` | → `studio/state/forge` |
| `bq_linocut_trace.py` (mirror) | `STATE_DIR=PROJECT_ROOT/"pipeline-state"/"trace"` | → `studio/state/trace` |

Notes:

- **Keep `tools/` at the root.** `PROJECT_ROOT` is `tools/__file__.parent.parent`;
  if tools move, that anchor breaks. Leaving tools at root keeps it valid.
- `out_path = out_root / "<gallery>-beasts" / style / quality / name` is
  structure-relative and **needs no change** — only the `out_root` default does.
- `--ledger`/`--runs-log` bare names already resolve into `STATE_DIR`, so fixing
  `STATE_DIR` moves the ledgers automatically.
- Minor cleanup worth doing in the same pass: `--out`/`--root` defaults are
  CWD-relative while `STATE_DIR` is project-anchored — make all three
  project-anchored for consistency.

### 3.3 Documentation & header coupling — LOW risk, HIGH tedium

~168 path mentions across `docs/*.md` + root `*.md`. Hotspots: `PIPELINE.md`
(commands + folder map), `PROJECT-TREE.md` (whole tree), the forge/trace docstring
**Examples** and **Command-Line Arguments**, and **17 files carry a `Relative Path:`
header field** (the 2 tools + ~13 prompt-libs + docs) that declares each file's
own path. All must be refreshed post-move. None affect runtime; pure
documentation hygiene.

### 3.4 Asset web-vs-raw split — the one judgment call

- **Web (→ `site/assets/`):** `images/` (2.1 GB), `logos/` (183 MB).
- **Raw (→ `studio/source-art/`):** `holding-area/` (17.4 GB), `custom-designs/`
  (4.0 GB), `mini-series/` (371 MB), `homepage-assets/` (113 MB), `prompts/`,
  `icons/`.

Because the site references `assets/images/…` and `assets/logos/…` relatively,
moving those two into `site/assets/images` and `site/assets/logos` preserves the
refs; the rest carries no web links and moves freely.

## 4. Proposed Target Structure (pro-grade)

Separation of concerns: one folder you can hand to a web host, one for
production, one for tooling, one for docs.

```text
beastique/
├── site/                  # the deployable static site (point a host here)
│   ├── index.html · favicon.ico · robots.txt
│   ├── css/  ·  js/
│   ├── assets/            # web media ONLY  → images/ , logos/
│   ├── data/              # categories.json, species.json, color-palettes/
│   ├── categories/        # category landing pages
│   └── species/           # self-contained per-species mini-sites
├── studio/                # art production (never deployed)
│   ├── prompts/           # ← docs/prompts  (style libraries + Endangered-25 codices)
│   ├── collections/       # ← collections   (forge renders + traces)
│   ├── source-art/        # ← raw art (holding-area, custom-designs, mini-series, homepage-assets, icons)
│   ├── workbench/         # ← collections/_workbench (hand studies)
│   └── state/             # ← pipeline-state (forge/trace ledgers + run logs)
├── tools/                 # the Python CLIs (stays at root — PROJECT_ROOT anchor)
├── docs/                  # project docs ONLY (BLUEPRINT, AUDIT, PIPELINE, TREE, dna, atlas, pipelines/)
├── mockups/               # design experiments  (or fold into studio/sandbox/)
└── README.md · LICENSE · .gitignore · desktop.ini
```

**Why this is the pro move:** `site/` is a clean deploy root (nothing secret or
heavy leaks to the host); `studio/` collects everything that *makes* the art so
it scales as styles/species/collections grow; `tools/` and `docs/` are
unambiguous; the `categories`/`collections`/`species` collision disappears
(two are web under `site/`, one is output under `studio/`).

## 5. Current → Target Mapping

| Current | Target | Coupling impact |
| ------- | ------ | --------------- |
| `index.html`, `favicon.ico`, `robots.txt` | `site/` | none (relative) |
| `css/`, `js/` | `site/css/`, `site/js/` | none (moves with site) |
| `assets/images/`, `assets/logos/` | `site/assets/images/`, `site/assets/logos/` | none (relative refs preserved) |
| `data/` | `site/data/` | none (JS fetch is relative) |
| `categories/` | `site/categories/` | none |
| `species/` | `site/species/` | none (`../../` depth preserved) |
| `assets/holding-area, custom-designs, mini-series, homepage-assets, prompts, icons` | `studio/source-art/` | none (no web refs) |
| `docs/prompts/` | `studio/prompts/` | forge `--libs` paths + docstrings |
| `collections/` | `studio/collections/` | forge `--out` / trace `--root` defaults |
| `collections/_workbench/` | `studio/workbench/` | none |
| `pipeline-state/` | `studio/state/` | `STATE_DIR` in both tools |
| `tools/` | `tools/` (unchanged) | keeps `PROJECT_ROOT` valid |
| `docs/*` (real docs) | `docs/` (unchanged) | refresh path mentions |
| `docs/prompts/forge_manifest-medium.jsonl` | delete or `studio/state/` | stray cruft |

## 6. Phased Migration Plan (execute only after sign-off)

Each phase ends with a verification gate before the next begins.

1. **Phase A — Website → `site/` (safe).** Move `index.html`, `favicon.ico`,
   `robots.txt`, `css/`, `js/`, `data/`, `categories/`, `species/`, and
   `assets/images` + `assets/logos` (as `site/assets/…`) together.
   *Verify:* open `site/index.html`, click through a category and a species page;
   confirm images, css, js, and JSON fetches load. *Rollback:* move back (no
   edits were made).
2. **Phase B — Pipeline → `studio/` + tool edits.** Move `collections/`,
   `docs/prompts/`, `pipeline-state/`, `_workbench/` under `studio/`. Update the
   five tool lines in §3.2 (`--out`/`--root` defaults, both `STATE_DIR`s).
   *Verify:* `forge plan --libs studio/prompts/silhouette --style silhouette`
   resolves 25; `trace plan --root studio/collections` resolves the renders;
   ledgers read from `studio/state/`.
3. **Phase C — Asset split.** Move the six raw `assets/` subdirs to
   `studio/source-art/`. *Verify:* site still loads (raw art was never linked);
   `assets/` no longer at root.
4. **Phase D — Docs, headers, commands.** Refresh the 17 `Relative Path:` fields,
   `PIPELINE.md`, `PROJECT-TREE.md`, and tool docstring examples to the new paths;
   delete the stray jsonl. *Verify:* markdownlint clean; commands in docs match
   reality.
5. **Phase E — Full pipeline smoke.** One `plan` per style + a 1-image
   `sync --max 1` + a trace, end to end on the new paths.
6. **Phase F — `git init` + `.gitignore`.** Now that the tree is final, init and
   ignore the heavy trees (`site/assets/`, `studio/collections/`,
   `studio/source-art/`, `studio/state/`, `species/` heavy media). History starts
   clean on the pro layout.

## 7. Risk Register

- **OneDrive churn:** moves are within OneDrive; large dirs (`source-art/` 21 GB)
  may re-sync. Move during a quiet sync window; verify counts after each phase.
- **Move buried HTML with parents:** the embedded HTML in `assets/`/species must
  ride along with its folder; never relocate it independently.
- **Species depth must be preserved:** species pages use `../../` to reach the
  site root and categories — keep `site/index.html`, `site/categories/`, and
  `site/species/<n>/` at the same relative depth (they all move into `site/`).
- **`tools/` stays at root:** moving it breaks `PROJECT_ROOT` (and thus
  `STATE_DIR`). If tools must move later, switch the anchor to an explicit marker.
- **Every documented command changes:** `--libs docs/prompts/…` →
  `studio/prompts/…`, `--root collections` → `studio/collections`. `PIPELINE.md`
  is the single source to update so future-you isn't misled.
- **Do git LAST:** initializing before the moves would record a messy history and
  double the diff. Phase F only.

## 8. Open Decisions (for sign-off)

1. **Top-level names:** recommend `site/` + `studio/`. Alternatives: `web/` +
   `render/`, or `public/` + `pipeline/`. (Pick the vocabulary; structure is
   identical.)
2. **`mockups/`:** keep at root, or fold into `studio/sandbox/`?
3. **`material-classic` (codex v1.0):** keep both color sets, or retire v1.0 once
   v1.1 renders are reviewed?
4. **Asset split aggressiveness:** move only the two web subdirs to `site/` now
   (recommended), or also audit `custom-designs`/`mini-series` for any
   site-bound pieces first?
5. **`species/` loose ends:** the `butterfly` stub has no page and
   `species/assets/` is an empty stray — keep both as-is, build out butterfly,
   or drop the empty dir during the move?

---

**Status: EXECUTED 2026-06-27.** All phases A–F were carried out: website →
`site/`, pipeline + raw art → `studio/`, tools repointed (forge v1.8.0, trace
v1.6.0), docs refreshed, git initialized. The §8 decisions were resolved as:
**(1)** names `site/` + `studio/`; **(2)** `mockups/` → `studio/sandbox/`;
**(3)** material **and** material-classic retired (codices already deleted by the
author, 42 renders + 2 libs removed); **(4)** web assets = `images/` + `logos/`
only (the rest → `studio/source-art/`); **(5)** `butterfly` stub kept as WIP, the
empty `species/assets/` stray dropped. One caveat from execution: 5 reptilian
images were briefly locked by OneDrive mid-move — the complete 505-image set
landed in `site/assets/images/`, and the locked duplicates were swept afterward.
This document is retained as the record of the migration.
