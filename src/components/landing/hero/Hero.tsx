import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import flowerIcon from "../../../assets/FLOWER-ICON.svg";
import me from "../../../assets/me.jpeg";
import circleIcon from "../../../assets/CIRCLE-ICON.svg";
import arrow from "../../../assets/ARROW.svg";
import illustrationWork from "../../../assets/illustration-work.webp";

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        // Animate cards
        gsap.from(cardsRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Animate text in intro
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

      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <section
      ref={sectionRef}
      className="flex gap-6 justify-between py-20 w-full h-screen max-w-main-screen mx-auto"
    >
      <div className="w-3/4 grid grid-rows-2 h-full gap-6">
        <div className="w-full flex h-full gap-6">
          <div
            className="w-2/3 bg-[#FADCD9] h-full flex flex-col justify-between p-8 rounded-2xl gap-6"
            ref={(el) => el && (cardsRef.current[0] = el)}
          >
            <img
              className="self-end flower-icon"
              src={flowerIcon}
              alt="Flower"
            />
            <h2 className="text-black text-5xl intro-text leading-tight">
              Hello There 👋🏽, <br /> My name is{" "}
              <span className="text-black inline-block">Yash Thakur</span>
            </h2>
          </div>
          <div
            className="w-1/3 rounded-2xl"
            ref={(el) => el && (cardsRef.current[1] = el)}
          >
            <img
              className="h-full w-full object-cover rounded-2xl profile-img"
              src={me}
              alt="Yash"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 h-full gap-6">
          <div
            className="bg-[#FADCD9] flex flex-col items-center justify-between p-8 rounded-2xl"
            ref={(el) => el && (cardsRef.current[2] = el)}
          >
            <img
              className="self-start circle-icon"
              src={circleIcon}
              alt="Circle"
            />
            <p className="text-black text-2xl text-left">
              Building modern web applications, dashboards, and websites with a
              focus on performance, scalability, and seamless user experience.
            </p>
          </div>
          <button
            className="bg-[#F8AFA6] flex flex-col justify-between p-8 rounded-2xl show-hover-illustration"
            ref={(el) => el && (cardsRef.current[3] = el)}
          >
            <div className="flex justify-between">
              <h4 className="text-black text-base flex flex-col">
                Have some <span> questions?</span>
              </h4>
              <img src={arrow} alt="" />
            </div>

            <p className="text-black text-6xl text-left">Contact me</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between w-1/3 gap-6">
        <div
          className="h-4/5 bg-[#FADCD9] flex flex-col justify-between p-8 rounded-2xl gap-4"
          ref={(el) => el && (cardsRef.current[4] = el)}
        >
          <h3 className="text-left text-2xl text-black">Work</h3>
          <ul className="flex flex-col gap-4">
            {[
              "Portfolio Website",
              "Dashboard UI",
              "E-commerce App",
              "Blog Platform",
            ].map((item, idx) => (
              <li
                key={idx}
                className="group flex justify-between items-center text-black text-lg border-b border-black/20 pb-1 hover:pl-2 transition-all duration-300 cursor-pointer"
              >
                <span>{item}</span>
                <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xl">
                  →
                </span>
              </li>
            ))}
          </ul>
          <img className="rounded-2xl" src={illustrationWork} alt="" />
        </div>

        <div
          className="h-1/5 bg-[#FADCD9] flex items-center justify-between p-8 rounded-2xl text-black"
          ref={(el) => el && (cardsRef.current[5] = el)}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yash-thakur-0b71051b9/"
          >
            LINKEDIN
          </a>
          <a href="mailto:yash6102000thakur@gmail.com">EMAIL</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
