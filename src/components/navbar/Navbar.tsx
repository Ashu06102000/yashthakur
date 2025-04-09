import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import music from "../../assets/music.mp3";
import HamburgerMenu from "./HamburgerMenu";

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
    gsap.fromTo(
      ".fade-in",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    if (!isInView) {
    }
  }, [isInView]);

  return (
    <div className="w-full p-8 font-semibold flex gap-12 justify-between fixed top-0 z-50 fade-in">
      <span className="text-xl tracking-wider  font-light"></span>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
