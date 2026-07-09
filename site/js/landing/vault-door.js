/*
✒ Metadata
    - Title: Vault Door Entrance (BEASTIQUE Edition - v2.0)
    - File Name: vault-door.js
    - Relative Path: site/js/landing/vault-door.js
    - Artifact Type: library
    - Version: 2.0.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — The unlocking ritual.
      Five-beat choreography: seam appears → combination dial draws itself on
      the seam and rotates through three clicking stops → BEASTIQUE engraves
      letter-by-letter with a light sweep → thesis line settles between
      expanding hairlines → the lock flares and the panels part with mass.
      Brand wordmark is split into letters at mount; BQ emblem sits in the
      dial. All timing lives in css/landing.css; this module only mounts,
      schedules, skips, and announces.
    - 1.1.0 (2026-07-07) [Anthropic - Claude Fable 5] — Entrance sync
      (bq-gate / bq-entered / "bq:entered" event).
    - 1.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — Initial entrance.

✒ Description:
    The controlled entry from BLUEPRINT-V2, upgraded from a fade to a ritual:
    the vault visibly unlocks before it opens. Plays once per browser session;
    any click, key, wheel, or touch skips straight to the doors parting. The
    overlay is injected by JS, so a no-JS visitor never sees a door at all.

✒ Key Features:
    - Combination-dial lock: self-drawing ring, ticked rotor, three-stop
      rotation with notch flashes — the vault earns its opening
    - Letter-split BEASTIQUE engraving with a light sweep across the gold
    - Thesis line framed by hairlines expanding from center
    - Unlock flare hands off to heavy-mass panel parting (1.5s ease)
    - Plays once per session (sessionStorage); every input skips instantly
    - Fully skipped under prefers-reduced-motion; scroll always restored
    - body.bq-gate holds the hero's breath; "bq:entered" starts choreography

✒ Usage Instructions:
    import { init as initVaultDoor } from './landing/vault-door.js';
    initVaultDoor({ holdMs: 3150, openMs: 1500 });

✒ Other Important Information:
    - Dependencies: styles in css/landing.css (.vault-door*),
      assets/logos/bq_logo.png (dial emblem)
    - Compatible platforms: all evergreen browsers
---------
*/

const SESSION_KEY = 'bq-vault-entered';

export function init(config = {}) {
  const { holdMs = 3150, openMs = 1500 } = config;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let seen = false;
  try {
    seen = sessionStorage.getItem(SESSION_KEY) === '1';
  } catch { /* storage unavailable — treat as first visit */ }

  function announceEntered() {
    document.body.classList.add('bq-entered');
    window.dispatchEvent(new CustomEvent('bq:entered'));
  }

  if (reducedMotion || seen) {
    // No door — the vault is already open
    setTimeout(announceEntered, 0);
    return;
  }

  try {
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch { /* non-fatal */ }

  const brandLetters = 'BEASTIQUE'
    .split('')
    .map((ch, i) => `<span class="vault-door__letter" style="--i:${i}">${ch}</span>`)
    .join('');

  const door = document.createElement('div');
  door.className = 'vault-door';
  door.setAttribute('aria-hidden', 'true');
  door.innerHTML = `
    <div class="vault-door__panel vault-door__panel--left"></div>
    <div class="vault-door__panel vault-door__panel--right"></div>
    <div class="vault-door__seam"></div>
    <div class="vault-door__center">
      <div class="vault-door__dial">
        <svg viewBox="0 0 120 120">
          <circle class="vault-door__dial-ring" cx="60" cy="60" r="54" pathLength="100"/>
          <g class="vault-door__dial-rotor">
            <circle class="vault-door__dial-ticks" cx="60" cy="60" r="46"/>
            <line class="vault-door__dial-notch" x1="60" y1="10" x2="60" y2="22"/>
          </g>
        </svg>
        <img class="vault-door__emblem" src="assets/logos/bq_logo.png" alt="">
      </div>
      <div class="vault-door__brand">${brandLetters}</div>
      <p class="vault-door__line">What we destroy to extract</p>
    </div>
    <span class="vault-door__skip">Click to enter</span>
  `;

  document.body.appendChild(door);
  document.body.classList.add('bq-gate');
  document.body.style.overflow = 'hidden';

  let opened = false;
  let openTimer = null;

  function open() {
    if (opened) return;
    opened = true;
    if (openTimer) clearTimeout(openTimer);
    door.classList.add('vault-door--open');
    document.body.style.overflow = '';
    announceEntered();
    removeSkipListeners();
    setTimeout(() => door.remove(), openMs + 200);
  }

  function onKey() { open(); }
  function onWheel() { open(); }
  function onTouch() { open(); }

  function removeSkipListeners() {
    document.removeEventListener('keydown', onKey);
    document.removeEventListener('wheel', onWheel);
    document.removeEventListener('touchstart', onTouch);
  }

  door.addEventListener('click', open);
  document.addEventListener('keydown', onKey);
  document.addEventListener('wheel', onWheel, { passive: true });
  document.addEventListener('touchstart', onTouch, { passive: true });

  openTimer = setTimeout(open, holdMs);
}
