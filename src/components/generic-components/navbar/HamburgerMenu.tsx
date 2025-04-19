import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [_, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.set(menuRef.current, { x: "150%" });

    tl.current = gsap
      .timeline({ paused: true })
      .to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });

    return () => {
      tl.current?.kill();
    };
  }, []);

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

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div className="flex z-10 fixed top-6 right-12 justify-between flex-row rounded-lg bg-white p-2 items-center gap-2">
        <div
          className="flex flex-col gap-1 px-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="line-1 bg-black h-0.5 w-6 rounded transition-all"></div>
          <div className="line-2 bg-black h-0.5 w-6 rounded transition-all"></div>
          <div className="line-3 bg-black h-0.5 w-6 rounded transition-all"></div>
        </div>
        <a
          href="mailto:yash6102000thakur@gmail.com"
          className="bg-orange-500 p-5 text-black rounded-md text-xs font-roboto font-normal hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          CONTACT ME
        </a>
      </div>

      <div
        ref={menuRef}
        className="fixed top-4 right-10 rounded-lg h-auto w-[28rem] pt-40 bg-slate-800 text-white p-6"
      >
        <ul className="flex flex-col items-end">
          {["Home", "Background", "Work"].map((item, index) => {
            const slug = item.toLowerCase();

            return (
              <li
                key={index}
                className="relative pt-4 px-2 border-t border-t-orange-500 border-opacity-10 group:hover:border-opacity-100 text-7xl font-medium text-orange-500 cursor-pointer overflow-hidden group w-full text-right"
              >
                <Link
                  to={`${slug == "home" ? "/" : `/${slug}`}`}
                  className="block w-full h-full"
                >
                  <span className="absolute left-0 bottom-0 h-full bg-orange-500 scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100 w-full"></span>
                  <span className="relative font-roboto block transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:text-slate-800 w-full">
                    {item}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-t-orange-500 border-opacity-10 px-6 pt-16">
          linkedin
        </div>
      </div>
    </div>
  );
}
