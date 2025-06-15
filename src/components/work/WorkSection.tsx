import React from "react";

interface Project {
  name: string;
  link: string;
}

const projects: Project[] = [
  { name: "Rator", link: "https://github.com/Ashu06102000/gen" },
  {
    name: "Idea canvas",
    link: "https://github.com/Ashu06102000/whiteboard_platform",
  },
  { name: "My Portfolio", link: "https://github.com/Ashu06102000/yashthakur" },
  {
    name: "DisneyPlus clone",
    link: "https://github.com/Ashu06102000/disneyPlusClone",
  },
  {
    name: "Netflio clone",
    link: "https://github.com/Ashu06102000/Netflix-clone",
  },
  { name: "News App", link: "https://github.com/Ashu06102000/NewsWeb" },
  {
    name: "Restaurant app",
    link: "https://github.com/Ashu06102000/Hidden-Leaf-restaurant",
  },
];

const pastelColors = [
  "#F8AFA6", // Peach
  "#FADCD9", // Light Pink
  "#D1E8E2", // Mint
  "#FFF1BA", // Pale Yellow
  "#D9D4F1", // Lavender
];

const getRandomColor = () =>
  pastelColors[Math.floor(Math.random() * pastelColors.length)];

const WorkSection: React.FC = () => {
  return (
    <section className="relative p-12 sm:p-16 p-5 md:p-24 bg-[#111] text-white flex flex-col gap-2">
      <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8">
        Selected Work
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const color = getRandomColor();
          return (
            <a
              key={index}
              href={project.link}
              className="block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="work-card min-h-96 border text-black border-white/10 rounded-2xl p-12 flex items-center justify-center text-xl sm:text-2xl md:text-6xl font-medium hover:brightness-105 transition-all duration-300"
                style={{ backgroundColor: color }}
              >
                {project.name}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default WorkSection;
