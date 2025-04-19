import React, { useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "./components/generic-components/CustomCursor";

import Loader from "./components/generic-components/Loading/Loader";
import Navbar from "./components/generic-components/navbar/Navbar";
import "./App.css";
import "./index.css";
import Landing from "./components/landing/Landing";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import { TransitionProvider } from "./context/TransitionContext";
import TransitionComponent from "./components/generic-components/Transition";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-full w-full">
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <CustomCursor />

          <div className="w-full flex flex-col z-20" data-scroll-section>
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
              </Routes>
            </TransitionProvider>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
