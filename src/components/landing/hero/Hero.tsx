import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const highlightRef = useRef<HTMLSpanElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        // Timeline for Hero
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Fade in hero section
        tl.to(heroRef.current, { opacity: 1, duration: 0.5 });

        // Animate heading lines/letters
        const lines = headingRef.current?.querySelectorAll("span.word");
        if (lines) {
          tl.from(
            lines,
            {
              y: 100,
              opacity: 0,
              stagger: 0.1,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.3"
          );
        }

        // Animate highlighted word
        tl.fromTo(
          highlightRef.current,
          {
            scale: 0.5,
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.8"
        );

        // Animate paragraph
        tl.from(
          paragraphRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        );
      }, heroRef);

      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <section
      ref={heroRef}
      className="w-full h-screen flex flex-col justify-center items-center text-white  relative overflow-hidden opacity-0 p-24"
    >
      <div className="flex flex-col gap-20 justify-between h-full py-20 ">
        <h2
          ref={headingRef}
          className="text-white font-thin text-6xl uppercase py-20 leading-none"
        >
          {["Crafting", "Web"].map((word, i) => (
            <span key={i} className="word inline-block mx-2">
              {word}
            </span>
          ))}{" "}
          <span ref={highlightRef} className="text-[200px] inline-block mx-2">
            Experiences
          </span>
        </h2>
        <p
          ref={paragraphRef}
          className="text-white font-thin text-3xl w-2/5 leading-none  self-end"
        >
          Building modern web applications, dashboards, and websites with a
          focus on performance, scalability, and seamless user experience.
        </p>
      </div>
    </section>
  );
};

export default Hero;
