const Footer = () => {
  return (
    <footer className="relative flex flex-col max-w-screen-lg mx-auto px-6 md:px-14 pt-20 pb-10 min-h-[60vh]">

      {/* ── Top area (stacked on mobile) ── */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-10 md:gap-4">
        <div className="max-w-md text-center md:text-left">
          <p className="font-sans text-sm leading-6 text-[#1a1a1a] mb-4">
            I’m always open to building impactful products and solving
            challenging problems. If you’re working on something interesting,
            let’s connect.{" "}
            <a
              href="mailto:yash6102000thakur@gmail.com"
              className="font-bold underline decoration-1 underline-offset-2"
            >
              [Contact Me]
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h2 className="font-sans font-thin text-[clamp(24px,4vw,42px)] leading-none text-black underline decoration-[1.5px] underline-offset-8 mb-8 text-center md:text-right">
            Let’s build something meaningful 🚀
          </h2>

          {/* Caption with arrow */}
          <div className="flex flex-col items-center relative md:right-10">
            <img
              src="/arrow.svg"
              alt="arrow"
              className="w-8 h-8 opacity-60 md:rotate-[90deg] rotate-[180deg] mb-2"
            />
            <p className="font-sans text-sm text-black/40 text-center leading-tight italic max-w-[200px]">
              Focused on scalable systems, performance, and real-world impact.
            </p>
          </div>
        </div>
      </div>

      {/* ── Links area (stacked on mobile) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-20 mb-20">
        {/* Find Me Online */}
        <div className="text-center md:text-left">
          <h4 className="font-sans font-bold text-sm mb-6 uppercase tracking-wider">
            Find Me Online
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yash-thakur-0b71051b9/" className="font-bold underline">
                LinkedIn
              </a>{" "}
              — Professional profile and updates.
            </li>
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ashu06102000" className="font-bold underline">
                GitHub
              </a>{" "}
              — Code, experiments, and projects.
            </li>
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a href="https://yashthakur.vercel.app/" className="font-bold underline">
                Portfolio
              </a>{" "}
              — Selected work and case studies.
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-sans font-bold text-sm mb-6 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a href="#about" className="font-bold underline">
                About
              </a>{" "}
              — Background and approach.
            </li>
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a href="#work" className="font-bold underline">
                Approach
              </a>{" "}
              — How I design and build systems.
            </li>
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a href="mailto:yash6102000thakur@gmail.com" className="font-bold underline">
                Contact
              </a>{" "}
              — Let’s connect.
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end py-8 gap-4 border-t border-black/10 mt-auto">
        <p className="font-sans text-sm text-black/40">
          © 2026 Yash Thakur.
        </p>
        <p className="font-sans text-sm text-black/40 text-center md:text-right max-w-[300px] md:max-w-none">
          Designed and developed with a focus on performance and simplicity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;