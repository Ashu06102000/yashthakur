import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const letters = gsap.utils.toArray(".about-heading-letter");

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
    <div className=" rounded-3xl py-32 relative pt-96">
      <div
        id="ABOUT"
        className="flex gap-28 p-8 flex-col items-start w-full mx-auto max-w-main-screen sticky top-[30%]"
      >
        <div
          ref={textRef}
          className="flex flex-col justify-start items-start w-full gap-2 z-20"
        >
          <h1 className="text-black font-newsreader text-[6rem] flex font-thin leading-none text-left uppercase">
            {Array.from("Know More").map((letter, index) => (
              <span
                className={`inline-block about-heading-letter ${
                  letter == " " ? "w-6" : ""
                }`}
                key={index}
              >
                {letter}
              </span>
            ))}
          </h1>

          <h1 className="text-black font-newsreader text-[6rem] flex font-thin leading-none self-center uppercase">
            {Array.from("About Me").map((letter, index) => (
              <span
                className={`inline-block about-heading-letter ${
                  letter == " " ? "w-6" : ""
                }`}
                key={index}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <div className="text-black font-roboto text-4xl flex flex-col font-thin leading-nones w-3/6">
          <p>
            I'm Yash Thakur, a passionate software developer based in Pune,
            committed to building impactful digital experiences. With a solid
            foundation in both frontend and backend development, I strive to
            create applications that are not only functional but also
            user-friendly and efficient.
          </p>
          <p>
            {" "}
            I’m driven by curiosity and a constant desire to improve. Every
            project I take on is met with enthusiasm, care, and an eye for
            detail—whether I’m implementing complex logic or refining the user
            interface. My goal is always to go beyond expectations and craft
            solutions that truly make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
