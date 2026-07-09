/*
✒ Metadata
    - Title: Exhibit A — Transaction Sequence (BEASTIQUE Edition - v1.0)
    - File Name: transaction.js
    - Relative Path: site/js/landing/transaction.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Drives the scroll-pinned "Replacement Transaction" sequence: as the
    visitor scrolls through the runway, a gold scanline sweeps across the
    plate converting the living animal into commodity, while the audit
    ledger writes itself line by line. This is the project's thesis as an
    interaction — the extraction happens under your own scroll.

✒ Key Features:
    - Scroll progress mapped to --tx-progress (drives clip-path + scanline)
    - Ledger lines latch on at their data-step thresholds (never un-write)
    - Scanline glows only mid-conversion (transaction--scanning class)
    - rAF-throttled scroll handler; work skipped while the section is off-screen
    - prefers-reduced-motion: sequence completes instantly, fully readable

✒ Usage Instructions:
    import { init as initTransaction } from './landing/transaction.js';
    initTransaction();

✒ Other Important Information:
    - Dependencies: .transaction markup in index.html; styles in landing.css
    - Compatible platforms: all evergreen browsers
---------
*/

export function init(config = {}) {
  const { selector = '.transaction' } = config;

  const section = document.querySelector(selector);
  if (!section) return;

  const runway = section.querySelector('.transaction__runway');
  const lines = Array.from(section.querySelectorAll('.transaction__line'));
  if (!runway) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    // Show the completed transaction — the argument still lands, statically.
    section.style.setProperty('--tx-progress', '1');
    lines.forEach((l) => l.classList.add('is-on'));
    runway.style.height = 'auto';
    return;
  }

  let inView = false;
  let ticking = false;
  const latched = new Set();

  function update() {
    const rect = runway.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / total, 0), 1);

    section.style.setProperty('--tx-progress', progress.toFixed(4));
    section.classList.toggle('transaction--scanning', progress > 0.01 && progress < 0.99);

    // Ledger lines latch on and stay on — an audit is never unwritten
    lines.forEach((line) => {
      if (latched.has(line)) return;
      if (progress >= parseFloat(line.dataset.step || '0')) {
        line.classList.add('is-on');
        latched.add(line);
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (!inView || ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }, { passive: true });

  const observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      if (inView) update();
    },
    { rootMargin: '10% 0px 10% 0px' }
  );
  observer.observe(section);

  update();
}
