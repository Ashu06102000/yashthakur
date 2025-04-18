import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  return (
    <section className="relative w-full  text-black py-32 px-6 sm:px-20 overflow-hidden"></section>
  );
};

export default Work;
