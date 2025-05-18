import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../../generic-components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const paragrahRef = useRef<HTMLDivElement | null>(null);

  const paragraph2 =
    "I’m the frontend storyteller who turns bold ideas into seamless, interactive digital experiences. With a blend of code, creativity, and strategy, I build interfaces that not only look great — they feel great, too. Because for me, frontend isn’t just about visuals — it’s about impact, clarity, and connection.";
  const paragraph3 =
    "But my mission doesn’t stop at building the web — I’m here to uplift the next wave of developers. Through mentorship, content, and an ever-growing community, I support curious minds in finding their voice in tech. If you believe the frontend is more than just the front — welcome, you’re in the right place.";

  useEffect(() => {
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
    <div className="relative py-60 px-6 sm:px-10 md:px-24">
      <div
        id="ABOUT"
        className="flex flex-col gap-12 md:gap-4 items-start w-full mx-auto"
      >
        <div className="w-full uppercase flex flex-col gap-2">
          <h2 className="text-lg text-center">Essence</h2>
        </div>
        <div
          ref={paragrahRef}
          className="w-2/3 mx-auto text-center flex flex-col gap-24 text-lg sm:text-xl md:text-xl text-white opacity-0 text-align-last"
        >
          <AnimatedTitle
            title="Hi, My name is Yash Thakur"
            containerClass="text-4xl sm:text-5xl md:text-8xl capitalize text-center font-semibold"
          />
          <div className="w-3/4 self-center">
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
