const TICKER_MSG =
  "'Don't stop now—there's more magic just a scroll away! ^_~ ✨'";

const About = () => {
  return (
    <section id="about" className="relative flex flex-col min-h-screen max-w-screen-lg m-auto">

      {/* ── Main content ── */}
      <div className="flex-1 px-14 pt-14 pb-10">

        {/* Heading */}
        <h2 className="font-sans font-thin text-[clamp(32px,5vw,48px)] leading-[1.1] text-black underline decoration-[1.5px] underline-offset-4 max-w-4xl">
          About Me (Spoiler: I build things that scale
          <br />
          Clean systems. Fast apps. No unnecessary complexity.)
        </h2>

        {/* Arrow + caption — top-left area */}
        <div className="flex items-start flex-col gap-3 mt-10 ml-2">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-8 h-8 opacity-60"
          />
          <p className="font-sans text-xs text-black/50 leading-snug max-w-[220px]">
            I don’t just build interfaces<br />
            - I build systems that last.
          </p>
        </div>

        {/* Two-column — cat on left, copy on right */}
        <div className="grid grid-cols-2 gap-x-20 mt-6 items-start">

          {/* Cat SVG */}
          <div className="flex items-center justify-center">
            <img
              src="/cat_gif.svg"
              alt="Cool strutting cat"
              className="w-64 h-auto opacity-90"
            />
          </div>

          {/* Bullet copy */}
          <div className="flex flex-col gap-6 justify-center pt-10">
            <p className="font-sans text-sm leading-6 text-[#1a1a1a]">
              I build scalable web and mobile applications that are designed to perform, not just look good.
            </p>
            <p className="font-sans text-sm leading-6 text-[#1a1a1a]">
              I focus on modular architecture, performance, and real-world impact—turning complex workflows into fast, reliable, and intuitive user experiences.
            </p>
            <p className="font-sans text-sm leading-6 text-[#1a1a1a]">
              Lately, I’ve been working on AI-driven systems and real-time interactions, building products that go beyond static interfaces and actually do something meaningful.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="overflow-hidden w-full pt-24 font-sans z-10">

          <span className="font-sans text-sm text-black/40 shrink-0">
            {TICKER_MSG}
          </span>

        </div>
      </div>


    </section>
  );
};

export default About;
