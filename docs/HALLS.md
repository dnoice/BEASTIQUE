<!--
✒ Metadata
    - Title: The Halls — Gallery System Reference (BEASTIQUE Edition - v1.0)
    - File Name: HALLS.md
    - Relative Path: docs/HALLS.md
    - Artifact Type: docs
    - Version: 1.0.0
    - Date: 2026-07-11
    - Update: Saturday, July 11, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    How the gallery "halls" work: one registry drives navigation and nine
    data-driven landing pages. Read this before adding a hall, changing a
    signature beast, or touching the switcher.
---------
-->

# BEASTIQUE — The Halls

Nine galleries, one registry. Five **core** halls (one per taxonomic category)
and four **special** halls (cross-cutting collections). Every hall is a single
data-driven landing page; every page carries a switcher that reaches every other.

## The registry — `site/data/galleries.json`

The single source of truth. Each hall entry holds:

| Field | Purpose |
| ----- | ------- |
| `id`, `name`, `short` | identity (`aquatic`, `Aquatic Beasts`, `Aquatic`) |
| `kind` | `main` (core) or `special` |
| `flagship` | `true` only on Endangered |
| `href` | `categories/core/<cat>/` or `categories/special/<hall>/` |
| `colors` | `primary` / `accent` / `bg` / `text` — the hall's skin |
| `hero` | registry hero species id (grid fallback) |
| `membership` | how the roster is filled (see below) |
| `rich` | the cinematic content: `heroMaterial`, `heroTeaser`, `thesisLead`, `thesisBody[]`, `signature{species,name,intro}` |

**Add a hall = add an entry**, generate its assets, run the page generator.

## Membership rules

The roster grid is filled at runtime by `js/modules/gallery-grid.js`, which
filters `site/data/species.json`:

- `category` — matches `species.category` (the five core halls).
- `status` — matches `conservation_status` (Endangered = the three threatened
  tiers; 91 beasts).
- `ids` — a curated roster of catalog ids (Polar, Nocturnal, K9). **Every id
  must exist in species.json** — validate after editing.

## The page

Each hall is `categories/{core|special}/<folder>/index.html`, three levels deep,
so all links use base `../../../`. Sections, top to bottom:

1. **Framed hero** — the hand-built featured plate (`web/halls/<hall>/framed-hero.webp`,
   alpha-preserved) floats beside the title with a specular glass glint. Caption
   names the beast and its material ("Great White Shark · cast in steel").
2. **Thesis** — the hall's narrative (`rich.thesisLead` + `thesisBody[]`), README voice.
3. **Ledger** — accurate live stats (total / threatened / critical) + a status
   distribution bar, computed from the catalog. Never hand-typed.
4. **Materials** — "One Beast, Five Unmakings": the signature beast as CSS-masked
   accent-light in the five graphic styles (`web/halls/<hall>/sig-<style>.svg`),
   shimmering. The SVGs are traced from `studio/collections`.
5. **Roster** — the membership grid, with IUCN filter chips.

## Shared modules

- `js/modules/halls-nav.js` — the "Galleries" switcher. Reads the registry into
  any `[data-halls]` mount; `data-base` prefixes links, `data-current` flags the
  active hall. On index and every hall.
- `js/modules/gallery-grid.js` — membership grid + the ledger stat band.
- `js/gallery.js` — the hall entry point (halls-nav + gallery-grid + shared scroll).
- `css/galleries.css` — the switcher, the four-token hall skin, and the rich
  hall sections.

## Regenerating

The nine pages are stamped from one template + the enriched registry
(generator lives in the session scratchpad; re-author if the template changes).
Per-hall assets — the framed hero WebP and the five signature SVGs — are promoted
from `site/assets/images/featured/` and `studio/collections/.../traces/` into
`site/assets/images/web/halls/<hall>/`. Editorial narrative is hand-written per
hall in the registry's `rich` block.

## Superseded

The old flat `categories/<cat>.html` pages and their `js/category.js` +
`js/modules/archive-grid.js` are retired by this system (git history keeps them).
Those two modules are now orphaned; safe to remove in a later cleanup.
