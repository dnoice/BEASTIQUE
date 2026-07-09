/*
✒ Metadata
    - Title: Split-Title Reveals (BEASTIQUE Edition - v1.0)
    - File Name: title-reveal.js
    - Relative Path: site/js/landing/title-reveal.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Splits [data-split] headings into per-letter spans that rise from behind
    the baseline as the heading scrolls into view — the museum-title moment.
    Words stay intact (letters are wrapped inside word blocks) so lines never
    break mid-word. Screen readers get the original text via aria-label; the
    visual spans are hidden from the accessibility tree.

✒ Key Features:
    - Word-integrity splitting (no mid-word line breaks)
    - Staggered rise via --letter-delay custom property (28ms per letter)
    - Own IntersectionObserver — decoupled from the shared reveal system
    - aria-label preserves the accessible name; spans are aria-hidden
    - prefers-reduced-motion: headings are never split at all

✒ Usage Instructions:
    import { init as initTitleReveal } from './landing/title-reveal.js';
    initTitleReveal();
    Mark any heading with data-split.

✒ Other Important Information:
    - Dependencies: styles in css/landing.css (.split-word, .split-letter)
    - Compatible platforms: all evergreen browsers
---------
*/

export function init(config = {}) {
  const { selector = '[data-split]', staggerMs = 28 } = config;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const headings = Array.from(document.querySelectorAll(selector));
  if (!headings.length) return;

  headings.forEach((h) => {
    const text = h.textContent.trim();
    h.setAttribute('aria-label', text);

    const holder = document.createElement('span');
    holder.setAttribute('aria-hidden', 'true');

    let letterIndex = 0;
    text.split(/\s+/).forEach((word, wi, words) => {
      const wordEl = document.createElement('span');
      wordEl.className = 'split-word';
      for (const ch of word) {
        const letter = document.createElement('span');
        letter.className = 'split-letter';
        letter.textContent = ch;
        letter.style.setProperty('--letter-delay', `${letterIndex * staggerMs}ms`);
        letterIndex++;
        wordEl.appendChild(letter);
      }
      holder.appendChild(wordEl);
      if (wi < words.length - 1) holder.appendChild(document.createTextNode(' '));
    });

    h.textContent = '';
    h.appendChild(holder);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-split-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.3 }
  );

  headings.forEach((h) => observer.observe(h));
}
