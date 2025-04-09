"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = "yellow"; // Pencil stroke color
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let prevX = -100;
    let prevY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Clear the canvas to remove the trail
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a new line
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();

      prevX = mouseX;
      prevY = mouseY;
      setPosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default CustomCursor;
