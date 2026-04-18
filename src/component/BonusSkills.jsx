const TICKER_MSG =
  "'Just below lies the realm of brilliance—projects that speak louder than words. ^_~ 💡'";

const bonusSkills = [
  "React.js, React Native, Next.js, Tailwind CSS",
  "iOS & Android (React Native)",
  "REST APIs, Node.js",
  "AWS (EC2, S3, S3 Vector, Bedrock, Lambda, MediaConvert, Lightsail, IAM, CloudFront, Route 53)",
  "MongoDB, PostgreSQL",
  "Git, Webpack, Module Federation, Cypress",
  "Seats.io, Twilio, HLS Streaming",
];

const BonusSkills = () => {
  return (
    <section id="bonus" className="relative flex flex-col min-h-screen max-w-screen-lg mx-auto">
      {/* ── Main content ── */}
      <div className="flex-1 px-6 md:px-14 pt-14 pb-10 flex flex-col">

        {/* Top area: heading left, list right (stacked on mobile) */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8 md:gap-4">
          {/* Heading */}
          <h2 className="font-sans font-thin text-[clamp(24px,4vw,40px)] leading-none text-black">
            <span className="opacity-40 mr-2">--</span>
            <span className="underline decoration-[1.5px] underline-offset-8">Technical Skills:</span>
          </h2>

          {/* List items */}
          <div className="flex flex-col max-w-md">
            {bonusSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="mt-2.5 w-1 h-1 bg-black rounded-full shrink-0" />
                <p className="font-sans text-sm leading-6 text-[#1a1a1a]">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Big Illustration */}
        <div className="flex-1 flex items-center justify-center mt-auto py-10">
          <img
            src="/skiils-cluster.svg"
            alt="Skills Cluster Illustration"
            className="w-full h-auto max-w-4xl opacity-90"
          />
        </div>

        {/* Bottom ticker */}
        <div aria-hidden="true" className="overflow-hidden w-full pt-16 md:pt-20">
          <span className="font-sans text-sm text-black/40">
            {TICKER_MSG}
          </span>
        </div>
      </div>
    </section>
  );
};

export default BonusSkills;
