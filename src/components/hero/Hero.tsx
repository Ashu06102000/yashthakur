import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
      backgroundColor: isInView ? "#000000" : "#1a1a1a",
      duration: 1,
      ease: "power1.out",
    });
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-10 justify-center h-lvh relative"
    >
      <h1 className="text-4xl w-3/5 font-thin text-white text-center z-10">
        The journey started with curiosity. Now, it’s a mission to build
        seamless experiences.
      </h1>
    </div>
  );
};

export default Hero;
