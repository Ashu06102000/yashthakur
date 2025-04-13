import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const copyrightRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const legRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.fromTo(
      footerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Logo + copyright fade in
    const base = gsap.timeline({ defaults: { ease: "power3.out" } });

    base
      .fromTo(
        logoRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        copyrightRef.current,
        { opacity: 0 },
        { opacity: 0.7, duration: 0.5 },
        "-=0.3"
      );

    // Circle + text animation
    gsap.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1.2,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.3,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
      }
    );

    // Animate spider legs
    gsap.fromTo(
      legRefs.current,
      { scaleY: 0, transformOrigin: "center bottom" },
      {
        scaleY: 1,
        stagger: 0.1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  const spiderLegs = [45, 90, 135, 180, 225, 270, 315, 0];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white w-full py-20 px-8 md:px-16 overflow-hidden"
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full opacity-10 z-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="40"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
        <line
          x1="100"
          y1="20"
          x2="100"
          y2="180"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="45"
          y1="45"
          x2="155"
          y2="155"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="155"
          y1="45"
          x2="45"
          y2="155"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>

      <div className="section-container relative z-10 text-center mb-16">
        <div
          ref={circleRef}
          className="w-20 h-20 rounded-full border-2 border-white mx-auto mb-4"
        ></div>
        <div className="section-content">
          <h1 ref={textRef} className="text-3xl md:text-5xl font-bold mb-4">
            Time to wrap things up 🕷️
          </h1>
          <p className="text-gray-400">
            Let's connect. Don't let the web tangle you.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            → Say Hi
          </button>
        </div>
      </div>

      {/* Spider Legs (animated lines) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {spiderLegs.map((deg, i) => (
          <div
            key={i}
            className="absolute h-20 w-1 bg-white opacity-40"
            style={{
              transform: `rotate(${deg}deg) translateY(-60px)`,
              transformOrigin: "bottom center",
            }}
            ref={(el) => {
              if (el instanceof HTMLDivElement) {
                legRefs.current[i] = el;
              } else {
                console.error("Expected HTMLDivElement, but got:", el);
              }
            }}
          />
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div ref={logoRef} className="mb-6 md:mb-0">
          <div className="flex items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Yash
            </h1>
            <div className="relative ml-2">
              <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                Y
              </div>
            </div>
          </div>
        </div>
        <div
          ref={copyrightRef}
          className="text-sm text-gray-400 text-center md:text-right"
        >
          <p className="flex items-center gap-2">
            © 2025
            <span className="h-4 w-4 bg-white rounded-full text-black text-xs flex items-center justify-center font-bold">
              Y
            </span>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
