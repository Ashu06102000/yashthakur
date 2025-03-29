import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CircularText from "../generic-components/CircularText";
import img from "../../assets/msportfolio-min.png";
import img2 from "../../assets/rator-min.png";
import img3 from "../../assets/morax-home.png";
import img4 from "../../assets/moraxtwo.png";

const imageSources = [img, img2, img3, img4];

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (!loading) {
      gsap.to(sectionRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "top -80%",
          scrub: true,
        },
      });
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".from-right-text",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 2, ease: "power1.out" }
        );
        gsap.fromTo(
          ".from-left-name",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 2, ease: "power1.out" }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [loading]);

  useEffect(() => {
    let lastImageTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastImageTime < 200) return;
      lastImageTime = now;

      setTimeout(() => {
        const randomImage =
          imageSources[Math.floor(Math.random() * imageSources.length)];
        const img = document.createElement("img");

        img.src = randomImage;
        img.className = "trailing-image";
        img.style.position = "absolute";
        img.style.left = `${e.clientX}px`;
        img.style.top = `${e.clientY}px`;
        img.style.maxWidth = "300px";
        img.style.maxHeight = "300px";
        img.style.pointerEvents = "none";
        img.style.opacity = "0";
        img.style.transform = "translate(-50%, -50%) scale(0)";
        img.style.willChange = "transform, opacity";
        img.style.imageRendering = "crisp-edges";
        img.style.cursor = "pointer";

        const contentWrapper = document.querySelector(".content-wrapper");
        contentWrapper?.appendChild(img);

        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        imageRefs.current.push(img);

        if (imageRefs.current.length > 20) {
          const oldImg = imageRefs.current.shift();
          if (oldImg) {
            gsap.to(oldImg, {
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => oldImg.remove(),
            });
          }
        }

        gsap.to(img, {
          scale: 1.2,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.2,

          onComplete: () => {
            const index = imageRefs.current.indexOf(img);
            if (index !== -1) imageRefs.current.splice(index, 1);
            img.remove();
          },
        });
      }, 100);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full grid grid-cols-8 gap-y-10 min-h-lvh relative cursor-default"
    >
      <div className="flex flex-col justify-center w-full gap-2 min-h-screen col-span-6 col-start-2 content-wrapper">
        <div className="flex from-left-name gap-4">
          {/* <CircularText /> */}
          <h1 className="text-brown font-newsreader text-[14rem] flex flex-col font-thin leading-none tracking-tighter capitalize">
            I am
          </h1>
        </div>

        <span className="text-black font-newsreader text-[14rem] flex flex-col font-thin leading-none tracking-tighter from-right-text capitalize">
          ___Frontend
        </span>
        <span className="text-brown font-newsreader text-[14rem] flex flex-col font-thin leading-none tracking-tighter self-center from-left-name capitalize">
          Developer
        </span>
      </div>
    </div>
  );
};

export default Hero;
