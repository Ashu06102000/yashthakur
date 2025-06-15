import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.set(menuRef.current, { x: "150%" });

    tl.current = gsap
      .timeline({ paused: true })
      .to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;

      gsap.to(".line-1", {
        rotate: newState ? 45 : 0,
        y: newState ? 8 : 0,
        duration: 0.3,
      });
      gsap.to(".line-2", { opacity: newState ? 0 : 1, duration: 0.3 });
      gsap.to(".line-3", {
        rotate: newState ? -45 : 0,
        y: newState ? -8 : 0,
        duration: 0.3,
      });

      if (newState) {
        tl.current?.play();
      } else {
        tl.current?.reverse();
      }

      return newState;
    });
  };

  const handleLinkClick = (slug: string) => {
    // Reverse animations
    tl.current?.reverse();
    gsap.to(".line-1", { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(".line-2", { opacity: 1, duration: 0.3 });
    gsap.to(".line-3", { rotate: 0, y: 0, duration: 0.3 });

    setTimeout(() => {
      setIsOpen(false);
      navigate(slug === "home" ? "/" : `/${slug}`);
    }, 500); // Delay matches GSAP duration
  };

  return (
    <div className="relative z-50">
      {/* Hamburger Icon */}
      <div className="flex fixed top-10 right-6 sm:right-12 justify-between items-center gap-2 z-50">
        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1 px-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <div
            className={`line-1 ${
              isOpen ? "bg-white" : "bg-black"
            } h-0.5 w-8 sm:w-10 rounded`}
          ></div>
          <div
            className={`line-2 ${
              isOpen ? "bg-white" : "bg-black"
            } h-0.5 w-8 sm:w-10 rounded`}
          ></div>
          <div
            className={`line-3 ${
              isOpen ? "bg-white" : "bg-black"
            } h-0.5 w-8 sm:w-10 rounded`}
          ></div>
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-[28rem] md:w-full pt-[15%] bg-black text-white px-6 sm:px-10 z-40 overflow-y-auto"
      >
        <ul className="flex flex-col items-center gap-4 md:gap-6 uppercase">
          {["Home", "Background", "Work"].map((item, index) => {
            const slug = item.toLowerCase();
            return (
              <li
                key={index}
                className="relative pt-4 px-2 text-5xl sm:text-8xl font-medium text-white cursor-pointer overflow-hidden group w-full text-center"
              >
                <button
                  onClick={() => handleLinkClick(slug)}
                  className="block w-full h-full"
                >
                  <span className="absolute left-0 bottom-0 h-full scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100 w-full"></span>
                  <span className="relative font-roboto block transition-transform duration-300 ease-in-out group-hover:-translate-y-2 w-full">
                    {item}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="md:border-t border-t-orange-500 border-opacity-10 px-6 pt-16 text-right">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base hover:underline text-white/80"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
