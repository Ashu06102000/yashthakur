import gsap from "gsap";

/**
 * Lightweight hash-based SPA router.
 * Routes:
 *   ""                    -> home
 *   "#/"                  -> home
 *   "#/case-study/:slug"  -> case study view
 */
class Router {
  constructor({ homeView, caseStudyView, homeEl, caseStudyEl }) {
    this.homeView = homeView;
    this.caseStudyView = caseStudyView;
    this.homeEl = homeEl;
    this.caseStudyEl = caseStudyEl;

    this.current = null;

    this.onHashChange = this.onHashChange.bind(this);
    window.addEventListener("hashchange", this.onHashChange);
  }

  parse(hash) {
    const clean = hash.replace(/^#\/?/, "");
    const parts = clean.split("/").filter(Boolean);

    if (parts[0] === "case-study" && parts[1]) {
      return { name: "caseStudy", slug: parts[1] };
    }

    return { name: "home" };
  }

  onHashChange() {
    this.resolve(window.location.hash);
  }

  resolve(hash) {
    const parsed = this.parse(hash || "");

    if (parsed.name === "caseStudy") {
      this.showCaseStudy(parsed.slug);
    } else {
      this.showHome();
    }
  }

  showHome() {
    if (this.current === "home") return;

    this.current = "home";

    if (this.caseStudyEl) {
      gsap.set(this.caseStudyEl, { display: "none" });
      this.caseStudyEl.innerHTML = "";
    }
    if (this.homeEl) {
      gsap.set(this.homeEl, { display: "block" });
    }

    if (this.homeView) {
      this.homeView.scrollToTop();
    }
  }

  showCaseStudy(slug) {
    if (this.current === slug) return;

    this.current = slug;

    if (this.homeEl) {
      gsap.set(this.homeEl, { display: "none" });
    }

    if (this.caseStudyEl) {
      gsap.set(this.caseStudyEl, { display: "block" });
      if (this.caseStudyView) {
        this.caseStudyView.render(slug);
      }
    }

    if (this.homeView) {
      this.homeView.scrollToTop();
    }
  }

  navigate(path) {
    window.location.hash = path;
  }
}

export default Router;
