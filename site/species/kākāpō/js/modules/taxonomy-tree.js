/**
 * taxonomy-tree.js
 * ─────────────────
 * Interactive SVG cladogram for the Kākāpō species page.
 * Renders an animated tree-of-life visualization tracing the
 * full taxonomic lineage from Kingdom Animalia → Species S. habroptilus.
 *
 * Features:
 *   - Organic bezier-curve branches with staggered line-draw reveal
 *   - Decorative side-branches (evolutionary paths not taken)
 *   - Root tendril system at the base
 *   - Per-node contextual icons (paw, vertebrae, feather, beak, owl-disc, eye, bird)
 *   - Hover → glow ring + info bar description
 *   - IntersectionObserver scroll trigger
 *   - Species node: persistent pulse animation after reveal
 *   - prefers-reduced-motion: instant reveal, no animation
 */

const NS = 'http://www.w3.org/2000/svg';

/* ═══════════════════════════════════════════
   Data
   ═══════════════════════════════════════════ */

const RANKS = [
  { rank: 'KINGDOM', value: 'Animalia',       desc: 'All multicellular animals' },
  { rank: 'PHYLUM',  value: 'Chordata',       desc: 'Animals with spinal cords' },
  { rank: 'CLASS',   value: 'Aves',           desc: 'All living birds' },
  { rank: 'ORDER',   value: 'Psittaciformes', desc: 'Parrots, cockatoos & allies' },
  { rank: 'FAMILY',  value: 'Strigopidae',    desc: 'New Zealand parrots' },
  { rank: 'GENUS',   value: 'Strigops',       desc: '\u201COwl-face\u201D \u2014 one living member' },
  { rank: 'SPECIES', value: 'S. habroptilus',  desc: '\u201CSoft-feathered\u201D \u2014 the K\u0101k\u0101p\u014D' },
];

/** Node positions — bottom (Kingdom) to top (Species), gentle zigzag */
const NODES = [
  { x: 200, y: 558 },   // 0 Kingdom
  { x: 162, y: 472 },   // 1 Phylum
  { x: 242, y: 390 },   // 2 Class
  { x: 158, y: 308 },   // 3 Order
  { x: 238, y: 228 },   // 4 Family
  { x: 168, y: 148 },   // 5 Genus
  { x: 200, y: 68  },   // 6 Species
];

const NODE_R = 22;
const VIEW_W = 400;
const VIEW_H = 650;
const STAGGER = 0.72;  // seconds per level — slow, let each rank breathe

/** Decorative side-branches (opposite direction to next node) */
const DECO_PATHS = [
  'M200,558 Q224,551 248,543',   // Kingdom  → right
  'M162,472 Q138,466 114,460',   // Phylum   → left
  'M242,390 Q266,384 288,378',   // Class    → right
  'M158,308 Q134,302 110,296',   // Order    → left
  'M238,228 Q262,222 284,216',   // Family   → right
  'M168,148 Q144,142 120,136',   // Genus    → left
];
const DECO_ENDS = [
  [248, 543], [114, 460], [288, 378],
  [110, 296], [284, 216], [120, 136],
];

/** Root tendrils beneath Kingdom */
const ROOT_PATHS = [
  'M200,558 Q192,580 170,610',
  'M200,558 Q208,580 230,610',
  'M200,558 Q200,586 200,625',
  'M200,558 Q185,575 158,596',
  'M200,558 Q215,575 242,596',
];

