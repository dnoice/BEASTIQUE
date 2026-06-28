/**
 * BEASTIQUE — Typewriter Text Effect
 * Types characters with configurable speed, multi-line support,
 * and a blinking cursor that disappears after completion.
 * Triggered by IntersectionObserver — plays only when visible.
 */

const DEFAULTS = {
  speed: 55,           // ms per character
  pauseBetween: 800,   // ms pause between lines
  cursorChar: '|',
  cursorBlinkSpeed: 530,
  startDelay: 600,
};

export function init(config = {}) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Show all text immediately
    document.querySelectorAll('[data-typewriter]').forEach(el => {
      const lines = el.getAttribute('data-typewriter').split('|');
      el.innerHTML = lines.map(l => `<span class="tw-line">${l}</span>`).join('');
    });
    return;
  }

  const opts = { ...DEFAULTS, ...config };

  document.querySelectorAll('[data-typewriter]').forEach(el => {
    const lines = el.getAttribute('data-typewriter').split('|');
    let hasPlayed = false;

    // Prepare element
    el.innerHTML = '';
    el.style.minHeight = el.offsetHeight + 'px';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          hasPlayed = true;
          observer.disconnect();
          setTimeout(() => typeLines(el, lines, opts), opts.startDelay);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
  });
}

async function typeLines(container, lines, opts) {
  container.innerHTML = '';

  for (let i = 0; i < lines.length; i++) {
    const lineEl = document.createElement('span');
    lineEl.className = 'tw-line';
    container.appendChild(lineEl);

    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = 'tw-cursor';
    cursor.textContent = opts.cursorChar;
    cursor.style.animation = `twBlink ${opts.cursorBlinkSpeed}ms step-end infinite`;
    lineEl.appendChild(cursor);

    // Type each character
    const text = lines[i];
    for (let j = 0; j < text.length; j++) {
      const char = document.createElement('span');
      char.textContent = text[j];
      char.className = 'tw-char';
      lineEl.insertBefore(char, cursor);

      // Slight randomness in speed for natural feel
      const delay = opts.speed + (Math.random() - 0.5) * 20;
      await sleep(delay);
    }

    // Remove cursor from current line (unless it's the last)
    if (i < lines.length - 1) {
      cursor.remove();
      await sleep(opts.pauseBetween);
    } else {
      // Final cursor: blink a few times then fade out
      await sleep(1500);
      cursor.style.animation = 'none';
      cursor.style.transition = 'opacity 0.8s ease';
      cursor.style.opacity = '0';
      setTimeout(() => cursor.remove(), 800);
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
