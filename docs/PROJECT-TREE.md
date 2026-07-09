<!--
✒ Metadata
    - Title: Project Tree & Stats (BEASTIQUE Edition - v2.1)
    - File Name: PROJECT-TREE.md
    - Relative Path: docs/PROJECT-TREE.md
    - Artifact Type: docs
    - Version: 2.1.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.1.0 (2026-07-07) [Anthropic - Claude Fable 5] — Delta appendix added
      (the measured snapshot remains the 2026-06-27 data): orphaned root
      /assets/ deleted; _collages/ moved to studio/workbench/contact-sheets/;
      new site/assets/images/web/ derivative tier + bq_web_derivatives.py;
      studio/prompts/icons/ library; EXPERIENCE-MAP + LANDING-EXPERIENCE docs;
      repo pinned fully local (dehydration gap closed by choice).
    - 2.0.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Post-restructure rewrite.
      The root was reorganized into four clean domains — site/ (deployable),
      studio/ (production), tools/ (CLIs), docs/ (project docs) — per
      docs/REORG-AUDIT.md. Every path, the per-area table, the tree, the
      heaviest-files list, and the tooling table were repointed to the new
      layout. The material + material-classic styles were retired (42 renders
      removed). Headline metrics re-measured 2026-06-27.
    - 1.1.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Corrected the heavy-
      asset framing: the large files are intentional print-ready masters (high
      pixel dimensions, print-grade DPI via pHYs, tuned compression and
      anti-aliasing for large-format output), not web bloat.
    - 1.0.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — First standard-headed
      release. Expanded from a plain tree into a metrics snapshot.

✒ Description:
    A point-in-time snapshot of the BEASTIQUE project directory after the
    site/ + studio/ restructure — its shape, true storage footprint, and
    pipeline state. Built to answer "what is in here, how big is it really, and
    how far along is the work" at a glance, without walking the ~6,900-file tree
    by hand.

✒ Key Features:
    - The four-domain layout (site / studio / tools / docs) and what each holds.
    - Logical-vs-on-disk sizing that exposes the OneDrive dehydration gap.
    - Per-area logical sizing and a heaviest-files list (the print masters).
    - Trace pipeline state: per-category node complexity and coverage.
    - Species build-out status.

✒ Other Important Information:
    - Dependencies: none (static document).
    - Data source: measured from the working tree on the Date above (file sizes
      are logical / st_size), the ledgers under studio/state/, and the prompt
      libraries under studio/prompts/.
    - Caveat: this tree lives under OneDrive. "Logical" sizes are true file
      sizes; "on-disk" is what is currently hydrated and drifts. studio/collections/
      is written live by the pipeline, so its counts move between runs.
    - Regenerate after any large render/trace pass or asset reorganization.
---------
-->

# BEASTIQUE — Project Directory Tree & Stats

A point-in-time snapshot of the project tree, true storage footprint, and
pipeline state, **after the site/ + studio/ restructure**. Generated Saturday,
June 27, 2026.

## Delta since this snapshot (2026-07-07)

The measured tables below are the June 27 data. Structural changes since:

- **Root cleaned to pure four-domain.** The orphaned duplicate `/assets/`
  (5 OneDrive-locked reptilian dupes left by the restructure) was verified
  byte-identical to `site/assets/images/reptilian/` and deleted; its
  `.gitignore` stanza removed. `_collages/` (58 review contact sheets,
  214 MB) moved to `studio/workbench/contact-sheets/` (git-ignored).
- **New web derivative tier.** `site/assets/images/web/` — 900–1920px WebP
  for the landing heroes/carousel/banners/ledger (~12 MB total), plus
  `thumbs/featured/` and `logos/bq_logo_128.webp`. Generated and maintained
  by the new `tools/bq_web_derivatives.py` (544 derivatives under management).
- **Archive pages serve thumbs.** All ~216 category cards now reference
  400px WebP thumbs instead of full PNGs (~750 MB of page weight retired).
- **New prompt library.** `studio/prompts/icons/category_icons_prompts.md` —
  15 category logo-icon prompts (BQ-SILH-*-1xx block, Sigil/Crest/Glyph × 5).
- **New docs.** `docs/EXPERIENCE-MAP.md` (the unification contract) and
  `docs/LANDING-EXPERIENCE.md` (the Vault wiring diagram).
- **Species build-out.** Four exhibits built *and wired*: amur-leopard,
  beluga-sturgeon, kākāpō, leatherback-sea-turtle. `species.json` = 199
  entries, audited clean 2026-07-07.
