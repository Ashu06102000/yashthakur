import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CircularText from "../generic-components/CircularText";

const Hero: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  useEffect(() => {
    gsap.to("body", {
      backgroundColor: isInView ? "#000000" : "#313131",
      duration: 1,
      ease: "power1.out",
    });
    gsap.to("#canvas-particle", {
      opacity: isInView ? 1 : 0.8,
      duration: 1,
      ease: "power1.out",
    });
    gsap.to(".cfrom-left-name", {
      transform: isInView ? "translateX(0)" : "translateX(-100%)",
      duration: 1,
      ease: "power1.out",
    });
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-10 justify-center h-lvh relative"
    >
      {/* <h1 className="text-8xl text-center font-thin w-3/4 leading-none font-newsreader text-white z-10 flex flex-col gap-4">
        The journey started with curiosity. Now, it’s a mission to build 
        <span className="text-8xl font-thin font-miaCulpa">
          Seamless Experiences.
        </span>
      </h1> */}
      <div className="flex  flex-col justify-center w-full gap-2 min-h-screen">
        <div className="flex from-left-name">
          <CircularText />

          <h1 className="text-secondry font-newsreader text-[162px] flex flex-col font-thin leading-none tracking-tighter">
            I am <span className="ml-36">Yash Thakur</span>
          </h1>
        </div>

        <span className="text-secondry font-newsreader text-[162px] flex flex-col font-thin leading-none tracking-tighter">
          _________Frontend
        </span>
        <span className="text-secondry font-newsreader text-[162px] flex flex-col font-thin leading-none tracking-tighter self-center">
          Developer
        </span>
      </div>
    </div>
  );
};

export default Hero;
