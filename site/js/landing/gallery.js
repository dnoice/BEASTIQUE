/**
 * BEASTIQUE — Featured Gallery
 * Full-width cinematic image gallery with crossfade transitions,
 * keyboard navigation, auto-rotate, and mouse parallax.
 */

const DEFAULTS = {
  selector: '.gallery',
  autoInterval: 8000,
  transitionDuration: 1200,
  parallaxAmount: 12,   // px of image shift on mouse
};

export function init(config = {}) {
  const opts = { ...DEFAULTS, ...config };
  const gallery = document.querySelector(opts.selector);
  if (!gallery) return;

  const track = gallery.querySelector('.gallery__track');
  const slides = Array.from(gallery.querySelectorAll('.gallery__slide'));
  const dots = Array.from(gallery.querySelectorAll('.gallery__dot'));
  const prevBtn = gallery.querySelector('.gallery__prev');
  const nextBtn = gallery.querySelector('.gallery__next');
  const counterCurrent = gallery.querySelector('.gallery__counter-current');

  if (!slides.length) return;

  let current = 0;
  let autoTimer = null;
  let isTransitioning = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Core Navigation ---

  function goTo(index, direction = 'next') {
    if (isTransitioning || index === current) return;
    isTransitioning = true;

    const prev = current;
    current = ((index % slides.length) + slides.length) % slides.length;

    // Activate new slide
    slides[prev].classList.remove('gallery__slide--active');
    slides[prev].classList.add('gallery__slide--exiting');
    slides[current].classList.add('gallery__slide--active');

    // Update dots
    dots.forEach((d, i) => d.classList.toggle('gallery__dot--active', i === current));

    // Update counter
    if (counterCurrent) {
      counterCurrent.textContent = String(current + 1).padStart(2, '0');
    }

    // Clean up after transition
    setTimeout(() => {
      slides[prev].classList.remove('gallery__slide--exiting');
      isTransitioning = false;
    }, opts.transitionDuration);

    resetAuto();
  }

  function next() {
    goTo(current + 1, 'next');
  }

  function prev() {
    goTo(current - 1, 'prev');
  }

  // --- Auto-rotate ---

  function startAuto() {
    if (reducedMotion) return;
    stopAuto();
    autoTimer = setInterval(next, opts.autoInterval);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function resetAuto() {
    stopAuto();
    startAuto();
  }

  // --- Mouse Parallax on Active Slide ---

  if (!reducedMotion) {
    gallery.addEventListener('mousemove', (e) => {
      const rect = gallery.getBoundingClientRect();
      const xPercent = (e.clientX - rect.left) / rect.width - 0.5;
      const yPercent = (e.clientY - rect.top) / rect.height - 0.5;
      const activeImg = slides[current]?.querySelector('.gallery__image');
      if (activeImg) {
        const tx = -xPercent * opts.parallaxAmount;
        const ty = -yPercent * opts.parallaxAmount;
        activeImg.style.transform = `translate(${tx}px, ${ty}px) scale(1.05)`;
      }
    });

    gallery.addEventListener('mouseleave', () => {
      const activeImg = slides[current]?.querySelector('.gallery__image');
      if (activeImg) {
        activeImg.style.transform = 'translate(0, 0) scale(1)';
      }
    });
  }

  // --- Event Listeners ---

  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    // Only respond if gallery is somewhat visible
    const rect = gallery.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Pause on hover
  gallery.addEventListener('mouseenter', stopAuto);
  gallery.addEventListener('mouseleave', startAuto);

  // Pause when not visible
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startAuto();
      } else {
        stopAuto();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(gallery);

  // --- Initialize ---

  slides[0]?.classList.add('gallery__slide--active');
  dots[0]?.classList.add('gallery__dot--active');
  if (counterCurrent) counterCurrent.textContent = '01';
  startAuto();
}
