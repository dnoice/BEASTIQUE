/**
 * BEASTIQUE — Landing Page Entry Point
 * Initializes shared modules + landing-specific cinematic effects.
 *
 * Shared modules  → js/modules/
 * Local modules   → js/landing/
 */

// ── Shared Modules ──────────────────────────────────────────
import { init as initScrollAnimations } from './modules/scroll-animations.js';
import { init as initNavScroll }        from './modules/nav-scroll.js';
import { init as initSmoothScroll }     from './modules/smooth-scroll.js';
import { init as initCounter }          from './modules/counter.js';

// ── Landing-Specific Modules ────────────────────────────────
import { init as initParticles }       from './landing/canvas-particles.js';
import { init as initTypewriter }      from './landing/typewriter.js';
import { init as initScrollProgress }  from './landing/scroll-progress.js';
import { init as initGallery }         from './landing/gallery.js';

// ── Configuration ───────────────────────────────────────────
const NAV_OFFSET = 72;

// ── Bootstrap ───────────────────────────────────────────────

function bootstrap() {
  try {
    // 1. Scroll-triggered reveal animations
    initScrollAnimations({
      selector: '[data-animate]',
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
      staggerDelay: 120,
    });

    // 2. Nav background on scroll
    initNavScroll({
      selector: '.nav',
      threshold: 50,
    });

    // 3. Smooth anchor scrolling (accounts for fixed nav)
    initSmoothScroll({
      offset: NAV_OFFSET,
    });

    // 4. Counter animations (hero stats + numbers section)
    initCounter({
      selector: '[data-count]',
      duration: 2200,
      threshold: 0.3,
    });

    // 5. Canvas metallic particle system (hero)
    initParticles({
      selector: '#particle-canvas',
      count: 70,
      mouseInfluence: 0.08,
    });

    // 6. Typewriter text effect (hero tagline)
    initTypewriter();

    // 7. Scroll progress bar (nav)
    initScrollProgress({
      barSelector: '.nav__progress',
    });

    // 8. Featured gallery (crown jewel section)
    initGallery({
      selector: '.gallery',
      autoInterval: 8000,
      transitionDuration: 1200,
      parallaxAmount: 12,
    });

    // 9. Landing-specific interactions
    initHamburger();
    initScrollHint();
    initNavActiveSection();

  } catch (err) {
    console.error('[BEASTIQUE] Init error:', err);
  }
}

// ── Hamburger Menu ──────────────────────────────────────────

function initHamburger() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  const body = document.body;

  function openMenu() {
    hamburger.classList.add('nav__hamburger--active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('nav__hamburger--active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('mobile-menu--open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}

// ── Scroll Hint Fade ────────────────────────────────────────

function initScrollHint() {
  const hint = document.querySelector('.hero__scroll-hint');
  if (!hint) return;

  let hidden = false;

  function onScroll() {
    if (hidden) return;
    if (window.scrollY > 100) {
      hint.style.opacity = '0';
      hint.style.pointerEvents = 'none';
      hidden = true;
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Active Section Highlighting ─────────────────────────────

function initNavActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('nav__link--active');
          } else {
            link.classList.remove('nav__link--active');
          }
        });
      });
    },
    {
      rootMargin: `-${NAV_OFFSET + 20}px 0px -40% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// ── Init ────────────────────────────────────────────────────

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
