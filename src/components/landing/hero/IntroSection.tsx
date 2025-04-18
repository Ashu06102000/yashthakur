import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  const paragrahRef = useRef<HTMLDivElement | null>(null);

  const paragraph1 =
    "Hi, My name is Yash Thakur. I’m the frontend storyteller who turns bold ideas into seamless, interactive digital experiences. With a blend of code, creativity, and strategy, I build interfaces that not only look great — they feel great, too. Because for me, frontend isn’t just about visuals — it’s about impact, clarity, and connection.";

  const paragraph2 =
    "But my mission doesn’t stop at building the web — I’m here to uplift the next wave of developers. Through mentorship, content, and an ever-growing community, I support curious minds in finding their voice in tech. If you believe the frontend is more than just the front — welcome, you’re in the right place.";

  useEffect(() => {
    const headingLetters = gsap.utils.toArray(".about-heading-letter");
    const paragraphLetters = gsap.utils.toArray(".paragraph-letter");

    // Heading animation
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
    <div className="rounded-3xl py-32 relative px-10 sm:px-20">
      <div
        id="ABOUT"
        className="flex gap-96 flex-col items-start w-full mx-auto sticky top-[30%]"
      >
        <div className="flex justify-between items-start w-full gap-2 z-20">
          <h2 className="text-black text-2xl font-bold font-oreni">WHO I AM</h2>
          <div
            ref={paragrahRef}
            className="flex flex-col w-2/3 gap-4 text-3xl text-[#696969] font-light"
          >
            {[paragraph1, paragraph2].map((paragraph, pIndex) => (
              <p key={pIndex}>
                {paragraph.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-2">
                    {Array.from(word).map((char, charIndex) => (
                      <h4
                        className="inline-block paragraph-letter will-change-transform"
                        key={charIndex}
                      >
                        {char}
                      </h4>
                    ))}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
