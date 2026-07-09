/*
✒ Metadata
    - Title: Appraisal Cursor (BEASTIQUE Edition - v1.0)
    - File Name: cursor.js
    - Relative Path: site/js/landing/cursor.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    The vault's appraisal cursor: a gold dot with a trailing ring that wakes
    up over interactive elements and becomes a labeled gold seal over anything
    carrying [data-cursor] ("Open", "Enter", "Drag"). Desktop fine-pointer
    only; the native cursor is restored automatically on touch or when the
    module never mounts. Keyboard navigation and focus outlines are untouched.

✒ Key Features:
    - Instant dot + lerped trailing ring on one rAF loop
    - Ring grows over links/buttons; becomes a labeled seal on [data-cursor]
    - Event delegation via closest() — works on tiles created after init
    - Hides when the pointer leaves the window; reappears on entry
    - Disabled for coarse pointers; static (no-lag) follow under
      prefers-reduced-motion

✒ Usage Instructions:
    import { init as initCursor } from './landing/cursor.js';
    initCursor();
    Label any element with data-cursor="Verb" for the seal treatment.

✒ Other Important Information:
    - Dependencies: styles in css/landing.css (.cursor*, html.bq-cursor)
    - Compatible platforms: all evergreen browsers
---------
*/

export function init(config = {}) {
  const { interactive = 'a, button, [role="button"]' } = config;

  if (!window.matchMedia('(pointer: fine)').matches) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const root = document.createElement('div');
  root.className = 'cursor';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <div class="cursor__ring"><span class="cursor__label"></span></div>
    <div class="cursor__dot"></div>
  `;
  document.body.appendChild(root);
  document.documentElement.classList.add('bq-cursor');

  const dot = root.querySelector('.cursor__dot');
  const ring = root.querySelector('.cursor__ring');
  const label = root.querySelector('.cursor__label');

  let x = -100, y = -100;   // pointer
  let rx = -100, ry = -100; // ring (lerped)
  let visible = false;

  document.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX;
    y = e.clientY;
    if (!visible) {
      visible = true;
      rx = x; ry = y;
      root.classList.add('is-on');
    }

    const el = e.target instanceof Element ? e.target : null;
    const labeled = el?.closest('[data-cursor]');
    const link = el?.closest(interactive);

    if (labeled) {
      label.textContent = labeled.dataset.cursor || '';
      root.classList.add('cursor--label');
      root.classList.remove('cursor--link');
    } else if (link) {
      root.classList.add('cursor--link');
      root.classList.remove('cursor--label');
    } else {
      root.classList.remove('cursor--link', 'cursor--label');
    }
  }, { passive: true });

  document.addEventListener('pointerleave', () => {
    visible = false;
    root.classList.remove('is-on');
  });

  document.addEventListener('pointerenter', () => {
    if (x > -100) {
      visible = true;
      root.classList.add('is-on');
    }
  });

  // Touch input anywhere: stand down and restore the native cursor
  window.addEventListener('touchstart', () => {
    document.documentElement.classList.remove('bq-cursor');
    root.remove();
  }, { once: true, passive: true });

  const ease = reducedMotion ? 1 : 0.18;

  function frame() {
    rx += (x - rx) * ease;
    ry += (y - ry) * ease;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    ring.style.transform = `translate(${rx.toFixed(1)}px, ${ry.toFixed(1)}px)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
