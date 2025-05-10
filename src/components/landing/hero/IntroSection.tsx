import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const paragrahRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null); // Reference for h2

  const paragraph1 = "Hi, My name is Yash Thakur";
  const paragraph2 =
    "I’m the frontend storyteller who turns bold ideas into seamless, interactive digital experiences. With a blend of code, creativity, and strategy, I build interfaces that not only look great — they feel great, too. Because for me, frontend isn’t just about visuals — it’s about impact, clarity, and connection.";
  const paragraph3 =
    "But my mission doesn’t stop at building the web — I’m here to uplift the next wave of developers. Through mentorship, content, and an ever-growing community, I support curious minds in finding their voice in tech. If you believe the frontend is more than just the front — welcome, you’re in the right place.";

  useEffect(() => {
    const headingLetters = gsap.utils.toArray(".about-heading-letter");
    const paragraphLetters = gsap.utils.toArray(".paragraph-letter");

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

    gsap.set(paragraphLetters, {
      color: "#ffffff29",
    });

    gsap.to(paragraphLetters, {
      color: "#ffffffd1",
      duration: 1.5,
      ease: "power2.out",
      opacity: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: paragrahRef.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Animate <h2> height from 0% to 100% with overflow hidden
    gsap.set(headingRef.current, {
      height: "0", // Initially hidden
      overflow: "hidden", // Ensure it's clipped until visible
    });

    gsap.to(headingRef.current, {
      height: "auto", // Animate to full height when in view
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%", // Trigger when it comes into view
        end: "top 30%", // Adjust to stop the animation
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
    <div className="relative py-24 px-6 sm:px-10 md:px-24">
      <div
        id="ABOUT"
        className="flex flex-col gap-12 md:gap-24 items-start w-full mx-auto"
      >
        <div className="w-full uppercase flex flex-col gap-2 font-oreni">
          <h2 ref={headingRef} className="text-[192px]">
            Essence
          </h2>
        </div>
        <div
          ref={paragrahRef}
          className="w-full md:w-3/4 flex flex-col gap-6 text-lg sm:text-xl md:text-[32px] text-red-500"
        >
          {[paragraph1, paragraph2, paragraph3].map((paragraph, pIndex) => (
            <p key={pIndex} className={`${pIndex === 0 ? "font-normal" : ""}`}>
              {paragraph.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                  {Array.from(word).map((char, charIndex) => (
                    <span
                      className="inline-block paragraph-letter will-change-transform leading-tight"
                      key={charIndex}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
