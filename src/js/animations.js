import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
export const motionOK = !RM;

/* ======================================================================
   helpers
   ====================================================================== */

/** wrap every word in a masked span; returns the inner spans to animate */
export function splitWords(el, { mask = true } = {}) {
  const words = [];
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.append(document.createTextNode(" "));
          const w = document.createElement("span");
          w.className = "w" + (mask ? "" : " w--plain");
          const i = document.createElement("span");
          i.className = "wi";
          i.textContent = part;
          w.append(i);
          frag.append(w);
          words.push(i);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
  walk(el);
  return words;
}

const GLYPHS = "01<>/_[]{}—=+*#";
/** decode-style text scramble */
export function scramble(el, duration = 0.9) {
  const final = el.dataset.text || (el.dataset.text = el.textContent);
  const state = { p: 0 };
  return gsap.to(state, {
    p: 1,
    duration,
    ease: "none",
    onUpdate() {
      const reveal = Math.floor(state.p * final.length);
      el.textContent = final
        .split("")
        .map((c, i) => (c === " " || i < reveal ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
        .join("");
    },
    onComplete: () => (el.textContent = final),
  });
}

const lerpTo = (el, prop) => gsap.quickTo(el, prop, { duration: 0.6, ease: "power3" });

/* ======================================================================
   cursor
   ====================================================================== */
function initCursor() {
  if (!FINE || RM) return;
  const dot = document.querySelector("[data-cursor-dot]");
  const ring = document.querySelector("[data-cursor-ring]");
  const label = ring.querySelector("span");
  document.body.classList.add("has-cursor");

  gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
  const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" });
  const dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });
  const rx = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
  const ry = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

  let shown = false;
  window.addEventListener("pointermove", (e) => {
    if (!shown) {
      shown = true;
      gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    }
    dx(e.clientX);
    dy(e.clientY);
    rx(e.clientX);
    ry(e.clientY);
  });
  document.addEventListener("pointerleave", () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 }));
  document.addEventListener("pointerenter", () => shown && gsap.to([dot, ring], { opacity: 1, duration: 0.2 }));

  const state = (s) => {
    if (s.label) {
      label.textContent = s.label;
      gsap.to(ring, { width: 88, height: 88, backgroundColor: "#C6F36B", borderColor: "#C6F36B", duration: 0.35, ease: "power3.out" });
      gsap.to(label, { opacity: 1, duration: 0.2 });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    } else if (s.link) {
      gsap.to(ring, { width: 64, height: 64, backgroundColor: "rgba(198,243,107,0.12)", borderColor: "#C6F36B", duration: 0.35, ease: "power3.out" });
      gsap.to(label, { opacity: 0, duration: 0.1 });
      gsap.to(dot, { scale: 0.6, duration: 0.2 });
    } else {
      gsap.to(ring, { width: 40, height: 40, backgroundColor: "rgba(198,243,107,0)", borderColor: "rgba(242,239,232,0.45)", duration: 0.35, ease: "power3.out" });
      gsap.to(label, { opacity: 0, duration: 0.1 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    }
  };

  document.addEventListener("pointerover", (e) => {
    const lbl = e.target.closest("[data-cursor]");
    if (lbl) return state({ label: lbl.dataset.cursor });
    if (e.target.closest(".btn")) return state({});
    if (e.target.closest("a, button")) return state({ link: true });
    state({});
  });
}

/* ======================================================================
   magnetic + tilt
   ====================================================================== */
function magnetic(els, strength = 0.35) {
  if (!FINE || RM) return;
  els.forEach((el) => {
    const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.45)" });
    const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.45)" });
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * strength);
      y((e.clientY - (r.top + r.height / 2)) * strength);
    });
    el.addEventListener("pointerleave", () => {
      x(0);
      y(0);
    });
  });
}

function tilt(els, max = 7) {
  if (!FINE || RM) return;
  els.forEach((el) => {
    const art = el.querySelector(".feature__art");
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      gsap.to(el, {
        rotationY: (px - 0.5) * max * 2,
        rotationX: (0.5 - py) * max * 2,
        transformPerspective: 900,
        duration: 0.5,
        ease: "power2.out",
      });
      if (art) gsap.to(art, { x: (px - 0.5) * -18, y: (py - 0.5) * -18, duration: 0.6, ease: "power2.out" });
    });
    el.addEventListener("pointerleave", () => {
      gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" });
      if (art) gsap.to(art, { x: 0, y: 0, duration: 0.9, ease: "power3.out" });
    });
  });
}

