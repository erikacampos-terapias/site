document.getElementById('year').textContent = new Date().getFullYear();

/* ---- menu mobile ---- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');
hamburgerBtn?.addEventListener('click', () => mobileOverlay.classList.add('open'));
mobileCloseBtn?.addEventListener('click', () => mobileOverlay.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileOverlay.classList.remove('open')));

/* ---- smooth scroll (Lenis) ---- */
let lenis;
if (typeof Lenis !== 'undefined') {
  lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

/* ---- GSAP setup ---- */
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  if (lenis) lenis.on('scroll', ScrollTrigger.update);

  /* headline kinetic */
  gsap.to('.hero-kinetic .word span', {
    y: 0, duration: 1, ease: 'power4.out', stagger: 0.06, delay: 0.2
  });

  /* parallax */
  const isMobile = window.matchMedia('(max-width:768px)').matches;
  if (!isMobile) {
    document.querySelectorAll('[data-parallax] img').forEach(img => {
      gsap.to(img, {
        yPercent: -10, ease: 'none',
        scrollTrigger: { trigger: img.closest('[data-parallax]'), start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
    document.querySelectorAll('[data-parallax-slow] img').forEach(img => {
      gsap.to(img, {
        yPercent: -14, ease: 'none',
        scrollTrigger: { trigger: img.closest('[data-parallax-slow]'), start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }
}

/* ---- reveal staggered via IntersectionObserver ---- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el, i) => {
  el.style.transitionDelay = (i % 6) * 60 + 'ms';
  io.observe(el);
});

/* ---- nav hide on scroll down, show on scroll up ---- */
let lastScroll = 0;
const navEl = document.querySelector('header.nav');
window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  if (cur > lastScroll && cur > 140) { navEl.style.transform = 'translateY(-100%)'; }
  else { navEl.style.transform = 'translateY(0)'; }
  lastScroll = cur;
});

/* ---- carrossel de depoimentos ---- */
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      const slideWidth = slides[0].offsetWidth + 24;
      track.scrollTo({ left: slideWidth * i, behavior: 'smooth' });
    });
    dotsContainer.appendChild(dot);
  });

  prevBtn?.addEventListener('click', () => {
    const slideWidth = slides[0].offsetWidth + 24;
    track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
  });
  nextBtn?.addEventListener('click', () => {
    const slideWidth = slides[0].offsetWidth + 24;
    track.scrollBy({ left: slideWidth, behavior: 'smooth' });
  });

  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const slideWidth = slides[0].offsetWidth + 24;
      const activeIndex = Math.round(track.scrollLeft / slideWidth);
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === activeIndex);
      });
    }, 100);
  });
});
