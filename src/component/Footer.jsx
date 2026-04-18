const Footer = () => {
  return (
    <footer className="relative flex flex-col max-w-screen-lg h-full mx-auto px-14 pt-20 pb-10 h-screen">

      {/* ── Top area ── */}
      <div className="flex justify-between items-end mb-20">
        <div className="max-w-md">
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

        <div className="flex flex-col items-end">
          <h2 className="font-sans font-thin text-[clamp(24px,4vw,42px)] leading-none text-black underline decoration-[1.5px] underline-offset-8 mb-8">
            Let’s build something meaningful 🚀
          </h2>

          {/* Caption with arrow */}
          <div className="flex flex-col items-center relative right-10">
            <img
              src="/arrow.svg"
              alt="arrow"
              className="w-8 h-8 opacity-60 rotate-[90deg] mb-2"
            />
            <p className="font-sans text-[10px] text-black/40 text-center leading-tight italic">
              Focused on scalable systems, performance, and real-world impact.
            </p>
          </div>
        </div>
      </div>

      {/* ── Links area ── */}
      <div className="grid grid-cols-2 gap-x-20 mb-20">
        {/* Find Me Online */}
        <div>
          <h4 className="font-sans font-bold text-sm mb-6 uppercase tracking-wider">
            Find Me Online
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a target="_blank" href="https://www.linkedin.com/in/yash-thakur-0b71051b9/" className="font-bold underline">
                LinkedIn
              </a>{" "}
              — Professional profile and updates.
            </li>
            <li className="font-sans text-xs text-[#1a1a1a]">
              <a target="_blank" href="https://github.com/Ashu06102000" className="font-bold underline">
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
        <div>
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
      <div className="flex justify-between items-end flex-1 py-8">
        <p className="font-sans text-[10px] text-black/40 italic">
          © 2026 Yash Thakur.
        </p>
        <p className="font-sans text-[10px] text-black/40 italic">
          Designed and developed with a focus on performance and simplicity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;