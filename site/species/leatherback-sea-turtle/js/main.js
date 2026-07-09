/**
 * Leatherback Sea Turtle — Main JavaScript Entry Point
 * Shared BEASTIQUE modules + species-specific marine particle drift.
 */

import { init as initDescent }          from './modules/the-descent.js';
import { init as initScrollAnimations } from '../../../js/modules/scroll-animations.js';
import { init as initSmoothScroll }     from '../../../js/modules/smooth-scroll.js';
import { init as initParallax }         from '../../../js/modules/parallax.js';
import { init as initNavScroll }        from '../../../js/modules/nav-scroll.js';
import { init as initCounter }          from '../../../js/modules/counter.js';

function bootstrap() {
    try {
        // Species-specific signature: god-ray light shafts + sinking marine snow
        // (unique to the leatherback — see modules/the-descent.js)
        initDescent({
            containerId: 'particles',
            shaftCount: 6,
            snowCount: 40
        });

        // Shared modules
        initScrollAnimations({
            selector: '[data-animate]',
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1,
            staggerDelay: 100
        });

        initSmoothScroll({ offset: 80 });

        initParallax({
            selector: '.hero__image-container',
            rate: 0.4
        });

        initNavScroll({
            selector: '.nav',
            threshold: 100
        });

        initCounter({
            selector: '.stat__number',
            duration: 2000,
            threshold: 0.5
        });

    } catch (error) {
        console.error('[Leatherback Sea Turtle] Init error:', error);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}
