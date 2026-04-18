const TICKER_MSG =
  "'Keep those fingers busy and scroll down—there's more awesomeness waiting! ^_~ 🚀'";


const Hero = () => {
  return (
    <section className="relative flex items-center flex-col flex-1 overflow-hidden min-h-[calc(100vh-89px)]">

      {/* ── Main content ── */}
      <div className="relative flex max-w-screen-lg m-auto flex-col items-center justify-center flex-1 px-6 md:px-14 py-10">

        {/* HELLO! watermark — Road Rage */}
        <span
          aria-hidden="true"
          className="font-road-rage absolute top-[20%] md:top-1/3 left-1/2 -translate-x-1/2 -translate-y-[72%] text-[clamp(100px,22vw,280px)] text-black/[0.05] md:text-black/[0.09] whitespace-nowrap select-none pointer-events-none leading-none tracking-normal"
        >
          HELLO!
        </span>

        {/* Name — Splash */}
        <h1 className="font-splash text-[clamp(64px,14vw,180px)] leading-[0.92] text-[#0a0a0a] relative z-10 mt-4 tracking-tight text-center md:text-left">
          I'm Yash
        </h1>

        {/* Two-column copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-12 md:mt-16 relative z-10">
          {/* Left */}
          <div>
            <h3 className="font-sans text-base font-semibold mb-2.5 tracking-wide">
              This Portfolio
            </h3>
            <p className="font-sans text-sm font-normal leading-6">
              A collection of systems I’ve built — focused on scalability, performance,
              and solving real-world problems through thoughtful engineering ^_~ ❤️
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <p className="font-sans text-sm leading-6 text-[#1a1a1a]">
              I’m Yash — a Frontend Engineer with 4+ years of experience building scalable
              web and mobile applications with a focus on performance, system design, and
              real-world impact. I turn complex problems into fast, reliable, and intuitive
              user experiences.
            </p>
            <a
              href="/Yash thakur resume.pdf"
              download="Yash_Thakur_Resume.pdf"
              className="font-sans text-base flex flex-col text-black underline decoration-1 underline-offset-2 text-left md:text-right mt-8 md:mt-5"
            >
              "Need a resume that <span className="">dazzles?</span>
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="overflow-hidden w-full pt-16 md:pt-24 font-sans z-10">
          <span className="font-sans text-sm text-black/40 shrink-0">
            {TICKER_MSG}
          </span>
        </div>
      </div>

    </section >
  );
};

export default Hero;
