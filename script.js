* {
  box-sizing: border-box;
}

:root {
  --bg: #0b0c0e;
  --bg-soft: #101114;
  --surface: #16171c;
  --surface-hover: #1b1c22;
  --border: #282a31;
  --border-soft: #1d1e24;

  --text: #ece9e2;
  --muted: #9698a0;
  --faint: #60626a;

  --gold: #c9a227;
  --gold-bright: #e0bd4a;
  --gold-border: rgba(201, 162, 39, 0.4);

  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --mono: "JetBrains Mono", monospace;

  --nav: 264px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
  color: inherit;
}

button {
  border: 0;
  background: none;
  cursor: pointer;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
}

h2 {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  margin-bottom: 2.5rem;
}

h3 {
  font-size: 1.25rem;
}

.mono {
  font-family: var(--mono);
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 1rem;
  background: var(--gold);
  color: #111;
  padding: 0.75rem 1rem;
  z-index: 999;
}

.skip-link:focus {
  left: 1rem;
}

:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
}


/* NAVIGATION */

.site-nav {
  position: fixed;
  z-index: 100;
  inset: 0 auto 0 0;
  width: var(--nav);
  background: var(--bg-soft);
  border-right: 1px solid var(--border-soft);
  padding: 2rem 1.75rem;

  display: flex;
  flex-direction: column;
}

.nav-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--mono);
  font-size: 1.1rem;
  color: var(--gold-bright);
}

.nav-links {
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.nav-links ul {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.nav-link {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;

  padding: 0.6rem 0.5rem;

  color: var(--muted);
  font-size: 0.95rem;

  border-radius: 3px;

  transition:
    color 0.25s var(--ease),
    background 0.25s var(--ease),
    padding-left 0.25s var(--ease);
}

.nav-link span {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--faint);
}

.nav-link:hover {
  color: var(--text);
  background: var(--surface);
  padding-left: 0.8rem;
}

.nav-link.active {
  color: var(--gold-bright);
}

.nav-link.active span {
  color: var(--gold);
}

.nav-footer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.68rem;

  border: 1px solid var(--border);
  padding: 0.5rem 0.75rem;
  border-radius: 999px;

  width: max-content;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);

  animation: pulse 2.4s infinite;
}

.nav-socials,
.contact-socials,
.footer-socials {
  display: flex;
  gap: 1.4rem;
}

.social-link {
  font-size: 0.85rem;
  color: var(--muted);
  transition: 0.25s;
}

.social-link:hover {
  color: var(--gold-bright);
}

.nav-toggle {
  display: none;
}

.nav-scrim {
  display: none;
}


/* LAYOUT */

main,
.site-footer {
  margin-left: var(--nav);
}

.section {
  position: relative;
  padding: 7rem 6vw;
  border-bottom: 1px solid var(--border-soft);
}

.section-inner {
  max-width: 920px;
}

.eyebrow {
  display: inline-block;
  color: var(--gold);
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.9rem;
}


/* HERO */

.hero {
  min-height: 100vh;

  display: flex;
  align-items: center;

  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      to right,
      rgba(255,255,255,0.028) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(255,255,255,0.028) 1px,
      transparent 1px
    );

  background-size: 42px 42px;

  mask-image:
    radial-gradient(
      ellipse 70% 60% at 30% 40%,
      black 10%,
      transparent 75%
    );
}

.hero-content {
  position: relative;
  max-width: 700px;
}

.hero-name {
  font-size: clamp(3.4rem, 8vw, 5.8rem);
  line-height: 0.95;
  margin-bottom: 1.8rem;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  margin: 0 0 1.5rem;
}

.hero-intro {
  color: var(--muted);
  max-width: 600px;
  margin: 0 0 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.7rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.85rem 1.6rem;

  border-radius: 2px;

  font-size: 0.92rem;
  font-weight: 600;

  border: 1px solid transparent;

  transition: 0.25s var(--ease);
}

.btn-primary {
  background: var(--gold);
  color: #0b0c0e;
}

.btn-primary:hover {
  background: var(--gold-bright);
  transform: translateY(-2px);
}

