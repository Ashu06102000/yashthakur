import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroVideo from "../../../assets/hero-main-video.webm";

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subTextLeftRef = useRef(null);
  const subTextRightRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          delay: 0.5,
          defaults: { ease: "power3.out", duration: 1 },
        });

        tl.from(videoRef.current, { opacity: 0, scale: 0.95, duration: 1.2 })
          .from(titleRef.current, { opacity: 0, y: 100 }, "-=0.8")
          .from(subTextLeftRef.current, { opacity: 0, x: -50 }, "-=0.6")
          .from(subTextRightRef.current, { opacity: 0, x: 50 }, "-=0.6");
      }, containerRef);

      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <section
      ref={containerRef}
      className="flex items-center justify-center bg-[#fcfaf9] w-full h-screen [perspective:2000px] max-h-screen overflow-hidden [transform-style:preserve-3d]"
    >
      <div className="relative w-full h-full max-w-main-screen mx-auto flex items-center justify-center px-5 sm:px-8">
        <div className="w-full max-w-5xl max-h-[60vh] flex justify-center items-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <h1
          ref={subTextLeftRef}
          className="text-black text-sm sm:text-base md:text-2xl font-light absolute bottom-24 md:bottom-10 left-2 md:left-0 w-1/2 sm:w-1/3 font-roboto px-2 sm:px-0"
          style={{ lineHeight: 1.3 }}
        >
          — a frontend developer turning bold ideas into seamless, interactive
          digital experiences.
        </h1>
        <h2
          ref={subTextRightRef}
          className="text-black/80 text-sm sm:text-lg md:text-xl font-thin absolute bottom-10 left-2 md:left-auto right-auto md:right-0 px-2 sm:px-0"
        >
          Every. Interaction. Feels.
        </h2>
        <span
          ref={titleRef}
          className="text-[6rem] sm:text-[10rem] md:text-[16rem] text-black/80 absolute top-18 md:top-[1em] left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          style={{ lineHeight: 1 }}
        >
          iamyash
        </span>
      </div>
    </section>
  );
};

export default Hero;
