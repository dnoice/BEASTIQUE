/**
 * SOS Frame Module — BEASTIQUE Design System
 *
 * Reusable module for creating and controlling SOS Morse code frames
 * around species images. Handles SVG loading, element classification,
 * animation modes (SOS/Pulse/Cascade), and legend synchronization.
 *
 * @module sos-frame
 *
 * Usage:
 *   import * as SOSFrame from '../../js/modules/sos-frame.js';
 *
 *   const frame = await SOSFrame.init({
 *     container: '#my-frame',
 *     status: 'CR',
 *     basePath: '../../assets/custom-designs/sos-frames/',
 *     image: './assets/hero.png',
 *     palette: ['#2d4a3a', '#c47a5a', '#6ba3c7', '#8fa5ad'],
 *   });
 *
 *   frame.playSOS();
 *   frame.pulse();
 *   frame.cascade();
 *   frame.stop();
 *   frame.destroy();
 */


// ═══════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════

/** @type {Object} Morse code timing (ms) — standard ratios */
const MORSE = {
  unit: 150,
  dotDuration: 150,   // 1 unit
  dashDuration: 450,  // 3 units
  elementGap: 150,    // 1 unit between elements
  letterGap: 450,     // 3 units between letters
  loopPause: 2000     // Pause between SOS cycles
};

/** @type {Object} Cascade animation config */
const CASCADE = {
  stagger: 80          // ms between each element in the wave
};

/** @type {Object} IUCN status → SVG filename mapping */
const STATUS_FILES = {
  CR: 'bq_sos_frame_cr.svg',
  EN: 'bq_sos_frame_en.svg',
  EW: 'bq_sos_frame_ew.svg',
  EX: 'bq_sos_frame_ex.svg',
  LC: 'bq_sos_frame_lc.svg',
  NT: 'bq_sos_frame_nt.svg',
  VU: 'bq_sos_frame_vu.svg'
};

/** @type {string} Inline legend SVG (dots-and-dashes pattern) */
const LEGEND_SVG = `<svg class="sos-legend__svg" width="633.14" height="20.463" viewBox="0 0 633.1402 20.463028" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(-437.27503 -1068.0713)" fill="currentColor">
    <ellipse class="sos-legend__dot" data-group="s1" cx="447.497" cy="1078.345" rx="10.222" ry="10.19"/>
    <ellipse class="sos-legend__dot" data-group="s1" cx="486.624" cy="1078.345" rx="10.222" ry="10.19"/>
    <ellipse class="sos-legend__dot" data-group="s1" cx="525.749" cy="1078.345" rx="10.222" ry="10.19"/>
    <rect class="sos-legend__dash" data-group="o" x="648.856" y="1068.071" width="57.342" height="20.379" ry="2"/>
    <rect class="sos-legend__dash" data-group="o" x="725.13" y="1068.071" width="57.342" height="20.379" ry="2"/>
    <rect class="sos-legend__dash" data-group="o" x="801.404" y="1068.071" width="57.342" height="20.379" ry="2"/>
    <ellipse class="sos-legend__dot" data-group="s2" cx="981.941" cy="1078.345" rx="10.222" ry="10.19"/>
    <ellipse class="sos-legend__dot" data-group="s2" cx="1021.068" cy="1078.345" rx="10.222" ry="10.19"/>
    <ellipse class="sos-legend__dot" data-group="s2" cx="1060.193" cy="1078.345" rx="10.222" ry="10.19"/>
  </g>
</svg>`;

/** @type {string[]} Edge order for clockwise traversal */
const EDGE_ORDER = ['top', 'right', 'bottom', 'left'];

/** @type {Object} Control button icon SVGs */
const ICONS = {
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  cascade: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>'
};


// ═══════════════════════════════════════
// DEFAULT CONFIGURATION
// ═══════════════════════════════════════