.btn-ghost {
  border-color: var(--border);
  color: var(--text);
}

.btn-ghost:hover {
  border-color: var(--gold-border);
  color: var(--gold-bright);
  transform: translateY(-2px);
}

.hero-status {
  font-size: 0.78rem;
  color: var(--faint);
}

.hero-status span {
  color: var(--gold-bright);
}

.hero-status b {
  color: var(--gold);
  font-size: 0.65rem;
  animation: blink 1s step-end infinite;
}

.scroll-cue {
  position: absolute;
  bottom: 2.4rem;
  left: 6vw;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  color: var(--faint);

  font-family: var(--mono);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.scroll-cue span {
  width: 28px;
  height: 1px;
  background: var(--faint);
}


/* ABOUT */

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
}

.about-copy p {
  color: var(--muted);
  margin: 0 0 1.25rem;
}

.about-facts {
  border-left: 1px solid var(--border);
  padding-left: 1.75rem;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  height: max-content;
}

.fact {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.fact-label {
  color: var(--gold);
  font-size: 0.7rem;
  text-transform: uppercase;
}

.fact-value {
  color: var(--muted);
  font-size: 0.9rem;
}


/* SKILLS */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1px;

  background: var(--border-soft);
  border: 1px solid var(--border-soft);
}

.skill-card {
  background: var(--bg);
  padding: 2rem;

  transition: 0.3s;
}

.skill-card:hover {
  background: var(--surface);
}

.skill-card h3 {
  margin-bottom: 1rem;
}

.skill-card li {
  color: var(--muted);
  font-size: 0.9rem;

  padding: 0.35rem 0 0.35rem 1rem;

  position: relative;
}

.skill-card li::before {
  content: "";

  position: absolute;
  left: 0;
  top: 0.85em;

  width: 5px;
  height: 5px;

  background: var(--gold);
}


/* PROJECTS */

.project-featured {
  display: grid;
  grid-template-columns: 1fr 1.1fr;

  border: 1px solid var(--border);

  margin-bottom: 3rem;
}

.project-featured-media {
  min-height: 260px;

  padding: 1.5rem;

  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(201,162,39,0.16),
      transparent 60%
    ),
    repeating-linear-gradient(
      135deg,
      rgba(255,255,255,0.03) 0 1px,
      transparent 1px 14px
    ),
    var(--surface);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-featured-tag {
  width: max-content;

  border: 1px solid var(--gold-border);

  color: var(--gold-bright);

  padding: 0.35rem 0.7rem;

  font-size: 0.68rem;
  text-transform: uppercase;
}

.project-code {
  font-size: 1.4rem;
  line-height: 1.4;
  color: var(--gold-bright);
  opacity: 0.8;
}

.project-featured-body {
  padding: 2.5rem;
}

.project-category {
  color: var(--gold);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-featured-body p:not(.project-category),
.project-card p {
  color: var(--muted);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-top: 1.3rem;
}

.tech-tags li {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--muted);

  border: 1px solid var(--border);

  padding: 0.3rem 0.6rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  border: 1px solid var(--border);

  padding: 2rem;

  transition: 0.3s var(--ease);
}

.project-card:hover {
  border-color: var(--gold-border);
  transform: translateY(-3px);
}


/* EXPERIENCE */

.timeline {
  border-left: 1px solid var(--border);
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;

  left: -2.4rem;
  top: 0.3rem;

  width: 11px;
  height: 11px;

  border-radius: 50%;

  background: var(--bg);

  border: 2px solid var(--gold);
}

.timeline-date {
  color: var(--gold);
  font-size: 0.72rem;
  margin-bottom: 0.35rem;
}

.timeline-org {
  color: var(--muted);
  font-weight: 500;
  margin: 0.25rem 0 0.6rem;
}

.timeline-body p:last-child {
  color: var(--muted);
  max-width: 65ch;
}


/* EDUCATION */

.education-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.education-card {
  border: 1px solid var(--border);
  padding: 2rem;
}

.education-card p:not(.timeline-date) {
  color: var(--muted);
  margin: 0.4rem 0;
}

