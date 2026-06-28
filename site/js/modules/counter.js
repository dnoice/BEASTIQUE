/**
 * Counter Animation Module
 * Animates stat numbers from 0 to their target value on scroll
 */

export function init(config = {}) {
  const {
    selector = '.stat__number',
    duration = 2000,
    threshold = 0.5
  } = config;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target, duration);
      observer.unobserve(entry.target);
    });
  }, { threshold });

  elements.forEach(el => observer.observe(el));
}

function animateCounter(el, duration) {
  const text = el.textContent.trim();

  // Parse number and suffix (e.g., "~120", "37mph", "19ft", "1,571kg")
  const match = text.match(/^([~]?)(\d+(?:\.\d+)?(?:,\d{3})*)(.*)$/);
  if (!match) return;

  const prefix = match[1];
  const rawNum = match[2].replace(/,/g, '');
  const target = parseFloat(rawNum);
  const suffix = match[3];
  const hasDecimal = rawNum.includes('.');
  const decimalPlaces = hasDecimal ? rawNum.split('.')[1].length : 0;
  const hasComma = match[2].includes(',');

  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    let display;
    if (hasDecimal) {
      display = current.toFixed(decimalPlaces);
    } else if (hasComma) {
      display = Math.round(current).toLocaleString();
    } else {
      display = Math.round(current).toString();
    }

    el.textContent = prefix + display + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = text;
    }
  }

  requestAnimationFrame(update);
}
