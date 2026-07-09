/*
✒ Metadata
    - Title: Archive Grid Renderer (BEASTIQUE Edition - v1.0)
    - File Name: archive-grid.js
    - Relative Path: site/js/modules/archive-grid.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-08
    - Update: Wednesday, July 08, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Makes the Archive (category) pages data-driven: fetches data/species.json,
    filters to the page's category (read from the body class), and re-renders
    the species grid from the catalog — so the Archives can never drift from
    the record again. Adds live IUCN status filter chips and a true count.
    Progressive enhancement: the hand-built cards in the HTML remain the
    no-JS / file:// fallback and are only replaced after a successful fetch.

✒ Key Features:
    - Single source of truth: the grid is the catalog, rendered at runtime
    - IUCN filter chips injected into the grid header (only statuses that
      exist in the category are offered); count reads "N of M" when filtered
    - Live exhibits render as links with the Explore CTA; the rest as
      Coming Soon cards — same markup contract as the hand-built cards
    - Card thumbnails served from the 400px WebP derivative tree
    - Staggered entrance animation independent of the shared reveal system
    - Graceful degradation: any fetch failure leaves the static grid intact

✒ Usage Instructions:
    import { init as initArchiveGrid } from './modules/archive-grid.js';
    initArchiveGrid();  // category auto-detected from body.category--<slug>

✒ Other Important Information:
    - Dependencies: data/species.json; thumbs under assets/images/thumbs/;
      styles in css/category.css (.archive-filters, card entrance)
    - Compatible platforms: all evergreen browsers; requires HTTP serving
---------
*/

const STATUS_BADGE = {
  'Critically Endangered': 'critical',
  'Endangered': 'endangered',
  'Vulnerable': 'vulnerable',
  'Near Threatened': 'near-threatened',
  'Least Concern': 'least-concern',
  'Data Deficient': 'data-needed',
};

// Severity order for chip layout
const STATUS_ORDER = [
  'Critically Endangered', 'Endangered', 'Vulnerable',
  'Near Threatened', 'Least Concern', 'Data Deficient',
];

function thumbPath(thumbnail) {
  return '../' + thumbnail
    .replace('assets/images/', 'assets/images/thumbs/')
    .replace(/\.(png|webp|jpg|jpeg)$/i, '.webp');
}

function buildCard(s, index) {
  const live = Boolean(s.hasPage);
  const card = document.createElement(live ? 'a' : 'div');
  card.className = live
    ? 'species-card species-card--js'
    : 'species-card species-card--coming-soon species-card--js';
  if (live) card.href = '../' + s.page;
  card.style.setProperty('--i', String(index % 18));

  const badge = STATUS_BADGE[s.conservation_status] || 'data-needed';
  const cta = live
    ? 'Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    : 'Coming Soon';

  card.innerHTML = `
    <div class="species-card__image-wrap">
      <img src="${thumbPath(s.thumbnail)}" alt="${s.name}" class="species-card__image" loading="lazy">
      <span class="species-card__badge species-card__badge--${badge}">${s.conservation_status}</span>
    </div>
    <div class="species-card__content">
      <h3 class="species-card__name">${s.name}</h3>
      <p class="species-card__scientific">${s.scientific_name}</p>
      <span class="species-card__cta">${cta}</span>
    </div>
  `;
  return card;
}

export async function init(config = {}) {
  const opts = {
    speciesUrl: '../data/species.json',
    gridSelector: '.species-grid__list',
    headerSelector: '.species-grid__header',
    countSelector: '.species-grid__count',
    ...config,
  };

  const catMatch = document.body.className.match(/category--([a-z]+)/);
  const grid = document.querySelector(opts.gridSelector);
  const header = document.querySelector(opts.headerSelector);
  const countEl = document.querySelector(opts.countSelector);
  if (!catMatch || !grid) return;
  const category = catMatch[1];

  let species;
  try {
    const res = await fetch(opts.speciesUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    species = await res.json();
  } catch (err) {
    // The hand-built cards remain — degrade silently.
    console.warn('[BEASTIQUE] Catalog unavailable, static archive stands:', err);
    return;
  }

  const roster = species
    .filter((s) => s.category === category)
    .sort((a, b) => a.name.localeCompare(b.name));
  if (!roster.length) return;

  let activeStatus = null; // null = all

  function render() {
    const shown = activeStatus
      ? roster.filter((s) => s.conservation_status === activeStatus)
      : roster;
    const frag = document.createDocumentFragment();
    shown.forEach((s, i) => frag.appendChild(buildCard(s, i)));
    grid.replaceChildren(frag);
    if (countEl) {
      countEl.textContent = activeStatus
        ? `${shown.length} of ${roster.length} species`
        : `${roster.length} species`;
    }
  }

  // Filter chips — only statuses that exist in this category
  if (header) {
    const present = STATUS_ORDER.filter((st) =>
      roster.some((s) => s.conservation_status === st));
    if (present.length > 1) {
      const bar = document.createElement('div');
      bar.className = 'archive-filters';
      bar.setAttribute('role', 'group');
      bar.setAttribute('aria-label', 'Filter by conservation status');

      const mkChip = (label, status) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'archive-filters__chip';
        b.textContent = label;
        b.setAttribute('aria-pressed', String(status === activeStatus));
        b.addEventListener('click', () => {
          activeStatus = status;
          bar.querySelectorAll('.archive-filters__chip').forEach((c) =>
            c.setAttribute('aria-pressed', 'false'));
          b.setAttribute('aria-pressed', 'true');
          render();
        });
        return b;
      };

      bar.appendChild(mkChip('All', null));
      present.forEach((st) => bar.appendChild(mkChip(st, st)));
      bar.querySelector('.archive-filters__chip').setAttribute('aria-pressed', 'true');
      header.insertAdjacentElement('afterend', bar);
    }
  }

  render();
}
