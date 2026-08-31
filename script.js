document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollReveal();
  initActiveNav();
  initSmoothScroll();
  initContactForm();
  initFooterYear();
});


/* MOBILE NAVIGATION */

function initMobileNav() {

  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  const scrim = document.getElementById("nav-scrim");

  if (!toggle || !links || !scrim) return;

  const closeNav = () => {

    toggle.setAttribute("aria-expanded", "false");

    links.classList.remove("is-open");

    scrim.classList.remove("is-open");

    document.body.style.overflow = "";
  };

  const openNav = () => {

    toggle.setAttribute("aria-expanded", "true");

    links.classList.add("is-open");

    scrim.classList.add("is-open");

    document.body.style.overflow = "hidden";
  };

  toggle.addEventListener("click", () => {

    const isOpen =
      toggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }

  });

  scrim.addEventListener("click", closeNav);

  links.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", closeNav);

  });

  window.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeNav();
    }

  });

  window.addEventListener("resize", () => {

    if (window.innerWidth > 860) {
      closeNav();
    }

  });

}


/* SCROLL REVEAL */

function initScrollReveal() {

  const elements =
    document.querySelectorAll(".reveal");

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

  elements.forEach(element => {
    observer.observe(element);
  });

}


/* ACTIVE NAVIGATION */

function initActiveNav() {

  const sections =
    document.querySelectorAll("main section[id]");

  const navLinks =
    document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) {
    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          navLinks.forEach(link => {

            link.classList.toggle(
              "active",
              link.dataset.section === entry.target.id
            );

          });

        });

      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: 0
      }
    );

  sections.forEach(section => {
    observer.observe(section);
  });

}


/* SMOOTH SCROLL */

function initSmoothScroll() {

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener("click", event => {

        const id =
          anchor.getAttribute("href");

        if (!id || id === "#") {
          return;
        }

        const target =
          document.querySelector(id);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });

}


/* CONTACT FORM */

function initContactForm() {

  const form =
    document.getElementById("contact-form");

  const note =
    document.getElementById("form-note");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    const name =
      form.elements.name.value.trim();

    const email =
      form.elements.email.value.trim();

    const message =
      form.elements.message.value.trim();

    if (!name || !email || !message) {

      if (note) {
        note.textContent =
          "Please fill in every field before sending.";
      }

      return;
    }

    const subject =
      encodeURIComponent(
        `Portfolio inquiry from ${name}`
      );

    const body =
      encodeURIComponent(
        `${message}\n\nFrom: ${name} (${email})`
      );

    window.location.href =
      `mailto:afraim@myyahoo.com?subject=${subject}&body=${body}`;

    if (note) {
      note.textContent =
        "Opening your email client...";
    }

  });

}


/* FOOTER YEAR */

function initFooterYear() {

  const year =
    document.getElementById("footer-year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

}
