import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom"; // Use for navigation

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  { id: "everyone", label: "For Everyone" },
  { id: "recruiters", label: "Recruiters" },
  { id: "agencies", label: "Agencies" },
  { id: "clients", label: "Clients" },
  { id: "collaborators", label: "Collaborators" },
];

const tabContent = {
  everyone: `Hi, welcome to my portfolio. I’m a frontend developer passionate about building seamless, engaging digital experiences. Here you’ll find the work, the thinking, and the craft behind how I use code to solve real-world problems and push ideas forward with clarity and intention.`,
  recruiters: `I bring a strong blend of technical expertise, creativity, and problem-solving. Let’s discuss how I can contribute to your client’s vision with seamless, user-focused solutions.`,
  agencies: `Collaboration with agencies is where I thrive. From concept to code, I bring ideas to life with precision, creating seamless and impactful user experiences.`,
  clients: `Looking for a frontend expert to elevate your digital presence? I specialize in creating standout user experiences that bring your brand to life.`,
  collaborators: `I’m always excited to connect with fellow creatives. Let’s build something innovative, user-focused, and unforgettable together.`,
};

const tabButtons = {
  everyone: { text: "View my work", path: "/contact" },
  recruiters: { text: "Read my resume", path: "/resume" },
  agencies: { text: "View my work", path: "/work" },
  clients: { text: "Get in touch", path: "/contact" },
  collaborators: { text: "Connect with me", path: "/contact" },
};

const IntroSection = () => {
  const [activeTab, setActiveTab] = useState("everyone");
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative py-24 px-6 sm:px-10 md:px-20 bg-black text-white min-h-screen rounded-3xl gap-16 flex flex-col">
      <div className="flex gap-6  items-center h-9">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm font-medium transition-all duration-200 cursor-pointer font-roboto ${
              activeTab === tab.id
                ? "bg-white text-black px-4 py-2 rounded-full"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div
        ref={contentRef}
        className="max-w-4xl text-4xl md:text-4xl leading-tight"
      >
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>

      {/* Location and CTA */}
      <div className=" flex justify-between items-center text-sm font-roboto mt-12">
        <div className="text-gray-400">
          <p className="font-medium text-graysharetwo">Current Location</p>
          <p>
            <span className="font-bold text-white">India</span>
          </p>
        </div>
        <button
          onClick={() =>
            handleButtonClick(
              tabButtons[activeTab as keyof typeof tabButtons].path
            )
          }
          className="flex items-center gap-2 text-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all"
        >
          {tabButtons[activeTab as keyof typeof tabButtons].text}{" "}
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
