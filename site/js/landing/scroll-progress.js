/**
 * BEASTIQUE — Scroll Progress Bar
 * Thin gold bar at the bottom of the nav that tracks page scroll progress.
 * Uses requestAnimationFrame for silky-smooth updates.
 */

const DEFAULTS = {
  barSelector: '.nav__progress',
  color: 'var(--color-accent, #c8a45c)',
};

export function init(config = {}) {
  const opts = { ...DEFAULTS, ...config };
  const bar = document.querySelector(opts.barSelector);
  if (!bar) return;

  let ticking = false;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    bar.style.transform = `scaleX(${progress})`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateProgress);
    }
  }, { passive: true });

  // Initial state
  updateProgress();
}
