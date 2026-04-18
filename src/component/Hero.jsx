const TICKER_MSG =
  "'Keep those fingers busy and scroll down—there's more awesomeness waiting! ^_~ 🚀'";
const TICKER_ITEMS = Array(8).fill(TICKER_MSG);

const Hero = () => {
  return (
    <section className="relative flex items-center flex-col flex-1 overflow-hidden min-h-[calc(100vh-89px)]">

      {/* ── Main content ── */}
      <div className="relative flex flex-col items-center justify-center flex-1 px-14 py-10">

        {/* HELLO! watermark — Road Rage */}
        <span
          aria-hidden="true"
          className="font-road-rage absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-[52%] text-[clamp(100px,22vw,280px)] text-black/[0.09] whitespace-nowrap select-none pointer-events-none leading-none tracking-tighter"
        >
          HELLO!
        </span>

        {/* Name — Splash */}
        <h1 className="font-splash text-[clamp(72px,14vw,180px)] leading-[0.92] text-[#0a0a0a] relative z-10 mt-4 tracking-tight">
          I'm Yash
        </h1>

        {/* Two-column copy */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 mt-16 max-w-3xl relative z-10">
          {/* Left */}
          <div>
            <h3 className="font-istok text-base border-b border-gray-800 w-fit font-semibold mb-2.5 tracking-wide">
              This Portfolio
            </h3>
            <p className="font-istok text-sm font-normal leading-6">
              A collection of systems I’ve built — focused on scalability, performance,
              and solving real-world problems through thoughtful engineering.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <p className="font-istok text-sm leading-6 text-black">
              I’m Yash — a Frontend Engineer building scalable web and mobile applications
              with a focus on performance, system design, and real-world impact. I turn
              complex problems into fast, reliable, and intuitive user experiences.
            </p>
            <a
              href="/Yash thakur resume.pdf"
              download="Yash_Thakur_Resume.pdf"
              className="font-istok text-sm flex flex-col font-bold text-black underline decoration-1 underline-offset-8 text-right mt-5 transition-opacity hover:opacity-45"
            >
              View Resume →
            </a>
          </div>
        </div>
      </div>

      {/* ── Scrolling ticker ── */}
      <div aria-hidden="true" className="overflow-hidden w-full py-4 relative z-10">
        <div className="flex gap-20 whitespace-nowrap animate-ticker">
          {TICKER_ITEMS.map((text, i) => (
            <span key={i} className="font-splash text-base text-black/45 shrink-0">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Hero;
