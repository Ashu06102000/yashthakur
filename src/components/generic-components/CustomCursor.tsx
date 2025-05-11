"use client";
import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 6;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${
          e.clientY
        }px) scale(${isHovering ? 4 : 6})`;
      }
    };

    const animateTrail = () => {
      trailPositions.current.forEach((pos, i) => {
        const target =
          i === 0 ? mousePos.current : trailPositions.current[i - 1];
        pos.x += (target.x - pos.x) * 0.2;
        pos.y += (target.y - pos.y) * 0.2;

        if (trailRefs.current[i]) {
          trailRefs.current[
            i
          ].style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
      });
      requestAnimationFrame(animateTrail);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "H4" ||
        target.closest("a, button, h4")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "H4" ||
        target.closest("a, button, h4")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-4 h-4 rounded-full bg-white mix-blend-difference transition-transform duration-150 ease-out blur-sm"
        style={{ transform: "translate(-100px, -100px)" }}
      />
    </>
  );
};

export default CustomCursor;
