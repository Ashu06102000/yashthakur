import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedList from "../AnimatedLine";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const items = [
    {
      title: "Background",
      description: "  Learn more about me, read my resumé and see my accolades",
    },
    {
      title: "Thoughts",
      description:
        "An unfiltered look into my thoughts on the design Industry as a whole",
    },
  ];
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const copyrightRef = useRef(null);

  const legRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
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

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white w-full py-20 px-8 md:px-16 overflow-hidden"
    >
      <AnimatedList items={items} />

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