/* ======================================================================
   global (runs once)
   ====================================================================== */
let globalDone = false;
function initGlobal() {
  if (globalDone) return;
  globalDone = true;

  initCursor();

  // scroll progress
  gsap.to("[data-progress]", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
  });

  // floating nav: solid after scroll, hides on scroll down, returns on scroll up
  const bar = document.querySelector("[data-navbar]");
  let navHidden = false;
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate(self) {
      const y = self.scroll();
      const solid = y > 40;
      if (solid !== bar.classList.contains("is-solid")) bar.classList.toggle("is-solid", solid);
      const hide = self.direction === 1 && y > 240 && !bar.classList.contains("is-menu");
      if (hide !== navHidden) {
        navHidden = hide;
        gsap.to(bar, { yPercent: hide ? -100 : 0, duration: 0.4, ease: "power3.out", overwrite: "auto" });
      }
    },
  });
  // nav link scramble on hover
  document.querySelectorAll(".nav__link, .nav__brand").forEach((a) => {
    a.addEventListener("mouseenter", () => {
      if (RM) return;
      if (!a.querySelector("*")) scramble(a, 0.45);
    });
  });
  magnetic(document.querySelectorAll(".nav__link, .nav__brand"), 0.25);
}

/* ======================================================================
   intro (loader + hero)
   ====================================================================== */
