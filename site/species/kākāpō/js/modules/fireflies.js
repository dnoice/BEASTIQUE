/**
 * Fireflies — Nocturnal forest particle effect
 * Creates warm amber-gold floating particles that drift upward,
 * mimicking bioluminescent insects in a New Zealand forest at night.
 */

export function init(config = {}) {
  const {
    container = '#fireflies',
    count = 40,
    className = 'firefly',
    sizeRange = [3, 7],
    durationRange = [6, 14],
    delayRange = [0, 8],
    opacityRange = [0.3, 0.9]
  } = config;

  const el = typeof container === 'string'
    ? document.querySelector(container)
    : container;

  if (!el) return;

  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const firefly = document.createElement('div');
    firefly.className = className;

    const size = rand(sizeRange[0], sizeRange[1]);
    const duration = rand(durationRange[0], durationRange[1]);
    const delay = rand(delayRange[0], delayRange[1]);
    const left = rand(0, 100);
    const top = rand(20, 100);
    const opacity = rand(opacityRange[0] * 100, opacityRange[1] * 100) / 100;

    firefly.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      top: ${top}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      opacity: ${opacity};
    `;

    frag.appendChild(firefly);
  }

  el.appendChild(frag);
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}
