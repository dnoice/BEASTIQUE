/*
✒ Metadata
    - Title: The Halls — Shared Gallery Switcher (BEASTIQUE Edition - v1.0)
    - File Name: halls-nav.js
    - Relative Path: site/js/modules/halls-nav.js
    - Artifact Type: library
    - Version: 1.0.0
    - Date: 2026-07-10
    - Update: Friday, July 10, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Renders the cross-gallery switcher from data/galleries.json into any
    [data-halls] mount. One registry, every page — so a visitor can cross
    from any hall to any other, or home, from one control. Path-agnostic:
    the mount's data-base ("" at site root, "../" one level deep) prefixes
    both the fetch and the links. data-current highlights the active hall.

✒ Usage:
    <div data-halls data-base="../" data-current="aquatic"></div>
    import { init as initHalls } from '../modules/halls-nav.js';
    initHalls();

✒ Other Important Information:
    - Dependencies: data/galleries.json. No framework. Fails silent + leaves
      the static fallback (author a <noscript> list beside the mount if wanted).
---------
*/

const ICONS = {
  aquatic: 'M3 12c3-4 6-4 9 0s6 4 9 0M3 17c3-4 6-4 9 0s6 4 9 0',
  avian: 'M4 15c4-1 7-4 8-9 1 5 4 8 8 9-4 1-7 4-8 9-1-5-4-8-8-9z',
  insecta: 'M12 3v18M12 7c-3-3-7-3-8 0M12 7c3-3 7-3 8 0M12 13c-3-2-7-1-8 2M12 13c3-2 7-1 8 2',
  mammalian: 'M5 10a4 4 0 018 0c2 0 3 2 3 4s-2 4-5 4H7c-3 0-4-2-4-4s1-4 2-4z',
  reptilian: 'M4 14c2 0 3-2 6-2s3 3 6 1 4-4 4-4M6 12l-2-3M18 11l2-3',
  endangered: 'M12 3l9 16H3L12 3zM12 9v5M12 17v.5',
  polar: 'M12 3v18M3 12h18M6 6l12 12M18 6L6 18',
  nocturnal: 'M20 14a8 8 0 11-8-11 6 6 0 008 11z',
  k9: 'M4 8l3-3 2 3h6l2-3 3 3v4c0 4-3 7-8 7s-8-3-8-7V8z'
};

function iconSvg(id) {
  const d = ICONS[id] || ICONS.mammalian;
  return `<svg class="halls__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
}

export async function init() {
  const mounts = Array.from(document.querySelectorAll('[data-halls]'));
  if (!mounts.length) return;
  const base = mounts[0].getAttribute('data-base') ?? '';

  let halls;
  try {
    const res = await fetch(`${base}data/galleries.json`, { cache: 'no-cache' });
    halls = (await res.json()).halls;
  } catch {
    return; // leave any static fallback in place
  }

  const main = halls.filter(h => h.kind === 'main');
  const special = halls.filter(h => h.kind === 'special');

  for (const mount of mounts) {
    const current = mount.getAttribute('data-current') || '';
    mount.classList.add('halls');

    const group = (label, items) => `
      <div class="halls__group">
        <p class="halls__group-label">${label}</p>
        <ul class="halls__list">
          ${items.map(h => `
            <li>
              <a class="halls__item${h.id === current ? ' is-current' : ''}${h.flagship ? ' is-flagship' : ''}"
                 href="${base}${h.href}"
                 style="--hall-accent:${h.colors.accent}"
                 ${h.id === current ? 'aria-current="page"' : ''}>
                ${iconSvg(h.icon)}
                <span class="halls__item-text">
                  <span class="halls__item-name">${h.name}</span>
                  <span class="halls__item-tag">${h.tagline}</span>
                </span>
              </a>
            </li>`).join('')}
        </ul>
      </div>`;

    mount.innerHTML = `
      <button type="button" class="halls__toggle" aria-expanded="false" aria-haspopup="true">
        <span class="halls__toggle-label">Galleries</span>
        <svg class="halls__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="halls__panel" role="menu" hidden>
        <a class="halls__home" href="${base}index.html">← The Vault (Home)</a>
        ${group('The Five Halls', main)}
        ${group('Special Halls', special)}
      </div>`;

    const toggle = mount.querySelector('.halls__toggle');
    const panel = mount.querySelector('.halls__panel');
    const open = () => { panel.hidden = false; toggle.setAttribute('aria-expanded', 'true'); mount.classList.add('is-open'); };
    const close = () => { panel.hidden = true; toggle.setAttribute('aria-expanded', 'false'); mount.classList.remove('is-open'); };
    toggle.addEventListener('click', () => (panel.hidden ? open() : close()));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => { if (!mount.contains(e.target)) close(); });
  }
}