const DEFAULTS = {
  // Required
  container: null,         // Element or selector string

  // Frame selection
  status: 'CR',            // IUCN status code (CR/EN/EW/EX/LC/NT/VU)
  basePath: '',            // Path to sos-frames/ directory
  frameSrc: null,          // Explicit SVG path (overrides status + basePath)
  svgElement: null,        // Pre-existing inline SVG element (overrides fetch)

  // Species data
  image: null,             // Path to species image
  imageAspect: 'xMidYMid slice',  // SVG preserveAspectRatio

  // Theming
  palette: [],             // Array of 3-5 hex colors from species palette
  signalColor: '#f2bc00',  // SOS morse signal gold
  flashColor: '#ffd740',   // Intense flash state

  // Features
  showLegend: true,        // Show the SOS morse legend below frame
  showControls: true,      // Show play/pulse/cascade/reset buttons
  showScanlines: true,     // Scanline overlay for cinematic feel
  showAmbientGlow: true,   // Atmospheric glow behind frame

  // Keyboard
  enableKeyboard: false    // Enable 1/2/3/0 keyboard shortcuts
};


// ═══════════════════════════════════════
// MAIN INIT FUNCTION
// ═══════════════════════════════════════

/**
 * Initialize an SOS frame in the given container.
 *
 * @param {Object} config - Configuration options (see DEFAULTS)
 * @returns {Promise<SOSFrameController>} Controller with play/stop/etc methods
 */
export async function init(config = {}) {
  const cfg = { ...DEFAULTS, ...config };

  // ── Resolve container ──
  const container = typeof cfg.container === 'string'
    ? document.querySelector(cfg.container)
    : cfg.container;

  if (!container) {
    throw new Error('[SOSFrame] Container element not found');
  }

  // ── Build DOM structure ──
  const dom = buildDOM(container, cfg);

  // ── Load or find SVG ──
  const svg = cfg.svgElement
    ? cfg.svgElement
    : await loadSVG(dom.svgWrap, cfg);

  if (!svg) {
    throw new Error('[SOSFrame] Failed to load SVG frame');
  }

  // ── Classify SVG elements ──
  const elements = classifyElements(svg);

  // ── Apply species palette ──
  applyPalette(svg, dom, cfg);

  // ── Insert species image ──
  if (cfg.image) {
    insertImage(svg, cfg.image, cfg.imageAspect);
  }

  // ── Set initial idle state ──
  elements.morse.forEach(el => el.classList.add('sos-morse--idle'));

  // ── Build legend ──
  if (cfg.showLegend) {
    buildLegend(container, cfg);
  }

  // ── Build controls ──
  let controlBar = null;
  if (cfg.showControls) {
    controlBar = buildControls(container);
  }

  // ── Create controller ──
  const controller = createController(dom, elements, controlBar, cfg);

  // ── Wire controls ──
  if (controlBar) {
    wireControls(controlBar, controller);
  }

  // ── Keyboard shortcuts ──
  if (cfg.enableKeyboard) {
    controller._keyboardHandler = bindKeyboard(controller);
  }

  console.log(
    `[SOSFrame] Ready: ${elements.morse.length} morse elements ` +
    `(${elements.dots.length} dots, ${elements.dashes.length} dashes), ` +
    `status=${cfg.status}`
  );

  return controller;
}


// ═══════════════════════════════════════
// DOM CONSTRUCTION
// ═══════════════════════════════════════

/**
 * Build the frame DOM structure inside the container.
 * @returns {{ frame, ambientGlow, svgWrap, scanlines }}
 */
function buildDOM(container, cfg) {
  // Main frame wrapper
  const frame = document.createElement('div');
  frame.className = 'sos-frame';

  // Ambient glow
  let ambientGlow = null;
  if (cfg.showAmbientGlow) {
    ambientGlow = document.createElement('div');
    ambientGlow.className = 'sos-frame__ambient-glow';
    ambientGlow.setAttribute('aria-hidden', 'true');
    frame.appendChild(ambientGlow);
  }

  // SVG wrapper
  const svgWrap = document.createElement('div');
  svgWrap.className = 'sos-frame__svg-wrap';
  frame.appendChild(svgWrap);

  // Scanlines
  let scanlines = null;
  if (cfg.showScanlines) {
    scanlines = document.createElement('div');
    scanlines.className = 'sos-frame__scanlines';
    scanlines.setAttribute('aria-hidden', 'true');
    frame.appendChild(scanlines);
  }

  container.appendChild(frame);

  return { frame, ambientGlow, svgWrap, scanlines };
}


