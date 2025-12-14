import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const paragraphs = contentRef.current.children;
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 }, // start state
        {
          opacity: 1,
          y: 0, // end state
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="w-full h-[60vh] flex justify-center items-center px-4">
      <div className="w-full max-w-4xl gap-6 h-full">
        <div
          ref={contentRef}
          className="w-full flex flex-col justify-center gap-3"
        >
          <p className="text-white text-3xl  font-normal lineheight">
            I specialize in Product Experience Engineering, crafting solutions
            that prioritize exceptional user experiences. I collaborate closely
            with cross-functional teams to turn business goals into impactful
            products.
          </p>
          <p className="text-white text-3xl font-normal lineheight">
            Skilled in full-stack development and AWS infrastructure, I
            translate complex requirements into scalable solutions. Passionate
            about problem-solving and leveraging technology to drive innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
