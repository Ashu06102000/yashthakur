import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Education = () => {
  const eduRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (eduRef.current) {
      gsap.fromTo(
        eduRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eduRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={eduRef}
      className="flex flex-col md:flex-row justify-between pt-20"
    >
      <h3 className="text-whit text-lg">Education</h3>
      <div className="flex flex-col w-full md:w-2/3 gap-5 md:gap-12">
        <div className="flex gap-48 items-start">
          <div className="flex flex-col">
            <h3 className="font-semibold">B-TECH Electrical Engineering</h3>
            <p className="font-roboto text-graysharetwo pt-2">
              DBATU University, Lonare
            </p>
            <p className="font-roboto text-graysharetwo">CGPA: 8.8</p>
          </div>
        </div>
        <p className="font-roboto text-graysharetwo">
          I studied Electrical Engineering, drawn to the logic, structure, and
          the thrill of building things that work. But as I progressed, I found
          myself more fascinated by how people interact with technology than the
          circuits behind it. Outside of lectures and labs, I was exploring the
          web—tinkering with code, building small interfaces, helping friends
          with websites. What started as curiosity soon turned into a calling.
          Eventually, it became clear: while engineering taught me how things
          function, frontend development gave me a canvas to shape how they
          feel. Today, I bring that foundation of analytical thinking into
          creating digital experiences that are not just functional—but
          intuitive, expressive, and human-centered.
        </p>
      </div>
    </div>
  );
};
export default Education;
