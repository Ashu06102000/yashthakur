import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "./components/generic-components/CustomCursor";

import Loader from "./components/generic-components/Loading/Loader";
import Navbar from "./components/generic-components/navbar/Navbar";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./App.css";
import "./index.css";
import Landing from "./components/landing/Landing";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!scrollInstance.current && scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.4,
        //@ts-ignore
        smoothMobile: true,
        resetNativeScroll: true,
      });

      scrollInstance.current.on("scroll", () => {
        ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value?: number) {
          return arguments.length
            ? //@ts-ignore
              scrollInstance.current?.scrollTo(value, {
                duration: 0,
                disableLerp: true,
              })
            : //@ts-ignore
              scrollInstance.current?.scroll.instance.scroll.y || 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
      ScrollTrigger.removeEventListener("refresh", ScrollTrigger.refresh);
    };
  }, []);

  return (
    <div
      data-scroll-container
      // ref={scrollRef}
      className="relative h-full w-full"
    >
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <CustomCursor />

          <div
            className="w-full flex flex-col bg-transparent z-20"
            data-scroll-section
          >
            <Routes>
              <Route path="/home" element={<Landing loading={loading} />} />
              <Route path="/background" element={<Background />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
