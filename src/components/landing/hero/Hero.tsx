import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import flowerIcon from "../../../assets/FLOWER-ICON.svg";
import me from "../../../assets/me.jpeg";
import circleIcon from "../../../assets/CIRCLE-ICON.svg";
import arrow from "../../../assets/ARROW.svg";

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        // Intro animations
        gsap.from(cardsRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        gsap.from(".intro-text span", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5,
          ease: "power3.out",
        });

        gsap.from(".profile-img", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });

        gsap.to(".flower-icon", {
          rotation: 360,
          duration: 10,
          ease: "linear",
          repeat: -1,
        });

        gsap.to(".circle-icon", {
          rotation: 360,
          duration: 15,
          ease: "linear",
          repeat: -1,
        });
      }, sectionRef);

      // 3D Scroll Animation
      const cards = cardsRef.current;
      const container = sectionRef.current;
      const winHeight = window.innerHeight;
      const distance = 1500;
      const visibleRange = 5000;
      const initialZ = cards.map((_, i) => -i * distance);

      function mapRange(
        value: number,
        inMin: number,
        inMax: number,
        outMin: number,
        outMax: number
      ) {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
      }

      const onScroll = () => {
        if (!container) return;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const scrollTop = window.scrollY;
        const progress =
          (scrollTop - containerTop) / (containerHeight - winHeight);

        if (progress >= 0 && progress <= 1) {
          const zIncrement = progress * distance * (cards.length - 1);

          cards.forEach((card, i) => {
            const currentZ = initialZ[i] + zIncrement;
            const opacity = mapRange(currentZ, -visibleRange, 0, 0, 1);

            gsap.to(card, {
              transform: `translate3d(0, 0, ${currentZ}px)`,
              opacity: Math.max(0, Math.min(opacity, 1)),
              ease: "power3.out",
              duration: 0.4,
            });
          });
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => {
        ctx.revert();
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [loading]);

  return (
    <section
      ref={sectionRef}
      className="flex gap-6 justify-between py-20 w-full h-screen max-w-main-screen mx-auto [perspective:2000px] [transform-style:preserve-3d] "
    >
      <div className="w-3/4 grid grid-rows-2 h-full gap-6 z-10">
        <div className="w-full flex h-full gap-6">
          <div
            className="w-2/3 h-full flex flex-col justify-between p-8 rounded-2xl gap-6 backdrop-blur-md bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20"
            ref={(el) => el && (cardsRef.current[0] = el)}
          >
            <img
              className="self-end flower-icon"
              src={flowerIcon}
              alt="Flower"
            />
            <h2 className="text-white text-5xl intro-text leading-tight">
              Hello There 👋🏽, <br /> My name is{" "}
              <span className=" inline-block">Yash Thakur</span>
            </h2>
          </div>

          <div
            className="w-1/3 rounded-2xl p-2 backdrop-blur-md bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20"
            ref={(el) => el && (cardsRef.current[1] = el)}
          >
            <img
              className="h-full w-full object-cover rounded-xl grayscale"
              src={me}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 h-full gap-6">
          <div
            className=" flex flex-col items-center justify-between p-8 rounded-2xl  backdrop-blur-md bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20"
            ref={(el) => el && (cardsRef.current[2] = el)}
          >
            <img
              className="self-start circle-icon"
              src={circleIcon}
              alt="Circle"
            />
            <p className="text-white text-2xl text-left font-roboto font-light">
              Building modern web applications, dashboards, and websites with a
              focus on performance, scalability, and seamless user experience.
            </p>
          </div>
          <button
            className="backdrop-blur-md bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col justify-between p-8 rounded-2xl show-hover-illustration"
            ref={(el) => el && (cardsRef.current[3] = el)}
          >
            <div className="flex justify-between">
              <h4 className="text-white text-base flex flex-col font-roboto">
                Have some <span> questions?</span>
              </h4>
              <img src={arrow} alt="" />
            </div>
            <p className="text-white text-6xl text-left">Contact me</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between w-1/3 gap-6 z-10">
        <div
          className="h-4/5  flex flex-col justify-between p-8 rounded-2xl gap-4  backdrop-blur-md bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20"
          ref={(el) => el && (cardsRef.current[4] = el)}
        >
          <h3 className="text-left text-5xl text-white">Work</h3>
          <ul className="flex flex-col gap-4">
            {[
              "Portfolio Website",
              "Dashboard UI",
              "E-commerce App",
              "Blog Platform",
            ].map((item, idx) => (
              <li
                key={idx}
                className="group flex justify-between items-center text-white text-3xl border-b border-white/20 pb-1 hover:pl-2 transition-all duration-300 cursor-pointer font-roboto"
              >
                <span>{item}</span>
                <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xl">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="h-1/5 backdrop-blur-md bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20 flex items-center justify-between p-8 rounded-2xl text-white font-roboto"
          ref={(el) => el && (cardsRef.current[5] = el)}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yash-thakur-0b71051b9/"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a href="mailto:yash6102000thakur@gmail.com">EMAIL</a>
        </div>
      </div>
      <h1
        aria-hidden="true"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-[25rem] font-black text-white/5 select-none pointer-events-none
          transition-opacity duration-500 ${"opacity-20"}`}
      >
        Yash
      </h1>
    </section>
  );
};

export default Hero;
