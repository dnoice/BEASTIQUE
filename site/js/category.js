/**
 * BEASTIQUE — Category Page Entry Point
 * Initializes shared modules for category hub pages
 */

import { init as initScrollAnimations } from './modules/scroll-animations.js';
import { init as initNavScroll }        from './modules/nav-scroll.js';
import { init as initSmoothScroll }     from './modules/smooth-scroll.js';

function bootstrap() {
  try {
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