// ═══════════════════════════════════════
// SVG LOADING
// ═══════════════════════════════════════

/**
 * Fetch and inject the SOS frame SVG into the wrapper.
 * @returns {SVGElement} The injected SVG element
 */
async function loadSVG(svgWrap, cfg) {
  const src = cfg.frameSrc || resolveSVGPath(cfg.basePath, cfg.status);

  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const svgText = await response.text();
    svgWrap.innerHTML = svgText;

    const svg = svgWrap.querySelector('svg');
    if (!svg) throw new Error('No <svg> element in response');

    return svg;

  } catch (err) {
    console.error(`[SOSFrame] Failed to load SVG from ${src}:`, err);
    svgWrap.innerHTML = '<p style="color:#f2bc00;text-align:center;padding:2rem;">Failed to load SOS frame SVG</p>';
    return null;
  }
}

/**
 * Build the SVG file path from basePath + status code.
 */
function resolveSVGPath(basePath, status) {
  const file = STATUS_FILES[status.toUpperCase()];
  if (!file) {
    console.warn(`[SOSFrame] Unknown status "${status}", falling back to CR`);
    return `${basePath}${STATUS_FILES.CR}`;
  }
  // Ensure trailing slash
  const base = basePath.endsWith('/') ? basePath : basePath + '/';
  return `${base}${file}`;
}


// ═══════════════════════════════════════
// SVG ELEMENT CLASSIFICATION
// ═══════════════════════════════════════

/**
 * Analyze the raw SVG and add CSS classes + data attributes
 * to all interactive elements (frame, labels, morse dots/dashes).
 *
 * @returns {{ morse, dots, dashes, statusLabel, bqLabel }}
 */
function classifyElements(svg) {
  // ── Identify structural elements by <title> ──
  const titles = svg.querySelectorAll('title');
  let outerFrame = null;
  let innerFrame = null;
  let statusLabel = null;
  let bqLabel = null;

  titles.forEach(title => {
    const text = title.textContent.trim().toLowerCase();
    const parent = title.parentElement;

    if (text === 'outer-frame-element') {
      outerFrame = parent;
      parent.classList.add('sos-outer-frame');
    } else if (text === 'inner-frame-element') {
      innerFrame = parent;
      parent.classList.add('sos-inner-frame');
    } else if (text === 'bq-element') {
      bqLabel = parent;
      parent.classList.add('sos-label', 'sos-label--bq');
    } else if (text.endsWith('-element') && text !== 'outer-frame-element' && text !== 'inner-frame-element' && text !== 'bq-element') {
      // Status label (cr-element, en-element, etc.)
      statusLabel = parent;
      const code = text.replace('-element', '').toUpperCase();
      parent.classList.add('sos-label', `sos-label--${code.toLowerCase()}`);
    }
  });

  // ── Collect morse elements (ellipses + rects in the red/signal group) ──
  // They're in the <g fill="#f80000"> group, NOT the structural paths
  const morseElements = [];
  const identifiedPaths = new Set([outerFrame, innerFrame, statusLabel, bqLabel].filter(Boolean));

  // Find all ellipses and rects that aren't part of identified structures
  svg.querySelectorAll('ellipse, rect').forEach(el => {
    // Skip elements inside the legend (if any inline legend exists)
    if (el.closest('.sos-legend__svg')) return;

    // Skip if this element is one of the identified structural elements
    if (identifiedPaths.has(el)) return;

    // Skip if inside the outer-frame compound path (some rects are structural)
    // Structural rects are inside the outer-frame path's d attribute, not separate elements
    // All separate <ellipse> and <rect> elements are morse elements
    morseElements.push(el);
  });

  // ── Classify each morse element by edge + type ──
  const edgeGroups = { top: [], right: [], bottom: [], left: [] };

  morseElements.forEach(el => {
    const edge = detectEdge(el);
    const type = el.tagName.toLowerCase() === 'ellipse' ? 'dot' : 'dash';

    // Add CSS classes
    el.classList.add('sos-morse', `sos-morse--${type}`);

    // Store edge info
    el.setAttribute('data-edge', edge);
    edgeGroups[edge].push(el);
  });

  // ── Sort within each edge and assign morse indices ──
  let morseIndex = 0;

  // Clockwise order: top (L→R) → right (T→B) → bottom (R→L) → left (B→T)
  EDGE_ORDER.forEach(edge => {
    const group = edgeGroups[edge];
    group.sort((a, b) => getSortKey(a) - getSortKey(b));

    // Reverse for edges that run "backwards" in clockwise traversal
    if (edge === 'bottom' || edge === 'left') {
      group.reverse();
    }

    group.forEach(el => {
      el.setAttribute('data-morse-index', String(morseIndex));
      morseIndex++;
    });
  });

  // ── Separate dots and dashes ──
  const dots = morseElements.filter(el => el.classList.contains('sos-morse--dot'));
  const dashes = morseElements.filter(el => el.classList.contains('sos-morse--dash'));

  // ── Let CSS control morse element fill ──
  morseElements.forEach(el => {
    el.removeAttribute('style');  // Remove inline font-variation-settings etc.
    el.removeAttribute('fill');   // Remove fill attr so CSS .sos-morse class takes over
  });

  // Override label fills (from #f80000 to CSS-controlled)
  [statusLabel, bqLabel].forEach(label => {
    if (label) label.removeAttribute('fill');
  });

  // Override the fill group
  const fillGroups = svg.querySelectorAll('g[fill="#f80000"]');
  fillGroups.forEach(g => g.removeAttribute('fill'));

  return {
    morse: morseElements,
    dots,
    dashes,
    statusLabel,
    bqLabel,
    outerFrame,
    innerFrame,
    edgeGroups
  };
}


