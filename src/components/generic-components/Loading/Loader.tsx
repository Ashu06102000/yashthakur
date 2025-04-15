import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Add custom styles that aren't directly available in Tailwind
const customStyles = {
  counter: {
    clipPath: "polygon(0 0, 100% 0, 100% 100px, 0 100px)",
  },
};

const Loader = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const screenRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderBarRef = useRef(null);

  const digitRefs = useRef<HTMLElement[]>([]);
  const counter1Ref = useRef<HTMLDivElement | null>(null);
  const counter2Ref = useRef<HTMLDivElement | null>(null);
  const counter3Ref = useRef<HTMLDivElement | null>(null);
  const counter4Ref = useRef<HTMLDivElement | null>(null);

  digitRefs.current = [];

  const addToDigitRefs = (el: HTMLElement) => {
    if (el && !digitRefs.current.includes(el)) {
      digitRefs.current.push(el);
    }
  };

  const createCounterNumbers = (maxNum: number) => {
    const numbers = [];
    for (let i = 0; i <= maxNum; i++) {
      numbers.push(
        <div key={`num-${i}`} className="num">
          {i}
        </div>
      );
    }
    return numbers;
  };

  useEffect(() => {
    const animate = (
      counter: HTMLElement,
      duration: number,
      delay: number = 0
    ) => {
      if (!counter) return;

      const numHeight = counter.querySelector(".num")?.clientHeight;
      if (!numHeight) return;

      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    const timer = setTimeout(() => {
      if (counter3Ref.current) {
        animate(counter3Ref.current, 5);
      }
      if (counter4Ref.current) {
        animate(counter4Ref.current, 2);
      }
      if (counter2Ref.current) {
        animate(counter2Ref.current, 6);
      }
      if (counter1Ref.current) {
        animate(counter1Ref.current, 2, 4);
      }

      gsap.to(digitRefs.current, {
        top: "-150px",
        stagger: {
          amount: 0.25,
        },
        delay: 6,
        duration: 1,
        ease: "power4.inOut",
      });

      gsap.from(loaderBarRef.current, {
        width: 0,
        duration: 6,
        ease: "power2.inOut",
      });

      gsap.to(loaderRef.current, {
        background: "none",
        delay: 6,
        duration: 0.1,
      });

      gsap.to(loaderBarRef.current, {
        rotate: 90,
        duration: 0.5,
        delay: 6,
      });

      gsap.to(loaderRef.current, {
        scale: 500,
        duration: 1,
        delay: 7,
        ease: "power2.inOut",
      });

      gsap.to(screenRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 7.5,
        ease: "power1.inOut",
      });

      gsap.to("h1", 1.5, {
        delay: 7,
        y: -80,
        ease: "power4.inOut",
        stagger: {
          amount: 0.1,
        },
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const inlineStyles = `
    .num {
      position: relative;
    }
    
    .digit {
      position: relative;
      top: -15px;
    }
  `;

  return (
    <>
      <style>{inlineStyles}</style>

      <div
        ref={screenRef}
        className="fixed inset-0 bg-gray-300 text-black pointer-events-none overflow-hidden z-50"
      >
        <div
          ref={loaderRef}
          className="absolute top-1/2 left-1/2 w-full h-2.5 -translate-x-1/2 -translate-y-1/2 flex bg-gray-900"
        >
          <div
            ref={loaderBarRef}
            className="relative bg-orange-600 w-full overflow-hidden h-2.5"
          ></div>
          <div className="h-2.5"></div>
        </div>

        <div
          className="fixed left-36 bottom-36 flex h-24 text-8xl leading-tight overflow-hidden font-normal text-black font-sans"
          style={customStyles.counter}
        >
          <div
            ref={(el) => {
              if (el) {
                counter1Ref.current = el as HTMLDivElement;
                addToDigitRefs(el);
              }
            }}
            className="counter-1 digit"
          >
            <div className="num">0</div>
            <div className="num relative -right-4">1</div>
          </div>

          <div
            ref={(el) => {
              if (el) {
                counter2Ref.current = el as HTMLDivElement;
                addToDigitRefs(el);
              }
            }}
            className="counter-2 digit"
          >
            {createCounterNumbers(10)}
          </div>

          <div
            ref={(el) => {
              if (el) {
                counter3Ref.current = el as HTMLDivElement;
                addToDigitRefs(el);
              }
            }}
            className="counter-3 digit"
          >
            {createCounterNumbers(9)}
            {createCounterNumbers(9)}
            {createCounterNumbers(9)}
            <div className="num">0</div>
          </div>

          <div
            ref={(el) => {
              if (el) {
                counter4Ref.current = el as HTMLDivElement;
                addToDigitRefs(el);
              }
            }}
            className="counter-4 digit"
          >
            <div className="num">%</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
