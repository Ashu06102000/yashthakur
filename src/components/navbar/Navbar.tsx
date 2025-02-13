import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("PROFILE");

  const handleSwitch = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full p-8 font-semibold flex gap-12 justify-between">
      <h2 className="text-2xl font-thin tracking-tighter flex flex-col leading-none">
        Yash Thakur
        <span>Frontend Developer</span>
      </h2>
      <div className="bg-gray-200 p-2 rounded-full flex items-center fixed top-4 right-4 ">
        <ul className="flex items-center gap-4  rounded-full p-1 relative z-10">
          {["PROFILE", "PROJECTS"].map((tab) => (
            <li
              key={tab}
              className={`relative font-normal font-xl cursor-pointer px-6 py-2 transition-colors duration-200 z-10 ${
                activeTab === tab ? "text-white" : "text-black"
              }`}
              onClick={() => handleSwitch(tab)}
            >
              {tab}
            </li>
          ))}
          <motion.div
            className="absolute top-0 left-0 bg-[#313131] rounded-full w-1/2 h-full z-0"
            initial={{ x: 0 }}
            animate={{
              x: activeTab === "PROFILE" ? 0 : "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