/**
 * Detect which edge a morse element belongs to based on its SVG transform.
 *
 * - scale(1,-1) → bottom edge
 * - rotate(90) + cy < -100 → right edge
 * - rotate(90) + cy > -100 → left edge
 * - no transform → top edge
 */
function detectEdge(el) {
  const transform = (el.getAttribute('transform') || '').trim();

  if (transform.includes('scale(1,-1)')) {
    return 'bottom';
  }

  if (transform.includes('rotate(90)')) {
    // Distinguish right vs left by coordinate magnitude
    const yAttr = el.tagName === 'ellipse'
      ? parseFloat(el.getAttribute('cy'))
      : parseFloat(el.getAttribute('y'));
    return yAttr < -100 ? 'right' : 'left';
  }

  // No transform → top edge
  return 'top';
}


/**
 * Get the sort key (position along the edge) for ordering morse elements.
 * Uses cx for ellipses, x for rects.
 */
function getSortKey(el) {
  return el.tagName === 'ellipse'
    ? parseFloat(el.getAttribute('cx'))
    : parseFloat(el.getAttribute('x'));
}


// ═══════════════════════════════════════
// PALETTE & THEMING
// ═══════════════════════════════════════

/**
 * Apply species palette colors to the SVG gradient and CSS custom properties.
 */
