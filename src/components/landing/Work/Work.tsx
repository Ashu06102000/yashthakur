import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import morax from "../../../assets/morax-hero.png";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  return (
    <section className="relative w-full  text-black py-32 px-6 sm:px-20 overflow-hidden flex flex-col">
      <div className="text-left md:sticky md:top-32 flex-shrink-0 w-full md:w-1/3">
        <div className="flex flex-col gap-2 font-oreni">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase text-black">
            Selected Work
          </h2>
        </div>
      </div>

      <div className="relative w-full md:w-2/3">
        <ul className="space-y-4 flex flex-col font-roboto">list</ul>
      </div>
    </section>
  );
};

export default Work;
