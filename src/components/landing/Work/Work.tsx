import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import morax from "../../../assets/morax-hero.png";
import rator from "../../../assets/rator.png";
gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Morax",

    image: morax,
  },
  {
    title: "Rator",

    image: rator,
  },
];

const Work = () => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    itemRefs.current.forEach((item) => {
      const image = item?.querySelector(".work-image") as HTMLElement | null;
      const title = item?.querySelector(".work-title");

      gsap.set(image ?? {}, {
        opacity: 0,
        visibility: "hidden",
        zIndex: -1,
        rotate: -5,
        x: 0,
        y: 0,
      });

      const onMouseEnter = () => {
        gsap.set(image ?? {}, {
          opacity: 1,
          visibility: "visible",
          zIndex: 10,
          rotate: 0,
        });

        gsap.to(title ?? {}, {
          color: "#000",
          duration: 0.2,
        });
      };

      const onMouseLeave = () => {
        gsap.set(image ?? {}, {
          opacity: 0,
          visibility: "hidden",
          zIndex: -1,
          rotate: -5,
          x: 0,
          y: 0,
        });

        gsap.to(title ?? {}, {
          color: "#333",
          duration: 0.2,
        });
      };

      const onMouseMove = (e: MouseEvent) => {
        const bounds = item!.getBoundingClientRect();
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const offsetX = (e.clientX - bounds.left - centerX) * 0.15;
        const offsetY = (e.clientY - bounds.top - centerY) * 0.15;

        gsap.set(image ?? {}, {
          x: offsetX,
          y: offsetY,
          rotate: offsetX * 0.1,
        });
      };

      item?.addEventListener("mouseenter", onMouseEnter);
      item?.addEventListener("mouseleave", onMouseLeave);
      item?.addEventListener("mousemove", onMouseMove);

      return () => {
        item?.removeEventListener("mouseenter", onMouseEnter);
        item?.removeEventListener("mouseleave", onMouseLeave);
        item?.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <section className="relative py-24 px-6 sm:px-10 md:px-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start w-full mx-auto">
        <div className="md:sticky md:top-32 w-full md:w-1/3 z-10">
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
              className="group flex items-center justify-between  p-8 transition-all duration-300 hover:px-20 hover:bg-white border-t border-t-graymain border-opacity-30 relative"
            >
              <div className="h-full w-full absolute z-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="work-image object-cover w-64 h-72 pointer-events-none absolute top-0 right-[30%] -translate-y-1/2 z-10"
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
        </div>{" "}
      </div>
    </section>
  );
};

export default Work;
