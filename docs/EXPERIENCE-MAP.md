<!--
✒ Metadata
    - Title: Experience Map (BEASTIQUE Edition - v1.1)
    - File Name: EXPERIENCE-MAP.md
    - Relative Path: docs/EXPERIENCE-MAP.md
    - Artifact Type: docs
    - Version: 1.1.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-07-07) [Anthropic - Claude Fable 5] — Housecleaning update:
      current state refreshed to Vault v2.2 (Exhibit A, appraisal cursor,
      unlocking-ritual entrance), Archives thumbs conversion recorded, data
      audit results noted, tooling section added (bq_web_derivatives.py, icon
      prompt library), backlog re-ranked with interim-imagery item, email
      question resolved.
    - 1.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — Initial map.

✒ Description:
    The unification contract for the BEASTIQUE web experience. Names the five
    wings of the institution, assigns every existing artifact a home, and sets
    the data and design rules that keep the whole experience "one building."
    This is the tie-together doc: when a new piece of work doesn't obviously
    belong somewhere, this map decides.

✒ Key Features:
    - One-institution metaphor: every page is a room in the same museum
    - Five named wings mapped to concrete files and directories
    - Single-source-of-truth data rules (species.json drives all counts)
    - Design-token ownership rules (global.css is canonical)
    - Asset derivative policy (masters never served; web/ + thumbs/ only)
    - Follow-up backlog ordered by leverage

✒ Other Important Information:
    - Dependencies: none (reference document)
    - Compatible platforms: any markdown renderer
---------
-->

# BEASTIQUE Experience Map

BEASTIQUE is one institution — a museum of the priced world. Every page is a
room in the same building. This map names the rooms, assigns every existing
artifact a home, and sets the rules that keep new work from drifting.

The north star, from `BLUEPRINT-V2.md`: *"If Cartier made a website about
extinction, and it was backed by IUCN data."* Beauty is the argument. The data
layer is the receipt.

## The Institution

The visitor's path runs: arrest attention → reveal the transaction → offer the
evidence → point to the exits (what can be done). Each wing serves one step.

| Wing | Name | What it is | Lives at |
| ---- | ---- | ---------- | -------- |
| — | The Vault | The landing page. Controlled entry, map of the building. | `site/index.html` |
| I | The Plates | Framed featured artworks — the crown-jewel carousel. | `site/assets/images/featured/` + landing carousel |
| II | The Collection | The living wall — the full catalog made visible. | Landing wall, rendered from `data/species.json` |
| III | The Archives | Five category halls: browse, filter, choose a beast. | `site/categories/*.html` |
| IV | The Exhibits | Immersive single-species showcases. | `site/species/<slug>/` |
| V | The Ledger | The Collapse Ledger — ten cited written investigations. | `studio/source-art/mini-series/` (web wing pending) |

Supporting spaces (not wings, but rooms): the Mission (receipts + sources),
By the Numbers (live figures), About (studio identity), the Closing Banner
(the extinction clock).

## The Rules

### 1. One catalog to rule the counts

`site/data/species.json` is the single source of truth for what exists.
Landing counts, category counts, exhibit rosters, and the Numbers section all
derive from it at runtime (`site/js/landing/vault-data.js`). **Never hand-type
a species count into HTML again.** When a new showcase ships, flip its
`hasPage` to `true` and the whole site updates itself.

Category pages still hardcode their card grids — that is the next thing to
make data-driven (see backlog).

### 2. One token sheet to rule the look

`site/css/global.css` owns the brand: near-black bases, warm ivory text,
BEASTIQUE gold `#c8a45c`, SOS signal gold `#f2bc00`, IUCN status colors,
Playfair Display + Raleway + JetBrains Mono. Pages and species may *override*
tokens (category accents, species themes) but never redefine the base.

Voice pairing: Playfair for the museum voice, Raleway for the body, JetBrains
Mono for the data voice (wing labels, counts, the clock). If it is a fact or a
figure, it is mono.

### 3. Masters are sacred, derivatives are served

Print masters stay untouched in their homes (`assets/images/*/`,
`studio/`). The site serves only derivatives:

