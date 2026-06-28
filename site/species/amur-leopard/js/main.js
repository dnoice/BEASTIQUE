/**
 * Amur Leopard — Main JavaScript Entry Point
 * Uses shared BEASTIQUE modules + species-specific effects
 */

// Species-specific modules (local)
import { init as initSnowflakes }      from './modules/snowflakes.js';
import { init as initRosetteGallery }  from './modules/rosette-gallery.js';
import { init as initCursorSnow }      from './modules/cursor-snow.js';

// Shared BEASTIQUE modules
import { init as initScrollAnimations } from '../../../js/modules/scroll-animations.js';
import { init as initCounter }          from '../../../js/modules/counter.js';
import { init as initNavScroll }        from '../../../js/modules/nav-scroll.js';
import { init as initSmoothScroll }     from '../../../js/modules/smooth-scroll.js';
import { init as initParallax }         from '../../../js/modules/parallax.js';

function bootstrap() {
  try {
    // Species-specific: falling snow
    initSnowflakes({
      container: '#snowflakes',
      count: 50
    });

    initSnowflakes({
      container: '#ambient-snow',
      count: 30,
      className: 'snowflake-ambient',
      sizeRange: [2, 4],
      durationRange: [10, 22],
      delayRange: [0, 10],
      opacityRange: [0.2, 0.5]
    });

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

    // Species-specific: image galleries & cursor trail
    initRosetteGallery({
      selector: '[data-gallery]',
      interval: 5500,
      threshold: 0.3
    });

    initCursorSnow({
      spawnRate: 2,
      maxParticles: 35,
      sizeRange: [3, 7],
      throttleMs: 60
    });

  } catch (err) {
    console.error('[Amur Leopard] Init error:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
