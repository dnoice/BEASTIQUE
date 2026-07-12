/*
✒ Metadata
    - Title: Special Hall Entry Point (BEASTIQUE Edition - v1.0)
    - File Name: gallery.js
    - Relative Path: site/js/gallery.js
    - Artifact Type: script
    - Version: 1.0.0
    - Date: 2026-07-10
    - Update: Friday, July 10, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Entry point for the special halls (Endangered, Polar, Nocturnal, K9).
    Wires the shared reveal/nav modules, the cross-gallery Halls switcher,
    and the membership-driven gallery grid that fills each hall from
    data/galleries.json + data/species.json.

✒ Other Important Information:
    - Dependencies: js/modules/* (shared + halls-nav + gallery-grid),
      data/galleries.json, data/species.json
    - Compatible platforms: all evergreen browsers (ES modules required)
---------
*/

import { init as initScrollAnimations } from './modules/scroll-animations.js';
import { init as initNavScroll }        from './modules/nav-scroll.js';
import { init as initSmoothScroll }     from './modules/smooth-scroll.js';
import { init as initGalleryGrid }      from './modules/gallery-grid.js';
import { init as initHalls }            from './modules/halls-nav.js';

function bootstrap() {
  try {
    initHalls();
    initGalleryGrid();
    initScrollAnimations({ selector: '[data-animate]', rootMargin: '0px 0px -60px 0px', threshold: 0.1, staggerDelay: 80 });
    initNavScroll({ selector: '.nav', threshold: 60 });
    initSmoothScroll({ offset: 80 });
  } catch (err) {
    console.error('[BEASTIQUE Gallery] Init error:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
