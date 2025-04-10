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
    skills: ["GSAP", "Webflow", "Zustand"],
  },
  {
    title: "Backend & Database",
    skills: ["Prisma ORM", "MongoDB", "AWS"],
  },
  {
    title: "Testing & Quality",
    skills: ["Cypress"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "CMS & Ecommerce",
    skills: ["WordPress", "Shopify"],
  },
];

const SkillSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx: ReturnType<typeof gsap.context>;

    if (sectionRef.current && containerRef.current) {
      ctx = gsap.context(() => {
        gsap.set(containerRef.current, {
          willChange: "transform",
          force3D: true,
        });

        const cards = gsap.utils.toArray(".skill-card");

        const screenWidth = window.innerWidth;
        const initialPosition = screenWidth / 2 - 160;

        gsap.set(containerRef.current, {
          x: initialPosition,
        });

        (cards as HTMLElement[]).forEach((card, index) => {
          const baseTilt = index === 0 ? 0 : index % 2 === 0 ? 3 : -3;

          gsap.set(card, {
            opacity: index === 0 ? 1 : 0.6,
            scale: index === 0 ? 1 : 0.95,
            rotateZ: baseTilt,
            transformOrigin: "center center",
            force3D: true,
            backfaceVisibility: "hidden",
          });
        });

        const cardWidth = 320;
        const totalWidth = cards.length * cardWidth;
        const endPosition = -totalWidth + screenWidth / 2 + 160;

        const cardSequence = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: "top top",
            end: `+=${cards.length * 250}`,
            scrub: 0.5,
            anticipatePin: 1,
            fastScrollEnd: true,
            onUpdate: (self) => {
              requestAnimationFrame(() =>
                updateActiveCard(self.progress, cards as HTMLElement[])
              );
            },
          },
        });

        cardSequence.to(containerRef.current, {
          x: endPosition,
          ease: "none",
          duration: 1,
        });

        function updateActiveCard(progress: number, cards: Element[]) {
          const moveDistance = initialPosition - endPosition;
          const currentPosition = initialPosition - progress * moveDistance;

          const screenCenter = screenWidth / 2;
          let closestCardIndex = 0;
          let closestDistance = Infinity;

          cards.forEach((_, index) => {
            const cardPosition = currentPosition + index * cardWidth;
            const distanceFromCenter = Math.abs(
              cardPosition - screenCenter + 160
            );

            if (distanceFromCenter < closestDistance) {
              closestDistance = distanceFromCenter;
              closestCardIndex = index;
            }
          });

          const visibleRange = 3;

          cards.forEach((card, index: number) => {
            if (Math.abs(index - closestCardIndex) > visibleRange) {
              return;
            }

            const cardPosition = currentPosition + index * cardWidth;
            const distanceFromCenter = cardPosition - screenCenter + 160;
            const absDistance = Math.abs(distanceFromCenter);

            const centeredness = Math.max(
              0,
              1 - Math.min(1, absDistance / (cardWidth * 1.5))
            );

            const tiltDirection = distanceFromCenter > 0 ? -1 : 1;
            const tiltAmount = 3 * (1 - centeredness) * tiltDirection;

            gsap.to(card, {
              duration: 0.2,
              opacity: 0.6 + centeredness * 0.4,
              scale: 0.95 + centeredness * 0.05,
              rotateZ: tiltAmount,
              ease: "power1.out",
              overwrite: "auto",
            });
          });
        }
      }, sectionRef);
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 sm:px-10 overflow-hidden h-screen flex flex-col bg-black"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-20 text-left text-white">
        What I Work With
      </h2>

      <div className="flex-1 flex items-center justify-center overflow-visible">
        <div ref={containerRef} className="flex gap-10 will-change-transform">
          {groupedSkills.map((group, i) => (
            <div
              key={i}
              className="skill-card w-80 h-96 flex-shrink-0 bg-black border border-gray-800 rounded-none p-6 shadow-lg transition-transform duration-200"
            >
              <h3 className="text-2xl font-semibold mb-6 text-orange-500">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-black text-white py-2 px-4 border border-gray-800 transition-all duration-300 hover:border-orange-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