- **Storage.** The repo was deliberately pinned fully local (`attrib +P`) on
  2026-07-07 — the logical-vs-on-disk dehydration gap described below no
  longer applies.
- **Retired.** `studio/sandbox/species-v2/` (the species-page v2 prototype)
  was intentionally deleted by Dennis on 2026-07-07 — its ideas live on in
  the built exhibits; do not restore. Sandbox now holds only
  `sos-frame-module-test/`.
- **source-art pass two (2026-07-09).** masters/source-images verified
  (0 of 63 were duplicates — 51 unique species, 12 variants) and promoted
  into `site/assets/images/<category>/` with collision-renumbering;
  generators gained an `input/` staging pool (14 scripts repointed);
  concepts/ideas dissolved; mixed dirs sorted into png/svg/webp type
  subfolders. Stencil prompt libraries re-voiced to the master-printmaker
  hand (v1.1) pending full re-render.
- **source-art reorganized (2026-07-08).** The custom-designs / holding-area /
  homepage-assets / icons / prompts jumble was refiled into a function-first
  taxonomy: `brand/`, `display/`, `frames/`, `generators/` (the procedural
  SVG pipeline reunited: scripts+data+templates+output), `collages/`,
  `masters/`, `concepts/`; `mini-series/` untouched (load-bearing path).
  5,323 files verified before/after; 23 generator scripts repointed. Map and
  filing rules: `studio/source-art/README.md`.

## At a Glance

| Metric | Value |
| ------ | ----- |
| Logical content size | **~24.7 GB** (sum of true file sizes) |
| Files / Directories | **~6,890** files across four top-level domains |
| Layout | **`site/`** (deploy) · **`studio/`** (production) · **`tools/`** · **`docs/`** |
| Largest domain | `studio/` — **22.6 GB** (92% of all content) |
| Heaviest area | `studio/source-art/` — **21.9 GB** (raw + working art) |
| Largest single file | `collage-20-light.png` — **443 MB** (print master) |
| Deployable footprint | `site/` — **2.6 GB** (mostly print-grade imagery; code+data ~1 MB) |
| Render styles | **7** (linocut, low-poly, silhouette, line-art, stencil, geo-line, woodcut) |
| Trace pipeline | linocut **281/281 traced** · 2.15M nodes (stats carried from last full pass) |
| Species pages | **3 built + 1 stub** |
| Version control | git initialized on the new layout (heavy trees git-ignored) |

## The Four Domains

The restructure split a flat, mixed root into four single-purpose domains so the
deployable site, the art production pipeline, the tooling, and the docs no longer
sit tangled together (see [REORG-AUDIT.md](REORG-AUDIT.md) for the full rationale).

| Domain | Logical | Files | Purpose |
| ------ | ------- | ----- | ------- |
| `site/` | 2.6 GB | 727 | The deployable static site — point a host here |
| `studio/` | 22.6 GB | 6,148 | Art production — never deployed |
| `tools/` | 0.1 MB | 5 | The Python pipeline CLIs (stay at root: `PROJECT_ROOT` anchor) |
| `docs/` | 0.2 MB | 8 | Project docs only |

## Storage Reality: Logical vs On-Disk

Because the project lives under OneDrive, most files are dehydrated to online-only
placeholders, so `du` sees only a fraction of the truth. Everything below uses
**logical** (true) sizes. The headline gap remains: **~24.7 GB of real content**
against a much smaller hydrated footprint that drifts as files hydrate/dehydrate.

### `site/` — the deployable (2.6 GB · 727 files)

| Area | Logical | Files | Note |
| ---- | ------- | ----- | ---- |
| `assets/images/` | 2.0 GB | 505 | served site imagery (print masters; serve derivatives) |
| `assets/logos/` | 183 MB | 4 | incl. a 182 MB folder icon |
| `species/` | 375 MB | 152 | self-contained per-species mini-sites |
| `data/` | 0.6 MB | 42 | `categories.json`, `species.json`, `color-palettes/` |
| `categories/` | 0.2 MB | 5 | category landing pages |
| `js/` · `css/` | 0.2 MB | 16 | shared UI modules |
| (root) | — | 3 | `index.html` · `favicon.ico` · `robots.txt` |

### `studio/` — production (22.6 GB · 6,148 files)

| Area | Logical | Files | Note |
| ---- | ------- | ----- | ---- |
| `source-art/` | 21.9 GB | 5,323 | raw + working art (90% of the whole project) |
| `collections/` | 619 MB | 760 | forge renders + traces (7 styles × galleries × quality) |
| `workbench/` | 163 MB | 30 | hand studies — never forged, never traced |
| `prompts/` | 0.7 MB | 11 | style prompt libraries (`*_prompts.md`) |
| `state/` | 0.4 MB | 21 | forge/trace ledgers + run logs + a stray manifest |
| `sandbox/` | <0.1 MB | 3 | design experiments (ex-`mockups/`) |