- `site/assets/images/thumbs/**` — 400 px WebP, for card grids and the wall
- `site/assets/images/web/**` — 1600–1920 px WebP, for heroes, carousels,
  banners, and Ledger cards

If a master changes, regenerate its derivatives. Nothing above ~600 KB should
ever be referenced by the landing page.

### 4. Every room connects to the lobby

Every page carries the nav back to the Vault and a breadcrumb through its
wing (`Home / Category / Species`). A visitor should never need the browser
back button to find their way out.

### 5. New work enters through the map

Before building something new, place it: which wing does it extend? A new
render style belongs to the studio until it earns a wall. A new article
belongs to the Ledger. A new species page is an Exhibit and gets its
`hasPage` flip. If it fits no wing, it probably is not BEASTIQUE — or the map
needs a deliberate amendment, not a quiet exception.

## Current State (2026-07-07, evening)

- **The Vault** — v2.2: five-wing narrative, data-driven counts and wall,
  Exhibit A ("The Replacement Transaction" scroll sequence), appraisal cursor,
  film grain, split-title reveals, live extinction clock with progress ring,
  and the v2.0 unlocking-ritual entrance (combination dial on the seam,
  three clicking stops, engraved wordmark, unlock flare — see
  `LANDING-EXPERIENCE.md`).
- **The Plates** — 39 framed works with thumb + web derivatives.
- **The Collection** — 237 species catalogued; 26 critically endangered.
  Catalog reconciled 2026-07-08: 38 species that existed only as hand-built
  archive cards were merged into species.json with house-voice taglines.
  Data layer audited clean (all thumbnails, categories, statuses, and
  hasPage flags verified against disk).
- **The Archives** — five halls, now DATA-DRIVEN: `js/modules/archive-grid.js`
  renders every grid from species.json at runtime with live IUCN status
  filter chips and true counts ("11 of 53 species"). The hand-built cards
  remain in the HTML as the no-JS fallback. Cards serve 400px WebP thumbs
  (~750 MB of page weight retired). Kākāpō wired into the avian hall.
- **The Exhibits** — four open: Amur Leopard, Beluga Sturgeon, Kākāpō,
  Leatherback Sea Turtle. Butterfly, Grey Wolf, and Manta Ray are
  works-in-progress in `site/species/` (art explorations, no index yet).
- **The Ledger** — ten volumes researched and written to PDF/DOCX in the
  studio; teased on the landing page; web publication pending.
- **Tooling** — `tools/bq_web_derivatives.py` regenerates the full WebP
  derivative tree idempotently (544 derivatives under management).
  `studio/prompts/icons/` holds the category logo-icon library
  (15 prompts: Sigil/Crest/Glyph × 5 categories, BQ-SILH-*-1xx block).

## Backlog (ordered by leverage)

1. **Data-drive the Archive grids** — DONE 2026-07-08 (progressive
   enhancement: archive-grid.js renders from the catalog; static cards are
   the no-JS fallback). Optional later: delete the ~250 fallback card blocks
   once the JS path has proven itself in the wild.
2. **Publish the Ledger** — convert Collapse Ledger volumes to exhibit-styled
   article pages (they already have heroes, figures, and citations).
3. **Finish the WIP exhibits** — Manta Ray (the luxe-material explorations are
   striking), Butterfly, Grey Wolf.
4. **Replace interim imagery** — three items shipped as honest stopgaps:
   kākāpō facts 04-06 (hero crops; forge bespoke art via the specimen style),
   the snow leopard archive card (high linocut promoted from the studio;
   forge a full-color render), and the leatherback closing plate (hero crop).
5. **Forge the category icons** — run `studio/prompts/icons/` at high,
   trace the keepers, graduate them to `site/assets/logos/` for portal,
   nav, and favicon duty.
6. **Extend the catalog schema** — `material_pairing`, `flagship_rank`, and
   IUCN source URLs per species (per `BLUEPRINT-V2.md` and the Atlas), so the
   wall and exhibits can speak the material-audit language from data.
7. **SOS frame on the landing page** — the 34 KB morse-frame component is
   built and beautiful; give it a moment in the Vault.

Resolved: `densmaltz4@gmail.com` is confirmed as the correct public contact
address site-wide (Dennis's main account, paired with GitHub `dnoice`).
