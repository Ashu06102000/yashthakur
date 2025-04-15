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
  const [loading, setLoading] = useState(true);

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
              <Route path="/" element={<Landing loading={loading} />} />
              <Route
                path="/background"
                element={<Background loading={loading} />}
              />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
