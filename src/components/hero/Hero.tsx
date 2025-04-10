import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const linesRef = useRef<HTMLDivElement[]>([]);
  const burstRef = useRef<SVGSVGElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);
  const pulseRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        burstRef.current,
        { scale: 0, rotate: -180, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          ease: "back.out(1.7)",
          duration: 2,
          onComplete: () => {
            gsap.to(burstRef.current, {
              rotate: 360,
              duration: 5,
              ease: "linear",
              repeat: -1,
            });
          },
        }
      );
      tl.fromTo(
        linesRef.current,
        { opacity: 0, y: 80, rotateX: 60 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          ease: "expo.out",
          duration: 1.2,
          stagger: 0.2,
        },
        "-=0.6"
      );

      gsap.to(pulseRef.current, {
        scale: 4.5,
        opacity: 0,
        repeat: -1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.2,
      });
    }
  }, [loading]);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-start px-10 sm:px-20 bg-black text-white font-barracuda relative overflow-hidden">
      <div className="absolute bottom-8 left-22 text-sm flex items-center gap-3 font-lato text-white/90">
        <div className="relative w-3 h-3">
          <span
            ref={dotRef}
            className="absolute w-3 h-3 rounded-full bg-green-400 z-10"
          ></span>

          <span
            ref={pulseRef}
            className="absolute w-3 h-3 rounded-full bg-green-400 opacity-40 z-0"
          ></span>
        </div>
        Available to work
      </div>

      <div className="flex items-start gap-6 z-10">
        <div className="space-y-4 text-[clamp(3rem,8vw,8rem)] font-roboto leading-none uppercase font-normal">
          <div ref={(el) => el && (linesRef.current[0] = el)}>HEY — I'M</div>
          <div className="flex items-center gap-6">
            <svg
              ref={burstRef}
              className="w-20 h-20 shrink-0"
              viewBox="0 0 100 100"
              fill="none"
            >
              {[...Array(24)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="0"
                  stroke="white"
                  strokeWidth="4"
                  transform={`rotate(${(360 / 24) * i}, 50, 50)`}
                />
              ))}
            </svg>
            <div ref={(el) => el && (linesRef.current[1] = el)}>
              YASH THAKUR
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(el) => el && (linesRef.current[2] = el)}
        className="text-[clamp(3rem,8vw,8rem)] font-roboto leading-none uppercase font-light"
      >
        <span className="text-orange-500 font-normal">Frontend Developer</span>
      </div>

      <p
        ref={(el) => el && (linesRef.current[3] = el)}
        className="mt-10 max-w-xl text-lg text-white/90 font-lato leading-relaxed px-6 py-3 border border-white/20 rounded-md"
      >
        I Animate Interfaces, And Sometimes People
      </p>
      <p className="absolute bottom-8 right-20 text-sm flex items-center gap-3 font-lato text-white/90">
         📍 Pune, Maharashtra, India
      </p>
    </section>
  );
};

export default Hero;
