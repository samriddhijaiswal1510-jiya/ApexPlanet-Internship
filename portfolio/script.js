/* ═══════════════════════════════════════════════════════════════
   SAAYAN GHOOSHAL — PORTFOLIO SCRIPT
   ApexPlanet Data Analytics Internship 2026
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── LOADING SCREEN ─────────────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Hide loader after fill animation completes + small buffer
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      // Remove from DOM after transition
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }, 2400);
  });
})();

/* ─── CURSOR GLOW ────────────────────────────────────────────── */
(function initCursorGlow() {
  const cursor = document.getElementById('cursor-glow');
  if (!cursor) return;

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let cx = mx, cy = my;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  // Smooth follow with lerp
  function animateCursor() {
    cx += (mx - cx) * 0.10;
    cy += (my - cy) * 0.10;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hide on touch devices
  document.addEventListener('touchstart', () => {
    cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
  }, { once: true });
})();

/* ─── SCROLL PROGRESS BAR ────────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  function updateProgress() {
    const scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

/* ─── NAVBAR ─────────────────────────────────────────────────── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const allLinks  = document.querySelectorAll('.nav-link');

  if (!navbar) return;

  // Scroll → glass effect
  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // Active link on scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        allLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
})();

/* ─── SMOOTH SCROLL ──────────────────────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement)
                            .getPropertyValue('--nav-height')) || 72;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ─── PARTICLE CANVAS ────────────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], animId;

  const CONFIG = {
    count: 70,
    maxRadius: 2.2,
    speed: 0.38,
    connectDist: 140,
    colors: ['#6C63FF', '#8A2BE2', '#00E5FF', '#B0B8C4'],
  };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function createParticle() {
    return {
      x: randomBetween(0, W),
      y: randomBetween(0, H),
      vx: randomBetween(-CONFIG.speed, CONFIG.speed),
      vy: randomBetween(-CONFIG.speed, CONFIG.speed),
      r: randomBetween(0.5, CONFIG.maxRadius),
      color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
      opacity: randomBetween(0.3, 0.8),
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.count; i++) {
      particles.push(createParticle());
    }
  }

  function drawParticle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
    ctx.fill();
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.connectDist) {
          const alpha = (1 - dist / CONFIG.connectDist) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(108,99,255,${alpha})`;
          ctx.lineWidth   = 0.7;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function update() {
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    connectParticles();
    particles.forEach(drawParticle);
    update();
    animId = requestAnimationFrame(animate);
  }

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(animate);
    }
  });

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  resize();
  initParticles();
  animate();
})();

/* ─── TYPING ANIMATION ───────────────────────────────────────── */
(function initTyping() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const words = [
    'Python',
    'SQL',
    'Pandas',
    'Power BI',
    'Data Analytics',
    'Business Intelligence',
    'Machine Learning',
    'NumPy & Seaborn',
  ];

  let wordIndex   = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typeSpeed   = 90;
  let pauseDelay  = 1800;

  function type() {
    const current = words[wordIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === current.length) {
      // Finished typing → pause → delete
      setTimeout(() => { isDeleting = true; type(); }, pauseDelay);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting  = false;
      wordIndex   = (wordIndex + 1) % words.length;
    }

    setTimeout(type, typeSpeed);
  }

  // Small initial delay
  setTimeout(type, 900);
})();

/* ─── SCROLL REVEAL (Intersection Observer) ──────────────────── */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-fade');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  });

  revealEls.forEach(el => observer.observe(el));
})();

/* ─── ANIMATED SKILL BARS ────────────────────────────────────── */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill[data-width]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar    = entry.target;
        const target = bar.getAttribute('data-width');
        // Small delay for visual polish
        setTimeout(() => {
          bar.style.width = target + '%';
        }, 150);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();

/* ─── ANIMATED COUNTERS ──────────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const step     = 16; // ~60fps
    const steps    = Math.round(duration / step);
    let current    = 0;
    let count      = 0;

    const timer = setInterval(() => {
      count++;
      // Ease-out cubic
      const progress = count / steps;
      const eased    = 1 - Math.pow(1 - progress, 3);
      current        = Math.round(eased * target);
      el.textContent = current + suffix;

      if (count >= steps) {
        clearInterval(timer);
        el.textContent = target + suffix;
      }
    }, step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ─── TIMELINE EXPAND/COLLAPSE ───────────────────────────────── */
