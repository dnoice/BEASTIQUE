/**
 * Cursor Snow Module
 * Spawns small snowflake particles that trail the cursor,
 * drifting downward with random drift and fade.
 * Skipped on touch-only devices.
 */

export function init(config = {}) {
  const {
    spawnRate = 2,
    maxParticles = 35,
    sizeRange = [3, 7],
    throttleMs = 60
  } = config;

  // Skip on touch-only devices
  if (!window.matchMedia('(pointer: fine)').matches) return;

  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let lastSpawn = 0;
  let particleCount = 0;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpawn < throttleMs) return;
    if (particleCount >= maxParticles) return;
    lastSpawn = now;

    for (let i = 0; i < spawnRate; i++) {
      spawnParticle(e.clientX, e.clientY);
    }
  });

  function spawnParticle(x, y) {
    const particle = document.createElement('span');
    particle.classList.add('cursor-snowflake');

    const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
    const offsetX = (Math.random() - 0.5) * 24;
    const offsetY = (Math.random() - 0.5) * 24;
    const drift = (Math.random() - 0.5) * 70;
    const fall = 50 + Math.random() * 90;
    const duration = 1 + Math.random() * 0.8;

    particle.style.cssText = `
      left: ${x + offsetX}px;
      top: ${y + offsetY}px;
      width: ${size}px;
      height: ${size}px;
      --drift: ${drift}px;
      --fall: ${fall}px;
      animation-duration: ${duration}s;
    `;

    document.body.appendChild(particle);
    particleCount++;

    particle.addEventListener('animationend', () => {
      particle.remove();
      particleCount--;
    });
  }
}
