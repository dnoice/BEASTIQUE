/**
 * BEASTIQUE — Canvas Particle System
 * Metallic gold particles with mouse-reactive depth parallax.
 * Respects prefers-reduced-motion.
 */

const DEFAULTS = {
  selector: '#particle-canvas',
  count: 70,
  colors: [
    'rgba(200, 164, 92, 0.8)',   // bright gold
    'rgba(200, 164, 92, 0.5)',   // mid gold
    'rgba(200, 164, 92, 0.25)',  // dim gold
    'rgba(180, 150, 100, 0.4)',  // warm gold
    'rgba(220, 190, 120, 0.6)',  // pale gold
  ],
  maxSize: 4,
  minSize: 0.5,
  depthLayers: 3,
  mouseInfluence: 0.08,
  baseSpeed: 0.15,
};

class Particle {
  constructor(canvas, config) {
    this.canvas = canvas;
    this.config = config;
    this.depth = Math.ceil(Math.random() * config.depthLayers);
    this.depthFactor = this.depth / config.depthLayers;
    this.reset(true);
  }

  reset(initial = false) {
    const { canvas, config } = this;
    this.x = Math.random() * canvas.width;
    this.y = initial
      ? Math.random() * canvas.height
      : canvas.height + 10;
    this.size =
      (config.minSize + Math.random() * (config.maxSize - config.minSize)) *
      this.depthFactor;
    this.baseOpacity = 0.1 + Math.random() * 0.5 * this.depthFactor;
    this.opacity = this.baseOpacity;
    this.color =
      config.colors[Math.floor(Math.random() * config.colors.length)];
    this.speedY = -(config.baseSpeed + Math.random() * 0.3) * this.depthFactor;
    this.speedX = (Math.random() - 0.5) * 0.15;
    this.wobbleAmp = Math.random() * 0.4;
    this.wobbleFreq = 0.002 + Math.random() * 0.003;
    this.life = 0;
    this.shimmerPhase = Math.random() * Math.PI * 2;
  }

  update(mouse, time) {
    const { canvas, config } = this;

    // Base movement
    this.life++;
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.life * this.wobbleFreq) * this.wobbleAmp;

    // Mouse influence — deeper particles react less
    if (mouse.active) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 250;
      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * config.mouseInfluence * this.depthFactor;
        this.x += dx * force;
        this.y += dy * force;
      }
    }

    // Shimmer
    this.opacity =
      this.baseOpacity *
      (0.7 + 0.3 * Math.sin(time * 0.001 + this.shimmerPhase));

    // Reset if off-screen
    if (
      this.y < -20 ||
      this.x < -20 ||
      this.x > canvas.width + 20
    ) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

export function init(config = {}) {
  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const opts = { ...DEFAULTS, ...config };
  const canvas = document.querySelector(opts.selector);
  if (!canvas || !(canvas instanceof HTMLCanvasElement)) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouse = { x: 0, y: 0, active: false };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    // Adjust for DPR in particle positions
    particles.forEach(p => {
      p.canvas = { width: rect.width, height: rect.height };
    });
  }

  function createParticles() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const virtualCanvas = { width: rect.width, height: rect.height };
    particles = [];
    for (let i = 0; i < opts.count; i++) {
      particles.push(new Particle(virtualCanvas, opts));
    }
  }

  function animate(time) {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Sort by depth for proper layering
    particles.sort((a, b) => a.depth - b.depth);

    for (const p of particles) {
      p.update(mouse, time);
      p.draw(ctx);
    }

    animationId = requestAnimationFrame(animate);
  }

  // Mouse tracking with lerping
  let targetMouse = { x: 0, y: 0 };
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.parentElement.getBoundingClientRect();
    targetMouse.x = e.clientX - rect.left;
    targetMouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Smooth mouse position
  function lerpMouse() {
    mouse.x += (targetMouse.x - mouse.x) * 0.08;
    mouse.y += (targetMouse.y - mouse.y) * 0.08;
    requestAnimationFrame(lerpMouse);
  }

  // Initialize
  resize();
  createParticles();
  animate(0);
  lerpMouse();

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      createParticles();
    }, 200);
  });

  // Pause when not visible
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!animationId) animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    },
    { threshold: 0 }
  );
  observer.observe(canvas.parentElement);
}
