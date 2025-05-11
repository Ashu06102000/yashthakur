import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const paragrahRef = useRef<HTMLDivElement | null>(null);

  const paragraph1 = "Hi, My name is Yash Thakur";
  const paragraph2 =
    "I’m the frontend storyteller who turns bold ideas into seamless, interactive digital experiences. With a blend of code, creativity, and strategy, I build interfaces that not only look great — they feel great, too. Because for me, frontend isn’t just about visuals — it’s about impact, clarity, and connection.";
  const paragraph3 =
    "But my mission doesn’t stop at building the web — I’m here to uplift the next wave of developers. Through mentorship, content, and an ever-growing community, I support curious minds in finding their voice in tech. If you believe the frontend is more than just the front — welcome, you’re in the right place.";

  useEffect(() => {
    const headingLetters = gsap.utils.toArray(".about-heading-letter");

    gsap.set(headingLetters, {
      x: () => gsap.utils.random(-1000, 1000),
      rotate: () => gsap.utils.random(-10, 10),
    });

    gsap.to(headingLetters, {
      x: 0,
      rotate: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.fromTo(
      paragrahRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative py-44 px-6 sm:px-10 md:px-24">
      <div
        id="ABOUT"
        className="flex flex-col gap-12 md:gap-24 items-start w-full mx-auto"
      >
        <div className="w-full uppercase flex flex-col gap-2 ">
          <h2 className="text-[192px]">Essence</h2>
          <img
            src="https://cdn.prod.website-files.com/680cbb38f2f6d2dda497f662/680cbb39f2f6d2dda497f6f4_abstract-black-watercolor-patterned-background-2025-02-10-13-32-02-utc%201.avif"
            alt=""
            className="w-4/5"
          />
        </div>
        <div
          ref={paragrahRef}
          className="w-full md:w-3/4 flex flex-col gap-6 text-lg sm:text-xl md:text-3xl text-white opacity-0 "
        >
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
