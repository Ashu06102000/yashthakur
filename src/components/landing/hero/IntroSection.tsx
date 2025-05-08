import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    id: "everyone",
    text: `Hi, welcome to my portfolio. I’m a frontend developer passionate about building seamless, engaging digital experiences. Here you’ll find the work, the thinking, and the craft behind how I use code to solve real-world problems and push ideas forward with clarity and intention.`,
  },
  {
    id: "recruiters",
    text: `I bring a strong blend of technical expertise, creativity, and problem-solving. Let’s discuss how I can contribute to your client’s vision with seamless, user-focused solutions.`,
  },
  {
    id: "agencies",
    text: `Collaboration with agencies is where I thrive. From concept to code, I bring ideas to life with precision, creating seamless and impactful user experiences.`,
  },
  {
    id: "clients",
    text: `Looking for a frontend expert to elevate your digital presence? I specialize in creating standout user experiences that bring your brand to life.`,
  },
  {
    id: "collaborators",
    text: `I’m always excited to connect with fellow creatives. Let’s build something innovative, user-focused, and unforgettable together.`,
  },
];

const tabButtons = {
  everyone: { text: "View my work", path: "/contact" },
  recruiters: { text: "Read my resume", path: "/resume" },
  agencies: { text: "View my work", path: "/work" },
  clients: { text: "Get in touch", path: "/contact" },
  collaborators: { text: "Connect with me", path: "/contact" },
};

const IntroSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        // Entry animation
        gsap.to(
          card,

          {
            opacity: 1,

            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Pin the heading
      ScrollTrigger.create({
        trigger: headingWrapperRef.current,
        start: "6%",
        endTrigger: lastCardRef.current,
        end: "bottom center",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative text-white px-6 sm:px-12 pt-32 pb-40">
      <div
        ref={headingWrapperRef}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl md:text-8xl font-light font-oreni text-center flex flex-col gap-4">
          Hello from<span className="text-8xl"> Yash Thakur</span>{" "}
        </h1>
      </div>

      <div className="flex flex-col gap-32">
        {contentData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const speed = (0.3 + idx * 0.1).toFixed(2);

          return (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[idx] = el!;
                //@ts-ignore
                if (idx === contentData.length - 1) lastCardRef.current = el!;
              }}
              className={`relative max-w-sm w-full ${
                isEven ? "self-end" : "self-start"
              } text-lg md:text-xl leading-relaxed px-8 py-10 min-h-96 justify-between flex flex-col rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md transition-transform duration-300`}
            >
              <p className="font-thin text-xl">{item.text}</p>
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() =>
                    handleButtonClick(
                      tabButtons[item.id as keyof typeof tabButtons].path
                    )
                  }
                  className="group relative flex items-center gap-2 text-white border border-white/20 rounded-full px-6 py-3 text-sm font-medium hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300"
                >
                  {tabButtons[item.id as keyof typeof tabButtons].text}
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntroSection;
