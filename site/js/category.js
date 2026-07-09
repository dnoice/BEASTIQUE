/*
✒ Metadata
    - Title: Archive Page Entry Point (BEASTIQUE Edition - v2.0)
    - File Name: category.js
    - Relative Path: site/js/category.js
    - Artifact Type: script
    - Version: 2.0.0
    - Date: 2026-07-08
    - Update: Wednesday, July 08, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.0.0 (2026-07-08) [Anthropic - Claude Fable 5] — The Archives go
      data-driven: wired modules/archive-grid.js, which re-renders the species
      grid from data/species.json at runtime and adds IUCN filter chips. The
      hand-built cards in the HTML remain as the no-JS fallback.
    - 1.0.0 (2025) — Original entry: scroll animations, nav scroll, smooth
      scroll.

✒ Description:
    Entry point for the five Archive (category) pages. Initializes the shared
    reveal/nav modules and the archive-grid renderer that makes the catalog
    (data/species.json) the single source of truth for what hangs in each hall.

✒ Key Features:
    - Catalog-driven species grid with live IUCN status filters
    - Graceful failure containment per module
    - Static-card fallback preserved for no-JS visitors

✒ Other Important Information:
    - Dependencies: js/modules/* (shared), data/species.json (via archive-grid)
    - Compatible platforms: all evergreen browsers (ES modules required)
---------
*/

import { init as initScrollAnimations } from './modules/scroll-animations.js';
import { init as initNavScroll }        from './modules/nav-scroll.js';
import { init as initSmoothScroll }     from './modules/smooth-scroll.js';
import { init as initArchiveGrid }      from './modules/archive-grid.js';

function bootstrap() {
  try {
    // Catalog-driven grid (async; static cards stand until it succeeds)
    initArchiveGrid();

    initScrollAnimations({
      selector: '[data-animate]',
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
      staggerDelay: 80
    });

    initNavScroll({
      selector: '.nav',
      threshold: 60
    });

    initSmoothScroll({
      offset: 80
    });

  } catch (err) {
    console.error('[BEASTIQUE Category] Init error:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
