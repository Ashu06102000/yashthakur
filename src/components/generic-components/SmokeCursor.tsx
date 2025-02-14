"use client";
import { useEffect, useRef, useState } from "react";

const GlitchCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let glitchLines: {
      x: number;
      y: number;
      width: number;
      height: number;
      alpha: number;
      color: string;
    }[] = [];

    const randomColor = () => {
      const colors = ["#FF3F3F", "#00FFFF", "#FF00FF", "#FFFF00"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createGlitch = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        glitchLines.push({
          x: x + Math.random() * 20 - 10, // Small random offset
          y: y + Math.random() * 20 - 10,
          width: Math.random() * 50 + 10, // Random line width
          height: Math.random() * 5 + 2, // Random line height
          alpha: Math.random() * 0.7 + 0.3, // Transparency
          color: randomColor(),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      glitchLines.forEach((line, index) => {
        ctx.globalAlpha = line.alpha;
        ctx.fillStyle = line.color;
        ctx.fillRect(line.x, line.y, line.width, line.height);

        // Reduce alpha to fade out
        line.alpha -= 0.03;
        // Move the glitch line a little bit
        line.x += Math.random() * 4 - 2;
        line.y += Math.random() * 4 - 2;

        // Remove faded lines
        if (line.alpha <= 0) {
          glitchLines.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      createGlitch(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Glitch Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none mix-blend-difference"
      />
      {/* Overlay to amplify the glitch effect */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        style={{
          maskImage: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 80%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 80%)`,
        }}
      />
    </>
  );
};

export default GlitchCursor;
