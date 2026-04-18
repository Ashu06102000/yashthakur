const TICKER_MSG =
  "'Keep going—there's a treasure trove of awesomeness waiting just below! ^_~ 🎉'";

const skills = [
  {
    label: "Frontend Engineering",
    desc: "Building scalable, high-performance web and mobile applications with a focus on architecture, maintainability, and real-world use cases.",
  },
  {
    label: "System Design",
    desc: "Designing modular, reusable architectures that support complex workflows and scale efficiently in production environments.",
  },
  {
    label: "Performance Optimization",
    desc: "Improving load times, rendering efficiency, and responsiveness across devices through optimized state management and asset delivery.",
  },
  {
    label: "AI Integrations",
    desc: "Developing AI-driven features including RAG systems, real-time interactions, and intelligent workflows for modern applications.",
  },
];

const WhatIBring = () => {
  return (
    <section id="skills" className="relative flex flex-col min-h-screen max-w-screen-lg mx-auto">

      {/* ── Main content ── */}
      <div className="flex-1 px-6 md:px-14 pt-14 pb-10">

        {/* Heading — right-aligned (center on mobile) */}
        <h2 className="font-sans font-thin text-[clamp(26px,4.5vw,52px)] leading-[1.15] text-black underline decoration-[1.5px] underline-offset-4 text-right ml-auto max-w-2xl">
          What I Focus On
          <br />
          (Where I create impact)
        </h2>

        {/* Two-column — skills list left, cooking SVG right (stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-12 md:mt-20 items-center">

          {/* Skills list */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            {skills.map(({ label, desc }) => (
              <p key={label} className="font-sans text-sm leading-6 text-[#1a1a1a]">
                <span className="mr-1">—</span>
                <span className="font-semibold">{label}:</span>{" "}
                {desc}
              </p>
            ))}
          </div>

          {/* Cooking man SVG */}
          <div className="flex items-end justify-center order-1 md:order-2">
            <img
              src="/cooking.svg"
              alt="A chef cooking"
              className="w-56 md:w-72 h-auto opacity-90"
            />
          </div>
        </div>

        {/* Bottom footnote ticker */}
        <div aria-hidden="true" className="overflow-hidden w-full pt-16 md:pt-24">
          <span className="font-sans text-sm text-black/40">
            {TICKER_MSG}
          </span>
        </div>
      </div>

    </section>
  );
};

export default WhatIBring;
