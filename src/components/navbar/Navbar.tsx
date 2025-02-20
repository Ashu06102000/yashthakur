import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import music from "../../assets/music.mp3";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState("PROFILE");
  const handleSwitch = (tab: string) => {
    setActiveTab(tab);
  };
  const initialWavePath =
    "M0 50 Q50 50 100 50 T200 50 T300 50 T400 50 T500 50 T600 50";
  const startAnimation = () => {
    if (pathRef.current) {
      animationRef.current = gsap.to(pathRef.current, {
        duration: 2,
        ease: "power1.inOut",
        attr: {
          d: "M0 50 Q50 0 100 50 T200 50 T300 50 T400 50 T500 50 T600 50",
        },
        repeat: -1,
        yoyo: true,
      });
    }

    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (pathRef.current) {
      gsap.to(pathRef.current, {
        duration: 1,
        attr: { d: initialWavePath },
        ease: "power1.inOut",
      });
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggleAnimation = () => {
    if (isAnimating) {
      stopAnimation();
    } else {
      startAnimation();
    }
    setIsAnimating(!isAnimating);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      backgroundColor: isInView ? "#1a1a1a" : "#000000",
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.to("body", {
      backgroundColor: isInView ? "#000000" : "",
      duration: 1,
      ease: "power1.inOut",
    });
    if (!isInView) {
    }
  }, [isInView]);

  return (
    <div className="w-full p-8 font-semibold flex gap-12 justify-between fixed top-0 z-50">
      <h2 className="text-2xl text-white font-thin tracking-tighter flex flex-col leading-none">
        Yash Thakur
        <span>Frontend Developer</span>
      </h2>
      <div className="fixed bottom-10 right-10 flex items-center gap-2">
        <span className="text-sm text-white">Sound</span>
        <div className="cursor-pointer">
          <svg
            width="100"
            height="50"
            viewBox="0 0 600 100"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleAnimation}
          >
            <path
              ref={pathRef}
              d={initialWavePath}
              stroke="white"
              strokeWidth="10"
              fill="none"
            />
          </svg>

          <audio ref={audioRef}>
            <source src={music} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
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
