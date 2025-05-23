import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const KnowMySkills = () => {
  const groupedSkills = [
    {
      title: "Frontend Frameworks & Libraries",
      skills: ["React.js", "Remix.js", "StencilJS"],
    },
    {
      title: "Styling, Animation & Interaction",
      skills: ["GSAP", "Framer Motion", "Shadcn UI", "Material UI"],
    },
    {
      title: "Cloud & Database",
      skills: [
        "Prisma ORM",
        "AWS (EC2, S3, Elemental MediaLive, Lightsail, CloudFront, Route 53, Lambda)",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Testing & State Management",
      skills: ["Cypress", "Zustand", "React Query"],
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Liquid"],
    },
    {
      title: "CMS & Ecommerce",
      skills: ["WordPress", "Shopify", "Webflow"],
    },
  ];

  const skillref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (skillref.current) {
      gsap.fromTo(
        skillref.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillref.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <section ref={skillref} className="flex justify-between py-20">
      <h3 className="text-white text-lg">Areas of Experience</h3>

      <div className="relative w-2/3 flex flex-col gap-20">
        <ul className="space-y-4 text-2xl font-light gap-3 grid grid-cols-3 gap-y-24">
          {groupedSkills.map((skillGroup, i) => (
            <div key={i} className="!m-0">
              <div className="flex flex-col justify-start h-full text-left gap-2">
                <p className="tracking-tight font-light text-base text-white m-0">
                  {skillGroup.title}
                </p>

                <ul className="text-base text-left capitalize">
                  {skillGroup.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-white text-opacity-55 text-xs font-normal font-roboto"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
        <span className="text-graysharetwo text-sm">
          *Currently studying & experimenting
        </span>
      </div>
    </section>
  );
};
export default KnowMySkills;