function applyPalette(svg, dom, cfg) {
  const { palette, signalColor, flashColor } = cfg;

  // ── Set CSS custom properties on the frame ──
  const frame = dom.frame;
  frame.style.setProperty('--sos-signal', signalColor);
  frame.style.setProperty('--sos-signal-dim', hexToRgba(signalColor, 0.4));
  frame.style.setProperty('--sos-signal-glow', hexToRgba(signalColor, 0.15));
  frame.style.setProperty('--sos-flash', flashColor);

  if (palette.length > 0) {
    palette.forEach((color, i) => {
      frame.style.setProperty(`--sos-species-${i + 1}`, color);
    });

    // Accent defaults to 3rd palette color (often the most vibrant) or 1st
    const accent = palette[2] || palette[0];
    frame.style.setProperty('--sos-accent', accent);
    frame.style.setProperty('--sos-accent-dim', hexToRgba(accent, 0.15));
  }

  // ── Update SVG gradient stops with palette colors ──
  if (palette.length >= 2) {
    const gradient = svg.querySelector('linearGradient');
    if (gradient) {
      const stops = gradient.querySelectorAll('stop');
      // Map palette colors to gradient stops evenly
      const n = Math.min(palette.length, stops.length);
      for (let i = 0; i < stops.length; i++) {
        const colorIdx = Math.min(i, palette.length - 1);
        stops[i].setAttribute('stop-color', palette[colorIdx]);
        // Spread offset evenly
        if (palette.length > 1) {
          stops[i].setAttribute('offset', String(i / (stops.length - 1)));
        }
      }
      // If we have more palette colors than stops, add extra stops
      if (palette.length > stops.length) {
        for (let i = stops.length; i < palette.length; i++) {
          const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
          stop.setAttribute('stop-color', palette[i]);
          stop.setAttribute('offset', String(i / (palette.length - 1)));
          gradient.appendChild(stop);
        }
        // Re-space all stops evenly
        const allStops = gradient.querySelectorAll('stop');
        allStops.forEach((s, i) => {
          s.setAttribute('offset', String(i / (allStops.length - 1)));
        });
      }
    }
  }

  // ── Build ambient glow gradient from palette ──
  if (dom.ambientGlow && palette.length >= 2) {
    const gradients = palette.slice(0, 4).map((color, i) => {
      const opacity = [0.12, 0.1, 0.08, 0.04][i] || 0.06;
      const positions = [
        'ellipse at 50% 50%',
        'ellipse at 25% 45%',
        'ellipse at 75% 55%',
        'ellipse at 55% 70%'
      ];
      return `radial-gradient(${positions[i]}, ${hexToRgba(color, opacity)} 0%, transparent ${50 - i * 5}%)`;
    });
    dom.ambientGlow.style.background = gradients.join(', ');
  }

  // ── Set fill directly on label elements (not parent <g>, which also contains morse elements) ──
  svg.querySelectorAll('.sos-label').forEach(el => {
    el.setAttribute('fill', signalColor);
  });
}


/**
 * Insert the species image into the SVG frame content area.
 * The image sits between the frame structure and the morse elements.
 */
function insertImage(svg, imagePath, aspect) {
  // Check if image already exists
  if (svg.querySelector('#species-image')) return;

  const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  image.setAttribute('id', 'species-image');
  image.setAttribute('x', '112');
  image.setAttribute('y', '111');
  image.setAttribute('width', '1568');
  image.setAttribute('height', '801');
  image.setAttribute('preserveAspectRatio', aspect || 'xMidYMid slice');
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imagePath);
  // Also set href for modern browsers
  image.setAttribute('href', imagePath);

  // Insert after inner-frame but before morse group
  const innerFrame = svg.querySelector('.sos-inner-frame');
  const morseGroup = svg.querySelector('.sos-morse')?.parentElement;

  if (innerFrame && innerFrame.nextElementSibling) {
    innerFrame.parentElement.insertBefore(image, innerFrame.nextElementSibling);
  } else if (morseGroup) {
    morseGroup.parentElement.insertBefore(image, morseGroup);
  } else {
    svg.appendChild(image);
  }
}


// ═══════════════════════════════════════
// LEGEND
// ═══════════════════════════════════════

/**
 * Build the SOS morse code legend below the frame.
 */
function buildLegend(container, cfg) {
  const legend = document.createElement('div');
  legend.className = 'sos-legend';
  legend.innerHTML = `
    <div class="sos-legend__title">SOS — MORSE CODE</div>
    <div class="sos-legend__sequence">
      <span class="sos-legend__char">S</span>
      ${LEGEND_SVG}
      <span class="sos-legend__char">S</span>
    </div>
    <div class="sos-legend__labels">
      <span>S = · · · (dit dit dit)</span>
      <span>O = — — — (dah dah dah)</span>
    </div>
  `;

  // Override legend SVG fill to signal color
  const svg = legend.querySelector('.sos-legend__svg');
  if (svg) {
    const g = svg.querySelector('g');
    if (g) g.setAttribute('fill', cfg.signalColor);
  }

  container.appendChild(legend);
}


