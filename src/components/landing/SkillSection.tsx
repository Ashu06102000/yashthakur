import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    skills: ["Prisma ORM", "MongoDB", "AWS", "MySQL", "Postgres"],
  },
  {
    title: "Testing & State Management",
    skills: ["Cypress", "Zustand", "React Query"],
  },
  {
    title: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Liquid",
      "Php",
      "Jquery",
    ],
  },
  {
    title: "CMS & Ecommerce",
    skills: ["WordPress", "Shopify", "Webflow"],
  },
];

const cardColors = [
  "#4d8bd8",
  "#e16244",
  "#53879a",
  "#303030",
  "#c35038",
  "#d17d31",
];

const SkillDeck = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(containerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out",
      });

      cardsRef.current.forEach((card, i) => {
        const totalSpread = 120;
        const baseRotation = -60;
        const rotation =
          baseRotation + (i / (groupedSkills.length - 1)) * totalSpread;

        gsap.set(card, {
          rotation,
          transformOrigin: "bottom center",
          zIndex: i + 1,
        });

        // Offset on hover
        const rad = (rotation * Math.PI) / 180;
        const distance = 70;
        const dx = Math.sin(rad) * distance;
        const dy = -Math.cos(rad) * distance;

        const toX = gsap.quickTo(card, "x", {
          duration: 0.4,
          ease: "power3.out",
        });
        const toY = gsap.quickTo(card, "y", {
          duration: 0.4,
          ease: "power3.out",
        });
        const toScale = gsap.quickTo(card, "scale", {
          duration: 0.4,
          ease: "power3.out",
        });
        const toZ = gsap.quickTo(card, "zIndex", { duration: 0 });

        card.addEventListener("mouseenter", () => {
          toX(dx);
          toY(dy);
          toScale(1.08);
          toZ(100);
          gsap.to(card, {
            boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
            filter: "blur(0px)",
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          toX(0);
          toY(0);
          toScale(1);
          toZ(i + 1);
          gsap.to(card, {
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            filter: "blur(0px)",
            duration: 0.4,
            ease: "power2.inOut",
          });
        });
      });

      // scrollTl (unchanged, continue using as-is)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
        },
      });

      scrollTl.to(
        cardsRef.current,
        {
          rotation: 180,
          left: "0%",
          x: "0%",
          y: 0,
          stagger: { each: 0.05, from: "start" },
          duration: 1.5,
          ease: "power2.inOut",
        },
        0
      );

      scrollTl.to({}, { duration: 0.5 }, 1.5);

      scrollTl.to(
        containerRef.current,
        {
          x: 50,
          duration: 1.5,
          ease: "power2.inOut",
        },
        2
      );

      scrollTl.to(
        titleRef.current,
        {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.inOut",
        },
        1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-6xl font-bold mt-16 text-primary font-roboto "
        >
          Development
        </h1>

        <div
          ref={containerRef}
          className="relative mt-24 w-full h-[600px] flex items-end justify-center"
        >
          <div className="absolute h-[450px] w-[600px] bottom-0">
            {groupedSkills.map((skillGroup, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-xl"
                style={{
                  width: "500px",
                  height: "700px",
                  backgroundColor: cardColors[i] || "#ffffff",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  overflow: "hidden",
                  padding: "1rem",
                  cursor: "pointer",
                }}
              >
                <div className="flex justify-between h-full text-center">
                  <p
                    className="font-normal tracking-tight text-5xl uppercase text-justify"
                    style={{
                      color: ["#FFFFFF", "#E0E0E0"].includes(cardColors[i])
                        ? "#000000"
                        : "#FFFFFF",

                      writingMode: "vertical-rl",
                    }}
                  >
                    {skillGroup.title}
                  </p>

                  <ul className="text-sm mt-4 space-y-2 text-left ml-4">
                    {skillGroup.skills.map((skill, idx) => (
                      <li key={idx} className="text-white">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillDeck;
