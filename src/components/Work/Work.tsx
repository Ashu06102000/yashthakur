import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularText from "../generic-components/CircularText";
import sahilImage from "../../assets/sahil-website.png";
import me from "../../assets/me.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const letters = gsap.utils.toArray(".work-letter");

    gsap.set(letters, {
      x: () => gsap.utils.random(-400, 400),
      y: () => gsap.utils.random(-400, 400),
      opacity: 0,
    });

    gsap.to(letters, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.5,
      // stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 100%",
        end: "top 80%",
        scrub: true,
        scroller: "[data-scroll-container]",
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    gsap.set(imageWrapperRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
    gsap.to(imageWrapperRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: "top 160%",
        end: "top 80%",
        scrub: 2,
        scroller: "[data-scroll-container]",
      },
    });
  }, []);

  return (
    <div
      id="PROJECTS"
      className="flex gap-36 p-8 flex-col items-center mx-auto max-w-main-screen mt-[60vh]"
    >
      <div data-scroll-section className="flex gap-12 items-center w-full">
        <div
          ref={textRef}
          className="flex flex-col justify-end w-full gap-2 min-h-screen z-20 mt-64"
        >
          <h1 className="text-brown font-newsreader text-[14rem] flex font-thin leading-none tracking-tighter ">
            {Array.from("Selection").map((letter, index) => (
              <span key={index} className="inline-block work-letter">
                {letter}
              </span>
            ))}
          </h1>

          <span className="text-brown font-newsreader text-[14rem] flex font-thin leading-none tracking-tighter ">
            {Array.from("Of Work").map((letter, index) => (
              <span
                key={index}
                className={`inline-block work-letter ${
                  letter == " " ? "w-20" : ""
                }`}
              >
                {letter}
              </span>
            ))}
          </span>
        </div>
        <div
          ref={imageWrapperRef}
          className=" w-auto flex items-center justify-center"
        >
          <img
            className="h-full max-h-[32rem] max-w-[42rem] object-cover"
            src={me}
            alt="yash"
          />
        </div>
      </div>

      {/* Other sections remain unchanged */}
      <div className="flex flex-col gap-48 w-full">
        <div className="flex bg-tangyOrange hover:bg-orange-300 transition-all duration-500 ease-in-out p-8 w-full gap-10">
          <div className="w-1/2 relative">
            <img
              className="rounded-3xl absolute top-1 object-top z-10 w-[600px] object-cover h-[600px] border border-gray-400 fade-in-on-scroll"
              src={sahilImage}
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between gap-52">
            <div className="flex justify-between">
              <span className="bg-white text-xs font-opensans px-3 rounded-full font-semibold flex items-center">
                PORTFOLIO, WEBSITE
              </span>
              <span className="text-2xl italic">SW.001</span>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="font-light text-2xl ">Sahil Mohammad</h3>
              <p className="text-5xl font-extralight">
                Created this portfolio to reflect Sahil's vision—sleek, modern,
                and dedicated to delivering seamless digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
