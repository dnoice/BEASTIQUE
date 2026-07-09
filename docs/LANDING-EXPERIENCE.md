<!--
✒ Metadata
    - Title: Landing Experience Reference (BEASTIQUE Edition - v1.0)
    - File Name: LANDING-EXPERIENCE.md
    - Relative Path: docs/LANDING-EXPERIENCE.md
    - Artifact Type: docs
    - Version: 1.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    The technical reference for the Vault landing experience (site/index.html
    v2.2): section order, module map, data flow, animation timelines, and the
    tuning knobs. Read this before changing anything on the landing page —
    every effect has one owner and one place to adjust it.

✒ Key Features:
    - Full section-by-section anatomy with owning CSS/JS per section
    - Module map: what each js/landing/*.js file does and its config
    - The vault-door timeline and where its numbers live
    - Data flow: what species.json drives at runtime
    - Accessibility contract: reduced-motion, keyboard, screen readers
    - Verification recipe (local serve + Playwright checks)

✒ Other Important Information:
    - Dependencies: none (reference document)
    - Compatible platforms: any markdown renderer
---------
-->

# The Vault — Landing Experience Reference

`site/index.html` v2.2. One page, five wings, ~20 modules. This is the map of
the machine. The conceptual frame lives in `EXPERIENCE-MAP.md`; this document
is the wiring diagram.

## Section anatomy (scroll order)

| # | Section | id / class | Owner CSS (landing.css §) | Owner JS |
| - | ------- | ---------- | ------------------------- | -------- |
| 1 | Navigation | `.nav` | §1 | `nav-scroll`, `scroll-progress`, inline `initNavRetreat` |
| 2 | Hero — Vault Entry | `.hero` | §2 | `canvas-particles`, `typewriter`, `card-tilt` (artwork), inline `initHeroScrollOut` |
| 3 | Cost ticker | `.cost` | §3 + §21 | pure CSS (hover-pause) |
| 4 | Wing I — The Plates | `#gallery` | §4 + §18 | `gallery.js` (rAF clock) |
| 5 | Exhibit A — Transaction | `#transaction` | §25 | `transaction.js` |
| 6 | Wing II — The Collection | `#collection` | §14 + §19 | `vault-data.js` |
| 7 | Wing III — The Archives | `#beasts` | §5 | `card-tilt`, counts via `vault-data` |
| 8 | Wing IV — The Exhibits | `#exhibits` | §6 + §28 | static HTML (4 rows) |
| 9 | Wing V — The Ledger | `#ledger` | §15 + §20 + §29 | inline `initLedgerDrag` |
| 10 | Mission | `#mission` | §7 | — |
| 11 | Numbers | `#numbers` | §8 | `counter.js`, values via `vault-data` |
| 12 | About / Contact | `#about` `#contact` | §9-10 | — |
| 13 | Closing banner + clock | `.closing-banner` | §11 + §16 + §22 | `extinction-clock.js` |
| 14 | Footer | `.footer` | §12 | — |

Overlays: vault door (§17, JS-injected), film grain (§23, `body::after`),
appraisal cursor (§24, JS-injected), page veil (§31, JS-injected).

## Module map (`site/js/landing/`)

| Module | Purpose | Key config (set in `landing.js`) |
| ------ | ------- | -------------------------------- |
| `vault-door.js` | Unlocking-ritual entrance; gates hero + typewriter via `body.bq-gate`/`bq-entered` + `bq:entered` event | `holdMs: 3600`, `openMs: 1500` |
| `vault-data.js` | Fetches `data/species.json`; renders Collection wall, Archive counts, wall summary, Numbers; wires Re-hang | `wallSize: 28` |
| `gallery.js` | Plates carousel: one rAF clock drives autoplay, timer bar, Ken Burns drift, lerped parallax; swipe + keyboard | `autoInterval: 8000`, `driftAmount/driftDuration` in module DEFAULTS |
| `transaction.js` | Exhibit A scroll progress → `--tx-progress`; latching ledger lines | steps live on `data-step` attrs in the HTML |
| `cursor.js` | Appraisal cursor: dot + lerped ring, labeled seal on `[data-cursor]` | label verbs live on the elements |
| `card-tilt.js` | Pointer 3D tilt + glare (`--tilt-x/y`, `--glare-x/y`) | portals `maxTilt: 5`; hero artwork `2.2` |
| `magnetic-cta.js` | CTAs lean toward the pointer (`--mag-x/y`) | `strength: 6` |
| `title-reveal.js` | Splits `[data-split]` headings into rising letters | `staggerMs: 28` |
| `extinction-clock.js` | Session clock + species counter + SVG progress ring | `rateSeconds: 600` |
| `canvas-particles.js`, `typewriter.js`, `scroll-progress.js` | v1 modules, unchanged | — |

Inline in `landing.js`: hamburger, scroll hint, section spy, nav retreat,
hero scroll-out, ledger drag, page veil.

## The vault-door timeline

All timing lives in **`landing.css` §17** (a commented table sits at the top
of the section). The open moment is scheduled by **`holdMs` in `landing.js`**
— keep it ≥ the last CSS delay + its duration (currently 3.6s). The door
plays once per session (`sessionStorage: bq-vault-entered`); clear that key
or use a fresh tab to replay. Any click/key/wheel/touch skips.

## Data flow

`data/species.json` is fetched once by `vault-data.js` and drives, at runtime:
the Collection wall tiles (thumb path = `assets/images/` →
`assets/images/thumbs/`, `.png` → `.webp`), per-category Archive counts,
the wall summary line (total + critically endangered), and the Numbers
values (species total, live-exhibit count). **Never hand-type a species count
into the landing page.** If the fetch fails (`file://` viewing), the static
fallbacks in the HTML remain.

## Imagery policy

The landing references only WebP derivatives: `web/` (900–1920px) for
heroes/carousel/banners/ledger, `thumbs/` (400px) for the wall, and
`bq_logo_128.webp` for nav marks. Regenerate any of it with:

```bash
uv run tools/bq_web_derivatives.py            # incremental
uv run tools/bq_web_derivatives.py --force    # rebuild
```

## Accessibility contract

- `prefers-reduced-motion`: door skipped, drift/tilt/magnetic/cursor-lag
  disabled, transaction shown pre-completed, titles never split. The page is
  fully readable with zero motion.
- Custom cursor: fine pointers only; removes itself on first touch; keyboard
  focus outlines untouched.
- Split titles keep their accessible name via `aria-label`; letter spans are
  `aria-hidden`.
- The door overlay is JS-injected — no-JS visitors never see it.

## Verification recipe

```bash
# serve
cd site && python -m http.server 8137
# then: crawl refs, console sweep, screenshots (see session scratch tools),
# or minimally:
#   - open http://127.0.0.1:8137/ in a fresh tab (door plays)
#   - check DevTools console is clean
#   - confirm the wall renders 28 tiles and counts are live
```

Playwright (python) is installed on AURA and drives Chrome headless for
screenshot verification; every landing change to date has shipped with a
console-error sweep across all 10 site pages.
