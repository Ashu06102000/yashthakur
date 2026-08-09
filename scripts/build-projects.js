const projectData = require("../src/public/project-data.json");

const set1 = projectData.slice(0, 4);
const set2 = projectData.slice(4, projectData.length);
const sets = [set1, set2];

const buildProjectSection = (templateCheerio, set, setIndex) => {
  const projectsSection = templateCheerio(
    `[data-projects-section-${setIndex + 1}]`
  );

  projectsSection.empty();

  set.forEach((project, index) => {
    const isEven = index % 2 === 0;
    const lineDirection = isEven ? "left" : "right";
    const scrollSpeed = isEven ? 8 : -8;
    const scrollDirection = isEven ? "right" : "left";
    const featured = setIndex === 0 && index === 0;
    const caseStudyPath = `#/case-study/${project.slug}`;

    // Add line before project
    const lineBefore = `<span class="home__projects__line ${lineDirection}"><span></span>`;
    projectsSection.append(lineBefore);

    const labelInner = featured
      ? `<div class="label__inner label-1">
         <p>FEATURED <br /> PROJECTS (${projectData.length})</p>
         <p>${project.role}</p>
       </div>`
      : `<div class="label__inner">
         <p>${project.role}</p>
       </div>`;

    const label = `
    <div class="home__projects__project__label">
      ${labelInner}
    </div>`;

    const isCritical = project.critical;

    const criticalDesc = isCritical
      ? `<p class="title__critical-desc">${project.description}</p>`
      : "";

    const hasLink = project.link && project.link.length > 0;

    const title = `
    <a href="${caseStudyPath}" class="home__projects__project__link">
      <h1 class="home__projects__project__title ${isCritical ? "title--critical" : ""}"
          data-scroll=""
          data-scroll-direction="horizontal"
          data-scroll-speed="${scrollSpeed}">
        <span class="inline-ovh">
          <div class="title__main ${scrollDirection}">
            <span class="slide-up"
                  data-content="${project.title}"
                  aria-hidden="true"></span>
            ${project.title}
          </div>
        </span>
      </h1>
      ${criticalDesc}
    </a>`;

    const button = `
    <div class="project__link">
      <a href="${caseStudyPath}" class="c-button">
        <span class="c-link">
          <span class="c-link__inner">
            <span>Case Study</span>
        </span>
      </a>
    </div>`;

    // Build project block
    const projectEl = `<div class="home__projects__project ${scrollDirection} ${isCritical ? "project--critical" : ""}">
      ${label}
      ${title}
      ${button}
    </div>`;
    projectsSection.append(projectEl);
  });

  // Add final line
  const finalLine = `<span class="home__projects__line ${
    set.length % 2 === 0 ? "left" : "right"
  }"><span></span>`;
  projectsSection.append(finalLine);
};

const buildProjectsSection = async (templateCheerio) => {
  sets.forEach((set, index) => {
    buildProjectSection(templateCheerio, set, index);
  });
};

module.exports = {
  buildProjectsSection,
};