(function initTimeline() {
  const expandBtns = document.querySelectorAll('.expand-btn');
  if (!expandBtns.length) return;

  expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const detailId = btn.getAttribute('aria-controls');
      const detail   = document.getElementById(detailId);
      if (!detail) return;

      const isOpen = detail.classList.toggle('open');
      btn.classList.toggle('expanded', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
    });
  });
})();

/* ─── GALLERY LIGHTBOX ───────────────────────────────────────── */
(function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const closeBtn    = document.getElementById('lightbox-close');
  const lightBody   = document.getElementById('lightbox-body');
  const lightCap    = document.getElementById('lightbox-caption');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!lightbox || !galleryItems.length) return;

  function openLightbox(item) {
    const placeholder = item.querySelector('.gallery-placeholder');
    const label       = item.getAttribute('data-label') || '';

    if (placeholder) {
      // Clone the placeholder for the lightbox
      const clone = placeholder.cloneNode(true);
      lightBody.innerHTML = '';
      lightBody.appendChild(clone);
    }

    lightCap.textContent = label;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  closeBtn && closeBtn.addEventListener('click', closeLightbox);

  // Click backdrop
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
})();

/* ─── BACK TO TOP ────────────────────────────────────────────── */
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ─── BUTTON RIPPLE EFFECT ───────────────────────────────────── */
(function initRipple() {
  document.querySelectorAll('.btn, .btn-project, .cert-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect   = this.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const ripple = document.createElement('span');

      ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0; height: 0;
        border-radius: 50%;
        background: rgba(255,255,255,0.22);
        transform: translate(-50%, -50%);
        animation: rippleAnim 0.55s ease-out forwards;
        pointer-events: none;
        z-index: 10;
      `;

      // Ensure parent has relative positioning
      const pos = getComputedStyle(this).position;
      if (pos === 'static') this.style.position = 'relative';
      this.style.overflow = 'hidden';

      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Inject ripple keyframes once
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes rippleAnim {
        to {
          width: 250px;
          height: 250px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
})();

/* ─── PARALLAX HERO ORBS ─────────────────────────────────────── */
(function initParallax() {
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  const orb3 = document.querySelector('.hero-orb-3');

  if (!orb1) return;

  // Only on non-touch devices
  let isTouching = false;
  document.addEventListener('touchstart', () => { isTouching = true; }, { once: true });

  window.addEventListener('mousemove', (e) => {
    if (isTouching) return;
    const cx  = window.innerWidth  / 2;
    const cy  = window.innerHeight / 2;
    const dx  = (e.clientX - cx) / cx;
    const dy  = (e.clientY - cy) / cy;

    if (orb1) orb1.style.transform = `translate(${dx * -30}px, ${dy * -20}px)`;
    if (orb2) orb2.style.transform = `translate(${dx *  20}px, ${dy *  15}px)`;
    if (orb3) orb3.style.transform = `translate(${dx * -15}px, ${dy *  25}px)`;
  });
})();

/* ─── MOUSE-FOLLOW LIGHTING ON CARDS ─────────────────────────── */
(function initCardLighting() {
  const cards = document.querySelectorAll(
    '.project-card, .skill-card, .cert-card, .stat-item, .learning-item'
  );

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x    = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y    = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
      card.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(108,99,255,0.10) 0%, transparent 60%),
        rgba(255,255,255,0.06)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });
})();

/* ─── SKILL CARD TAG HOVER GLOW ──────────────────────────────── */
(function initTagGlow() {
  document.querySelectorAll('.skill-tag, .tl-tag, .tech-pill').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 0 14px rgba(108,99,255,0.35)';
    });
    tag.addEventListener('mouseleave', function () {
      this.style.boxShadow = '';
    });
  });
})();

/* ─── LAZY IMAGE LOADING ─────────────────────────────────────── */
(function initLazyLoad() {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if (!imgs.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  imgs.forEach(img => observer.observe(img));
})();

/* ─── SECTION ENTRANCE TILT (subtle 3D) ─────────────────────── */
(function initTilt() {
  // Very subtle tilt on project cards — only on desktop
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const tiltCards = document.querySelectorAll('.project-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect    = card.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const dx      = (e.clientX - centerX) / (rect.width  / 2);
      const dy      = (e.clientY - centerY) / (rect.height / 2);

      // Max ±5deg tilt
      const tiltX = (dy * -5).toFixed(2);
      const tiltY = (dx *  5).toFixed(2);

      card.style.transform = `
        translateY(-8px)
        rotateX(${tiltX}deg)
        rotateY(${tiltY}deg)
      `;
      card.style.transition = 'transform 0.08s linear, box-shadow 0.35s ease, border-color 0.35s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });
})();

/* ─── NAV LOGO CLICK → SMOOTH TOP ───────────────────────────── */
(function initLogoClick() {
  const logo = document.querySelector('.nav-logo');
  if (!logo) return;
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ─── FOOTER CURRENT YEAR (future-proof) ────────────────────── */
(function initYear() {
  const yearEls = document.querySelectorAll('.footer-copy');
  const year    = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = el.textContent.replace('2026', year >= 2026 ? year : '2026');
  });
})();

/* ─── KEYBOARD ACCESSIBILITY ─────────────────────────────────── */
(function initA11y() {
  // Trap focus in mobile nav when open
  const navLinks  = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger');
  if (!navLinks || !hamburger) return;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      hamburger.focus();
    }
  });
})();

/* ─── HERO GRADIENT ANIMATION (CSS var driven) ───────────────── */
(function initHeroGradient() {
  // Inject animated gradient rotation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradientShift {
      0%   { background-position: 0%   50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0%   50%; }
    }
    .hero {
      background: linear-gradient(
        -45deg,
        #0B0F19 0%,
        #0f0f23 25%,
        #0B0F19 50%,
        #0a1628 75%,
        #0B0F19 100%
      );
      background-size: 400% 400%;
      animation: gradientShift 18s ease infinite;
    }
  `;
  document.head.appendChild(style);
})();

/* ─── INTERNSHIP CARDS STAGGER ON LOAD ───────────────────────── */
(function initProjectStagger() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });
})();

