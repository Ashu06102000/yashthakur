import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const groupedSkills = [
  "Development Strategy",
  "Full-Stack Execution",
  "Performance Optimization",
  "Cross-Platform Builds",
  "Responsive UI Design",
  "SEO-Friendly Development",
  "Accessibility Best Practices",
  "Problem Solving",
  "Agile Workflow",
  "Code Management",
  "Continuous Learning",
  "Client Communication",
];

const SkillSection = () => {
  return (
    <section className="px-6 sm:px-10 md:px-20 py-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between">
      {/* Sticky Heading Block */}
      <div className="text-left md:sticky md:top-32 flex-shrink-0 w-full md:w-1/3">
        <div className="flex flex-col gap-2 font-oreni">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold uppercase text-black">
            Capabilities
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-black">
            Here's what I bring to the table
          </p>
        </div>
      </div>

      {/* Skills List */}
      <div className="relative w-full md:w-2/3">
        <ul className="flex flex-col font-roboto gap-1">
          {groupedSkills.map((skill, _) => (
            <li
              key={skill}
              className="relative list-none text-black text-2xl font-light transition-transform duration-500 hover:font-medium hover:-translate-x-16"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillSection;
