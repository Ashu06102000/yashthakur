import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const CircularText = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // Smooth infinite rotation for the text circle
    gsap.to(circleRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 10, // Adjust duration for speed
    });
  }, []);
  return (
    <div className="relative h-20 w-20 flex items-center justify-center">
      <svg
        ref={circleRef}
        className="absolute h-full w-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="text-circle"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
        </defs>
        <text fill="white" fontSize="9" fontWeight="normal" letterSpacing="2">
          <textPath href="#text-circle" startOffset="50%" textAnchor="middle">
            Crafting Stories · Crafting Experiences .
          </textPath>
        </text>
      </svg>
    </div>
  );
};
export default CircularText;
