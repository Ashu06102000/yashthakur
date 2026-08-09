import gsap from "gsap";

export default class CaseStudy {
  constructor(scroll) {
    this.locomotive = scroll;
    this.caseStudyEl = document.querySelector("[data-case-study-view]");
    this.projects = [];
  }

  async loadProjects() {
    if (this.projects.length) return this.projects;

    try {
      const res = await fetch("/project-data.json");
      const data = await res.json();
      this.projects = data;
      return data;
    } catch (e) {
      console.error("Failed to load project data", e);
      return [];
    }
  }

  async render(slug) {
    const projects = await this.loadProjects();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      this.caseStudyEl.innerHTML =
        "<p style='color:#777;padding:4rem;'>Case study not found.</p>";
      return;
    }

    const cs = project.caseStudy || {};

    const features = (cs.features || [])
      .map(
        (f, i) => `
      <li class="cs__feature">
        <span class="cs__feature__num">${String(i + 1).padStart(2, "0")}</span>
        <span class="cs__feature__text">${f}</span>
      </li>`
      )
      .join("");

    const impact = (cs.impact || [])
      .map(
        (i) => `
      <li class="cs__metric">
        <span class="cs__metric__value">+</span>
        <span class="cs__metric__text">${i}</span>
      </li>`
      )
      .join("");

    const chips = (cs.techStack || [])
      .map((t) => `<span class="cs__chip">${t}</span>`)
      .join("");

    this.caseStudyEl.innerHTML = [
      '<div class="cs__wrap">',
      '<nav class="cs__nav">',
      '<a href="#/" class="cs__back c-button">← Back</a>',
      '<span class="cs__nav__title">' + project.role.replace(/<br[^>]*>/gi, " ") + "</span>",
      "</nav>",
      '<section class="cs__hero">',
      '<p class="cs__hero__label">Case Study</p>',
      '<h1 class="cs__hero__title"><span class="inline-ovh">' + project.title + "</span></h1>",
      '<p class="cs__hero__desc">' + (cs.overview || project.description) + "</p>",
      "</section>",
      '<div class="cs__content">',
      '<div class="cs__section"><div class="cs__section__head"><h2>Problem</h2></div><div class="cs__section__body"><p>' + (cs.problem || "") + "</p></div></div>",
      '<div class="cs__section"><div class="cs__section__head"><h2>Approach</h2></div><div class="cs__section__body"><p>' + (cs.approach || "") + "</p></div></div>",
      '<div class="cs__section"><div class="cs__section__head"><h2>Key Features</h2></div><ul class="cs__features__list">' + features + "</ul></div></div>",
'<div class="cs__section"><div class="cs__section__head"><h2>Impact</h2></div><ul class="cs__metrics__list">' + impact + "</ul></div></div>",
      '<div class="cs__section"><div class="cs__section__head"><h2>Stack</h2></div><div class="cs__chips">' + chips + "</div></div>",
      "</div>",
      '<div class="cs__marquee"><div class="marquee__wrap"><div class="marquee__inner"><span class="inner-span">LET&#39;S BUILD SOMETHING GREAT —</span><span class="inner-span">LET&#39;S BUILD SOMETHING GREAT —</span></div></div>',
      '<footer class="cs__footer"><a href="mailto:yash6102000thakur@gmail.com" class="c-button"><span class="c-link"><span class="c-link__inner"><span>Get in touch</span><span class="c-link__animated">Get in touch</span></span></span></a></footer>',
      "</div>"
    ].join("\n");

    gsap.from(".cs__nav", { y: -20, opacity: 0, duration: 0.5 });
    gsap.from(".cs__hero__title", { y: 60, opacity: 0, duration: 0.7 });
    gsap.from(".cs__hero__desc", { y: 30, opacity: 0, duration: 0.6 });
    gsap.from(".cs__section", { y: 40, opacity: 0, duration: 0.5, stagger: 0.1 });
  }
}
