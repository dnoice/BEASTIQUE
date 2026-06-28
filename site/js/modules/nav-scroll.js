/**
 * Navigation Scroll Module
 * Darkens the nav background on scroll
 */

export function init(config = {}) {
  const {
    selector = '.nav',
    threshold = 100
  } = config;

  const nav = document.querySelector(selector);
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > threshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
