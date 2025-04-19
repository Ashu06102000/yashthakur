import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import morax from "../../../assets/morax-hero.png"; // Example image
gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Morax",

    image: morax,
  },
  {
    title: "Rator",

    image: morax,
  },
];

const Work = () => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    itemRefs.current.forEach((item) => {
      const image = item?.querySelector(".work-image");
      const title = item?.querySelector(".work-title");

      gsap.set(image ?? {}, {
        opacity: 0,
        scale: 0.8,
        visibility: "hidden",
        zIndex: -1,
      });

      item!.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.05,
          duration: 0.3,
        });
        gsap.to(image ?? {}, {
          opacity: 1,
          scale: 1,
          visibility: "visible",
          zIndex: 10,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
        gsap.to(title ?? {}, {
          color: "#000",
          duration: 0.3,
        });
      });

      item!.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(image ?? {}, {
          opacity: 0,
          scale: 0.8,
          visibility: "hidden",
          zIndex: -1,
          duration: 0.3,
          ease: "back.in(1.7)",
        });
        gsap.to(title ?? {}, {
          color: "#333",
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <section className="px-6 sm:px-10 md:px-20 py-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between">
      <div className="text-left md:sticky md:top-32 flex-shrink-0 w-full md:w-1/3">
        <div className="flex flex-col gap-2 font-oreni">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold uppercase text-black">
            Selected Work
          </h2>
        </div>
      </div>

      <div className="relative w-full md:w-2/3">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) =>
              (itemRefs.current[index] = el as HTMLDivElement | null)
            }
            className="group flex items-center justify-between  p-8 transition-all duration-300 hover:px-20 hover:bg-white border-t border-t-graymain border-opacity-30 relative overflow-hidden"
          >
            <div className=" w-full h-40 overflow-hidden absolute">
              <img
                src={item.image}
                alt={item.title}
                className="work-image object-cover w-full h-full transition-all duration-300 absolute top-0 left-0"
              />
            </div>
            <span className="work-title text-5xl text-graymain transition-colors duration-300 group-hover:text-black mt-4">
              {item.title}
            </span>

            <span className="text-2xl bg-black bg-opacity-10 rounded-full py-2 text-black px-3 group-hover:bg-white group-hover:text-black mt-4">
              →
            </span>
          </div>
        ))}
        <span className="bg-graymain bg-opacity-30 h-px w-full"></span>
      </div>
    </section>
  );
};

export default Work;
