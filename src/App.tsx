import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Loader from "./components/generic-components/Loading/Loader";
import Navbar from "./components/generic-components/navbar/Navbar";
import CustomCursor from "./components/generic-components/CustomCursor";
import Landing from "./components/landing/Landing";
import Background from "./components/Background/Background";
import { Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import TransitionComponent from "./components/generic-components/Transition";

import "./App.css";
import "./index.css";

import Work from "./components/work/Work";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!ScrollSmoother.get()) {
        ScrollSmoother.create({
          smooth: 2,
          effects: true,
          normalizeScroll: true,
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
        });
      }
    }
  }, [loading]);

  return (
    <div className="relative h-full w-full bg-[#111]">
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <div className="mx-auto max-w-main-screen">
            <Navbar />
          </div>
          <CustomCursor />

          <div className="mx-auto  " id="smooth-wrapper">
            <div
              id="smooth-content"
              data-scroll-section
              className="w-full flex flex-col z-20"
            >
              <TransitionProvider>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <TransitionComponent>
                        <Landing loading={loading} />
                      </TransitionComponent>
                    }
                  />
                  <Route
                    path="/background"
                    element={
                      <TransitionComponent>
                        <Background loading={loading} />
                      </TransitionComponent>
                    }
                  />
                  <Route
                    path="/work"
                    element={
                      <TransitionComponent>
                        <Work loading={loading} />
                      </TransitionComponent>
                    }
                  />
                </Routes>
              </TransitionProvider>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
