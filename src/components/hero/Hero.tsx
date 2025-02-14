"use client";
import { motion } from "framer-motion";
import InteractiveParticleSphere from "../generic-components/InteractiveParticleSphere";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 justify-center h-[100vh] relative">
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleSphere />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-7xl w-2/3 font-light text-black text-center z-10"
      >
        The journey started with curiosity. Now, it’s a mission to build
        seamless experiences.
      </motion.h1>
    </div>
  );
};

export default Hero;
