import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import me from "../../assets/me.jpeg";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef(null);
  const paragrahRef = useRef<HTMLDivElement | null>(null);

  const paragraph1 =
    "I’m the frontend storyteller who turns bold ideas into seamless, interactive digital experiences. With a blend of code, creativity, and strategy, I build interfaces that not only look great — they feel great, too. Because for me, frontend isn’t just about visuals — it’s about impact, clarity, and connection.";

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

    gsap.fromTo(
      imageWrapperRef.current,
      { height: 0, opacity: 0 },
      {
        height: "100%",
        duration: 1.2,
        ease: "power2.out",
        opacity: 1,
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.set(paragraphLetters, {
      color: "#696969",
      opacity: 0,
    });

    gsap.to(paragraphLetters, {
      color: "white",
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
        <div className="flex items-end justify-between gap-20 h-screen">
          <div className="w-[400px] h-[600px] overflow-hidden">
            <div
              ref={imageWrapperRef}
              className="overflow-hidden"
              style={{ height: 0 }}
            >
              <img src={me} alt="me" className="w-full h-full object-cover" />
            </div>
          </div>

          <div ref={textRef} className="-mb-40 w-2/3">
            <span className="text-6xl">🕷️</span>
            {[
              "I bring ideas to ",
              "life and help shape",
              "the devs of",
              "tomorrow.",
            ].map((line, i) => (
              <h1
                key={i}
                className={`${
                  i === 1 ? "text-graymain" : "text-white"
                }  text-[6rem] flex font-light leading-none text-left uppercase`}
              >
                {Array.from(line).map((letter, index) => (
                  <span
                    className={`inline-block about-heading-letter ${
                      letter === " " ? "w-6" : ""
                    }`}
                    key={index}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-start w-full gap-2 z-20">
          <h2 className="text-white font-roboto text-2xl font-light">
            WHO I AM
          </h2>
          <div
            ref={paragrahRef}
            className="flex flex-col w-2/3 gap-4 text-4xl text-[#696969]"
          >
            {[paragraph1, paragraph2].map((paragraph, pIndex) => (
              <p key={pIndex}>
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
    </div>
  );
};

export default IntroSection;