/* ─── SCROLL TO SECTION HIGHLIGHT PULSE ──────────────────────── */
(function initSectionPulse() {
  // When clicking a nav link, briefly pulse the target section
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      const href    = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const section = document.querySelector(href);
      if (!section) return;

      section.style.transition = 'box-shadow 0.4s ease';
      section.style.boxShadow  = 'inset 0 0 0 2px rgba(108,99,255,0.15)';
      setTimeout(() => {
        section.style.boxShadow = '';
      }, 900);
    });
  });
})();

/* ─── CONTACT LINK COPY ON CLICK (Email) ────────────────────── */
(function initEmailCopy() {
  const emailLink = document.getElementById('contact-email');
  if (!emailLink) return;

  emailLink.addEventListener('click', (e) => {
    const email = 'saayan@example.com'; // Update with real email
    if (navigator.clipboard) {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        const val = emailLink.querySelector('.contact-link-val');
        if (val) {
          const orig = val.textContent;
          val.textContent = '✓ Copied!';
          val.style.color = '#4CAF50';
          setTimeout(() => {
            val.textContent = orig;
            val.style.color = '';
          }, 2000);
        }
      });
    }
  });
})();

/* ─── PERFORMANCE: REQUEST IDLE CALLBACK ────────────────────── */
(function deferNonCritical() {
  const run = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
  run(() => {
    // Pre-load next section images (if any real ones added later)
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const i = new Image();
      i.src   = img.dataset.src;
    });
  });
})();

/* ─── CONSOLE BRANDING ───────────────────────────────────────── */
(function consoleBrand() {
  const styles = [
    'background: linear-gradient(135deg, #6C63FF, #00E5FF)',
    'color: #fff',
    'padding: 8px 20px',
    'border-radius: 8px',
    'font-size: 14px',
    'font-weight: bold',
    'font-family: Poppins, sans-serif',
  ].join(';');

  console.log('%c Saayan Ghooshal | Data Analytics Portfolio ', styles);
  console.log(
    '%cApexPlanet Software Pvt. Ltd. Internship 2026 | Built with HTML · CSS · Vanilla JS',
    'color: #B0B8C4; font-size: 12px;'
  );
})();
