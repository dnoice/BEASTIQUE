/*
✒ Metadata
    - Title: The Plates — Featured Gallery (BEASTIQUE Edition - v2.0)
    - File Name: gallery.js
    - Relative Path: site/js/landing/gallery.js
    - Artifact Type: library
    - Version: 2.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — Unified rAF clock:
      Ken Burns drift on the active plate, lerped mouse parallax (replaces
      CSS-transition parallax), autoplay progress bar, hover-pause that banks
      elapsed time, and pointer swipe navigation. Auto-rotate moved from
      setInterval onto the same clock.
    - 1.0.0 (2025) — Crossfade carousel: auto-rotate, dots, keyboard,
      CSS-transition mouse parallax.

✒ Description:
    The Wing I crown-jewel carousel. One requestAnimationFrame clock drives
    everything visual: the slow Ken Burns drift that makes each plate breathe,
    the pointer parallax, the autoplay countdown and its gold timer bar.
    Pausing (hover or off-screen) banks elapsed time, so a plate never gets
    cut short after the visitor looks away.

✒ Key Features:
    - Crossfade slides with dots, arrows, counter, and timer bar
    - Ken Burns drift: active plate eases from scale 1.0 to ~1.055 over 14s
    - Lerped mouse parallax composed with the drift in a single transform
    - Hover-pause and IntersectionObserver pause both bank elapsed time
    - Pointer swipe navigation (≥48px horizontal intent)
    - Keyboard arrows while the gallery is in view
    - prefers-reduced-motion: no auto-rotate, no drift, no parallax —
      arrows, dots, swipe, and counter all still work

✒ Usage Instructions:
    import { init as initGallery } from './landing/gallery.js';
    initGallery({ selector: '.gallery', autoInterval: 8000 });

✒ Other Important Information:
    - Dependencies: .gallery markup in index.html; timer bar element
      [data-gallery-timer]; styles in css/landing.css
    - Compatible platforms: all evergreen browsers
---------
*/

const DEFAULTS = {
  selector: '.gallery',
  autoInterval: 8000,
  transitionDuration: 1200,
  parallaxAmount: 12,   // px of image shift on mouse
  driftAmount: 0.055,   // Ken Burns scale gain on the active plate
  driftDuration: 14000, // ms to reach full drift
  swipeThreshold: 48,   // px of horizontal intent
};

export function init(config = {}) {
  const opts = { ...DEFAULTS, ...config };
  const gallery = document.querySelector(opts.selector);
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll('.gallery__slide'));
  const dots = Array.from(gallery.querySelectorAll('.gallery__dot'));
  const prevBtn = gallery.querySelector('.gallery__prev');
  const nextBtn = gallery.querySelector('.gallery__next');
  const counterCurrent = gallery.querySelector('.gallery__counter-current');
  const timerFill = gallery.querySelector('[data-gallery-timer]');

  if (!slides.length) return;

  let current = 0;
  let isTransitioning = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Slide clock (banks elapsed time across pauses) ---

  let baseElapsed = 0;
  let runningSince = performance.now();
  let paused = false;

  function elapsed(now) {
    return baseElapsed + (paused ? 0 : now - runningSince);
  }

  function pauseClock() {
    if (paused) return;
    baseElapsed += performance.now() - runningSince;
    paused = true;
  }

  function resumeClock() {
    if (!paused) return;
    runningSince = performance.now();
    paused = false;
  }

  function resetClock() {
    baseElapsed = 0;
    runningSince = performance.now();
  }

  // --- Core Navigation ---

  function goTo(index) {
    if (isTransitioning || index === current) return;
    isTransitioning = true;

    const prev = current;
    current = ((index % slides.length) + slides.length) % slides.length;

    // The outgoing plate keeps its last transform during the crossfade;
    // the incoming plate starts its drift fresh.
    slides[prev].classList.remove('gallery__slide--active');
    slides[prev].classList.add('gallery__slide--exiting');
    slides[current].classList.add('gallery__slide--active');

    dots.forEach((d, i) => d.classList.toggle('gallery__dot--active', i === current));

    if (counterCurrent) {
      counterCurrent.textContent = String(current + 1).padStart(2, '0');
    }

    setTimeout(() => {
      const img = slides[prev].querySelector('.gallery__image');
      if (img) img.style.transform = '';
      slides[prev].classList.remove('gallery__slide--exiting');
      isTransitioning = false;
    }, opts.transitionDuration);

    resetClock();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // --- Unified animation loop: autoplay + timer bar + drift + parallax ---

  let rafId = null;
  let mouseX = 0;   // -0.5 .. 0.5 targets
  let mouseY = 0;
  let curX = 0;     // lerped px
  let curY = 0;

  function frame(now) {
    const t = elapsed(now);

    // Autoplay
    if (!paused && t >= opts.autoInterval) {
      next(); // resets the clock
    }

    // Timer bar
    if (timerFill) {
      const progress = Math.min(elapsed(now) / opts.autoInterval, 1);
      timerFill.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    // Drift + parallax on the active plate
    const activeImg = slides[current]?.querySelector('.gallery__image');
    if (activeImg) {
      const driftT = Math.min(elapsed(now) / opts.driftDuration, 1);
      const scale = 1 + opts.driftAmount * (1 - Math.pow(1 - driftT, 2)); // ease-out
      curX += (mouseX * opts.parallaxAmount - curX) * 0.06;
      curY += (mouseY * opts.parallaxAmount - curY) * 0.06;
      activeImg.style.transform =
        `translate(${curX.toFixed(2)}px, ${curY.toFixed(2)}px) scale(${scale.toFixed(4)})`;
    }

    rafId = requestAnimationFrame(frame);
  }

  function startLoop() {
    if (reducedMotion || rafId !== null) return;
    rafId = requestAnimationFrame(frame);
  }

  function stopLoop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // --- Pointer parallax targets ---

  if (!reducedMotion) {
    gallery.addEventListener('mousemove', (e) => {
      const rect = gallery.getBoundingClientRect();
      mouseX = 0.5 - (e.clientX - rect.left) / rect.width;
      mouseY = 0.5 - (e.clientY - rect.top) / rect.height;
    });

    gallery.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });
  }

  // --- Swipe navigation ---

  let downX = null;
  let downY = null;

  gallery.addEventListener('pointerdown', (e) => {
    downX = e.clientX;
    downY = e.clientY;
  });

  gallery.addEventListener('pointerup', (e) => {
    if (downX === null) return;
    const dx = e.clientX - downX;
    const dy = e.clientY - downY;
    downX = null;
    downY = null;
    if (Math.abs(dx) >= opts.swipeThreshold && Math.abs(dx) > Math.abs(dy) * 1.5) {
      dx < 0 ? next() : prev();
    }
  });

  // --- Event Listeners ---

  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  document.addEventListener('keydown', (e) => {
    const rect = gallery.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Pause on hover (banks elapsed time — the plate resumes where it left off)
  gallery.addEventListener('mouseenter', pauseClock);
  gallery.addEventListener('mouseleave', resumeClock);

  // Pause + stop the loop entirely when off-screen
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        resumeClock();
        startLoop();
      } else {
        pauseClock();
        stopLoop();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(gallery);

  // --- Initialize ---

  slides[0]?.classList.add('gallery__slide--active');
  dots[0]?.classList.add('gallery__dot--active');
  if (counterCurrent) counterCurrent.textContent = '01';
  if (reducedMotion && timerFill) timerFill.style.display = 'none';
  resetClock();
  startLoop();
}
