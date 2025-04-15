import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkSection from "./WorkSection";
import KnowMySkills from "./KnowMySkills";
gsap.registerPlugin(ScrollTrigger);

const KnowMwe = ({ loading }: { loading: boolean }) => {
  const paragrahRef = useRef<HTMLDivElement | null>(null);

  const paragraph1 =
    "With a foundation in frontend development, I fuse creativity with technical precision to craft digital experiences that are both visually compelling and user-centric, delivering impactful solutions for a global audience.";

  useEffect(() => {
    const paragraphLetters = gsap.utils.toArray(".paragraph-letter");

    if (!loading) {
      gsap.set(paragraphLetters, {
        color: "#696969",
        opacity: 0,
      });

      gsap.to(paragraphLetters, {
        color: "white",
        duration: 1,
        ease: "power2.out",
        opacity: 1,
        stagger: 0.01,
      });
      gsap.fromTo(
        ".my-intro",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  });
  return (
    <div className="flex flex-col p-24">
      <div className="flex flex-col gap-5 pb-40">
        <div className="flex items-center gap-5">
          <h1 className="text-white text-base">Get to know me</h1>
          <p className="text-graysharetwo text-xs">Resumé & biography</p>
        </div>
        <h3 className="text-5xl text-white leading-tight">
          {" "}
          <div
            ref={paragrahRef}
            className="flex flex-col w-3/4 gap-4 text-4xl text-[#696969]"
          >
            {[paragraph1].map((paragraph, pIndex) => (
              <p key={pIndex}>
                {paragraph.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-2">
                    {Array.from(word).map((char, charIndex) => (
                      <span
                        className="inline-block paragraph-letter will-change-transform"
                        key={charIndex}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </h3>
      </div>
      <span className="border-t border-t-graymain border-opacity-30"></span>
      <div className="flex gap-5 py-20 justify-between my-intro">
        <h4>Every. Interaction. Feels.</h4>
        <div className="flex flex-col w-2/3 gap-5">
          <p className="text-graysharetwo flex flex-col gap-5 font-light">
            <span>
              For me, frontend development isn't just about writing code—it's
              about solving real-world problems, creating seamless user
              experiences, and making a meaningful impact. My approach is
              meticulous, ensuring that every line of code serves a purpose and
              every design decision is backed by clear intent.
            </span>
            <span>
              I believe that development should be guided by data and user
              insights, allowing the project brief to shape the direction rather
              than following trends without context. My work isn't about ticking
              boxes; it's about crafting solutions that engage users and deliver
              lasting value.
            </span>
            <span>
              I thrive on building interfaces that are not only visually
              stunning but also intuitive and functional. Whether it's
              optimizing performance, enhancing user interaction, or creating
              responsive designs, I strive to build digital experiences that are
              both efficient and effective.
            </span>
            <span>
              For me, frontend development is the intersection of technology and
              user experience. I’m passionate about transforming complex
              challenges into smooth, elegant solutions, pushing the boundaries
              of what's possible with bold, innovative thinking that aligns with
              user needs.
            </span>
          </p>
          <a className="text-graysharetwo w-fit   link-animation" href="#">
            Connect on linkedIn
          </a>
        </div>
      </div>
      <span className="border-t border-t-graymain border-opacity-30"></span>
      <WorkSection />
      <span className="border-t border-t-graymain border-opacity-30"></span>
      <KnowMySkills />
    </div>
  );
};
export default KnowMwe;