Inside `studio/source-art/`, one folder dominates everything:

| `source-art/` subdir | Logical | Files | Note |
| -------------------- | ------- | ----- | ---- |
| `holding-area/` | 17.0 GB | 4,494 | staging dump — **~69% of the entire project** |
| `custom-designs/` | 3.9 GB | 348 | collages · framed · hero · mosaics |
| `mini-series/` | 371 MB | 424 | 10 narrative series (+ `node_modules/`) |
| `homepage-assets/` | 113 MB | 50 | |
| `prompts/` | 0.8 MB | 4 | (raw prompt art, distinct from `studio/prompts/`) |
| `icons/` | 0.1 MB | 3 | |

## Directory Tree

Sizes are logical (true content). Areas under ~1 MB are grouped at the bottom.

```text
beastique/                       ~24.7 GB logical · ~6,890 files
│
├── site/                        2.6 GB ·   727 files   ← DEPLOYABLE STATIC SITE
│   ├── index.html · favicon.ico · robots.txt
│   ├── assets/                  2.2 GB ·   509 files   web media ONLY
│   │   ├── images/              2.0 GB ·   505 files   served imagery (print masters)
│   │   └── logos/               183 MB ·     4 files   incl. a 182 MB folder icon
│   ├── species/                 375 MB ·   152 files   self-contained per-species mini-sites
│   ├── data/                    0.6 MB ·    42 files   categories.json · species.json · color-palettes/
│   ├── categories/              0.2 MB ·     5 files   category landing pages
│   ├── js/                      0.1 MB ·    12 files   modules/ · landing/
│   └── css/                     0.1 MB ·     4 files   components/
│
├── studio/                     22.6 GB · 6,148 files   ← ART PRODUCTION (never deployed)
│   ├── source-art/             21.9 GB · 5,323 files   raw + working art
│   │   ├── holding-area/       17.0 GB · 4,494 files   staging dump (~69% of ALL content)
│   │   ├── custom-designs/      3.9 GB ·   348 files   collages · framed · hero · mosaics
│   │   ├── mini-series/         371 MB ·   424 files   10 narrative series (+ node_modules)
│   │   ├── homepage-assets/     113 MB ·    50 files
│   │   ├── prompts/             0.8 MB ·     4 files
│   │   └── icons/               0.1 MB ·     3 files
│   ├── collections/             619 MB ·   760 files   forge renders + traces
│   │   │                         PNGs in <style>/<quality>/ , SVGs in .../traces/
│   │   ├── mammalian-beasts/                            <style>/<quality>/[traces/]
│   │   ├── reptilian-beasts/
│   │   ├── aquatic-beasts/
│   │   ├── avian-beasts/
│   │   └── insecta-beasts/
│   ├── workbench/               163 MB ·    30 files   hand studies (designs, *-studies)
│   ├── prompts/                 0.7 MB ·    11 files   7 style libraries (linocut = 5 libs)
│   ├── state/                   0.4 MB ·    21 files   forge/ + trace/ ledgers + run logs
│   └── sandbox/                  52 KB ·     3 files   design experiments (ex-mockups)
│
├── tools/                       124 KB ·     5 files   ← Python pipeline CLIs (stay at root)
├── docs/                        0.2 MB ·     8 files   project docs only
│
└── (root)  README.md · LICENSE · .gitignore · desktop.ini
```

## Heaviest Files (print masters)

These dominate `studio/source-art/` and `site/assets/`. They are **intentional
print-ready masters** — high pixel dimensions, print-grade DPI (pHYs density),
and tuned compression/anti-aliasing so large-format prints hold up. They are
correct at this size as source/print originals; the only consideration is that
the live site should serve web-optimized derivatives rather than the masters.

| Size | File |
| ---- | ---- |
| 443 MB | `studio/source-art/custom-designs/collages/png/collage-20-light.png` |
| 225 MB | `studio/source-art/mini-series/_shared/large-cover-splash-banner.png` |
| 211 MB | `studio/source-art/custom-designs/collages/png/collage-four-framed.png` |
| 182 MB | `site/assets/logos/BQ-FOLDER-ICON.png` |
| 145 MB | `site/species/amur-leopard/assets/hero-with-text.png` |
| 142 MB | `studio/source-art/custom-designs/mosaics/arctic-hare.png` |
| 139 MB | `site/assets/images/featured/philippine-eagle.png` |
| 97 MB | `studio/source-art/custom-designs/lion-outline-inkscape.png` |
| 85 MB | `studio/source-art/custom-designs/framed/svg/spotted-seal-custom.svg` |
| 69 MB | `studio/source-art/custom-designs/framed/png/xls/reef-shark-xl-1-custom.png` |
| 62 MB | `studio/source-art/custom-designs/hero/png/tiny-beasts-1.png` |
| 50 MB | `studio/source-art/custom-designs/hero/svg/tiny-beasts-2.svg` |

