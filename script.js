// ============================================================
// Afraim Murshed | Portfolio
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollReveal();
  initActiveNavLink();
  initSmoothScroll();
  initContactForm();
  initFooterYear();
});


// ------------------------------------------------------------
// Mobile navigation
// ------------------------------------------------------------

function initMobileNav() {

  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  const scrim = document.getElementById("nav-scrim");

  if (!toggle || !links || !scrim) return;


  const closeNav = () => {

    toggle.setAttribute("aria-expanded", "false");

    links.classList.remove("is-open");

    scrim.classList.remove("is-open");

    document.body.classList.remove("nav-open");

  };


  const openNav = () => {

    toggle.setAttribute("aria-expanded", "true");

    links.classList.add("is-open");

    scrim.classList.add("is-open");

    document.body.classList.add("nav-open");

  };


  toggle.addEventListener("click", (event) => {

    event.preventDefault();

    const isOpen =
      toggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }

  });


  scrim.addEventListener("click", closeNav);


  links.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {
      closeNav();
    });

  });


  document.addEventListener("keydown", (event) => {

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


// ------------------------------------------------------------
// Smooth scrolling
// ------------------------------------------------------------

function initSmoothScroll() {

  document.addEventListener("click", (event) => {

    const anchor =
      event.target.closest('a[href^="#"]');

    if (!anchor) return;


    const href =
      anchor.getAttribute("href");

    if (!href || href === "#") return;


    let target;

    try {
      target = document.querySelector(href);
    } catch (error) {
      return;
    }


    if (!target) return;


    event.preventDefault();


    const toggle =
      document.getElementById("nav-toggle");

    const links =
      document.getElementById("nav-links");

    const scrim =
      document.getElementById("nav-scrim");


    if (toggle && links && scrim) {

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      links.classList.remove("is-open");

      scrim.classList.remove("is-open");

      document.body.classList.remove(
        "nav-open"
      );

    }


    setTimeout(() => {

      const nav =
        document.getElementById("site-nav");


      let navHeight = 0;


      if (nav) {

        const navStyle =
          window.getComputedStyle(nav);

        if (
          navStyle.position === "fixed" ||
          navStyle.position === "sticky"
        ) {
          navHeight =
            nav.getBoundingClientRect().height;
        }

      }


      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight -
        20;


      window.scrollTo({

        top: Math.max(
          0,
          targetPosition
        ),

        behavior: "smooth"

      });


      if (
        window.history &&
        window.history.pushState
      ) {

        window.history.pushState(
          null,
          "",
          href
        );

      }

    }, 60);

  });

}


// ------------------------------------------------------------
// Scroll reveal animations
// ------------------------------------------------------------

function initScrollReveal() {

  const revealEls =
    document.querySelectorAll(".reveal");

  if (!revealEls.length) return;


  if (!("IntersectionObserver" in window)) {

    revealEls.forEach((el) => {
      el.classList.add("is-visible");
    });

    return;

  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -40px 0px"
      }
    );


  revealEls.forEach((el) => {
    observer.observe(el);
  });

}


// ------------------------------------------------------------
// Active navigation section
// ------------------------------------------------------------

function initActiveNavLink() {

  const sections =
    document.querySelectorAll(
      "main .section[id]"
    );


  const navLinks =
    document.querySelectorAll(
      ".nav-link"
    );


  if (
    !sections.length ||
    !navLinks.length
  ) {
    return;
  }


  const linkFor = (id) => {

    return document.querySelector(
      `.nav-link[data-section="${id}"]`
    );

  };


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const link =
            linkFor(
              entry.target.id
            );


          if (!link) return;


          navLinks.forEach((item) => {

            item.classList.remove(
              "active"
            );

          });


          link.classList.add("active");

        });

      },
      {
        rootMargin:
          "-35% 0px -55% 0px",

        threshold: 0
      }
    );


  sections.forEach((section) => {

    observer.observe(section);

  });

}


// ------------------------------------------------------------
// Contact form
// ------------------------------------------------------------

function initContactForm() {

  const form =
    document.getElementById(
      "contact-form"
    );


  const note =
    document.getElementById(
      "form-note"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const name =
        form.elements.name.value.trim();


      const email =
        form.elements.email.value.trim();


      const message =
        form.elements.message.value.trim();


      if (
        !name ||
        !email ||
        !message
      ) {

        if (note) {

          note.textContent =
            "Please fill in every field.";

        }

        return;

      }


      const subject =
        encodeURIComponent(
          `Portfolio inquiry from ${name}`
        );


      const body =
        encodeURIComponent(
          `${message}\n\n${name} (${email})`
        );


      const mailto =
        `mailto:afraim@myyahoo.com?subject=${subject}&body=${body}`;


      if (note) {

        note.textContent =
          "Make Connections";

      }


      window.location.href =
        mailto;

    }
  );

}


// ------------------------------------------------------------
// Footer year
// ------------------------------------------------------------

function initFooterYear() {

  const year =
    document.getElementById(
      "footer-year"
    );


  if (!year) return;


  year.textContent =
    new Date().getFullYear();

}
