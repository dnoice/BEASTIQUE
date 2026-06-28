/**
 * Parallax Module
 * Applies parallax effect and opacity fade to the hero image
 */

export function init(config = {}) {
  const {
    selector = '.hero__image-container',
    rate = 0.35
  } = config;

  const el = document.querySelector(selector);
  if (!el) return;

  const hero = el.closest('.hero');
  if (!hero) return;

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const heroHeight = hero.offsetHeight;

      if (scrolled <= heroHeight) {
        const offset = scrolled * rate;
        el.style.transform = `translateY(${offset}px)`;

        const fadeStart = heroHeight * 0.3;
        if (scrolled > fadeStart) {
          const fadeProgress = (scrolled - fadeStart) / (heroHeight - fadeStart);
          el.style.opacity = Math.max(1 - fadeProgress * 0.5, 0.5);
        } else {
          el.style.opacity = 1;
        }
      }

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}
