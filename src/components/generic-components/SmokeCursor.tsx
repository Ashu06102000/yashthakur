"use client";
import { useEffect, useRef, useState } from "react";

const SmokeCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: {
      x: number;
      y: number;
      alpha: number;
      size: number;
      velocityX: number;
      velocityY: number;
    }[] = [];

    const createSmoke = (x: number, y: number) => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x,
          y,
          alpha: 1,
          size: Math.random() * 8 + 2, // Random size between 2 and 10
          velocityX: (Math.random() - 0.5) * 3, // Random horizontal movement
          velocityY: (Math.random() - 0.5) * 3, // Random vertical movement
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.alpha -= 0.02; // Slow fade-out

        ctx.beginPath();
        ctx.fillStyle = `rgba(180, 180, 180, ${particle.alpha})`; // Light grey smoke
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      createSmoke(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Smoke Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none mix-blend-darken z-50"
      />
      {/* Smoke Overlay for Blur Effect */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        style={{
          backdropFilter: "blur(10px)", // Increased blur for a smoky look
          WebkitBackdropFilter: "blur(10px)",
          maskImage: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0) 80%)`,
        }}
      />
    </>
  );
};

export default SmokeCursor;
