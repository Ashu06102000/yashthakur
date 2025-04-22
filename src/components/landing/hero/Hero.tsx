import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loading) {
      const letters = textRef.current?.querySelectorAll(".letter");
      if (letters) {
        gsap.fromTo(
          letters,
          { y: 80, opacity: 0, rotateX: 90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.05,
            duration: 1,
            ease: "back.out(1.7)",
            delay: 0.6,
          }
        );
      }

      gsap.to(heroRef.current, {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const opacity =
              self.progress < 0.5 ? self.progress * 2 : 2 - self.progress * 2;
            gsap.to(heroRef.current, { opacity });
          },
        },
      });
    }
  }, [loading]);

  return (
    <section
      ref={heroRef}
      className="hero-section w-full h-screen flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 text-black font-barracuda relative overflow-hidden opacity-0"
    >
      <div ref={textRef} className="text-center font-oreni uppercase">
        <h1 className="line text-4xl sm:text-6xl md:text-7xl lg:text-[12em] font-light leading-tight mb-2 sm:mb-4">
          {Array.from("Every.".split("")).map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
        <h1 className="line text-4xl sm:text-6xl md:text-7xl lg:text-[12em] font-extrabold leading-tight mb-2 sm:mb-4">
          {Array.from("Interaction.".split("")).map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
        <h1 className="line text-4xl sm:text-6xl md:text-7xl lg:text-[12em] font-extrabold leading-tight">
          {Array.from("Feels.".split("")).map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4 items-center">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto">
          View Work
        </button>
        <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
          Let's Talk
        </button>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-sm text-neutral-500 text-center">
        <span className="animate-bounce text-xl">↓</span>
        <p className="text-xs sm:text-sm">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
