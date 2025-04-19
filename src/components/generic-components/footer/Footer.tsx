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
        "An unfiltered look into my thoughts on the design Industry as a whole",
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
    <footer className="relative bg-black text-white w-full py-20 px-8 md:px-16 overflow-hidden gap-18 flex flex-col ">
      <h2
        ref={connectRef}
        className="text-center text-6xl md:text-9xl font-oreni"
      >
        {renderAnimatedText("Let's connect")}
      </h2>

      <AnimatedList items={items} />

      <div className="mx-auto flex flex-col md:flex-row justify-between items-end z-10 relative w-full mt-32">
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
