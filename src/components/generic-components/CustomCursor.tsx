"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const config = useRef({
    fadeSpeed: 0.05,
    lineWidth: 70,
    strokeColor: "rgba(255, 255, 255, 0.9)",
    blurAmount: 15,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let lastX: number | null = null;
    let lastY: number | null = null;
    let hasMouseMoved = false;
    let lastTime = 0;
    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.lineWidth = config.current.lineWidth;
      ctx.strokeStyle = config.current.strokeColor;
      ctx.lineCap = "round";
      ctx.filter = `blur(${config.current.blurAmount}px)`;
    };

    const getAdjustedCoords = (x: number, y: number) => ({
      x: x - window.pageXOffset,
      y: y - window.pageYOffset,
    });

    const fadeOut = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      if (deltaTime > 16) {
        // Fade the background only, not the cursor trail
        ctx.fillStyle = `rgba(17, 17, 17, ${config.current.fadeSpeed})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        lastTime = currentTime;
      }
      requestAnimationFrame(fadeOut);
    };

    const drawLine = (newX: number, newY: number) => {
      const adjustedCurrent = getAdjustedCoords(newX, newY);
      const adjustedLast =
        lastX !== null && lastY !== null
          ? getAdjustedCoords(lastX, lastY)
          : null;

      // Drawing the cursor trail on top of the faded background
      ctx.beginPath();
      if (adjustedLast) {
        ctx.moveTo(adjustedLast.x, adjustedLast.y);
        ctx.lineTo(adjustedCurrent.x, adjustedCurrent.y);
        ctx.stroke();
      } else {
        ctx.moveTo(adjustedCurrent.x, adjustedCurrent.y);
      }

      lastX = newX;
      lastY = newY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMouseMoved) {
        hasMouseMoved = true;
        lastX = e.pageX;
        lastY = e.pageY;
      } else {
        if (!isScrolling) {
          drawLine(e.pageX, e.pageY);
        }
      }
    };

    const onScroll = () => {
      isScrolling = true;
      if (lastX !== null && lastY !== null) {
        drawLine(lastX, lastY);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        if (lastX !== null && lastY !== null) {
          drawLine(lastX, lastY);
        }
      }, 50);
    };

    // Initial setup
    resizeCanvas();
    requestAnimationFrame(fadeOut);

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mouse-trail pointer-events-none fixed top-0 left-0"
    />
  );
};

export default CustomCursor;
