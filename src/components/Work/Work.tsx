import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const letters = gsap.utils.toArray(".work-letter");

    // Debugging: Check if elements exist
    console.log("textRef.current:", textRef.current);
    console.log("letters:", letters);

    // Set initial random positions for the letters
    gsap.set(letters, {
      x: () => gsap.utils.random(-1000, 1000),
      y: () => gsap.utils.random(-1000, 1000),
      opacity: 0,
    });

    gsap.to(letters, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="PROJECTS"
      className="flex gap-36 p-8 flex-col w-full mx-auto max-w-main-screen"
    >
      <div
        ref={textRef}
        className="flex flex-col justify-start items-start w-full gap-2 z-20 "
      >
        <h1 className="text-brown font-newsreader text-[14rem] flex font-thin leading-none ">
          {Array.from("Selection").map((letter, index) => (
            <span key={index} className="inline-block work-letter">
              {letter}
            </span>
          ))}
        </h1>

        <span className="text-brown font-newsreader text-[14rem] flex font-thin leading-none">
          {Array.from("Of Work").map((letter, index) => (
            <span
              key={index}
              className={`inline-block work-letter ${
                letter == " " ? "w-20" : ""
              }`}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Work;
