/**
 * Cursor Glow — Nocturnal firefly trail effect
 * Warm amber particles bloom and fade near the cursor,
 * as if disturbing fireflies in a dark forest.
 */

export function init(config = {}) {
  const {
    container = document.body,
    maxParticles = 18,
    sizeRange = [3, 8],
    lifetime = 1200,
    colors = ['#c89040', '#986028', '#e8c060', '#8ab0c0'],
    throttleMs = 60
  } = config;

  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Skip on touch devices — cursor trail makes no sense
  if ('ontouchstart' in window) return;

  const el = typeof container === 'string'
    ? document.querySelector(container)
    : container;

  if (!el) return;

  const particles = [];
  let lastSpawn = 0;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function spawnParticle(x, y) {
    const now = Date.now();
    if (now - lastSpawn < throttleMs) return;
    lastSpawn = now;

    // Recycle oldest particle if at max
    if (particles.length >= maxParticles) {
      const old = particles.shift();
      if (old.el.parentNode) old.el.parentNode.removeChild(old.el);
    }

    const dot = document.createElement('div');
    const size = rand(sizeRange[0], sizeRange[1]);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const offsetX = rand(-12, 12);
    const offsetY = rand(-12, 12);

    dot.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      width: ${size}px;
      height: ${size}px;
      left: ${x + offsetX}px;
      top: ${y + offsetY}px;
      border-radius: 50%;
      background: ${color};
      box-shadow: 0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}40;
      opacity: 0;
      transform: scale(0.3);
      transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    `;

    el.appendChild(dot);

    // Trigger bloom
    requestAnimationFrame(() => {
      dot.style.opacity = String(rand(0.4, 0.9));
      dot.style.transform = 'scale(1)';
    });

    const particle = { el: dot, born: Date.now() };
    particles.push(particle);

    // Fade out and remove
    setTimeout(() => {
      dot.style.opacity = '0';
      dot.style.transform = `scale(0.2) translateY(${rand(-20, -8)}px)`;
      setTimeout(() => {
        if (dot.parentNode) dot.parentNode.removeChild(dot);
        const idx = particles.indexOf(particle);
        if (idx > -1) particles.splice(idx, 1);
      }, 400);
    }, lifetime);
  }

  document.addEventListener('mousemove', (e) => {
    spawnParticle(e.clientX, e.clientY);
  });
}