function heroIntro(delay = 0) {
  const letters = gsap.utils.toArray(".hero__hover");
  const top = gsap.utils.toArray(".hero__row--top .hero__hover");
  const bottom = gsap.utils.toArray(".hero__eng .hero__hover");

  gsap.set(letters, { yPercent: 115 });
  gsap.set(".hero__side > *", { opacity: 0, y: 24 });
  gsap.set(".hero__dash i", { scaleX: 0 });
  gsap.set(".nav-bar", { y: -30, opacity: 0 });

  const tl = gsap.timeline({ delay, defaults: { ease: "power4.out" } });
  tl.to(".nav-bar", { y: 0, opacity: 1, duration: 0.8 })
    .to(top, { yPercent: 0, duration: 1.1, stagger: 0.045 }, 0.05)
    .to(".hero__dash i", { scaleX: 1, duration: 1.4, ease: "power4.inOut" }, 0.35)
    .to(bottom, { yPercent: 0, duration: 1.1, stagger: 0.045 }, 0.35)
    .to(".hero__side > *", { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.8);
  return tl;
}

function runLoader() {
  const loader = document.querySelector("[data-loader]");
  if (RM || sessionStorage.getItem("yt-intro")) {
    loader.remove();
    return Promise.resolve(false);
  }
  try {
    sessionStorage.setItem("yt-intro", "1");
  } catch (_) {}
  document.documentElement.style.overflow = "hidden";
  const count = loader.querySelector("[data-loader-count]");
  const bar = loader.querySelector("[data-loader-bar]");
  const n = { v: 0 };
  return new Promise((resolve) => {
    gsap
      .timeline({
        onComplete() {
          loader.remove();
          document.documentElement.style.overflow = "";
        },
      })
      .to(n, {
        v: 100,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => (count.textContent = Math.round(n.v)),
      })
      .to(bar, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0)
      .to(".loader__name, .loader__count", { yPercent: -30, opacity: 0, duration: 0.5, ease: "power3.in" }, 1.55)
      .add(() => resolve(true), 1.9)
      .to(loader, { yPercent: -100, duration: 0.95, ease: "power4.inOut" }, 1.9);
  });
}

/* ======================================================================
   home
   ====================================================================== */
export async function initHome() {
  initGlobal();

  const played = await runLoader();
  // runLoader resolves partway through the wipe so the hero can start under it
  heroIntro(played ? 0.1 : 0.05);

  gsap.context(() => {
    /* hero: halves drift apart, dash stretches */
    if (!RM) {
      const heroST = { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 };
      gsap.to(".hero__left", { x: () => -innerWidth * 0.07, ease: "none", scrollTrigger: heroST });
      gsap.to(".hero__right", { x: () => innerWidth * 0.07, ease: "none", scrollTrigger: heroST });
      gsap.to(".hero__dash", { scaleX: 2.4, ease: "none", scrollTrigger: heroST });
      gsap.to(".hero__eng", { x: () => -innerWidth * 0.04, ease: "none", scrollTrigger: heroST });
    }

    /* marquees: scroll-velocity driven */
    const marquees = [...document.querySelectorAll("[data-marquee]")].map((m) => {
      const track = m.querySelector(".marquee__track");
      const dir = Number(m.dataset.dir);
      const loop = gsap.fromTo(track, { xPercent: dir > 0 ? 0 : -25 }, { xPercent: dir > 0 ? -25 : 0, ease: "none", duration: 22, repeat: -1 });
      return { track, loop };
    });
    if (!RM) {
      let vel = 0;
      let lastSkew = 0;
      ScrollTrigger.create({ start: 0, end: "max", onUpdate: (s) => (vel = s.getVelocity()) });
      gsap.ticker.add(() => {
        vel *= 0.92;
        const boost = 1 + Math.abs(vel) / 260;
        const sign = vel < -40 ? -1 : 1;
        const skew = gsap.utils.clamp(-10, 10, vel / -180);
        const moved = Math.abs(skew - lastSkew) > 0.02;
        lastSkew = skew;
        marquees.forEach(({ track, loop }) => {
          loop.timeScale(gsap.utils.interpolate(loop.timeScale(), sign * boost, 0.12));
          if (moved) gsap.set(track, { skewX: skew });
        });
      });
    }

    if (RM) return;

    /* section labels: scramble in + draw the rule */
    document.querySelectorAll(".label").forEach((el) => {
      el.dataset.text = el.textContent;
      ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => scramble(el, 0.8) });
    });
    gsap.utils.toArray(".label-row__line").forEach((l) =>
      gsap.from(l, { scaleX: 0, transformOrigin: "left", duration: 1.4, ease: "power4.inOut", scrollTrigger: { trigger: l, start: "top 92%" } })
    );

    /* headings: masked word reveal */
    gsap.utils.toArray(".h2").forEach((h) => {
      const words = splitWords(h);
      gsap.from(words, {
        yPercent: 115,
        rotate: 3,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: { trigger: h, start: "top 88%" },
      });
    });

    /* feature cards */
    const features = gsap.utils.toArray(".feature");
    features.forEach((f) => f.setAttribute("data-cursor", "VIEW"));
    gsap.from(features, {
      y: 90,
      opacity: 0,
      clipPath: "inset(12% 0% 0% 0%)",
      duration: 1.2,
      stagger: 0.14,
      ease: "power4.out",
      scrollTrigger: { trigger: ".feature-grid", start: "top 82%" },
    });
    gsap.from(".feature__art", {
      scale: 1.35,
      duration: 1.8,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: { trigger: ".feature-grid", start: "top 82%" },
    });
    tilt(features, 5);

    /* case list */
    gsap.from(".case-list li", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: ".case-list", start: "top 85%" },
    });

    /* about: scrubbed word-by-word light-up */
    const about = document.querySelector(".about__text");
    const aboutWords = splitWords(about, { mask: false });
    gsap.fromTo(
      aboutWords,
      { opacity: 0.15 },
      { opacity: 1, stagger: 0.12, ease: "none", scrollTrigger: { trigger: about, start: "top 82%", end: "bottom 55%", scrub: 0.6 } }
    );

    /* stats: count up */
    gsap.utils.toArray(".stat__n").forEach((el) => {
      const m = el.textContent.match(/^(\d+)(.*)$/);
      if (!m) return;
      const target = Number(m[1]);
      const o = { v: 0 };
      el.textContent = "0" + m[2];
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(o, { v: target, duration: 1.6, ease: "power3.out", onUpdate: () => (el.textContent = Math.round(o.v) + m[2]) }),
      });
    });
    gsap.from(".stat", { y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".stats", start: "top 88%" } });

    /* skills: icons draw themselves */
    gsap.from(".skill", { y: 50, opacity: 0, stagger: 0.07, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".skills__grid", start: "top 85%" } });
    gsap.utils.toArray(".skill svg").forEach((svg) => {
      const shapes = svg.querySelectorAll("circle, rect, path");
      shapes.forEach((s) => s.setAttribute("pathLength", "1"));
      gsap.fromTo(
        shapes,
        { strokeDasharray: 1, strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut", stagger: 0.08, scrollTrigger: { trigger: svg, start: "top 90%" } }
      );
    });

    /* contact */
    gsap.from(".contact__cta > *, .contact__links a", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".contact__row", start: "top 80%" },
    });
    gsap.from(".footer", { opacity: 0, y: 20, duration: 0.8, scrollTrigger: { trigger: ".footer", start: "top 98%" } });

    magnetic(document.querySelectorAll(".contact__links a, .circle-arrow, .label-row__link"), 0.3);
  });

  ScrollTrigger.refresh();
}

