import React from "react";

interface Project {
  name: string;
  link: string;
}

const projects: Project[] = [
  { name: "Rator", link: "#" },
  { name: "Idea canvas", link: "#" },
  { name: "My Portfolio", link: "#" },
  { name: "HoverPlay", link: "#" },
];

const WorkSection: React.FC = () => {
  return (
    <section className="relative p-12 sm:p-16 md:p-24 bg-[#111] text-white flex flex-col gap-12">
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
        Selected Work
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="work-card min-h-52 bg-white/5 border border-white/10 rounded-2xl p-12 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-medium hover:bg-white/10 transition-all duration-300">
              {project.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
