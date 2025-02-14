import "./App.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SmokeCursor from "./components/generic-components/SmokeCursor";
import Hero from "./components/hero/Hero";
import IntroSection from "./components/hero/IntroSection";
import Work from "./components/Work/Work";
import { initializeCustomCursor } from "./utils/cursor";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.2,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  useEffect(() => {
    initializeCustomCursor();
  }, []);

  return (
    <div className="relative h-full w-full">
      <Navbar />
      <SmokeCursor />
      <div className="w-full flex flex-col">
        <Hero />
        <div className="bg-white">
          <div className="max-w-main-screen mx-auto">
            <Work />
            <IntroSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
