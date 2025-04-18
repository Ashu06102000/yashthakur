import { useEffect, useRef } from "react";
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
  const listRef = useRef(null);
  const itemRefs = useRef<any[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRefs.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 150%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 sm:px-10 md:px-20 py-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between">
      {/* Sticky Heading Block */}
      <div className="text-left md:sticky md:top-32 flex-shrink-0 w-full md:w-1/3">
        <div className="flex flex-col gap-2 font-oreni">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase text-black">
            Capabilities
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-black">
            Here's what I bring to the table
          </p>
        </div>
      </div>

      {/* Skills List */}
      <div className="relative w-full md:w-2/3" ref={listRef}>
        <ul className="space-y-4 flex flex-col font-roboto">
          {groupedSkills.map((skill, i) => (
            <li
              key={skill}
              ref={(el) => (itemRefs.current[i] = el)}
              className="relative list-none text-black text-2xl sm:text-3xl font-light transition-all duration-500 hover:font-semibold hover:-translate-x-6 sm:hover:-translate-x-12 md:hover:-translate-x-24 leading-snug"
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
