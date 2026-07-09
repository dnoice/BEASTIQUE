/*
✒ Metadata
    - Title: Vault Data Renderer (BEASTIQUE Edition - v1.1)
    - File Name: vault-data.js
    - Relative Path: site/js/landing/vault-data.js
    - Artifact Type: library
    - Version: 1.1.0
    - Date: 2026-07-07
    - Update: Tuesday, July 07, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-07-07) [Anthropic - Claude Fable 5] — Wall assembly now
      waits for the section to scroll into view (IntersectionObserver adds
      wall__grid--ready); added the "Re-hang the Wall" control that redraws
      a fresh random hang; live tiles carry --live for the double-size span.
    - 1.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — Initial renderer.

✒ Description:
    Makes data/species.json the single source of truth for the landing page.
    Fetches the catalog once, then renders the Collection living wall, the
    per-category Archive counts, the wall summary line, and the By-the-Numbers
    values. If the fetch fails (e.g. file:// viewing), the static fallbacks
    baked into the HTML remain untouched.

✒ Key Features:
    - Single fetch of data/species.json; no other network dependencies
    - Living wall: every live exhibit always hangs, remainder drawn at random,
      reshuffled on every visit
    - Live-exhibit tiles link to their showcase and carry the gold signal seal
    - IUCN status coloring on hover labels (critical/endangered/vulnerable)
    - Rewrites [data-cat-count], [data-species-total], [data-status-critical],
      and [data-stat] numbers so counts can never drift from the catalog again
    - Broken thumbnails remove their own tile (catalog entries without renders)

✒ Usage Instructions:
    import { init as initVaultData } from './landing/vault-data.js';
    await initVaultData({ wallSize: 28 });
    Call BEFORE the counter module so [data-count] values are final when the
    count-up animation binds.

✒ Other Important Information:
    - Dependencies: data/species.json; thumbnail derivatives mirrored under
      assets/images/thumbs/ (WebP)
    - Compatible platforms: all evergreen browsers; requires HTTP serving
---------
*/

const STATUS_CLASS = {
  'Critically Endangered': 'critical',
  'Endangered': 'endangered',
  'Vulnerable': 'vulnerable',
};

/** Derive the WebP thumb path from a catalog thumbnail path. */
function thumbPath(thumbnail) {
  return thumbnail
    .replace('assets/images/', 'assets/images/thumbs/')
    .replace(/\.png$/i, '.webp');
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderCounts(species) {
  const perCategory = {};
  let critical = 0;
  let exhibits = 0;

  for (const s of species) {
    perCategory[s.category] = (perCategory[s.category] || 0) + 1;
    if (s.conservation_status === 'Critically Endangered') critical++;
    if (s.hasPage) exhibits++;
  }

  document.querySelectorAll('[data-cat-count]').forEach((el) => {
    const n = perCategory[el.dataset.catCount];
    if (n) el.textContent = `${n} Species`;
  });

  const totalEl = document.querySelector('[data-species-total]');
  if (totalEl) totalEl.textContent = String(species.length);

  const criticalEl = document.querySelector('[data-status-critical]');
  if (criticalEl) criticalEl.textContent = String(critical);

  const speciesStat = document.querySelector('[data-stat="species"]');
  if (speciesStat) {
    speciesStat.dataset.count = String(species.length);
    speciesStat.textContent = String(species.length);
  }

  const exhibitsStat = document.querySelector('[data-stat="exhibits"]');
  if (exhibitsStat && exhibits > 0) {
    exhibitsStat.dataset.count = String(exhibits);
    exhibitsStat.textContent = String(exhibits);
  }
}

function buildTile(s, index) {
  const live = Boolean(s.hasPage);
  const tile = document.createElement(live ? 'a' : 'div');
  tile.className = live ? 'wall__tile wall__tile--live' : 'wall__tile';
  if (live) {
    tile.href = s.page;
    tile.setAttribute('aria-label', `${s.name} — enter the exhibit`);
    tile.dataset.cursor = 'Enter';
  }
  tile.style.setProperty('--tile-delay', `${(index % 14) * 45}ms`);

  const img = document.createElement('img');
  img.className = 'wall__tile-image';
  img.src = thumbPath(s.thumbnail);
  img.alt = s.name;
  img.loading = 'lazy';
  img.addEventListener('error', () => tile.remove());

  const label = document.createElement('span');
  label.className = 'wall__tile-label';

  const name = document.createElement('span');
  name.className = 'wall__tile-name';
  name.textContent = s.name;

  const status = document.createElement('span');
  const statusClass = STATUS_CLASS[s.conservation_status];
  status.className = statusClass
    ? `wall__tile-status wall__tile-status--${statusClass}`
    : 'wall__tile-status';
  status.textContent = live
    ? `${s.conservation_status} · Exhibit Open`
    : s.conservation_status;

  label.append(name, status);
  tile.append(img, label);
  return tile;
}

function hangWall(wall, species, wallSize) {
  const live = species.filter((s) => s.hasPage);
  const rest = shuffle(species.filter((s) => !s.hasPage)).slice(
    0,
    Math.max(0, wallSize - live.length)
  );
  const picks = shuffle([...live, ...rest]);

  const frag = document.createDocumentFragment();
  picks.forEach((s, i) => frag.appendChild(buildTile(s, i)));
  wall.replaceChildren(frag);
}

function renderWall(species, wallSize) {
  const wall = document.querySelector('[data-wall]');
  if (!wall) return;

  hangWall(wall, species, wallSize);

  // Hold the assembly until the wall scrolls into view
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        wall.classList.add('wall__grid--ready');
        observer.disconnect();
      }
    },
    { rootMargin: '0px 0px -15% 0px', threshold: 0.05 }
  );
  observer.observe(wall);

  // Re-hang control: a fresh random draw, reassembled in place
  const shuffleBtn = document.querySelector('[data-wall-shuffle]');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      wall.classList.add('wall__grid--ready');
      hangWall(wall, species, wallSize);
    });
  }
}

export async function init(config = {}) {
  const opts = {
    speciesUrl: 'data/species.json',
    wallSize: 28,
    ...config,
  };

  let species;
  try {
    const res = await fetch(opts.speciesUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    species = await res.json();
  } catch (err) {
    // Static fallbacks in the HTML stay in place — degrade silently.
    console.warn('[BEASTIQUE] Catalog unavailable, using static fallbacks:', err);
    return;
  }

  if (!Array.isArray(species) || species.length === 0) return;

  renderCounts(species);
  renderWall(species, opts.wallSize);
}
