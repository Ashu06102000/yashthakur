"use client";

import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement | null;
    const follower = document.querySelector(
      ".cursor-follower"
    ) as HTMLDivElement | null;

    if (!cursor || !follower) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      gsap.set(cursor, { x: mouse.x, y: mouse.y });
      gsap.set(follower, { x: pos.x, y: pos.y });
    });

    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(follower, { scale: 1.5, borderColor: "#0ff", duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1, borderColor: "#fff", duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="cursor fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-white mix-blend-difference" />
      <div className="cursor-follower fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border-2 border-white mix-blend-difference transition-transform duration-300 ease-out" />
    </>
  );
};

export default CustomCursor;
