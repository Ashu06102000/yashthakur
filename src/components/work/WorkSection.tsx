import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Strong } from "gsap";
import rator from "../../assets/rator.png";
import morax from "../../assets/morax-home.png";
import moraxTwo from "../../assets//moraxtwo.png";

const images = [rator, morax, moraxTwo];
const imageTitles = ["Rator", "Morax", "morax"];

const IMAGE_PIECE_COUNT = 10;
const X_CHANGE = 1000;
const Y_CHANGE = 1000;
const ROTATION = 25;
const TOTAL_WIDTH = 750;
const TOTAL_HEIGHT = 500;

const WorkSection = () => {
  const [index, setIndex] = useState(0);
  const isChanging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const displayImage = (idx: number) => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const chunkWidthPercent = 100 / IMAGE_PIECE_COUNT;

    // Animate label fade-in
    if (labelRef.current) {
      TweenMax.fromTo(
        labelRef.current,
        0.6,
        { opacity: 0 },
        { opacity: 0.1, ease: Strong.easeInOut }
      );
    }

    for (let i = 0; i < IMAGE_PIECE_COUNT; i++) {
      const chunk = document.createElement("div");
      chunk.id = `chunk${i}`;

      Object.assign(chunk.style, {
        backgroundImage: `url(${images[idx]})`,
        backgroundPosition: `${i * chunkWidthPercent}% 50%`,
        backgroundSize: `${IMAGE_PIECE_COUNT * 100}% 100%`,
        height: `${TOTAL_HEIGHT}px`,
        width: `${TOTAL_WIDTH / IMAGE_PIECE_COUNT}px`,
        display: "inline-block",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)",
        boxSizing: "border-box",
        overflow: "hidden",
        cursor: "default",
      });

      containerRef.current.appendChild(chunk);

      TweenMax.fromTo(
        chunk,
        1,
        {
          x: i % 2 === 0 ? -X_CHANGE : X_CHANGE,
          y: i % 2 === 0 ? Y_CHANGE : -Y_CHANGE,
          rotation: -ROTATION,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          ease: Strong.easeInOut,
          onComplete: () => {
            if (i === IMAGE_PIECE_COUNT - 1) {
              isChanging.current = false;
            }
          },
        }
      );
    }
  };

  const removeImage = (): Promise<void> => {
    return new Promise((resolve) => {
      if (!containerRef.current) {
        resolve();
        return;
      }

      const chunks = Array.from(
        containerRef.current.querySelectorAll<HTMLDivElement>("div")
      );

      if (chunks.length === 0) {
        resolve();
        return;
      }

      let completedCount = 0;

      chunks.forEach((chunk, i) => {
        TweenMax.to(chunk, 1, {
          rotation: ROTATION,
          ease: Strong.easeInOut,
          onComplete: () => {
            TweenMax.fromTo(
              chunk,
              1,
              { x: 0, y: 0 },
              {
                y: i % 2 === 0 ? -Y_CHANGE : Y_CHANGE,
                x: i % 2 === 0 ? -X_CHANGE : X_CHANGE,
                ease: Strong.easeInOut,
                onComplete: () => {
                  chunk.parentNode?.removeChild(chunk);
                  completedCount++;
                  if (completedCount === chunks.length) {
                    resolve();
                  }
                },
              }
            );
          },
        });
      });
    });
  };

  const changePosition = (movement: number) => {
    if (isChanging.current) return;
    isChanging.current = true;

    let newIndex = index + movement;
    if (newIndex < 0) newIndex = images.length - 1;
    else if (newIndex >= images.length) newIndex = 0;

    removeImage().then(() => {
      setIndex(newIndex);
      displayImage(newIndex);
    });
  };

  useEffect(() => {
    displayImage(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#111] text-white"
      style={{ userSelect: "none" }}
    >
      {/* Big background label */}
      <div
        ref={labelRef}
        className="absolute text-[20rem] font-bold uppercase opacity-10 pointer-events-none select-none"
        style={{
          zIndex: 0,
          whiteSpace: "nowrap",
        }}
      >
        {imageTitles[index]}
      </div>

      {/* Image chunks container */}
      <div
        ref={containerRef}
        id="theImage"
        className="flex flex-wrap rounded-lg"
        style={{
          width: `${TOTAL_WIDTH}px`,
          height: `${TOTAL_HEIGHT}px`,
          perspective: "1500px",
          zIndex: 1,
        }}
      ></div>

      <div
        id="buttons"
        className="mt-10 flex gap-16 text-2xl cursor-pointer select-none tracking-wide uppercase"
        style={{ zIndex: 2 }}
      >
        <span onClick={() => changePosition(-1)}>Previous</span>
        <span onClick={() => changePosition(1)}>Next</span>
      </div>
    </div>
  );
};

export default WorkSection;
