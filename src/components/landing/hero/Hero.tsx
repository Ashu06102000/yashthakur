import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import buildupAudio from "../../../assets/audio/slow_buildup.mp3";
const audioSrc = "/path-to-your-audio.mp3"; // Replace with your audio file path

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const holdTimeout = useRef<number | null>(null);
  const progressInterval = useRef<number | null>(null);
  const buildupRef = useRef<HTMLAudioElement>(null); // Build-up audio

  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [exiting, setExiting] = useState(false);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  useEffect(() => {
    if (loading) resetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const resetAll = () => {
    setHolding(false);
    setProgress(0);
    setExiting(false);
    setAudioPlaying(false);

    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Reset GSAP animation
    gsap.to("#hero-container", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const startHold = () => {
    if (loading || holding || audioPlaying || exiting) return;

    setHolding(true);
    setProgress(0);
    const startTime = Date.now();
    if (buildupRef.current) {
      buildupRef.current.currentTime = 0;
      buildupRef.current.play();
    }
    progressInterval.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(elapsed / 2000, 1);
      setProgress(currentProgress);
    }, 30);

    holdTimeout.current = window.setTimeout(() => {
      // Stop buildup
      if (buildupRef.current) {
        buildupRef.current.pause();
        buildupRef.current.currentTime = 0;
      }
      if (audioRef.current) audioRef.current.play();
      setProgress(1);
      clearInterval(progressInterval.current!);
      progressInterval.current = null;
      setAudioPlaying(true);
      triggerExitAnimation();
    }, 2000);
  };

  const endHold = () => {
    if (!holding) return;
    resetHold();
  };

  const resetHold = () => {
    setHolding(false);
    setProgress(0);
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
    // Stop buildup audio
    if (buildupRef.current) {
      buildupRef.current.pause();
      buildupRef.current.currentTime = 0;
    }
  };

  const triggerExitAnimation = () => {
    setExiting(true);
    gsap.to("#hero-container", {
      scale: 1.05,
      opacity: 0.95,
      duration: 1,
      ease: "power4.inOut",
    });
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!audioPlaying) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleClickAnywhere = () => {
    if (audioPlaying) {
      resetAll();
    }
  };

  return (
    <section
      id="hero-container"
      className="relative w-full h-screen bg-[#111] overflow-hidden select-none"
      onClick={handleClickAnywhere}
    >
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <audio ref={buildupRef} src={buildupAudio} preload="auto" />

      {/* Background Text */}
      <h1
        aria-hidden="true"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-[25rem] font-black text-white/5 select-none pointer-events-none
          transition-opacity duration-500 ${
            exiting && !audioPlaying ? "opacity-0" : "opacity-20"
          }`}
      >
        HOLD
      </h1>

      {/* Main Text */}
      <div className="absolute top-1/2 left-1/2 max-w-3xl w-full px-6 text-center -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500">
        {!audioPlaying && (
          <h2
            className={`text-6xl font-extrabold text-white tracking-wide mb-6 transition-opacity duration-500 ${
              exiting ? "opacity-0" : "opacity-100"
            }`}
          >
            {loading ? "Loading..." : "Hold the button below"}
          </h2>
        )}

        {audioPlaying && (
          <>
            <h2 className="text-6xl font-extrabold text-white tracking-wide mb-6">
              Audio Playing 🎧
            </h2>
            <p className="text-purple-400 text-xl mb-20">
              Click anywhere to stop and return.
            </p>
          </>
        )}
      </div>

      {/* Hold Button */}
      {!audioPlaying && !loading && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div
            className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer relative"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerLeave={endHold}
            onTouchStart={startHold}
            onTouchEnd={endHold}
          >
            Hold
          </div>

          <p className="text-white text-sm mt-2 text-center">Press & Hold</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
