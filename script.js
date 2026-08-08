// ============================================================
// Afraim Murshed — Portfolio interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initActiveNavLink();
  initSmoothScroll();
  initContactForm();
  initFooterYear();
});

// ------------------------------------------------------------
// Mobile hamburger navigation
// ------------------------------------------------------------
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const scrim = document.getElementById('nav-scrim');
  if (!toggle || !links || !scrim) return;

  const closeNav = () => {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
    scrim.classList.remove('is-open');
  };

  const openNav = () => {
    toggle.setAttribute('aria-expanded', 'true');
    links.classList.add('is-open');
    scrim.classList.add('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeNav() : openNav();
  });

  scrim.addEventListener('click', closeNav);

  links.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeNav();
  });
}

// ------------------------------------------------------------
// Scroll-triggered reveal animations
// ------------------------------------------------------------
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// ------------------------------------------------------------
// Highlight the active section in the nav while scrolling
// ------------------------------------------------------------
function initActiveNavLink() {
  const sections = document.querySelectorAll('main .section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const linkFor = (id) =>
    document.querySelector(`.nav-link[data-section="${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkFor(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ------------------------------------------------------------
// Smooth scroll for in-page anchor links (fallback for older browsers)
// ------------------------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ------------------------------------------------------------
// Contact form — builds a mailto: link (no backend required)
// ------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      if (note) note.textContent = 'Please fill in every field before sending.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const mailtoLink = `mailto:afraim@myyahoo.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    if (note) note.textContent = 'Opening your email client…';
  });
}

// ------------------------------------------------------------
// Footer year
// ------------------------------------------------------------
function initFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
