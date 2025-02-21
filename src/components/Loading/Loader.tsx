import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Loader = () => {
  const [stage, setStage] = useState<string>("loading");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stage === "loading") {
      const timer = setTimeout(() => {
        setStage("grid");
      }, 3500);

      return () => clearTimeout(timer);
    }

    if (stage === "grid") {
      const gridItems = Array.from(gridRef.current!.children);

      gsap.fromTo(
        gridItems,
        { y: () => "100%" },
        {
          y: "0%",
          duration: 1,
          stagger: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(".loader-container", {
              opacity: 0,
              display: "none",
              backgroundColor: "transparent",
              duration: 3,
              ease: "power2.inOut",
              onComplete: () => {
                setStage("enter");
              },
            });
            setTimeout(() => {
              gsap.to(gridItems, {
                y: () => "-100%",
                duration: 1,
                stagger: 0.2,
                ease: "power2.inOut",
                onStart: () => {},
              });
            }, 100);
          },
        }
      );
    }
  }, [stage]);

  return (
    <div
      className={`loader-container fixed top-0 left-0 w-screen h-screen bg-white z-[999999] flex items-center justify-center transition-all duration-500 `}
    >
      {stage === "loading" && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
          className="flex flex-col items-center"
        >
          <div className="w-40 h-0.5 bg-white relative overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-black"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Loading your experience...
          </p>
        </motion.div>
      )}

      {stage === "grid" && (
        <div ref={gridRef} className="grid grid-cols-6 gap-0.5 w-full h-full">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex-1 bg-gray-600" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Loader;
