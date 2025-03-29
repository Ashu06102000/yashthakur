import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Loader = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
              display: "none",
              duration: 3,
              ease: "power2.inOut",
            });

            setTimeout(() => {
              gsap.to(gridItems, {
                y: () => "-100%",
                duration: 1,
                stagger: 0.2,
                ease: "power2.inOut",
                onComplete() {
                  setLoading(false);
                },
              });
            }, 100);
          },
        }
      );
    }
  }, [stage]);

  return (
    <div
      className={`loader-container fixed top-0 left-0 w-screen h-screen  z-[100] flex items-center justify-center transition-all duration-500 `}
    >
      {stage === "loading" && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
          className="flex flex-col items-center  h-screen w-screen justify-center"
        >
          <div className="w-40 h-0.5 bg-white relative overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-black"
            />
          </div>
          <p className="text-gray-800 text-sm mt-4">
            Loading your experience...
          </p>
        </motion.div>
      )}

      {stage === "grid" && (
        <div ref={gridRef} className="grid grid-cols-8 w-full h-full">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`flex-1 bg-white ${
                index !== -1 ? "border-r border-gray-300" : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Loader;
