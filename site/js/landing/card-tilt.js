/*
✒ Metadata
    - Title: Card Tilt + Glare (BEASTIQUE Edition - v1.0)
    - File Name: card-tilt.js
    - Relative Path: site/js/landing/card-tilt.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Pointer-tracked 3D tilt for the Archive portal cards (the BLUEPRINT-V2
    "parallax tilt reacting to mouse"). Writes --tilt-x/--tilt-y/--glare-x/
    --glare-y custom properties; the CSS composes them with the hover lift so
    neither fights the other. Desktop fine-pointer only.

✒ Key Features:
    - Max tilt configurable (default 5deg), proportional to pointer offset
    - Glare hotspot follows the pointer via CSS vars
    - is-tilting class switches to a fast transform transition while tracking
    - Spring-back on leave via the card's own slower ease
    - Disabled for coarse pointers and prefers-reduced-motion

✒ Usage Instructions:
    import { init as initCardTilt } from './landing/card-tilt.js';
    initCardTilt({ selector: '.beast-card', maxTilt: 5 });

✒ Other Important Information:
    - Dependencies: tilt/glare vars consumed in css/landing.css
    - Compatible platforms: all evergreen browsers
---------
*/

export function init(config = {}) {
  const { selector = '.beast-card', maxTilt = 5 } = config;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (reducedMotion || !finePointer) return;

  document.querySelectorAll(selector).forEach((card) => {
    card.addEventListener('pointerenter', () => {
      card.classList.add('is-tilting');
    });

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;   // 0..1
      const py = (e.clientY - rect.top) / rect.height;   // 0..1
      card.style.setProperty('--tilt-y', `${((px - 0.5) * 2 * maxTilt).toFixed(2)}deg`);
      card.style.setProperty('--tilt-x', `${((0.5 - py) * 2 * maxTilt).toFixed(2)}deg`);
      card.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`);
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}
