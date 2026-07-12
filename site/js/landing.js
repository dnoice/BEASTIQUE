/*
✒ Metadata
    - Title: The Vault — Landing Entry Point (BEASTIQUE Edition - v2.2)
    - File Name: landing.js
    - Relative Path: site/js/landing.js
    - Artifact Type: script
    - Version: 2.2.1
    - Date: 2026-07-09
    - Update: Thursday, July 09, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.2.1 (2026-07-09) [Anthropic - Claude Fable 5] — Vault door holdMs
      3600 → 4800 to match the rebuilt four-act unlocking ritual
      (landing.css §17 v2.3 timeline, incl. the 650ms held breath).
    - 2.2.0 (2026-07-07) [Anthropic - Claude Fable 5] — Signature pass: wired
      appraisal cursor, Exhibit A transaction sequence, split-title reveals,
      hero plate tilt, page veil; typewriter now waits for the vault door
      (bq:entered).
    - 2.1.0 (2026-07-07) [Anthropic - Claude Fable 5] — Polish pass: wired
      vault-door entrance, card tilt, magnetic CTAs; added inline nav retreat
      on scroll-down, hero scroll-out cinematics, and Ledger drag-to-browse.
    - 2.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — Vault rebuild. Added
      vault-data (species.json-driven Collection wall + live counts, awaited
      before counters bind) and extinction-clock (closing banner). Bootstrap
      is now async.
    - 1.0.0 (2025) — Original orchestrator: shared + landing modules.

✒ Description:
    Entry point for the BEASTIQUE landing page ("The Vault"). Imports shared
    and landing-specific ES modules and initializes each with tuned config.
    Data-driven sections render first so animated counters bind to final
    values from data/species.json.

✒ Key Features:
    - Single bootstrap with graceful per-module failure containment
    - Catalog-driven rendering awaited ahead of counter animation binding
    - Hamburger menu, scroll hint, and section-spy defined inline
    - Every module no-ops if its markup is absent

✒ Other Important Information:
    - Dependencies: js/modules/* (shared), js/landing/* (page-local),
      data/species.json (via vault-data)
    - Compatible platforms: all evergreen browsers (ES modules required)
---------
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
import { init as initVaultData }       from './landing/vault-data.js';
import { init as initExtinctionClock } from './landing/extinction-clock.js';
import { init as initVaultDoor }       from './landing/vault-door.js';
import { init as initHalls }           from './modules/halls-nav.js';
import { init as initCardTilt }        from './landing/card-tilt.js';
import { init as initMagneticCta }     from './landing/magnetic-cta.js';
import { init as initTransaction }     from './landing/transaction.js';
import { init as initCursor }          from './landing/cursor.js';
import { init as initTitleReveal }     from './landing/title-reveal.js';

// ── Configuration ───────────────────────────────────────────
const NAV_OFFSET = 72;

// ── Bootstrap ───────────────────────────────────────────────

async function bootstrap() {
  try {
    // 0a. Vault door entrance — mounts immediately so it covers first paint.
    //     holdMs matches the unlocking-ritual timeline in landing.css §17:
    //     lockup complete at ~4.15s + the 650ms held breath = 4.8s release.
    initVaultDoor({ holdMs: 4800, openMs: 1500 });

    // 0a2. The Halls switcher — cross-gallery nav from the registry.
    initHalls();

    // 0b. Catalog-driven sections (Collection wall, Archive counts, Numbers).
    //     Awaited so [data-count] values are final before counters bind.
    await initVaultData({
      speciesUrl: 'data/species.json',
      wallSize: 28,
    });

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

    // 4b. Extinction clock (closing banner)
    initExtinctionClock({
      rateSeconds: 600,
    });

    // 5. Canvas metallic particle system (hero)
    initParticles({
      selector: '#particle-canvas',
      count: 70,
      mouseInfluence: 0.08,
    });

    // 6. Typewriter text effect (hero tagline) — waits for the vault door
    if (document.body.classList.contains('bq-entered')) {
      initTypewriter();
    } else {
      window.addEventListener('bq:entered', () => initTypewriter(), { once: true });
    }

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

    // 9. Pointer interactions (fine-pointer, motion-safe only — the modules
    //    gate themselves)
    initCardTilt({ selector: '.beast-card', maxTilt: 5 });
    initCardTilt({ selector: '.hero__artwork-wrap', maxTilt: 2.2 });
    initMagneticCta({
      selector: '.hero__cta, .wall__cta, .closing-banner__cta',
      strength: 6,
    });
    initCursor();

    // 10. Exhibit A — the replacement transaction (scroll-pinned)
    initTransaction();

    // 11. Split-letter museum titles
    initTitleReveal();

    // 12. Landing-specific interactions
    initHamburger();
    initScrollHint();
    initNavActiveSection();
    initNavRetreat();
    initHeroScrollOut();
    initLedgerDrag();
    initPageVeil();

  } catch (err) {
    console.error('[BEASTIQUE] Init error:', err);
  }
}

// ── Nav Retreat — hide on scroll-down, return on scroll-up ──

function initNavRetreat() {
  const nav = document.querySelector('.nav');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const menuOpen = mobileMenu?.classList.contains('mobile-menu--open');
      if (!menuOpen) {
        if (y > 400 && y > lastY + 4) {
          nav.classList.add('nav--hidden');
        } else if (y < lastY - 4 || y <= 400) {
          nav.classList.remove('nav--hidden');
        }
      }
      lastY = y;
      ticking = false;
    });
  }, { passive: true });
}

// ── Hero Scroll-Out — the vault interior recedes as you descend ──

function initHeroScrollOut() {
  const content = document.querySelector('.hero__content');
  if (!content) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      content.style.transform =
        `translateY(${(progress * 60).toFixed(1)}px) scale(${(1 - progress * 0.04).toFixed(4)})`;
      content.style.opacity = String(Math.max(1 - progress * 1.15, 0));
      ticking = false;
    });
  }, { passive: true });
}

// ── Page Veil — exits fade to black before navigation ──

function initPageVeil() {
  const veil = document.createElement('div');
  veil.className = 'page-veil';
  veil.setAttribute('aria-hidden', 'true');
  document.body.appendChild(veil);

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target instanceof Element
      ? e.target.closest('a[href^="species/"], a[href^="categories/"]')
      : null;
    if (!link || link.target === '_blank') return;
    e.preventDefault();
    veil.classList.add('is-active');
    setTimeout(() => { window.location.href = link.href; }, 300);
  });

  // Back/forward cache restore: lift the veil
  window.addEventListener('pageshow', () => veil.classList.remove('is-active'));
}

// ── Ledger Drag — grab and pull the strip ──

function initLedgerDrag() {
  const strip = document.querySelector('.ledger__strip');
  if (!strip) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let isDown = false;
  let startX = 0;
  let startScroll = 0;
  let moved = false;

  strip.addEventListener('pointerdown', (e) => {
    isDown = true;
    moved = false;
    startX = e.clientX;
    startScroll = strip.scrollLeft;
  });

  strip.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 6) {
      moved = true;
      strip.classList.add('is-dragging');
      strip.setPointerCapture(e.pointerId);
    }
    if (moved) {
      strip.scrollLeft = startScroll - dx;
    }
  });

  function release() {
    isDown = false;
    strip.classList.remove('is-dragging');
  }

  strip.addEventListener('pointerup', release);
  strip.addEventListener('pointercancel', release);
  strip.addEventListener('pointerleave', () => { if (!moved) release(); });
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