// ═══════════════════════════════════════
// CONTROLS
// ═══════════════════════════════════════

/**
 * Build the animation control bar.
 * @returns {{ bar, playBtn, pulseBtn, cascadeBtn, resetBtn }}
 */
function buildControls(container) {
  const bar = document.createElement('div');
  bar.className = 'sos-controls';

  const playBtn = makeButton('Play SOS', ICONS.play, 'Play SOS animation');
  const pulseBtn = makeButton('Pulse', ICONS.pulse, 'Toggle pulse mode');
  const cascadeBtn = makeButton('Cascade', ICONS.cascade, 'Cascade reveal');
  const resetBtn = makeButton('Reset', ICONS.reset, 'Reset all animations');

  bar.appendChild(playBtn);
  bar.appendChild(pulseBtn);
  bar.appendChild(cascadeBtn);
  bar.appendChild(resetBtn);

  container.appendChild(bar);

  return { bar, playBtn, pulseBtn, cascadeBtn, resetBtn };
}

function makeButton(label, icon, ariaLabel) {
  const btn = document.createElement('button');
  btn.className = 'sos-controls__btn';
  btn.setAttribute('aria-label', ariaLabel);
  btn.innerHTML = `${icon}<span>${label}</span>`;
  return btn;
}


// ═══════════════════════════════════════
// CONTROLLER — Animation Engine
// ═══════════════════════════════════════

/**
 * Create the controller object that manages all animation modes.
 *
 * @returns {SOSFrameController}
 */