.education-card small {
  color: var(--faint);
}


/* CONTACT */

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3.5rem;
}

.contact-info > p {
  color: var(--muted);
  max-width: 42ch;
  margin-top: 0;
}

.contact-email {
  display: inline-block;

  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.4vw, 1.8rem);

  color: var(--gold-bright);

  border-bottom: 1px solid var(--gold-border);

  padding-bottom: 0.3rem;
  margin: 1rem 0 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-row label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--muted);
  text-transform: uppercase;
}

.form-row input,
.form-row textarea {
  background: var(--surface);

  border: 1px solid var(--border);

  padding: 0.85rem 1rem;

  border-radius: 2px;

  resize: vertical;
}

.form-row input:focus,
.form-row textarea:focus {
  outline: none;
  border-color: var(--gold);
}

.form-note {
  color: var(--faint);
  font-size: 0.68rem;
}


/* FOOTER */

.site-footer {
  padding: 3rem 6vw;
  border-top: 1px solid var(--border-soft);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-name {
  font-family: var(--font-display);
  font-weight: 600;
}

.footer-email {
  color: var(--muted);
  font-size: 0.88rem;
}

.footer-copy {
  color: var(--faint);
  font-size: 0.75rem;

  width: 100%;

  text-align: center;

  margin: 1rem 0 0;
}


/* ANIMATIONS */

.reveal {
  opacity: 0;
  transform: translateY(22px);

  transition:
    opacity 0.7s var(--ease),
    transform 0.7s var(--ease);
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@keyframes pulse {
  70% {
    box-shadow: 0 0 0 8px rgba(201,162,39,0);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}


/* TABLET */

@media (max-width: 1080px) {

  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-facts {
    border-left: 0;
    border-top: 1px solid var(--border);
    padding: 1.5rem 0 0;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}


/* MOBILE */

@media (max-width: 860px) {

  :root {
    --nav: 0px;
  }

  .site-nav {
    width: 100%;
    height: auto;

    inset: 0 0 auto 0;

    padding: 1.15rem 6vw;

    border-right: 0;
    border-bottom: 1px solid var(--border-soft);

    flex-direction: row;
  }

  .nav-top {
    width: 100%;
  }

  .nav-toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
  }

  .nav-toggle span {
    width: 22px;
    height: 2px;

    background: var(--text);

    transition: 0.3s;
  }

  .nav-toggle[aria-expanded="true"] span:first-child {
    transform: translateY(7px) rotate(45deg);
  }

  .nav-toggle[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle[aria-expanded="true"] span:last-child {
    transform: translateY(-7px) rotate(-45deg);
  }

  .nav-links {
    position: fixed;

    top: 0;
    right: 0;

    height: 100vh;

    width: min(320px, 82vw);

    background: var(--bg-soft);

    border-left: 1px solid var(--border);

    padding: 6rem 2rem 2rem;

    margin: 0;

    transform: translateX(100%);

    transition: transform 0.4s var(--ease);

    z-index: 150;
  }

  .nav-links.is-open {
    transform: none;
  }

  .nav-scrim {
    display: block;

    position: fixed;
    inset: 0;

    background: rgba(0,0,0,0.55);

    opacity: 0;
    pointer-events: none;

    transition: 0.4s;

    z-index: 140;
  }

  .nav-scrim.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  main,
  .site-footer {
    margin-left: 0;
  }

  .projects-grid,
  .education-grid {
    grid-template-columns: 1fr;
  }

  .project-featured {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .scroll-cue {
    display: none;
  }

  .hero {
    min-height: auto;
    padding-top: 8rem;
  }
}


/* SMALL PHONES */

@media (max-width: 560px) {

  .section {
    padding: 5rem 6vw;
  }

  .hero {
    padding: 7rem 6vw 5rem;
  }

  .hero-name {
    font-size: 3.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .project-featured-body {
    padding: 1.7rem;
  }

  .footer-inner {
    justify-content: center;
    text-align: center;
  }
}


/* REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .status-dot,
  .hero-status b {
    animation: none;
  }
}
