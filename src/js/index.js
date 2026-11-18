import Router from "./router";
import { renderCaseStudy, titleCase, plainRole } from "./caseStudy";
import { initHome, initCaseStudy, transition, refresh } from "./animations";

const homeEl = document.querySelector("[data-home-view]");
const caseStudyEl = document.querySelector("[data-case-study-view]");

let projects = [];
const loadProjects = async () => {
  if (projects.length) return projects;
  try {
    projects = await (await fetch("/project-data.json")).json();
  } catch (e) {
    console.error("Failed to load project data", e);
  }
  return projects;
};

/* ---------- nav highlight ---------- */
const navLinks = [...document.querySelectorAll("[data-nav]")];
const setActive = (id) => navLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === id));

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id === "all" ? "work" : e.target.id);
      }),
    { rootMargin: "-40% 0px -55% 0px" }
  );
  ["work", "all", "about", "skills", "contact"].forEach((id) => spy.observe(document.getElementById(id)));
}

/* ---------- home: all case studies list ---------- */
async function renderCaseList() {
  const list = document.querySelector("[data-case-list]");
  const count = document.querySelector("[data-project-count]");
  const data = await loadProjects();
  if (count) count.textContent = `${String(data.length).padStart(2, "0")} PROJECTS`;
  list.innerHTML = data
    .map(
      (p, i) => `
      <li>
        <a class="case-row" href="#/case-study/${p.slug}" data-cursor="OPEN">
          <span class="mono case-row__num">${String(i + 1).padStart(2, "0")}</span>
          <span class="case-row__title">${titleCase(p.title)}</span>
          <span class="case-row__desc">${p.description}</span>
          <span class="mono case-row__role">${plainRole(p.role)}</span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 15L15 5M7 5h8v8"/></svg>
        </a>
      </li>`
    )
    .join("");
}

/* ---------- boot ---------- */
let caseCtx = null;
const router = new Router({
  homeEl,
  caseStudyEl,
  transition,
  afterView: () => refresh(),
  onLeaveCase: () => {
    caseCtx?.revert();
    caseCtx = null;
  },
  onSection: (id) => setActive(id === "top" || id === "all" ? "work" : id),
  renderCaseStudy: async (slug) => {
    const data = await loadProjects();
    const project = data.find((p) => p.slug === slug);
    caseStudyEl.innerHTML = project
      ? renderCaseStudy(project, data)
      : `<div style="padding:96px 24px;text-align:center"><p style="color:#a9b1bc;margin-bottom:16px">Case study not found.</p><a class="btn btn--pill btn--sm" href="#/">Back home</a></div>`;
    if (project) caseCtx = initCaseStudy(caseStudyEl);
  },
});

(async () => {
  await renderCaseList();
  router.resolve();
  initHome();
})();
