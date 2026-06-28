/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ✒ Metadata
 *    - Title: Particle System Module (BEASTIQUE Edition - v1.0)
 *    - File Name: particles.js
 *    - Relative Path: js/modules/particles.js
 *    - Artifact Type: script
 *    - Version: 1.0.0
 *    - Date: 2025-01-04
 *    - Update: Saturday, January 04, 2025
 *    - Author: Dennis 'dnoice' Smaltz
 *    - A.I. Acknowledgement: Anthropic - Claude Opus 4.5
 *    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
 *
 * ✒ Description:
 *    Creates floating particle elements in the hero section for an
 *    underwater ambiance effect. Particles float upward with varying
 *    sizes, speeds, and opacities.
 *
 * ✒ Key Features:
 *    - Feature 1: Dynamic particle generation
 *    - Feature 2: Randomized particle properties
 *    - Feature 3: CSS animation-driven motion
 *    - Feature 4: Configurable particle count
 *    - Feature 5: Performance-optimized DOM operations
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/**
 * Initialize the particle system in the hero section
 * @param {Object} options - Configuration options
 * @param {string} options.containerId - ID of the container element
 * @param {number} options.particleCount - Number of particles to create
 */
export function init(options = {}) {
    const {
        containerId = 'particles',
        particleCount = 40
    } = options;

    const container = document.getElementById(containerId);

    if (!container) {
        console.warn(`Particles container #${containerId} not found`);
        return;
    }

    // Create document fragment for batch DOM insertion
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Randomize particle properties
        const size = 2 + Math.random() * 4;
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            animation-duration: ${8 + Math.random() * 12}s;
            animation-delay: ${Math.random() * 10}s;
            width: ${size}px;
            height: ${size}px;
            opacity: ${0.3 + Math.random() * 0.5};
        `;

        fragment.appendChild(particle);
    }

    container.appendChild(fragment);
}
