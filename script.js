// ============================================================
// Afraim Murshed | Portfolio
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  initMobileNav();
  initSmoothScroll();
  initScrollReveal();
  initActiveNavLink();
  initContactForm();
  initFooterYear();

});


// ============================================================
// MOBILE NAVIGATION
// ============================================================

function initMobileNav() {

  const toggle =
    document.getElementById("nav-toggle");

  const links =
    document.getElementById("nav-links");

  const scrim =
    document.getElementById("nav-scrim");


  if (!toggle || !links || !scrim) {
    return;
  }


  function closeNav() {

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

    toggle.setAttribute(
      "aria-label",
      "Open navigation"
    );

    links.classList.remove("is-open");

    scrim.classList.remove("is-open");

    document.body.classList.remove("nav-open");

  }


  function openNav() {

    toggle.setAttribute(
      "aria-expanded",
      "true"
    );

    toggle.setAttribute(
      "aria-label",
      "Close navigation"
    );

    links.classList.add("is-open");

    scrim.classList.add("is-open");

    document.body.classList.add("nav-open");

  }


  toggle.addEventListener("click", (event) => {

    event.preventDefault();

    const isOpen =
      toggle.getAttribute(
        "aria-expanded"
      ) === "true";


    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }

  });


  scrim.addEventListener(
    "click",
    closeNav
  );


  links.querySelectorAll("a").forEach(
    (link) => {

      link.addEventListener(
        "click",
        closeNav
      );

    }
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {
        closeNav();
      }

    }
  );


  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 860) {
        closeNav();
      }

    }
  );

}


// ============================================================
// SMOOTH SCROLL
// ============================================================

function initSmoothScroll() {

  document.addEventListener(
    "click",
    (event) => {

      const anchor =
        event.target.closest(
          'a[href^="#"]'
        );


      if (!anchor) {
        return;
      }


      const href =
        anchor.getAttribute("href");


      if (
        !href ||
        href === "#"
      ) {
        return;
      }


      let target;


      try {

        target =
          document.querySelector(href);

      } catch (error) {

        return;

      }


      if (!target) {
        return;
      }


      event.preventDefault();


      const mobileMenu =
        document.getElementById(
          "nav-links"
        );


      const scrim =
        document.getElementById(
          "nav-scrim"
        );


      const toggle =
        document.getElementById(
          "nav-toggle"
        );


      if (mobileMenu) {
        mobileMenu.classList.remove(
          "is-open"
        );
      }


      if (scrim) {
        scrim.classList.remove(
          "is-open"
        );
      }


      if (toggle) {

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );

        toggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      }


      document.body.classList.remove(
        "nav-open"
      );


      setTimeout(() => {

        /*
          Mobile needs more space because
          the fixed navigation is 68px high.
        */

        const offset =
          window.innerWidth <= 860
            ? 82
            : 25;


        const position =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          offset;


        window.scrollTo({

          top: Math.max(
            0,
            position
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

    }
  );

}


// ============================================================
// SCROLL REVEAL
// ============================================================

function initScrollReveal() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if (!elements.length) {
    return;
  }


  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    elements.forEach(
      (element) => {

        element.classList.add(
          "is-visible"
        );

      }
    );

    return;

  }


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      (element) => {

        element.classList.add(
          "is-visible"
        );

      }
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.1,

        rootMargin:
          "0px 0px -35px 0px"
      }
    );


  elements.forEach(
    (element) => {

      observer.observe(element);

    }
  );

}


// ============================================================
// ACTIVE NAVIGATION
// ============================================================

function initActiveNavLink() {

  const sections =
    document.querySelectorAll(
      "main .section[id]"
    );


  const links =
    document.querySelectorAll(
      ".nav-link"
    );


  if (
    !sections.length ||
    !links.length
  ) {
    return;
  }


  if (
    !("IntersectionObserver" in window)
  ) {
    return;
  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            const sectionId =
              entry.target.id;


            links.forEach(
              (link) => {

                link.classList.remove(
                  "active"
                );


                if (
                  link.dataset.section ===
                  sectionId
                ) {

                  link.classList.add(
                    "active"
                  );

                }

              }
            );

          }
        );

      },
      {
        rootMargin:
          "-35% 0px -55% 0px",

        threshold: 0
      }
    );


  sections.forEach(
    (section) => {

      observer.observe(section);

    }
  );

}


// ============================================================
// CONTACT FORM
// ============================================================

function initContactForm() {

  const form =
    document.getElementById(
      "contact-form"
    );


  const note =
    document.getElementById(
      "form-note"
    );


  if (!form) {
    return;
  }


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


// ============================================================
// FOOTER YEAR
// ============================================================

function initFooterYear() {

  const year =
    document.getElementById(
      "footer-year"
    );


  if (!year) {
    return;
  }


  year.textContent =
    new Date().getFullYear();

}
