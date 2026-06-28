/**
 * Scroll Animations Module
 * Reveals elements as they enter the viewport using IntersectionObserver
 */

export function init(config = {}) {
  const {
    selector = '[data-animate]',
    rootMargin = '0px 0px -100px 0px',
    threshold = 0.1,
    staggerDelay = 100
  } = config;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const sectionMap = new Map();

  elements.forEach(el => {
    const section = el.closest('section') || el.parentElement;
    if (!sectionMap.has(section)) {
      sectionMap.set(section, []);
    }
    sectionMap.get(section).push(el);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const section = el.closest('section') || el.parentElement;
      const siblings = sectionMap.get(section) || [];
      const index = siblings.indexOf(el);

      setTimeout(() => {
        el.classList.add('visible');
      }, index * staggerDelay);

      observer.unobserve(el);
    });
  }, {
    rootMargin,
    threshold
  });

  elements.forEach(el => observer.observe(el));
}
