import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroVideo from "../../../assets/hero-main-video.webm";

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <section className="flex items-center justify-center bg-[#fcfaf9] w-full h-screen [perspective:2000px] max-h-screen [transform-style:preserve-3d]">
      <div className="relative w-full h-full max-w-main-screen mx-auto flex items-center justify-center">
        <div className="w-full max-w-5xl max-h-[60vh] flex justify-center items-center">
          <video
            className="w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <h1 className="text-black text-2xl font-light absolute bottom-10 left-0 w-1/3 font-roboto">
          — a frontend developer turning bold ideas into seamless, interactive
          digital experiences.
        </h1>
        <h2 className="text-black/80 text-xl font-thin absolute bottom-10 right-0 ">
          Every. Interaction. Feels.
        </h2>
        <span className="text-[16em] text-black/80 absolute top-20 left-auto right-auto ">
          iamyash
        </span>
      </div>
    </section>
  );
};

export default Hero;
