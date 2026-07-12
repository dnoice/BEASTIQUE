/*
✒ Metadata
    - Title: Gallery Grid Renderer — Special Halls (BEASTIQUE Edition - v1.0)
    - File Name: gallery-grid.js
    - Relative Path: site/js/modules/gallery-grid.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-10
    - Update: Friday, July 10, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Fills a special hall's grid by MEMBERSHIP rather than by category. Reads
    the hall's rule from data/galleries.json (status | ids | category) and
    renders the matching slice of data/species.json with the same card
    contract as the Archive pages. The flagship Endangered hall uses the
    status rule (the Red List tiers); Polar/Nocturnal/K9 use curated id
    rosters that are extended by editing galleries.json.

✒ Usage:
    <main class="gallery gallery--endangered" data-hall="endangered"> … </main>
    import { init as initGalleryGrid } from '../modules/gallery-grid.js';
    initGalleryGrid();

✒ Other Important Information:
    - Dependencies: data/galleries.json, data/species.json; card + filter
      styles shared from css/category.css. Degrades silently on fetch failure.
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
const STATUS_ORDER = [
  'Critically Endangered', 'Endangered', 'Vulnerable',
  'Near Threatened', 'Least Concern', 'Data Deficient',
];

function thumbPath(thumbnail, base) {
  return base + thumbnail
    .replace('assets/images/', 'assets/images/thumbs/')
    .replace(/\.(png|webp|jpg|jpeg)$/i, '.webp');
}

function matches(rule, s) {
  if (rule.rule === 'category') return rule.values.includes(s.category);
  if (rule.rule === 'status') return rule.values.includes(s.conservation_status);
  if (rule.rule === 'ids') return rule.values.includes(s.id);
  return false;
}

function buildCard(s, index, base) {
  const live = Boolean(s.hasPage);
  const card = document.createElement(live ? 'a' : 'div');
  card.className = live
    ? 'species-card species-card--js'
    : 'species-card species-card--coming-soon species-card--js';
  if (live) card.href = base + s.page;
  card.style.setProperty('--i', String(index % 18));
  const badge = STATUS_BADGE[s.conservation_status] || 'data-needed';
  const cta = live
    ? 'Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    : 'Coming Soon';
  card.innerHTML = `
    <div class="species-card__image-wrap">
      <img src="${thumbPath(s.thumbnail, base)}" alt="${s.name}" class="species-card__image" loading="lazy">
      <span class="species-card__badge species-card__badge--${badge}">${s.conservation_status}</span>
    </div>
    <div class="species-card__content">
      <h3 class="species-card__name">${s.name}</h3>
      <p class="species-card__scientific">${s.scientific_name}</p>
      <span class="species-card__cta">${cta}</span>
    </div>`;
  return card;
}

export async function init(config = {}) {
  const main = document.querySelector('[data-hall]');
  const grid = document.querySelector((config.gridSelector) || '.species-grid__list');
  if (!main || !grid) return;
  const hallId = main.getAttribute('data-hall');
  const base = main.getAttribute('data-base') || '../../../';

  const opts = {
    galleriesUrl: `${base}data/galleries.json`,
    speciesUrl: `${base}data/species.json`,
    gridSelector: '.species-grid__list',
    headerSelector: '.species-grid__header',
    countSelector: '.species-grid__count',
    ...config,
  };

  let halls, species;
  try {
    [halls, species] = await Promise.all([
      fetch(opts.galleriesUrl).then(r => { if (!r.ok) throw 0; return r.json(); }).then(d => d.halls),
      fetch(opts.speciesUrl).then(r => { if (!r.ok) throw 0; return r.json(); }),
    ]);
  } catch (err) {
    console.warn('[BEASTIQUE] Gallery data unavailable, static hall stands:', err);
    return;
  }

  const hall = halls.find(h => h.id === hallId);
  if (!hall) return;

  const roster = species
    .filter(s => matches(hall.membership, s))
    .sort((a, b) => {
      // Endangered: severity first, then name; others: alpha
      if (hall.membership.rule === 'status') {
        const d = STATUS_ORDER.indexOf(a.conservation_status) - STATUS_ORDER.indexOf(b.conservation_status);
        if (d) return d;
      }
      return a.name.localeCompare(b.name);
    });
  if (!roster.length) return;

  const header = document.querySelector(opts.headerSelector);
  const countEl = document.querySelector(opts.countSelector);
  let activeStatus = null;

  function render() {
    const shown = activeStatus
      ? roster.filter(s => s.conservation_status === activeStatus)
      : roster;
    const frag = document.createDocumentFragment();
    shown.forEach((s, i) => frag.appendChild(buildCard(s, i, base)));
    grid.replaceChildren(frag);
    if (countEl) {
      countEl.textContent = activeStatus
        ? `${shown.length} of ${roster.length} beasts`
        : `${roster.length} beasts`;
    }
  }

  // status chips (useful on Endangered + any multi-status roster)
  if (header) {
    const present = STATUS_ORDER.filter(st => roster.some(s => s.conservation_status === st));
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
          bar.querySelectorAll('.archive-filters__chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
          b.setAttribute('aria-pressed', 'true');
          render();
        });
        return b;
      };
      bar.appendChild(mkChip('All', null));
      present.forEach(st => bar.appendChild(mkChip(st, st)));
      bar.querySelector('.archive-filters__chip').setAttribute('aria-pressed', 'true');
      header.insertAdjacentElement('afterend', bar);
    }
  }

  render();
}
