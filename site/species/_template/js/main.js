/**
 * {Species Name} — Main JavaScript Entry Point
 * Uses shared BEASTIQUE modules + species-specific effects
 */

// Species-specific modules (local — add your own here)
// import { init as initMyEffect } from './modules/my-effect.js';

// Shared BEASTIQUE modules
import { init as initScrollAnimations } from '../../../js/modules/scroll-animations.js';
import { init as initCounter }          from '../../../js/modules/counter.js';
import { init as initNavScroll }        from '../../../js/modules/nav-scroll.js';
import { init as initSmoothScroll }     from '../../../js/modules/smooth-scroll.js';
import { init as initParallax }         from '../../../js/modules/parallax.js';

function bootstrap() {
  try {
    // Shared modules
    initScrollAnimations({
      selector: '[data-animate]',
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
      staggerDelay: 100
    });

    initCounter({
      selector: '.stat__number',
      duration: 2000,
      threshold: 0.5
    });

    initSmoothScroll({
      offset: 80
    });

    initParallax({
      selector: '.hero__image-container',
      rate: 0.35
    });

    initNavScroll({
      selector: '.nav',
      threshold: 100
    });

    // Add species-specific module calls here:
    // initMyEffect({ ... });

  } catch (err) {
    console.error('[Species] Init error:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