/* ======================================================================
   case study
   ====================================================================== */
export function initCaseStudy(root) {
  return gsap.context(() => {
    if (RM) return;
    const words = splitWords(root.querySelector(".cs__title h1"));
    const tl = gsap.timeline({ delay: 0.35, defaults: { ease: "power4.out" } });
    tl.from(".cs__nav", { y: -30, opacity: 0, duration: 0.6 })
      .from(".cs__title .cs-eyebrow", { opacity: 0, y: 20, duration: 0.6 }, "<0.1")
      .add(() => scramble(root.querySelector(".cs__title .cs-eyebrow"), 0.8), "<")
      .from(words, { yPercent: 115, rotate: 3, duration: 1.1, stagger: 0.08 }, "<0.1")
      .from(".cs__meta > div", { y: 30, opacity: 0, stagger: 0.08, duration: 0.8 }, "-=0.7")
      .from(".cs__hero-media > div", { clipPath: "inset(0 0 100% 0)", duration: 1.2, ease: "power4.inOut" }, "-=0.6");

    const lead = root.querySelector(".cs__hero-media p");
    const leadWords = splitWords(lead, { mask: false });
    gsap.fromTo(
      leadWords,
      { opacity: 0.18 },
      { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: lead, start: "top 75%", end: "bottom 45%", scrub: 0.6 } }
    );
    gsap.to(".cs__hero-media > div", {
      backgroundPosition: "50% 30%",
      scrollTrigger: { trigger: ".cs__hero-media", start: "top bottom", end: "bottom top", scrub: true },
    });

    gsap.utils.toArray(".cs__split").forEach((el) =>
      gsap.from(el.children, { y: 50, opacity: 0, stagger: 0.14, duration: 1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 85%" } })
    );
    gsap.utils.toArray(".cs-h2").forEach((h) => {
      const w = splitWords(h);
      gsap.from(w, { yPercent: 115, duration: 1, stagger: 0.06, ease: "power4.out", scrollTrigger: { trigger: h, start: "top 88%" } });
    });
    gsap.from(".cs__card", { y: 60, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".cs__cards", start: "top 85%" } });
    gsap.utils.toArray(".cs__results .big").forEach((el, i) =>
      gsap.from(el, { yPercent: 100, opacity: 0, duration: 1, delay: i * 0.1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 90%" } })
    );
    gsap.from(".cs__results .txt", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8, scrollTrigger: { trigger: ".cs__results", start: "top 88%" } });
    gsap.from(".cs__chips span", { scale: 0.6, opacity: 0, stagger: 0.05, duration: 0.6, ease: "back.out(2)", scrollTrigger: { trigger: ".cs__chips", start: "top 90%" } });
    gsap.from(".cs__next > div > *", { y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".cs__next", start: "top 92%" } });

    tilt(gsap.utils.toArray(".cs__card"), 4);
    magnetic(root.querySelectorAll(".cs__nav .back"), 0.3);
  }, root);
}

/* ======================================================================
   page transition (accent curtain)
   ====================================================================== */
export async function transition(swap) {
  if (RM) return swap();
  const curtain = document.querySelector("[data-curtain]");
  gsap.set(curtain, { transformOrigin: "bottom" });
  await gsap.to(curtain, { scaleY: 1, duration: 0.6, ease: "power4.inOut" });
  await swap();
  gsap.set(curtain, { transformOrigin: "top" });
  await gsap.to(curtain, { scaleY: 0, duration: 0.7, ease: "power4.inOut", delay: 0.1 });
  gsap.set(curtain, { transformOrigin: "bottom" });
}

export const refresh = () => ScrollTrigger.refresh();
