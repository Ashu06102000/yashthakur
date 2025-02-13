"use client";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 justify-center h-[100vh]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-7xl w-2/3 font-extralight text-black text-center"
      >
        The journey started with curiosity. Now, it’s a mission to build
        seamless experiences.
      </motion.h1>
    </div>
  );
};

export default Hero;
