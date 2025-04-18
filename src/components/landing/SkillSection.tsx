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
  const itemRefs = useRef([]);
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
    <section className=" px-10 sm:px-20 py-24 flex items-start justify-between">
      {/* Sticky Heading Block */}
      <div className="text-left flex justify-between sticky top-96">
        <div className="flex flex-col gap-0 font-oreni">
          <h2 className="text-2xl font-semibold uppercase text-black">
            Capabilities
          </h2>
          <p className="text-xl font-light text-black">
            Here's what I bring to the table
          </p>
        </div>
      </div>

      <div className="relative w-2/3" ref={listRef}>
        <ul className="space-y-4 text-2xl font-light gap-1 flex flex-col">
          {groupedSkills.map((skill, i) => (
            <li
              key={skill}
              ref={(el) => {
                if (itemRefs.current) {
                  //@ts-ignore
                  itemRefs.current[i] = el;
                }
              }}
              className="relative list-none text-black transition-all duration-500 
                         hover:font-semibold hover:-translate-x-24 text-3xl leading-none"
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
