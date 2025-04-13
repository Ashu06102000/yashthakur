import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../assets/rator.png";
import img2 from "../../assets/morax-hero.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Rator Platform", img: img1 },
  { title: "Morax Home", img: img2 },
  { title: "Animated Showcase", img: img1 },
  { title: "Creative Builder", img: img2 },
];

const Work = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.to(cardsRef.current, {
      x: `-${(projects.length - 1) * 1000}px`,
      ease: "none",
      scrollTrigger: {
        trigger: cardsRef.current,
        pin: true, // Pin the section
        start: "top 25%",
        end: `+=${projects.length * 1000}`,
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative w-full  text-black py-32 px-6 sm:px-20 overflow-hidden">
      <div
        ref={cardsRef}
        className="flex justify-center gap-6"
        style={{
          width: `${projects.length * 1000}px`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[1000px] h-full max-h-[600px] rounded-xl shadow-lg overflow-hidden bg-white/5 backdrop-blur-xl  transition-transform duration-300 ease-out"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">
                A creative journey through interactive design and development.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
