import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import rator from "../../assets/rator.png";
import morax from "../../assets/morax-home.png";
import moraxTwo from "../../assets/moraxtwo.png";

interface Project {
  name: string;
  image: string;
}

const projects: Project[] = [
  { name: "Rator Project", image: rator },
  { name: "Morax Home", image: morax },
  { name: "Morax Two", image: moraxTwo },
  { name: "Another Rator", image: rator },
];

const WorkSection: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const img = imgRef.current;
    if (!img || !wrapperRef.current) return;

    const moveImage = (e: MouseEvent) => {
      gsap.to(img, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const showImage = () => {
      gsap.to(img, { autoAlpha: 1, scale: 1, duration: 0.3 });
    };

    const hideImage = () => {
      gsap.to(img, { autoAlpha: 0, scale: 0.8, duration: 0.3 });
    };

    const items =
      wrapperRef.current.querySelectorAll<HTMLDivElement>(".hover-item");

    items.forEach((item) => {
      const mouseEnterHandler = () => {
        const image = item.getAttribute("data-image");
        if (image) img.src = image;
        showImage();
      };
      item.addEventListener("mouseenter", mouseEnterHandler);
      item.addEventListener("mousemove", moveImage);
      item.addEventListener("mouseleave", hideImage);

      // Save references to handlers for cleanup
      (item as any)._mouseEnterHandler = mouseEnterHandler;
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener(
          "mouseenter",
          (item as any)._mouseEnterHandler
        );
        item.removeEventListener("mousemove", moveImage);
        item.removeEventListener("mouseleave", hideImage);
      });
    };
  }, []);

  return (
    <section className="relative p-12 sm:p-16 md:p-24 bg-[#111] text-white flex flex-col gap-8 sm:gap-12 md:gap-16">
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
        Selected Work
      </h1>

      <div ref={wrapperRef} className="space-y-4 sm:space-y-6 md:space-y-2">
        {projects.map((project, index) => (
          <div
            key={index}
            data-image={project.image}
            className="hover-item border-b border-graymain py-4 sm:py-6 text-xl sm:text-3xl md:text-4xl font-light cursor-pointer relative z-10 px-2 sm:px-4 md:px-8 transition-all duration-300 ease-in-out hover:px-6 sm:hover:px-8 md:hover:px-10"
          >
            <a href="#" className="block w-full h-full">
              {project.name}
            </a>
          </div>
        ))}
      </div>

      {/* Floating Image Preview */}
      <img
        ref={imgRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-32 sm:w-40 md:w-48 h-auto opacity-0 scale-90"
        alt="Preview"
      />
    </section>
  );
};

export default WorkSection;
