"use client";
import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 6;
const IDLE_TIMEOUT = 400; // 1 second

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [isIdle, setIsIdle] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(4)`;
      }

      setIsIdle(false);

      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
      }, IDLE_TIMEOUT);
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

    window.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none w-6 h-6 rounded-full bg-white mix-blend-difference blur-sm transition-opacity duration-300 ease-out ${
          isIdle ? "opacity-0" : "opacity-100"
        }`}
        style={{ transform: "translate(-100px, -100px)" }}
      />
    </>
  );
};

export default CustomCursor;
