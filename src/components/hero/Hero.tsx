"use client";
import { motion } from "framer-motion";
import InteractiveParticleSphere from "../generic-components/InteractiveParticleSphere";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 justify-center h-[calc(100vh-112px)]  sticky top-0">
      <div className="absolute inset-0 z-0 ">
        <InteractiveParticleSphere />
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl w-3/5 font-thin text-white text-center z-10"
      >
        The journey started with curiosity. Now, it’s a mission to build
        seamless experiences.
      </motion.h1>
    </div>
  );
};

export default Hero;
