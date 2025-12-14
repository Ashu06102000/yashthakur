import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import About from "./About";

// Example components for each image
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
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [HoveredComponent, setHoveredComponent] = useState(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleEnter = (Component) => (e) => {
    const img = e.currentTarget;

    gsap.to(img, {
      scale: 1,
      zIndex: 10,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(cursorRef.current, {
      scale: 1.4,
      autoAlpha: 1,
      duration: 0.3,
    });

    setHoveredComponent(() => Component);
  };

  const handleLeave = (e) => {
    const img = e.currentTarget;

    gsap.to(img, {
      scale: 1,
      zIndex: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(cursorRef.current, {
      scale: 0,
      autoAlpha: 0,
      duration: 0.3,
    });

    setHoveredComponent(null);
  };

  return (
    <>
      <div className="gallery" ref={containerRef}>
        {images.map((item, i) => (
          <div
            key={i}
            className="thumb"
            onMouseEnter={handleEnter(item.component)}
            onMouseLeave={handleLeave}
          >
            <img src={item.src} alt="" />
          </div>
        ))}
      </div>

      <div className="cursor" ref={cursorRef}>
        ↗
      </div>

      {HoveredComponent && (
        <div className="hover-overlay">
          <HoveredComponent />
        </div>
      )}
    </>
  );
}