/** Parrot-foot footprint (from assets/images/svg/parrot-foot.svg — Inkscape) */
const FOOT_PATH = 'm 19.765516,1428.3987 c -5.5081,-13.9962 -4.7103,-15.2578 21.2297,-33.562 34.8893,-24.6199 100.259904,-93.9202 87.834304,-118.3132 -20.8322,-40.8956 -26.9309,-71.3086 -18.7083,-93.2956 1.6182,-4.3267 -0.3703,-12.3174 -5.5328,-22.2324 -12.758504,-24.5047 -11.912104,-44.3503 2.353,-55.176 9.5351,-7.2367 12.3561,-11.7348 17.8743,-28.504 3.6039,-10.9511 7.0013,-18.7509 7.5497,-17.333 0.5484,1.4182 3.5177,10.6792 6.598,20.5802 4.6892,15.0713 6.8566,18.4714 13.314,20.8863 13.3678,4.9992 20.3558,40.9091 12.688,65.2004 -1.7183,5.4442 -0.3029,13.9328 3.8423,23.0613 3.6085,7.9451 9.3824,22.88 12.8299,33.1885 6.6585,19.9082 8.3914,23.1987 9.5756,18.1823 3.6593,-15.5016 43.8513,-53.1744 63.3516,-59.3812 8.1868,-2.6058 9.5648,-4.3006 13.8846,-17.0811 9.4461,-27.9467 25.4784,-41.8097 47.5198,-41.0897 16.3436,0.5337 21.6152,-1.0242 38.7476,-11.4519 10.907,-6.6382 19.8307,-11.4189 19.8307,-10.6237 0,0.7952 -4.5458,11.5882 -10.1017,23.9842 -7.9615,17.7629 -9.2186,23.7203 -5.934,28.1171 10.1277,13.5562 -12.7035,47.4138 -39.925,59.208 -13.8785,6.0128 -15.8605,7.7664 -22.0343,19.4946 -3.7316,7.0879 -18.0267,25.3485 -31.7673,40.5789 l -24.9832,27.6916 40.9626,13.6216 c 36.7267,12.2131 42.8539,13.2526 59.2556,10.0519 24.0395,-4.6912 48.8206,1.2994 54.149,13.0895 3.2274,7.1406 6.3581,8.8862 22.7929,12.7085 25.4577,5.9208 25.6085,6.6481 2.9291,14.1116 -16.202,5.3318 -20.9914,8.3205 -27.8802,17.3975 -12.2018,16.0781 -47.3109,16.9266 -62.7216,1.5158 -1.9264,-1.9261 -9.5277,-2.1398 -16.8926,-0.475 -29.4205,6.6502 -56.1696,0.9907 -100.7103,-21.3074 -22.531,-11.2796 -85.6223,56.3717 -105.9599,90.9867 -8.511704,14.4874 -17.471204,27.2293 -19.909804,28.3153 -12.4754,5.5562 -57.2559,-29.7964 -66.0513,-52.1456 z';
const FOOT_VIEWBOX  = '0 0 419.48 421.31';
const FOOT_XLATE    = 'translate(-17.019345,-1059.816)';
const FOOT_SIZE     = 22;
const FOOT_ANGLE    = 90;    // orientation offset (toes point "up" in symbol)
const FOOT_STRIDE   = 12;    // perpendicular offset for L/R alternation


/* ═══════════════════════════════════════════
   SVG Helpers
   ═══════════════════════════════════════════ */

function $(tag, attrs = {}) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function txt(str, attrs = {}) {
  const el = $('text', attrs);
  el.textContent = str;
  return el;
}

/** Cubic bezier path between two nodes (organic S-curve) */
function curvePath(a, b) {
  const midY = (a.y + b.y) / 2;
  return `M${a.x},${a.y} C${a.x},${midY} ${b.x},${midY} ${b.x},${b.y}`;
}


/* ═══════════════════════════════════════════
   Node Icons  (drawn in a 14×14 local box)
   ═══════════════════════════════════════════ */