function createController(dom, elements, controlBar, cfg) {
  // Internal state
  const state = {
    currentMode: null,   // 'sos' | 'pulse' | 'cascade' | null
    sosTimeouts: [],     // Timeout IDs for cleanup
    destroyed: false
  };

  // ── Legend helpers (scoped to this instance's container) ──
  const instanceContainer = dom.frame.parentElement;

  function highlightLegend(group, active) {
    if (!instanceContainer) return;
    const els = instanceContainer.querySelectorAll(`.sos-legend__svg [data-group="${group}"]`);
    els.forEach(el => {
      const cls = el.classList.contains('sos-legend__dot')
        ? 'sos-legend__dot--active'
        : 'sos-legend__dash--active';
      el.classList.toggle(cls, active);
    });
  }

  function clearLegendHighlights() {
    if (!instanceContainer) return;
    const active = instanceContainer.querySelectorAll(
      '.sos-legend__dot--active, .sos-legend__dash--active'
    );
    active.forEach(el => {
      el.classList.remove('sos-legend__dot--active', 'sos-legend__dash--active');
    });
  }

  // ── Morse state management ──
  function setMorseState(elems, stateClass) {
    elems.forEach(el => {
      el.classList.remove('sos-morse--idle', 'sos-morse--active', 'sos-morse--flash');
      if (stateClass) el.classList.add(stateClass);
    });
  }

  // ── SOS Morse Animation ──
  function playSosCycle() {
    return new Promise(resolve => {
      const { dots, dashes } = elements;
      const m = MORSE;
      let t = 0;
      const timeouts = [];

      const schedule = (fn, delay) => {
        t += delay;
        timeouts.push(setTimeout(fn, t));
      };

      // S: · · ·
      for (let i = 0; i < 3; i++) {
        schedule(() => {
          setMorseState(dots, 'sos-morse--flash');
          highlightLegend('s1', true);
        }, i === 0 ? 0 : m.elementGap);

        schedule(() => {
          setMorseState(dots, 'sos-morse--idle');
          highlightLegend('s1', false);
        }, m.dotDuration);
      }

      // Letter gap
      t += m.letterGap;

      // O: — — —
      for (let i = 0; i < 3; i++) {
        schedule(() => {
          setMorseState(dashes, 'sos-morse--flash');
          highlightLegend('o', true);
          if (elements.statusLabel) elements.statusLabel.classList.add('sos-label--active');
          if (elements.bqLabel) elements.bqLabel.classList.add('sos-label--active');
        }, i === 0 ? 0 : m.elementGap);

        schedule(() => {
          setMorseState(dashes, 'sos-morse--idle');
          highlightLegend('o', false);
          if (elements.statusLabel) elements.statusLabel.classList.remove('sos-label--active');
          if (elements.bqLabel) elements.bqLabel.classList.remove('sos-label--active');
        }, m.dashDuration);
      }

      // Letter gap
      t += m.letterGap;

      // S: · · ·
      for (let i = 0; i < 3; i++) {
        schedule(() => {
          setMorseState(dots, 'sos-morse--active');
          highlightLegend('s2', true);
        }, i === 0 ? 0 : m.elementGap);

        schedule(() => {
          setMorseState(dots, 'sos-morse--idle');
          highlightLegend('s2', false);
        }, m.dotDuration);
      }

      // Cycle complete → resolve after pause
      schedule(() => resolve(), m.loopPause);

      state.sosTimeouts = timeouts;
    });
  }

  // ── Sort elements clockwise for cascade ──
  // data-morse-index is already assigned in clockwise order by classifyElements(),
  // so we just sort by index ascending — no edge reversal needed.
  function sortClockwise(elems) {
    return [...elems].sort((a, b) => {
      const idxA = parseInt(a.getAttribute('data-morse-index') || '0', 10);
      const idxB = parseInt(b.getAttribute('data-morse-index') || '0', 10);
      return idxA - idxB;
    });
  }


  // ═══════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════

  const controller = {

    /** Current animation mode: 'sos' | 'pulse' | 'cascade' | null */
    get currentMode() { return state.currentMode; },

    /** Reference to the DOM elements */
    get dom() { return dom; },

    /** Reference to classified SVG elements */
    get elements() { return elements; },

    /**
     * Start the SOS morse code animation loop.
     * Plays · · · — — — · · · repeating.
     */
    async playSOS() {
      if (state.destroyed || state.currentMode === 'sos') return;
      controller.stop();
      state.currentMode = 'sos';

      dom.frame.classList.add('sos-frame--playing');
      updateControlState(controlBar, 'play');

      while (state.currentMode === 'sos') {
        await playSosCycle();
      }
    },

    /**
     * Start synchronized pulse/breathing mode.
     * All morse elements fade in and out together.
     */
    pulse() {
      if (state.destroyed || state.currentMode === 'pulse') return;
      controller.stop();
      state.currentMode = 'pulse';

      updateControlState(controlBar, 'pulse');

      elements.morse.forEach(el => {
        el.classList.remove('sos-morse--idle', 'sos-morse--active', 'sos-morse--flash');
        el.classList.add('sos-morse--pulsing');
        el.style.animationDelay = '0ms';
      });

      // Labels breathe together
      [elements.statusLabel, elements.bqLabel].forEach(label => {
        if (label) {
          label.style.animation = 'sosMorsePulse 3s ease-in-out infinite';
          label.style.animationDelay = '0ms';
        }
      });
    },

    /**
     * Start cascade wave animation.
     * Elements light up sequentially, sweeping clockwise around the frame.
     */
    cascade() {
      if (state.destroyed || state.currentMode === 'cascade') return;
      controller.stop();
      state.currentMode = 'cascade';

      updateControlState(controlBar, 'cascade');

      const sorted = sortClockwise(elements.morse);
      sorted.forEach((el, i) => {
        el.classList.remove('sos-morse--idle', 'sos-morse--active', 'sos-morse--flash');
        el.classList.add('sos-morse--cascading-wave');
        el.style.animationDelay = `${i * CASCADE.stagger}ms`;
      });

      // Labels cascade with the wave
      if (elements.statusLabel) {
        elements.statusLabel.style.animation = 'sosMorseCascadeWave 2.5s ease-in-out infinite';
        elements.statusLabel.style.animationDelay = '700ms';
      }
      if (elements.bqLabel) {
        elements.bqLabel.style.animation = 'sosMorseCascadeWave 2.5s ease-in-out infinite';
        elements.bqLabel.style.animationDelay = '2100ms';
      }
    },

    /**
     * Stop all animations and reset to idle state.
     */
    stop() {
      state.currentMode = null;

      // Clear SOS timeouts
      state.sosTimeouts.forEach(t => clearTimeout(t));
      state.sosTimeouts = [];

      // Reset morse elements
      elements.morse.forEach(el => {
        el.classList.remove(
          'sos-morse--active', 'sos-morse--flash', 'sos-morse--pulsing',
          'sos-morse--cascading-wave'
        );
        el.classList.add('sos-morse--idle');
        el.style.animationDelay = '';
        el.style.animation = '';
      });

      // Reset labels
      [elements.statusLabel, elements.bqLabel].forEach(label => {
        if (label) {
          label.classList.remove('sos-label--active');
          label.style.animation = '';
          label.style.animationDelay = '';
        }
      });

      // Reset legend
      clearLegendHighlights();

      // Reset container state
      dom.frame.classList.remove('sos-frame--playing');

      // Reset control buttons
      updateControlState(controlBar, null);
    },

    /**
     * Toggle a specific mode. If already active, stops instead.
     * @param {'sos'|'pulse'|'cascade'} mode
     */
    toggle(mode) {
      if (state.currentMode === mode) {
        controller.stop();
      } else {
        switch (mode) {
          case 'sos': controller.playSOS(); break;
          case 'pulse': controller.pulse(); break;
          case 'cascade': controller.cascade(); break;
          default: controller.stop();
        }
      }
    },

    /**
     * Clean up: stop animations, remove DOM, unbind events.
     */
    destroy() {
      controller.stop();
      state.destroyed = true;

      // Remove keyboard listener if bound
      if (controller._keyboardHandler) {
        document.removeEventListener('keydown', controller._keyboardHandler);
        controller._keyboardHandler = null;
      }

      // Remove all generated DOM (guard against already-detached elements)
      const frame = dom.frame;
      const parent = frame.parentElement;
      if (parent) {
        const legend = parent.querySelector('.sos-legend');
        const controls = parent.querySelector('.sos-controls');
        parent.removeChild(frame);
        if (legend) legend.parentElement.removeChild(legend);
        if (controls) controls.parentElement.removeChild(controls);
      }
    }
  };

  return controller;
}


