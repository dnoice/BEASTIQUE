/**
 * Smooth Scroll Module
 * Handles anchor link clicks with offset for fixed nav
 */

export function init(config = {}) {
  const {
    offset = 80
  } = config;

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
}
