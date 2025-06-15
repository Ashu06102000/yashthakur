import { useEffect, useRef } from "react";
import gsap from "gsap";

import Footer from "../generic-components/footer/Footer";
import WorkSection from "./WorkSection";

const Work = ({ loading }: { loading: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [loading]);

  return (
    <>
      <div
        ref={containerRef}
        className="py-32 relative mx-auto max-w-main-screen w-full opacity-0"
      >
        <WorkSection />
      </div>
      <Footer />
    </>
  );
};

export default Work;