function drawIcon(parent, index, cx, cy) {
  const g = $('g', {
    transform: `translate(${cx - 7},${cy - 7})`,
    'pointer-events': 'none',
  });

  switch (index) {
    /* 0 — Kingdom: Animalia (paw print) */
    case 0:
      g.append(
        $('circle', { cx: '7', cy: '10', r: '3.5', fill: 'currentColor', opacity: '0.8' }),
        $('circle', { cx: '3', cy: '5.5', r: '1.6', fill: 'currentColor', opacity: '0.7' }),
        $('circle', { cx: '7', cy: '3.5', r: '1.6', fill: 'currentColor', opacity: '0.7' }),
        $('circle', { cx: '11', cy: '5.5', r: '1.6', fill: 'currentColor', opacity: '0.7' }),
      );
      break;

    /* 1 — Phylum: Chordata (vertebrae chain) */
    case 1:
      g.append($('line', {
        x1: '7', y1: '0', x2: '7', y2: '14',
        stroke: 'currentColor', 'stroke-width': '0.7', opacity: '0.35',
      }));
      for (let i = 0; i < 4; i++) {
        g.append($('rect', {
          x: '4.5', y: String(1.5 + i * 3.2), width: '5', height: '2.2',
          rx: '1.1', fill: 'currentColor', opacity: String(0.85 - i * 0.08),
        }));
      }
      break;

    /* 2 — Class: Aves (feather) */
    case 2:
      g.append(
        $('path', {
          d: 'M7 1C4 4 3.5 8 4.5 13L7 8.5 9.5 13C10.5 8 10 4 7 1Z',
          fill: 'currentColor', opacity: '0.8',
        }),
        $('line', {
          x1: '7', y1: '2', x2: '7', y2: '12',
          stroke: 'var(--color-shadow)', 'stroke-width': '0.5', opacity: '0.4',
        }),
      );
      break;

    /* 3 — Order: Psittaciformes (curved parrot beak) */
    case 3:
      g.append(
        $('path', {
          d: 'M4.5 3.5C5 2 10 1.5 11 5.5C12 9.5 7.5 12 4.5 11',
          fill: 'none', stroke: 'currentColor',
          'stroke-width': '1.6', 'stroke-linecap': 'round',
        }),
        $('circle', { cx: '6.5', cy: '6', r: '1.1', fill: 'currentColor' }),
      );
      break;

    /* 4 — Family: Strigopidae (owl facial disc) */
    case 4:
      g.append(
        $('ellipse', {
          cx: '7', cy: '8', rx: '5.5', ry: '5',
          fill: 'none', stroke: 'currentColor', 'stroke-width': '1.1', opacity: '0.6',
        }),
        $('circle', { cx: '5', cy: '7', r: '1.6', fill: 'currentColor', opacity: '0.8' }),
        $('circle', { cx: '9', cy: '7', r: '1.6', fill: 'currentColor', opacity: '0.8' }),
        $('path', { d: 'M7 9.5L6 11.2H8Z', fill: 'currentColor', opacity: '0.55' }),
      );
      break;

    /* 5 — Genus: Strigops (owl eye) */
    case 5:
      g.append(
        $('circle', { cx: '7', cy: '7', r: '5', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.1', opacity: '0.5' }),
        $('circle', { cx: '7', cy: '7', r: '2.8', fill: 'currentColor', opacity: '0.25' }),
        $('circle', { cx: '7', cy: '7', r: '1.4', fill: 'currentColor', opacity: '0.9' }),
      );
      break;

    /* 6 — Species: S. habroptilus (round bird silhouette) */
    case 6:
      g.append(
        $('ellipse', { cx: '7', cy: '7.5', rx: '5', ry: '4.5', fill: 'currentColor', opacity: '0.7' }),
        $('circle', { cx: '4.5', cy: '6', r: '0.9', fill: 'var(--color-shadow)' }),
        $('path', { d: 'M3 7.5L1 8 3 8.5', fill: 'currentColor' }),
        $('line', { x1: '5.5', y1: '12', x2: '5.5', y2: '14', stroke: 'currentColor', 'stroke-width': '1.1' }),
        $('line', { x1: '8.5', y1: '12', x2: '8.5', y2: '14', stroke: 'currentColor', 'stroke-width': '1.1' }),
      );
      break;
  }

  parent.appendChild(g);
}


/* ═══════════════════════════════════════════
   SVG Construction
   ═══════════════════════════════════════════ */

function buildSVG() {
  const svg = $('svg', {
    class: 'taxonomy-tree__svg',
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    role: 'img',
    'aria-label': 'Taxonomic classification tree: Kingdom Animalia \u2192 Species S.\u00A0habroptilus',
  });

  /* ── Defs: glow filters ── */
  const defs = $('defs');

  // Standard node glow
  const glow = $('filter', { id: 'tt-glow', x: '-50%', y: '-50%', width: '200%', height: '200%' });
  const merge1 = $('feMerge');
  merge1.append($('feMergeNode', { in: 'blur1' }), $('feMergeNode', { in: 'SourceGraphic' }));
  glow.append($('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '3', result: 'blur1' }), merge1);
  defs.appendChild(glow);

  // Species glow (stronger)
  const specGlow = $('filter', { id: 'tt-sp-glow', x: '-80%', y: '-80%', width: '260%', height: '260%' });
  const merge2 = $('feMerge');
  merge2.append($('feMergeNode', { in: 'blur2' }), $('feMergeNode', { in: 'SourceGraphic' }));
  specGlow.append($('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '5', result: 'blur2' }), merge2);
  defs.appendChild(specGlow);

  // Branch ambient glow (soft halo behind the connecting lines)
  const branchGlow = $('filter', { id: 'tt-branch-glow', x: '-20%', y: '-20%', width: '140%', height: '140%' });
  branchGlow.append($('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '4' }));
  defs.appendChild(branchGlow);

  // Node inner shadow (gives depth / inset feel)
  const innerShadow = $('filter', { id: 'tt-inner-shadow', x: '-10%', y: '-10%', width: '120%', height: '120%' });
  // Flood with dark color, composite as inner shadow
  innerShadow.append(
    $('feComponentTransfer', { in: 'SourceAlpha', result: 'alpha' }),
    $('feGaussianBlur', { in: 'alpha', stdDeviation: '3', result: 'blur' }),
    $('feOffset', { dx: '0', dy: '2', in: 'blur', result: 'offset' }),
    $('feFlood', { 'flood-color': '#000000', 'flood-opacity': '0.5', result: 'flood' }),
    $('feComposite', { in: 'flood', in2: 'offset', operator: 'in', result: 'shadow' }),
    $('feComposite', { in: 'shadow', in2: 'SourceAlpha', operator: 'in', result: 'clipped' }),
    (() => {
      const m = $('feMerge');
      m.append($('feMergeNode', { in: 'SourceGraphic' }), $('feMergeNode', { in: 'clipped' }));
      return m;
    })(),
  );
  defs.appendChild(innerShadow);

  // Footprint symbol (parrot-foot.svg, Inkscape original)
  const footSym = $('symbol', { id: 'tt-footprint', viewBox: FOOT_VIEWBOX });
  const footPathG = $('g', { transform: FOOT_XLATE });
  footPathG.appendChild($('path', { d: FOOT_PATH, fill: 'currentColor' }));
  footSym.appendChild(footPathG);
  defs.appendChild(footSym);

  svg.appendChild(defs);

  /* ── Layer groups (back → front) ── */
  const rootsG   = $('g', { class: 'tt-roots' });
  const decoG    = $('g', { class: 'tt-deco' });
  const footprintG = $('g', { class: 'tt-footprints' });
  const branchG  = $('g', { class: 'tt-branches' });
  const nodeG    = $('g', { class: 'tt-nodes' });
  const labelG   = $('g', { class: 'tt-labels' });

  /* ── Root tendrils ── */
  ROOT_PATHS.forEach((d, i) => {
    rootsG.appendChild($('path', {
      d,
      class: 'tt-root',
      fill: 'none',
      stroke: 'var(--color-bark)',
      'stroke-width': String(1.6 - i * 0.12),
      'stroke-linecap': 'round',
      opacity: '0',
    }));
  });

  /* ── Decorative side-branches + terminal dots ── */
  DECO_PATHS.forEach((d, i) => {
    decoG.append(
      $('path', {
        d,
        class: `tt-deco-branch tt-deco--${i}`,
        fill: 'none',
        stroke: 'var(--color-bark)',
        'stroke-width': '1.1',
        'stroke-linecap': 'round',
        opacity: '0',
      }),
      $('circle', {
        cx: String(DECO_ENDS[i][0]),
        cy: String(DECO_ENDS[i][1]),
        r: '3',
        class: `tt-deco-dot tt-deco--${i}`,
        fill: 'var(--color-bark)',
        opacity: '0',
      }),
    );
  });

  /* ── Branch glow layer (soft halo behind main branches for depth) ── */
  const branchGlowG = $('g', { class: 'tt-branch-glow', opacity: '0' });
  for (let i = 0; i < NODES.length - 1; i++) {
    branchGlowG.appendChild($('path', {
      d: curvePath(NODES[i], NODES[i + 1]),
      fill: 'none',
      stroke: 'var(--color-amber)',
      'stroke-width': '6',
      'stroke-linecap': 'round',
      filter: 'url(#tt-branch-glow)',
      opacity: '0.3',
    }));
  }

  /* ── Main branches (bezier curves connecting consecutive nodes) ── */
  for (let i = 0; i < NODES.length - 1; i++) {
    branchG.appendChild($('path', {
      d: curvePath(NODES[i], NODES[i + 1]),
      class: `tt-branch tt-branch--${i}`,
      fill: 'none',
      stroke: 'var(--color-amber)',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      opacity: '0',
    }));
  }

  /* ── Nodes (circle + icon per rank) ── */
  for (let i = 0; i < NODES.length; i++) {
    const { x, y } = NODES[i];
    const isSpecies = i === NODES.length - 1;

    const g = $('g', {
      class: `tt-node tt-node--${i}${isSpecies ? ' tt-node--species' : ''}`,
      'data-rank': String(i),
      style: 'cursor: pointer',
      opacity: '0',
    });

    // Outer glow ring (hidden until hover / species pulse)
    g.appendChild($('circle', {
      cx: String(x), cy: String(y), r: String(NODE_R + 5),
      class: 'tt-node__glow',
      fill: 'none',
      stroke: isSpecies ? 'var(--color-amber-bright)' : 'var(--color-amber)',
      'stroke-width': '1.5',
      opacity: '0',
      filter: isSpecies ? 'url(#tt-sp-glow)' : 'url(#tt-glow)',
    }));

    // Main circle (with inner shadow for depth)
    g.appendChild($('circle', {
      cx: String(x), cy: String(y), r: String(NODE_R),
      class: 'tt-node__circle',
      fill: 'var(--color-dusk)',
      stroke: isSpecies ? 'var(--color-amber-bright)' : 'var(--color-amber)',
      'stroke-width': isSpecies ? '2.5' : '1.5',
      filter: 'url(#tt-inner-shadow)',
    }));

    // Contextual icon
    drawIcon(g, i, x, y);

    nodeG.appendChild(g);
  }

  /* ── Labels (rank + value text per node) ── */
  for (let i = 0; i < NODES.length; i++) {
    const { x, y } = NODES[i];
    const { rank, value } = RANKS[i];
    const isSpecies = i === NODES.length - 1;

    const g = $('g', {
      class: `tt-label tt-label--${i}${isSpecies ? ' tt-label--species' : ''}`,
      opacity: '0',
    });

    // Position label left or right of node (species: centered above)
    let lx, anchor;
    if (isSpecies) {
      lx = x;
      anchor = 'middle';
    } else if (x <= 200) {
      lx = x - NODE_R - 14;
      anchor = 'end';
    } else {
      lx = x + NODE_R + 14;
      anchor = 'start';
    }

    // Rank label (small, uppercase)
    g.appendChild(txt(rank, {
      x: String(lx),
      y: isSpecies ? String(y - NODE_R - 24) : String(y - 6),
      'text-anchor': anchor,
      class: 'tt-label__rank',
      fill: 'var(--color-frost)',
      'font-size': '9.5',
      'font-weight': '700',
      'letter-spacing': '0.12em',
    }));

    // Value label (taxonomic name, italic)
    g.appendChild(txt(value, {
      x: String(lx),
      y: isSpecies ? String(y - NODE_R - 9) : String(y + 10),
      'text-anchor': anchor,
      class: 'tt-label__value',
      fill: isSpecies ? 'var(--color-amber-bright)' : 'var(--color-ivory)',
      'font-size': isSpecies ? '14' : '12',
      'font-style': 'italic',
    }));

    labelG.appendChild(g);
  }

  /* ── Assemble layers (back → front) ── */
  svg.append(rootsG, decoG, footprintG, branchGlowG, branchG, nodeG, labelG);
  return svg;
}


/* ═══════════════════════════════════════════
   Footprint Walking Sequence
   ═══════════════════════════════════════════ */

/**
 * Places parrot-foot prints along each branch path.
 * Must be called AFTER svg is in the DOM (needs getPointAtLength).
 */
function addFootprints(svg) {
  const footG = svg.querySelector('.tt-footprints');
  if (!footG) return;

  const branches = svg.querySelectorAll('.tt-branch');
  let idx = 0;

  branches.forEach((path, bIdx) => {
    const len = path.getTotalLength();
    const spots = [0.32, 0.68];

    spots.forEach((t) => {
      const pt  = path.getPointAtLength(len * t);
      const pt2 = path.getPointAtLength(Math.min(len * t + 2, len));
      const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI);

      // Alternate left/right with perpendicular offset
      const isRight = idx % 2 === 1;
      const perpRad = ((angle + (isRight ? 90 : -90)) * Math.PI) / 180;
      const cx = pt.x + Math.cos(perpRad) * FOOT_STRIDE;
      const cy = pt.y + Math.sin(perpRad) * FOOT_STRIDE;

      const half = FOOT_SIZE / 2;
      const rot  = angle + FOOT_ANGLE;
      const flip = isRight ? -1 : 1;

      const g = $('g', {
        class: `tt-print tt-print--b${bIdx}`,
        transform:
          `translate(${cx},${cy}) rotate(${rot}) scale(${flip},1) translate(${-half},${-half})`,
        opacity: '0',
      });

      g.appendChild($('use', {
        href: '#tt-footprint',
        width: String(FOOT_SIZE),
        height: String(FOOT_SIZE),
      }));

      footG.appendChild(g);
      idx++;
    });
  });
}


/* ═══════════════════════════════════════════
   Animation — Staggered Reveal
   ═══════════════════════════════════════════ */

function revealAnimated(container, svg) {
  // Pre-calculate branch path lengths for stroke-dash animation
  svg.querySelectorAll('.tt-branch').forEach(path => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
  });

  requestAnimationFrame(() => {
    /* ── Act I: Roots emerge ── */
    svg.querySelectorAll('.tt-root').forEach(el => {
      el.style.transition = 'opacity 1.6s ease 0.15s';
      el.style.opacity = '0.2';
    });

    /* ── Act II: Branch glow — warm ambient haze ── */
    const branchGlowLayer = svg.querySelector('.tt-branch-glow');
    if (branchGlowLayer) {
      branchGlowLayer.style.transition = 'opacity 2.2s ease 0.8s';
      branchGlowLayer.style.opacity = '1';
    }

    /* ── Act III: Per-level — node lands, label fades, branch draws ── */
    for (let i = 0; i < NODES.length; i++) {
      const base = 0.5 + i * STAGGER;
      const isSpecies = i === NODES.length - 1;

      // Node circle + icon — slow, deliberate materialisation
      const node = svg.querySelector(`.tt-node--${i}`);
      if (node) {
        node.style.transition = `opacity 0.9s ease ${base}s`;
        node.style.opacity = '1';
      }

      // Label text — follows node with a generous beat
      const label = svg.querySelector(`.tt-label--${i}`);
      if (label) {
        label.style.transition = `opacity 0.7s ease ${base + 0.25}s`;
        label.style.opacity = '1';
      }

      // Branch LEADING TO this node — long, graceful draw
      if (i > 0) {
        const bd = base - 0.28;
        const branch = svg.querySelector(`.tt-branch--${i - 1}`);
        if (branch) {
          branch.style.transition =
            `stroke-dashoffset 1.4s ease-in-out ${bd}s, opacity 0.5s ease ${bd}s`;
          branch.style.strokeDashoffset = '0';
          branch.style.opacity = '0.65';
        }
      }

      // Decorative side-branch — quiet afterthought
      if (!isSpecies) {
        svg.querySelectorAll(`.tt-deco--${i}`).forEach(el => {
          el.style.transition = `opacity 0.8s ease ${base + 0.35}s`;
          el.style.opacity = '0.22';
        });
      }

      // Species: glow ring breathes in after everything settles
      if (isSpecies && node) {
        const glowRing = node.querySelector('.tt-node__glow');
        if (glowRing) {
          glowRing.style.transition = `opacity 1s ease ${base + 0.8}s`;
          glowRing.style.opacity = '0.35';
        }
      }
    }

    /* ── Act IV: Footprint walk — appear then dissolve, bottom → top ──
       Each print fades in, holds briefly, then fades back out —
       ghost tracks vanishing into the forest floor. */
    const allPrints = svg.querySelectorAll('.tt-print');
    const walkStart = 0.9;          // begin after Kingdom settles
    const walkStep  = 0.45;         // unhurried cadence between steps
    const printLife = 1.8;          // seconds each print is visible (in + hold + out)

    allPrints.forEach((fp, i) => {
      const delay = walkStart + i * walkStep;
      fp.style.animation =
        `tt-footstep ${printLife}s ease-in-out ${delay}s forwards`;
    });

    /* ── Act V: Info bar — last thing to appear ── */
    const info = container.querySelector('.taxonomy-tree__info');
    if (info) {
      const delay = 0.5 + NODES.length * STAGGER + 0.8;
      info.style.transition = `opacity 0.8s ease ${delay}s`;
      info.style.opacity = '1';
    }

    container.classList.add('taxonomy-tree--revealed');
  });
}

/** Instant reveal for prefers-reduced-motion */
function revealInstant(container, svg) {
  svg.querySelectorAll('.tt-root').forEach(el => { el.style.opacity = '0.2'; });
  const glowLayer = svg.querySelector('.tt-branch-glow');
  if (glowLayer) glowLayer.style.opacity = '1';
  svg.querySelectorAll('.tt-branch').forEach(el => {
    el.style.opacity = '0.65';
    el.style.strokeDasharray = 'none';
  });
  svg.querySelectorAll('.tt-node').forEach(el => { el.style.opacity = '1'; });
  svg.querySelectorAll('.tt-label').forEach(el => { el.style.opacity = '1'; });
  svg.querySelectorAll('.tt-deco-branch, .tt-deco-dot').forEach(el => {
    el.style.opacity = '0.22';
  });
  // Footprints are ephemeral — skip for reduced-motion (they stay hidden)

  const spGlow = svg.querySelector('.tt-node--species .tt-node__glow');
  if (spGlow) spGlow.style.opacity = '0.35';

  const info = container.querySelector('.taxonomy-tree__info');
  if (info) info.style.opacity = '1';

  container.classList.add('taxonomy-tree--revealed', 'taxonomy-tree--no-motion');
}


/* ═══════════════════════════════════════════
   Hover Interactivity
   ═══════════════════════════════════════════ */

function setupHover(svg, infoTextEl) {
  const defaultMsg = 'Trace the path from Kingdom to Species';

  svg.querySelectorAll('.tt-node').forEach(node => {
    const idx = parseInt(node.getAttribute('data-rank'), 10);

    node.addEventListener('mouseenter', () => {
      node.classList.add('tt-node--hover');
      if (infoTextEl && RANKS[idx]) {
        const r = RANKS[idx];
        infoTextEl.textContent = `${r.rank}  ${r.value} \u2014 ${r.desc}`;
      }
    });

    node.addEventListener('mouseleave', () => {
      node.classList.remove('tt-node--hover');
      if (infoTextEl) {
        infoTextEl.textContent = defaultMsg;
      }
    });

    // Focus support for keyboard nav
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    node.setAttribute('aria-label', `${RANKS[idx].rank}: ${RANKS[idx].value}`);

    node.addEventListener('focus', () => node.classList.add('tt-node--hover'));
    node.addEventListener('blur', () => node.classList.remove('tt-node--hover'));
  });
}


/* ═══════════════════════════════════════════
   Public API
   ═══════════════════════════════════════════ */

export function init(config = {}) {
  const {
    target = document.getElementById('taxonomy-tree'),
  } = config;

  if (!target) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mark container
  target.classList.add('taxonomy-tree');

  // Build and insert SVG
  const svg = buildSVG();
  target.appendChild(svg);

  // Place footprints along branch paths (needs DOM for getPointAtLength)
  addFootprints(svg);

  // Info bar (HTML element — better typography than SVG text)
  const infoBar = document.createElement('div');
  infoBar.className = 'taxonomy-tree__info';
  infoBar.style.opacity = '0';

  const infoText = document.createElement('span');
  infoText.className = 'taxonomy-tree__info-text';
  infoText.textContent = 'Trace the path from Kingdom to Species';
  infoBar.appendChild(infoText);
  target.appendChild(infoBar);

  // Hover / focus interactions
  setupHover(svg, infoText);

  // Trigger reveal
  if (reducedMotion) {
    revealInstant(target, svg);
  } else {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealAnimated(target, svg);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(target);
  }
}
