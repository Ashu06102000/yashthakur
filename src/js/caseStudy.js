const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const ACRONYMS = /\b(Ai|Rag|Ui|Aws|Api|Llm|Mcp)\b/g;

/** "ENTERPRISE AI RAG KNOWLEDGE SYSTEM" -> "Enterprise AI RAG Knowledge System" */
export const titleCase = (s = "") =>
  s
    .toLowerCase()
    .replace(/(^|[\s-])(\w)/g, (_, a, b) => a + b.toUpperCase())
    .replace(ACRONYMS, (m) => m.toUpperCase());

/** "AI / <br /> AWS BEDROCK" -> "AI / AWS BEDROCK" */
export const plainRole = (s = "") => s.replace(/<br[^>]*>/gi, "").replace(/\s+/g, " ").trim();

const pad = (i) => String(i + 1).padStart(2, "0");

export function renderCaseStudy(project, projects) {
  const cs = project.caseStudy || {};
  const idx = projects.indexOf(project);
  const next = projects[(idx + 1) % projects.length];
  const title = titleCase(project.title);
  const stack = (cs.techStack || []).slice(0, 5).join(" · ");

  const features = (cs.features || [])
    .map((f, i) => `<div class="cs__card"><span class="num">${pad(i)}</span><p>${esc(f)}</p></div>`)
    .join("");

  const impact = (cs.impact || [])
    .map((t, i) => `<div ><span class="big">${pad(i)}</span><span class="txt">${esc(t)}</span></div>`)
    .join("");

  const chips = (cs.techStack || []).map((t) => `<span>${esc(t)}</span>`).join("");

  return `
    <header class="cs__nav">
      <div class="cs-wrap">
        <a href="#/" class="brand">yash<em>.</em>thakur</a>
        <a href="#/all" class="back">← All work</a>
      </div>
    </header>

    <section class="cs-narrow cs__title">
      <div class="cs-eyebrow">Case study · ${esc(title)}</div>
      <h1>${esc(title)}</h1>
      <dl class="cs__meta">
        <div><dt>Role</dt><dd>${esc(plainRole(project.role))}</dd></div>
        <div><dt>Project</dt><dd>${esc(title)}</dd></div>
        <div class="wide"><dt>Stack</dt><dd>${esc(stack)}</dd></div>
      </dl>
    </section>

    <section class="cs-wrap cs__hero-media">
      <div><p>${esc(cs.overview || project.description)}</p></div>
    </section>

    <section class="cs-narrow cs__split">
      <h2>The problem</h2>
      <p>${esc(cs.problem)}</p>
    </section>

    <section class="cs-narrow cs__split">
      <h2>Approach</h2>
      <p>${esc(cs.approach)}</p>
    </section>

    <section class="cs__band">
      <div class="cs-wrap">
        <div>
          <div class="cs-eyebrow" style="color:${"#a9b1bc"}">What I built</div>
          <h2 class="cs-h2" style="margin-top:10px">Key features</h2>
        </div>
        <div class="cs__cards">${features}</div>
      </div>
    </section>

    <section class="cs-wrap cs__section">
      <h2 class="cs-h2">Impact</h2>
      <div class="cs__results">${impact}</div>
    </section>

    <section class="cs__band">
      <div class="cs-wrap">
        <h2 class="cs-h2">Stack</h2>
        <div class="cs__chips">${chips}</div>
      </div>
    </section>

    <section class="cs__next">
      <div class="cs-wrap">
        <div>
          <span class="cs-eyebrow">Next case study</span>
          <span class="name">${esc(titleCase(next.title))}</span>
        </div>
        <a class="btn" href="#/case-study/${esc(next.slug)}">Read next →</a>
      </div>
    </section>
  `;
}
