import { useRef, useEffect } from "react";
import gsap from "gsap";
const DefaultHello = () => {
  const helloRef = useRef(null);

  // Split text into letters
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="letter inline-block">
        {char}
      </span>
    ));

  useEffect(() => {
    if (!helloRef.current) return;

    const letters = helloRef.current.querySelectorAll(".letter");

    // Animate each letter from a random position
    letters.forEach((letter) => {
      const randomX = (Math.random() - 0.5) * 4000; // ±2000px
      const randomY = (Math.random() - 0.5) * 4000; // ±2000px
      gsap.fromTo(
        letter,
        { x: randomX, y: randomY, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.05, // small delay between letters for nicer effect
        }
      );
    });
  }, []);

  return (
    <div
      ref={helloRef}
      className="default-content text-5xl font-thin text-white flex justify-center items-center "
    >
      {splitText("Codelife")}
    </div>
  );
};
export default DefaultHello;
