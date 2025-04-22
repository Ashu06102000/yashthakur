import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  { id: "everyone", label: "For Everyone" },
  { id: "recruiters", label: "Recruiters" },
  { id: "agencies", label: "Agencies" },
  { id: "clients", label: "Clients" },
  { id: "collaborators", label: "Collaborators" },
];

const tabContent = {
  everyone: `Hi, welcome to my portfolio. I’m a hands-on Digital Creative Director focused on crafting innovative digital experiences. Dive in to explore my work, my process, and how I bring ideas to life through collaboration and creativity.`,
  recruiters: `I bring a unique mix of strategy, creativity, and leadership. Let’s chat about how I can contribute to your client’s vision.`,
  agencies: `Collaboration with agencies is where I thrive. From ideation to execution, I bring ideas to life with impact and precision.`,
  clients: `Looking for a trusted digital partner? I specialize in building standout experiences that elevate your brand.`,
  collaborators: `I’m always open to connect with fellow creatives. Let’s make something bold, thoughtful, and different together.`,
};

const IntroSection = () => {
  const [activeTab, setActiveTab] = useState("everyone");
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  return (
    <div className="relative py-24 px-6 sm:px-10 md:px-20 bg-black text-white min-h-screen rounded-3xl">
      {/* Tabs */}
      <div className="flex gap-6 mb-12 items-center">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? "bg-white text-black px-4 py-2 rounded-full"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="max-w-4xl text-4xl md:text-4xl leading-snug font-bold"
      >
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>

      {/* Location and CTA */}
      <div className="mt-16 flex justify-between items-center text-sm">
        <div className="text-gray-400">
          <p className="font-medium text-white">Current Location</p>
          <p>
            <span className="line-through">Bahrain</span>{" "}
            <span className="line-through">Singapore</span>{" "}
            <span className="font-bold text-white">Dubai</span>
          </p>
        </div>
        <button className="flex items-center gap-2 text-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all">
          View my work <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
