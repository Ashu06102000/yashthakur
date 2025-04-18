import { useEffect, useRef } from "react";
import copodslogo from "../../assets/copodslogo.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const workref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (workref.current) {
      gsap.fromTo(
        workref.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: workref.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={workref} className="flex gap-5 py-20 justify-between">
      <h3 className="text-white">Work Experiance</h3>
      <div className="flex flex-col w-2/3 gap-24">
        <div className="flex gap-48 items-start">
          <img src={copodslogo} alt="" />
          <div className="flex flex-col">
            <span className="text-white text-base font-light">
              Software Engineer
            </span>
            <span className="text-graysharetwo text-base font-light font-roboto">
              Pune, India
            </span>
            <span className="text-white text-base font-light pt-4">
              2022 - Present
            </span>
          </div>
        </div>
        <button className="bg-white text-black py-4 px-6 rounded-full w-fit">
          Download Resumé
        </button>
      </div>
    </div>
  );
};

export default WorkSection;
