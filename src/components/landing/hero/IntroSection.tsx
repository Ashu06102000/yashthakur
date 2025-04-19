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
    const paragraphLetters = gsap.utils.toArray(".paragraph-letter");

    gsap.set(headingLetters, {
      x: () => gsap.utils.random(-1000, 1000),
      rotate: () => gsap.utils.random(-10, 10),
      opacity: 0,
    });

    gsap.to(headingLetters, {
      x: 0,
      rotate: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.set(paragraphLetters, {
      color: "#696969",
      opacity: 0,
    });

    gsap.to(paragraphLetters, {
      color: "black",
      duration: 1.5,
      ease: "power2.out",
      opacity: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: paragrahRef.current,
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
    <div className="relative py-24 px-6 sm:px-10 md:px-20">
      <div
        id="ABOUT"
        className="flex flex-col md:flex-row gap-12 md:gap-24 items-start w-full mx-auto"
      >
        {/* Sticky Label */}
        <div className="md:sticky md:top-32 w-full md:w-1/3 z-10">
          <h2 className="text-black text-xl sm:text-2xl md:text-2xl font-bold font-oreni">
            WHO I AM
          </h2>
        </div>

        {/* Paragraph Content */}
        <div
          ref={paragrahRef}
          className="w-full md:w-2/3 flex flex-col gap-6 text-lg sm:text-xl md:text-2xl text-[#696969] font-light font-roboto"
        >
          {[paragraph1, paragraph2, paragraph3].map((paragraph, pIndex) => (
            <p key={pIndex} className={`${pIndex === 0 ? "font-normal" : ""}`}>
              {paragraph.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                  {Array.from(word).map((char, charIndex) => (
                    <span
                      className="inline-block paragraph-letter will-change-transform"
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
