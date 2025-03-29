"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [size, setSize] = useState(10);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let prevX = -100;
    let prevY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      prevX += (mouseX - prevX) * 0.15;
      prevY += (mouseY - prevY) * 0.15;

      const velocity = Math.sqrt((mouseX - prevX) ** 2 + (mouseY - prevY) ** 2);
      const newSize = Math.max(10, Math.min(25, 10 + velocity * 0.5));

      setPosition({ x: prevX, y: prevY });
      setSize(newSize);

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: "#f04f50",
        transform: `translate(${position.x - size / 2}px, ${
          position.y - size / 2
        }px) scale(${size / 10})`,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
};

export default CustomCursor;
