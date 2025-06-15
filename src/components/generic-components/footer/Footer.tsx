import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedList from "../AnimatedLine";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const items = [
    {
      title: "Background",
      description: "Learn more about me, read my resumé and see my accolades",
    },
    {
      title: "Thoughts",
      description:
        "An unfiltered look into my thoughts on the Development Industry as a whole",
    },
  ];

  const logoRef = useRef(null);
  const copyrightRef = useRef(null);
  const connectRef = useRef(null);

  useEffect(() => {
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

    const letters = gsap.utils.toArray(".connect-letter");
    gsap.fromTo(
      letters,
      {
        y: 50,
        opacity: 0,
        rotateX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: connectRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  const renderAnimatedText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="connect-letter inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <footer className="relative  text-white w-full py-20 px-6 sm:px-8 md:px-16 overflow-hidden flex flex-col gap-16 sm:gap-18">
      <h2
        ref={connectRef}
        className="text-center text-4xl sm:text-6xl md:text-9xl font-oreni leading-tight"
      >
        {renderAnimatedText("Let's connect")}
      </h2>

      <AnimatedList items={items} />

      <div className="mx-auto w-full mt-0 sm:mt-32 flex flex-col-reverse sm:flex-row items-center sm:items-end justify-between gap-2 sm:gap-0 relative z-10">
        {/* Logo */}
        <div ref={logoRef} className="mt-8 sm:mt-0">
          <div className="flex items-center">
            <h1 className="text-4xl sm:text-5xl md:text-2xl uppercase text-white font-oreni font-bold tracking-tighter">
              Yash
            </h1>
            <div className="relative ml-2">
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                Y
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          ref={copyrightRef}
          className="text-xs sm:text-sm text-gray-400 text-center sm:text-right"
        >
          <p className="flex items-center justify-center sm:justify-end gap-2">
            © 2025
            <span className="h-4 w-4 bg-white rounded-full text-black text-[10px] flex items-center justify-center font-bold">
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
