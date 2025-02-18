import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/navbar/Navbar";
import SmokeCursor from "./components/generic-components/SmokeCursor";
import Hero from "./components/hero/Hero";

import Loader from "./components/Loading/Loader";

import "locomotive-scroll/dist/locomotive-scroll.css"; // Import LocomotiveScroll styles
import "./App.css";
import "./index.css";
import InteractiveParticleSphere from "./components/generic-components/InteractiveParticleSphere";
import IntroSection from "./components/hero/IntroSection";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;

    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.4,
        //@ts-ignore
        smoothMobile: true,
        resetNativeScroll: true,
      });

      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value?: number) {
          if (value !== undefined) {
            scroll?.scrollTo(value, { duration: 0, disableLerp: true });
          }
          //@ts-ignore
          return scroll?.scroll.instance.scroll.y || 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current.style.transform ? "transform" : "fixed",
      });
      //@ts-ignore
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    }

    return () => {
      if (scroll) {
        scroll.destroy();
        //@ts-ignore
        ScrollTrigger.removeEventListener("refresh", () => scroll?.update());
      }
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      className="relative h-full w-full"
    >
      {" "}
      <div className="absolute inset-0">
        <InteractiveParticleSphere />
      </div>
      {/* <Loader /> */}
      <Navbar />
      <SmokeCursor />
      <div className="w-full flex flex-col" data-scroll-section>
        <Hero />
        <IntroSection />
      </div>
    </div>
  );
};

export default App;
