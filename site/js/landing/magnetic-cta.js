/*
✒ Metadata
    - Title: Magnetic CTAs (BEASTIQUE Edition - v1.0)
    - File Name: magnetic-cta.js
    - Relative Path: site/js/landing/magnetic-cta.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Gentle magnetic pull on the primary call-to-action buttons: within the
    button, the element leans a few pixels toward the pointer and springs
    back on leave. Writes --mag-x/--mag-y custom properties; the transition
    lives in CSS. Desktop fine-pointer only.

✒ Key Features:
    - Configurable pull strength (default 6px at the button's edge)
    - CSS-owned spring-back (ease-out-back), zero JS animation loop
    - Disabled for coarse pointers and prefers-reduced-motion

✒ Usage Instructions:
    import { init as initMagneticCta } from './landing/magnetic-cta.js';
    initMagneticCta({ selector: '.hero__cta, .wall__cta', strength: 6 });

✒ Other Important Information:
    - Dependencies: --mag-x/--mag-y consumed in css/landing.css
    - Compatible platforms: all evergreen browsers
---------
*/

export function init(config = {}) {
  const {
    selector = '.hero__cta, .wall__cta, .closing-banner__cta',
    strength = 6,
  } = config;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (reducedMotion || !finePointer) return;

  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--mag-x', `${(px * 2 * strength).toFixed(1)}px`);
      el.style.setProperty('--mag-y', `${(py * 2 * strength).toFixed(1)}px`);
    });

    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--mag-x', '0px');
      el.style.setProperty('--mag-y', '0px');
    });
  });
}
