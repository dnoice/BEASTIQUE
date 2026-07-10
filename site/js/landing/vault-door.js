/*
✒ Metadata
    - Title: Vault Door Entrance (BEASTIQUE Edition - v2.1)
    - File Name: vault-door.js
    - Relative Path: site/js/landing/vault-door.js
    - Artifact Type: library
    - Version: 2.1.0
    - Date: 2026-07-09
    - Update: Thursday, July 09, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.1.0 (2026-07-09) [Anthropic - Claude Fable 5] — Mass and air. The dial
      is rebuilt as an object: bezel + solid occluding disc, rotor with
      engraved numerals whose combination stops read 2–3–7 (237 species),
      and a fixed index notch at 12 o'clock. The raster logo emblem is
      replaced by the traced paw-track glyph (BQ-SILH-MAM-103), inlined as
      a 5-subpath SVG filled via currentColor. New glow (light spill) and
      bloom (stage light) layers. Skips mid-ritual add --skip so the CSS
      snaps the lockup complete before the panels part. All beat timing
      lives on the .vault-door --vd-* vars in css/landing.css §17;
      holdMs is 4800 to match (landing.js).
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
    initVaultDoor({ holdMs: 4800, openMs: 1500 });

✒ Other Important Information:
    - Dependencies: styles in css/landing.css (.vault-door*); the emblem
      is self-contained (inline SVG traced from the paw-track glyph)
    - Compatible platforms: all evergreen browsers
---------
*/

const SESSION_KEY = 'bq-vault-entered';

export function init(config = {}) {
  const { holdMs = 4800, openMs = 1500 } = config;

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

  // The dial's heart: the traced paw-track glyph (BQ-SILH-MAM-103),
  // five potrace subpaths, filled via currentColor so CSS owns the gold.
  const PAW_GLYPH = `
    <svg class="vault-door__emblem" viewBox="0 0 1024 1024" aria-hidden="true">
      <g transform="translate(0,1024) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        <path d="M4811 8910 c-617 -162 -866 -1103 -490 -1854 280 -559 988 -746 1263
-332 566 850 20 2393 -773 2186z M6693 7999 c-609 -101 -931 -1373 -473 -1863 418 -446 839 -347 1140
269 370 758 -25 1701 -667 1594z M3195 7602 c-673 -201 -827 -1363 -255 -1933 248 -248 664 -328 956
-184 756 372 99 2356 -701 2117z M7670 6062 c-557 -185 -709 -1102 -234 -1412 321 -209 595 -74 752
372 195 551 -116 1173 -518 1040z M5125 5946 c-211 -40 -323 -124 -624 -466 -289 -329 -375 -399 -746
-615 -570 -332 -814 -638 -864 -1084 -51 -457 160 -667 664 -663 301 3 295 4
420 -123 118 -121 128 -125 295 -125 146 -1 168 -10 291 -127 143 -137 145
-138 374 -138 l190 0 70 -33 c84 -40 142 -83 261 -193 103 -96 173 -132 294
-155 168 -32 214 -61 345 -218 440 -529 868 -382 1171 401 254 656 188 1148
-216 1630 -163 193 -231 315 -305 551 -161 510 -263 708 -474 922 -276 280
-840 495 -1146 436z"/>
      </g>
    </svg>`;

  // Rotor numerals sit at the angles that land under the fixed index at
  // each stop of the 2–3–7 turn (radius 28 from center 60,60); each is
  // pre-rotated radially so it arrives upright at 12 o'clock.
  const door = document.createElement('div');
  door.className = 'vault-door';
  door.setAttribute('aria-hidden', 'true');
  door.innerHTML = `
    <div class="vault-door__glow"></div>
    <div class="vault-door__panel vault-door__panel--left"></div>
    <div class="vault-door__panel vault-door__panel--right"></div>
    <div class="vault-door__seam"></div>
    <div class="vault-door__bloom"></div>
    <div class="vault-door__center">
      <div class="vault-door__dial">
        <svg viewBox="0 0 120 120">
          <circle class="vault-door__dial-ring" cx="60" cy="60" r="54"
                  pathLength="100" transform="rotate(-90 60 60)"/>
          <g class="vault-door__dial-body">
            <circle class="vault-door__dial-bezel" cx="60" cy="60" r="49.5"/>
            <circle class="vault-door__dial-disc" cx="60" cy="60" r="45"/>
          </g>
          <g class="vault-door__dial-rotor">
            <circle class="vault-door__dial-ticks" cx="60" cy="60" r="38"/>
            <text class="vault-door__dial-num" x="86.63" y="51.35"
                  text-anchor="middle" dominant-baseline="central"
                  transform="rotate(72 86.63 51.35)">2</text>
            <text class="vault-door__dial-num" x="60" y="88"
                  text-anchor="middle" dominant-baseline="central"
                  transform="rotate(180 60 88)">3</text>
            <text class="vault-door__dial-num" x="43.54" y="37.35"
                  text-anchor="middle" dominant-baseline="central"
                  transform="rotate(324 43.54 37.35)">7</text>
          </g>
          <line class="vault-door__dial-notch" x1="60" y1="9" x2="60" y2="20"/>
        </svg>
        ${PAW_GLYPH}
      </div>
      <div class="vault-door__brand">${brandLetters}</div>
      <p class="vault-door__line">What we destroy to extract</p>
    </div>
    <span class="vault-door__skip">Click to enter</span>
  `;

  document.body.appendChild(door);
  document.body.classList.add('bq-gate');
  document.body.style.overflow = 'hidden';

  const mountedAt = performance.now();
  let opened = false;
  let openTimer = null;

  function open() {
    if (opened) return;
    opened = true;
    if (openTimer) clearTimeout(openTimer);
    // Skipped mid-ritual? Snap the lockup complete so the panels always
    // part on the finished tableau, never a half-risen wordmark.
    if (performance.now() - mountedAt < holdMs - 60) {
      door.classList.add('vault-door--skip');
    }
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
