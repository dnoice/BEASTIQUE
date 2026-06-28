/**
 * Rosette Gallery Module
 * Auto-cycles through alternate images in fact rosettes with crossfade.
 * All galleries advance simultaneously on a single shared timer.
 * Supports click-to-advance and dot navigation.
 */

export function init(config = {}) {
  const {
    selector = '[data-gallery]',
    interval = 4000,
    threshold = 0.3
  } = config;

  const galleryEls = document.querySelectorAll(selector);
  if (!galleryEls.length) return;

  const instances = [];
  let sharedTimer = null;

  galleryEls.forEach(gallery => {
    const images = gallery.querySelectorAll('.fact__rosette-img');
    if (images.length <= 1) return;

    const rosette = gallery.closest('.fact__rosette');
    const dots = rosette ? rosette.querySelectorAll('.fact__rosette-dot') : [];
    let current = 0;

    function show(index) {
      images[current].classList.remove('fact__rosette-img--active');
      if (dots[current]) dots[current].classList.remove('fact__rosette-dot--active');

      current = ((index % images.length) + images.length) % images.length;

      images[current].classList.add('fact__rosette-img--active');
      if (dots[current]) dots[current].classList.add('fact__rosette-dot--active');
    }

    function next() {
      show(current + 1);
    }

    // Click gallery area to advance
    gallery.addEventListener('click', () => {
      next();
      restartSharedTimer();
    });

    rosette.style.cursor = 'pointer';

    // Dot clicks
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        show(i);
        restartSharedTimer();
      });
    });

    // Wrap rosette and inject interaction hint below it
    const wrapper = document.createElement('div');
    wrapper.className = 'fact__rosette-wrapper';
    rosette.parentNode.insertBefore(wrapper, rosette);
    wrapper.appendChild(rosette);

    const hint = document.createElement('p');
    hint.className = 'fact__gallery-hint';
    hint.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M15 15l-2 5L9 9l11 4-5 2z"/><path d="M21 21l-5.2-5.2"/></svg> Click image to browse`;
    wrapper.appendChild(hint);

    instances.push({ next });
  });

  // Shared timer: advance all galleries at once
  function advanceAll() {
    instances.forEach(inst => inst.next());
  }

  function startSharedTimer() {
    if (sharedTimer) return;
    sharedTimer = setInterval(advanceAll, interval);
  }

  function stopSharedTimer() {
    if (sharedTimer) {
      clearInterval(sharedTimer);
      sharedTimer = null;
    }
  }

  function restartSharedTimer() {
    stopSharedTimer();
    startSharedTimer();
  }

  // Start/stop shared timer based on any gallery being visible
  let visibleCount = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleCount++;
      } else {
        visibleCount = Math.max(0, visibleCount - 1);
      }
    });

    if (visibleCount > 0) {
      startSharedTimer();
    } else {
      stopSharedTimer();
    }
  }, { threshold });

  // Observe all rosettes
  galleryEls.forEach(gallery => {
    const rosette = gallery.closest('.fact__rosette');
    if (rosette) observer.observe(rosette);
  });
}
