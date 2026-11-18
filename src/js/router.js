/**
 * Lightweight hash router.
 *   #/ , #/work , #/about ...   -> home (scrolls to the section)
 *   #/case-study/:slug          -> case study view
 */
export default class Router {
  constructor({ homeEl, caseStudyEl, renderCaseStudy, onSection, transition, onLeaveCase, afterView }) {
    Object.assign(this, { homeEl, caseStudyEl, renderCaseStudy, onSection, transition, onLeaveCase, afterView });
    this.current = null;
    window.addEventListener("hashchange", () => this.resolve());
  }

  parse() {
    const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "case-study" && parts[1]) return { name: "caseStudy", slug: parts[1] };
    return { name: "home", section: parts[0] || "top" };
  }

  async resolve() {
    const route = this.parse();
    const key = route.name === "caseStudy" ? route.slug : "home";
    const crossView = this.current !== null && (route.name === "caseStudy" || this.current !== "home");
    if (crossView && this.transition) {
      if (this.busy) return;
      this.busy = true;
      try {
        await this.transition(() => this.show(route));
      } finally {
        this.busy = false;
      }
      return;
    }
    await this.show(route);
  }

  async show(route) {

    if (route.name === "caseStudy") {
      this.homeEl.hidden = true;
      this.caseStudyEl.hidden = false;
      document.title = "Case study — Yash Thakur";
      this.onLeaveCase?.();
      await this.renderCaseStudy(route.slug);
      window.scrollTo({ top: 0, behavior: "instant" });
      this.current = "caseStudy";
      this.afterView?.("caseStudy");
      return;
    }

    const wasHome = this.current === "home";
    this.onLeaveCase?.();
    this.caseStudyEl.hidden = true;
    this.caseStudyEl.innerHTML = "";
    this.homeEl.hidden = false;
    document.title = "Yash Thakur — AI Engineer & Full-Stack Developer";
    this.current = "home";

    const target = document.getElementById(route.section);
    if (target) {
      // jump instantly when arriving from another view, glide when already on home
      requestAnimationFrame(() =>
        target.scrollIntoView({ behavior: wasHome ? "smooth" : "instant", block: "start" })
      );
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    this.onSection?.(route.section);
    this.afterView?.("home");
  }
}
