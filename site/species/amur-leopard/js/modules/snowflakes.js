/**
 * Snowflakes Module
 * Creates falling snow particles. Used for both the hero section
 * and the ambient page-wide snowfall from the nav.
 */

export function init(config = {}) {
  const {
    container = '#snowflakes',
    count = 50,
    className = 'snowflake',
    sizeRange = [2, 6],
    durationRange = [8, 18],
    delayRange = [0, 12],
    opacityRange = [0.3, 0.8]
  } = config;

  const el = document.querySelector(container);
  if (!el) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('span');
    flake.classList.add(className);

    const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
    const left = Math.random() * 100;
    const duration = Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0];
    const delay = Math.random() * (delayRange[1] - delayRange[0]) + delayRange[0];
    const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];

    flake.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      opacity: ${opacity};
    `;

    fragment.appendChild(flake);
  }

  el.appendChild(fragment);
}
