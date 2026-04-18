const TICKER_MSG =
  "From architecture to production — building systems that scale and perform ^_~ 🚀";

const FeaturedWork = () => {
  return (
    <section
      id="work"
      className="relative flex flex-col min-h-screen max-w-screen-lg mx-auto"
    >
      {/* ── Main content ── */}
      <div className="flex-1 px-14 pt-14 pb-10 flex flex-col">

        {/* Heading */}
        <h2 className="font-sans font-thin text-[clamp(28px,4.5vw,52px)] leading-[1.15] text-black underline decoration-[1.5px] underline-offset-4">
          Approach
          <br />
          Thoughtful systems. Built to last.
        </h2>

        {/* Caption with arrow */}
        <div className="flex flex-col items-center self-center mb-16 relative left-[-10%]">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-8 h-8 opacity-60 rotate-[120deg] mb-2"
          />
          <p className="font-sans text-xs text-black/40 text-center leading-tight">
            "Selected work that reflects my approach to building scalable systems."
            <br /><br />
            <span className="italic underline underline-offset-2 opacity-80">
              Focused on performance, reliability, and real-world impact.
            </span>
          </p>
        </div>

        {/* Content area */}
        <div className="grid grid-cols-[1fr,1.2fr] gap-x-16 items-center">
          {/* Left: Illustration */}
          <div className="flex justify-center">
            <img
              src="/greatesthints.png"
              alt="Illustration"
              className="w-full h-auto max-w-[320px] opacity-90"
            />
          </div>

          {/* Right: Generic Content */}
          <div className="flex flex-col">
            <h3 className="font-sans text-2xl font-medium text-black mb-4">
              Building with Intent
            </h3>

            <p className="font-sans text-sm leading-6 text-[#1a1a1a]">
              I focus on building systems that are scalable, reliable, and designed
              for real-world use. Every project is approached with attention to
              performance, clean architecture, and long-term maintainability.
            </p>
          </div>
        </div>

        {/* Bottom ticker */}
        <div aria-hidden="true" className="overflow-hidden w-full pt-20 mt-auto">
          <span className="font-sans text-sm text-black/40">
            {TICKER_MSG}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;