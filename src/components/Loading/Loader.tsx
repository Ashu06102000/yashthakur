import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Loader = () => {
  const [stage, setStage] = useState<string>("loading"); // Initial stage is 'loading'
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stage === "loading") {
      // Automatically transition to "enter" after 3 seconds
      const timer = setTimeout(() => {
        setStage("enter");
      }, 3000);

      return () => clearTimeout(timer);
    }

    if (stage === "grid") {
      const gridItems = Array.from(gridRef.current!.children);

      // First animation: Top and bottom movement to center
      gsap.fromTo(
        gridItems,
        { y: (index: number) => (index % 2 === 0 ? "-100%" : "100%") },
        {
          y: "0%", // Move all to the center
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            // Stay for 0.8 seconds, then reverse
            setTimeout(() => {
              gsap.to(gridItems, {
                y: (index: number) => (index % 2 === 0 ? "-100%" : "100%"),
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.inOut",
                onComplete: () => {
                  gsap.to(".loader-container", {
                    opacity: 0,
                    display: "none",
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                      setStage("enter");
                    },
                  });
                },
              });
            }, 800);
          },
        }
      );
    }
  }, [stage]);

  const handleEnterClick = () => {
    setStage("grid");
  };
  console.log(stage, "s");

  return (
    <div
      className={`loader-container fixed top-0 left-0 w-screen h-screen bg-black z-[999999] flex items-center justify-center transition-all duration-500 ${
        stage ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {stage === "loading" && (
        <div className="flex flex-col items-center">
          <div className="w-40 h-1 bg-gray-600 relative overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-white"
            />
          </div>
          <p className="text-gray-400 mt-4">Loading your experience...</p>
        </div>
      )}

      {stage === "enter" && (
        <motion.div
          className="experience-text text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-semibold mb-4">
            The journey started with curiosity. <br /> Now, it’s a mission to
            build seamless experiences.
          </h1>
          <button
            onClick={handleEnterClick}
            className="bg-white text-black px-6 py-2 mt-6 text-lg rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Enter
          </button>
        </motion.div>
      )}

      {stage === "grid" && (
        <div ref={gridRef} className="grid grid-cols-6 gap-2 w-full h-full">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex-1 bg-gray-600" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Loader;