## Render Pipeline

Seven styles flow prompt → forge (PNG) → trace (SVG). See
[PIPELINE.md](PIPELINE.md) for the full style roster and conventions.

```text
studio/prompts/<style>/*_prompts.md
        │  tools/bq_linocut_forge.py  (BQ Render Forge v1.8) — GPT Image API
        ▼
studio/collections/<gallery>-beasts/<style>/<quality>/<slug>_<style>-bw_NN.png
        │  tools/bq_linocut_trace.py  (v1.6) — Potrace, single-path
        ▼
studio/collections/<gallery>-beasts/<style>/<quality>/traces/<name>.svg
```

### Trace node complexity — linocut (carried from last full trace pass)

A consistent fidelity proxy at the production defaults. Reptilians are by far the
most node-dense — scales, crests, and overlapping limbs. (The newer flat-fill
styles trace far lighter; see PIPELINE.md.)

| Category | SVGs | Mean nodes | Median | Min | Max |
| -------- | ---- | ---------- | ------ | --- | --- |
| reptilian-beasts | 46 | 12,937 | 12,786 | 1,798 | 26,553 |
| mammalian-beasts | 100 | 7,766 | 7,589 | 1,842 | 19,733 |
| aquatic-beasts | 49 | 6,498 | 5,886 | 184 | 19,779 |
| insecta-beasts | 37 | 5,487 | 4,882 | 899 | 22,292 |
| avian-beasts | 49 | 5,296 | 4,227 | 632 | 18,606 |
| **All** | **281** | — | — | — | **2.15M total** |

## Species Build-Out

Full species pages exist for 3 (plus one stub) — the site is early in the
Species tier. Each is a self-contained mini-site (local css/js/assets; only
`../../` nav links home + to categories), so it is portable within `site/`.

| Species | Status | Files | Logical | Note |
| ------- | ------ | ----- | ------- | ---- |
| amur-leopard | built | 46 | 262 MB | full page |
| beluga-sturgeon | built | 31 | 68 MB | full page |
| kākāpō | built (+ article) | 56 | 45 MB | non-ASCII folder name (ā) |
| butterfly | stub | 4 | 0.9 MB | no `index.html` (asset experiments only) |
| _template | scaffold | 15 | 84 KB | copy-and-edit; SPECIES-GUIDE.md |

## Tooling

| Tool | Version | Role |
| ---- | ------- | ---- |
| `tools/bq_linocut_forge.py` | 1.8.0 | bulk image generation (GPT Image API) → `studio/collections/<style>/<quality>/` |
| `tools/bq_linocut_trace.py` | 1.6.0 | PNG → SVG trace (Potrace) → `<quality>/traces/` |
| `tools/extract-colors.py` | — | palette extraction |
| `tools/combine-swatches.py` | — | swatch assembly |
| `tools/normalize-sos-frames.py` | — | SOS frame normalization |

Both pipeline tools resolve their ledgers and run logs into
`studio/state/<tool>/`, project-anchored, so bookkeeping never scatters into the
working directory. The `--out`/`--root` defaults are likewise project-anchored to
`studio/collections`, so the tools behave identically from any working directory.

## Observations

- **Clean separation of concerns.** The four domains mean `site/` can be handed
  to a web host with nothing heavy or private leaking, while `studio/` holds
  everything that *makes* the art. The old `categories`/`collections`/`species`
  root collision is gone.
- **Asset weight is by design, not bloat.** The ~24.7 GB of content (92% in
  `studio/`) is dominated by intentional print-ready masters tuned for
  large-format output. The web question is separate: the live site should serve
  web-optimized derivatives, not the masters.
- **Pipeline is healthy, build-out is early.** Tracing of the established linocut
  set is complete and bookkeeping is organized, but only 3 species pages are
  built — most of the catalog has no page yet.
- **OneDrive masks the truth.** On-disk `du` reports a fraction of real size;
  always reason from logical sizes for this tree.
- **Now under version control.** git is initialized on the new layout with the
  heavy trees (`site/assets/`, `studio/`) ignored, so history tracks the code,
  markup, data, prompts, and docs without the multi-GB binaries.
