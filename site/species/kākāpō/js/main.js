/**
 * Kākāpō — Main JavaScript Entry Point
 * Uses shared BEASTIQUE modules + species-specific effects
 */

// Species-specific modules (local)
import { init as initFireflies }       from './modules/fireflies.js';
import { init as initRosetteGallery }  from './modules/rosette-gallery.js';
import { init as initCursorGlow }      from './modules/cursor-glow.js';
import { init as initTaxonomyTree }   from './modules/taxonomy-tree.js';

// Shared BEASTIQUE modules
import { init as initScrollAnimations } from '../../../js/modules/scroll-animations.js';
import { init as initCounter }          from '../../../js/modules/counter.js';
import { init as initNavScroll }        from '../../../js/modules/nav-scroll.js';
import { init as initSmoothScroll }     from '../../../js/modules/smooth-scroll.js';
import { init as initParallax }         from '../../../js/modules/parallax.js';

function bootstrap() {
  try {
    // Species-specific: fireflies (hero section)
    initFireflies({
      container: '#fireflies',
      count: 40,
      sizeRange: [3, 7],
      durationRange: [6, 14],
      delayRange: [0, 8]
    });

    // Species-specific: ambient fireflies (page-wide)
    initFireflies({
      container: '#ambient-fireflies',
      count: 20,
      className: 'firefly-ambient',
      sizeRange: [2, 4],
      durationRange: [10, 22],
      delayRange: [0, 12],
      opacityRange: [0.15, 0.45]
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

    // Species-specific: image galleries in facts
    initRosetteGallery({
      selector: '[data-gallery]',
      interval: 5500,
      threshold: 0.3
    });

    // Species-specific: interactive taxonomy cladogram
    initTaxonomyTree({
      target: document.getElementById('taxonomy-tree')
    });

    // Species-specific: cursor firefly trail
    initCursorGlow({
      maxParticles: 18,
      sizeRange: [3, 8],
      lifetime: 1200,
      colors: ['#c89040', '#986028', '#e8c060', '#8ab0c0']
    });

  } catch (err) {
    console.error('[Kākāpō] Init error:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
