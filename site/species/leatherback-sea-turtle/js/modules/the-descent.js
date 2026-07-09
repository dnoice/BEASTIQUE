/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ✒ Metadata
 *    - Title: The Descent — Hero Ambient Module (BEASTIQUE Edition - v1.0)
 *    - File Name: the-descent.js
 *    - Relative Path: site/species/leatherback-sea-turtle/js/modules/the-descent.js
 *    - Artifact Type: script
 *    - Version: 1.0.0
 *    - Date: 2026-06-27
 *    - Update: Saturday, June 27, 2026
 *    - Author: Dennis 'dnoice' Smaltz
 *    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
 *    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
 *
 * ✒ Description:
 *    The leatherback's OWN hero signature — not borrowed from any other species.
 *    Builds swaying god-ray light shafts that filter down through deep green water
 *    and pale marine snow that SINKS into the dark (the opposite of rising
 *    bubbles), echoing the deepest-diving reptile's plunge into the abyss. The
 *    light shafts react to pointer movement for a subtle parallax of depth.
 *
 * ✒ Key Features:
 *    - Feature 1: God-ray light shafts with randomized sway timing
 *    - Feature 2: Downward-sinking marine snow with lateral drift
 *    - Feature 3: Pointer-reactive shaft parallax (--shaft-shift)
 *    - Feature 4: Honors prefers-reduced-motion (CSS) and skips the pointer hook
 *    - Feature 5: Single batched DOM insertion for performance
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/**
 * Initialize the leatherback's "Descent" hero ambient.
 * @param {Object}  options
 * @param {string}  options.containerId - hero stage element id
 * @param {number}  options.shaftCount  - number of god-ray shafts
 * @param {number}  options.snowCount   - number of sinking marine-snow motes
 */
export function init(options = {}) {
    const {
        containerId = 'particles',
        shaftCount = 6,
        snowCount = 40
    } = options;

    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`[the-descent] container #${containerId} not found`);
        return;
    }

    const reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const fragment = document.createDocumentFragment();

    // ── God-ray light shafts ──────────────────────────────────────────────────
    for (let i = 0; i < shaftCount; i++) {
        const shaft = document.createElement('div');
        shaft.className = 'lightshaft';
        const left = (i / shaftCount) * 100 + (Math.random() * 10 - 5);
        const width = 36 + Math.random() * 70;
        shaft.style.cssText = `
            left: ${left}%;
            width: ${width}px;
            animation-duration: ${10 + Math.random() * 9}s;
            animation-delay: ${Math.random() * 7}s;
        `;
        fragment.appendChild(shaft);
    }

    // ── Sinking marine snow ───────────────────────────────────────────────────
    for (let i = 0; i < snowCount; i++) {
        const mote = document.createElement('div');
        mote.className = 'snow';
        const size = 1.5 + Math.random() * 3;
        mote.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${12 + Math.random() * 16}s;
            animation-delay: ${Math.random() * 14}s;
            opacity: ${0.2 + Math.random() * 0.45};
        `;
        fragment.appendChild(mote);
    }

    container.appendChild(fragment);

    // ── Pointer-reactive shaft parallax (unique interactivity) ────────────────
    if (reduceMotion) return;

    const shafts = container.querySelectorAll('.lightshaft');
    let ticking = false;

    window.addEventListener('pointermove', (event) => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            const dx = (event.clientX / window.innerWidth) - 0.5;
            shafts.forEach((shaft, idx) => {
                const depth = (idx + 1) / shafts.length;
                shaft.style.setProperty('--shaft-shift', `${dx * 34 * depth}px`);
            });
            ticking = false;
        });
    }, { passive: true });
}
