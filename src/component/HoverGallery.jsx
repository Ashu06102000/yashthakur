import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import About from "./About";

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

const Component1 = () => (
  <div className="hover-content">
    <About />
  </div>
);
const Component2 = () => <div className="hover-content">Component 2</div>;
const Component3 = () => <div className="hover-content">Component 3</div>;
const Component4 = () => <div className="hover-content">Component 4</div>;
const Component5 = () => <div className="hover-content">Component 5</div>;

const images = [
  { src: "/yash-thakur.png", component: Component1 },
  { src: "/yash-thakur.png", component: Component2 },
  { src: "/yash-thakur.png", component: Component3 },
  { src: "/yash-thakur.png", component: Component4 },
  { src: "/yash-thakur.png", component: Component5 },
];

export default function HoverGallery() {
  const cursorRef = useRef(null);
  const componentContainerRef = useRef(null);
  const [HoveredComponent, setHoveredComponent] = useState(null);

  const defaultText = "Frontend Developer";

  useEffect(() => {
    const cursor = cursorRef.current;
    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1, autoAlpha: 1 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleEnter = (Component) => () => {
    setHoveredComponent(() => Component);
  };

  const handleLeave = () => {
    setHoveredComponent(null);
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {images.map((item, i) => (
          <div
            key={i}
            className="thumb"
            onMouseEnter={handleEnter(item.component)}
            onMouseLeave={handleLeave}
          >
            <img src={item.src} alt={`thumb-${i}`} />
          </div>
        ))}
      </div>

      {/* Cursor */}
      <div
        className="cursor"
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#ff4757",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      >
        ↗
      </div>

      {/* Component overlay */}
      <div
        className="hover-overlay"
        ref={componentContainerRef}
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        {/* Smooth fade between hovered and default */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              opacity: HoveredComponent ? 1 : 0,
            }}
          >
            {HoveredComponent && <HoveredComponent />}
          </div>
          <div
            style={{
              position: "absolte",
              width: "100%",
              opacity: HoveredComponent ? 0 : 1,
            }}
          >
            <DefaultHello />
          </div>
        </div>
      </div>

      {/* Frontend Developer text at bottom */}
      <div className="default-label">{defaultText}</div>
    </div>
  );
}
