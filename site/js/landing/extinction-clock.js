/*
✒ Metadata
    - Title: Extinction Clock (BEASTIQUE Edition - v1.1)
    - File Name: extinction-clock.js
    - Relative Path: site/js/landing/extinction-clock.js
    - Artifact Type: library
    - Version: 1.1.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-07-07) [Anthropic - Claude Fable 5] — Added the SVG progress
      ring: fills over each ten-minute cycle and pulses gold when a full
      species is crossed.
    - 1.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — Initial clock.

✒ Description:
    The closing banner's live clock. Tracks how long the visitor has been in
    the vault and converts that time into species lost at the published rate
    of one species every ten minutes. The arithmetic is honest: the counter
    starts at zero and climbs continuously — "The clock does not pause."

✒ Key Features:
    - MM:SS elapsed session time, updated once per second
    - Species-lost figure shown to two decimals at a configurable rate
    - Pauses updates when the tab is hidden; resyncs from wall-clock on return
    - No-ops gracefully if the banner markup is absent

✒ Usage Instructions:
    import { init as initExtinctionClock } from './landing/extinction-clock.js';
    initExtinctionClock({ rateSeconds: 600 }); // 1 species / 600s

✒ Other Important Information:
    - Dependencies: none
    - Compatible platforms: all evergreen browsers
---------
*/

export function init(config = {}) {
  const { rateSeconds = 600 } = config;

  const timeEl = document.querySelector('[data-clock-time]');
  const countEl = document.querySelector('[data-clock-count]');
  const ringEl = document.querySelector('[data-clock-ring]');
  const ringWrap = ringEl?.closest('.closing-banner__clock-ring');
  const RING_CIRCUMFERENCE = 97.4; // 2π × r(15.5), matches the CSS dasharray

  if (!timeEl || !countEl) return;

  const start = Date.now();
  let intervalId = null;
  let lastWholeSpecies = 0;

  function tick() {
    const elapsed = (Date.now() - start) / 1000;
    const m = Math.floor(elapsed / 60);
    const s = Math.floor(elapsed % 60);
    timeEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    countEl.textContent = (elapsed / rateSeconds).toFixed(2);

    if (ringEl) {
      const cycleProgress = (elapsed % rateSeconds) / rateSeconds;
      ringEl.style.strokeDashoffset =
        (RING_CIRCUMFERENCE * (1 - cycleProgress)).toFixed(2);
    }

    // A full species crossed — pulse the ring
    const whole = Math.floor(elapsed / rateSeconds);
    if (whole > lastWholeSpecies) {
      lastWholeSpecies = whole;
      if (ringWrap) {
        ringWrap.classList.remove('closing-banner__clock-ring--pulse');
        void ringWrap.offsetWidth; // restart the animation
        ringWrap.classList.add('closing-banner__clock-ring--pulse');
      }
    }
  }

  function startTicking() {
    if (intervalId !== null) return;
    tick();
    intervalId = window.setInterval(tick, 1000);
  }

  function stopTicking() {
    if (intervalId === null) return;
    window.clearInterval(intervalId);
    intervalId = null;
  }

  document.addEventListener('visibilitychange', () => {
    document.hidden ? stopTicking() : startTicking();
  });

  startTicking();
}