// ═══════════════════════════════════════
// CONTROL WIRING
// ═══════════════════════════════════════

function wireControls(controlBar, controller) {
  controlBar.playBtn.addEventListener('click', () => controller.toggle('sos'));
  controlBar.pulseBtn.addEventListener('click', () => controller.toggle('pulse'));
  controlBar.cascadeBtn.addEventListener('click', () => controller.toggle('cascade'));
  controlBar.resetBtn.addEventListener('click', () => controller.stop());
}

function updateControlState(controlBar, activeMode) {
  if (!controlBar) return;

  const buttons = [
    { el: controlBar.playBtn, mode: 'play' },
    { el: controlBar.pulseBtn, mode: 'pulse' },
    { el: controlBar.cascadeBtn, mode: 'cascade' }
  ];

  buttons.forEach(({ el, mode }) => {
    el.classList.toggle('sos-controls__btn--active', mode === activeMode);
  });
}

function bindKeyboard(controller) {
  const handler = (e) => {
    switch (e.key) {
      case '1': controller.toggle('sos'); break;
      case '2': controller.toggle('pulse'); break;
      case '3': controller.toggle('cascade'); break;
      case '0':
      case 'Escape': controller.stop(); break;
    }
  };
  document.addEventListener('keydown', handler);
  return handler;  // Return for cleanup in destroy()
}


// ═══════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════

/**
 * Convert a hex color to rgba string.
 * @param {string} hex - e.g. "#f2bc00" or "#abc"
 * @param {number} alpha - 0 to 1
 * @returns {string} e.g. "rgba(242, 188, 0, 0.4)"
 */
function hexToRgba(hex, alpha) {
  let r, g, b;

  // Remove # prefix
  hex = hex.replace('#', '');

  // Handle shorthand (#abc → #aabbcc)
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
