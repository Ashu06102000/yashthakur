import copodslogo from "../../assets/copodslogo.svg";
const groupedSkills = [
  "Javascript",
  "Typescript",
  "ReactJs",
  "StencilJs",
  "RemixJs",
  "Tailwind",
  "Prisma",
  "Amazon Web Services",
  "NodeJs",
  "MongoDB",
  "Git",
  "Wordpress",
  "Shopify",
  "Webflow",
  "HTML",
  "CSS",
];

const KnowMwe = () => {
  return (
    <div className="flex flex-col p-24">
      <div className="flex flex-col gap-5 pb-40">
        <div className="flex items-center gap-5">
          <h1 className="text-white text-base">Get to know me</h1>
          <p className="text-graysharetwo text-xs">Resumé & biography</p>
        </div>
        <h3 className="text-5xl text-white leading-tight">
          My journey from Bahrain to Singapore to Dubai has refined my ability
          to blend creativity & culture, mastering strategic design to deliver
          world-class results.
        </h3>
      </div>
      <span className="border-t border-t-graymain border-opacity-30"></span>
      <div className="flex gap-5 py-20 justify-between">
        <h4>Every. Interaction. Feels.</h4>
        <div className="flex flex-col w-1/2 gap-5">
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
      <div className="flex gap-5 py-20 justify-between">
        <h4>Work Experiance</h4>
        <div className="flex flex-col  w-1/2">
          <div className="flex gap-48 items-start">
            <img src={copodslogo} alt="" />
            <div className="flex flex-col">
              <span className="text-white text-base font-light">
                Software Engineer
              </span>
              <span className="text-graysharetwo text-base font-light">
                Pune, India
              </span>
              <span className="text-white text-base font-light pt-4">
                2022 - Present
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="border-t border-t-graymain border-opacity-30"></span>
      <section className="flex justify-between py-20">
        <h4>Areas of Experience</h4>

        <div className="relative w-1/2 flex flex-col gap-10">
          <ul className="space-y-4 text-2xl font-light gap-3 flex flex-col">
            {groupedSkills.map((skill) => (
              <ul className="space-y-3">
                <li
                  key={skill}
                  className="relative list-none text-graysharetwo font-noraml transition-all duration-500 
                                hover:text-white hover:font-semibold hover:-translate-x-24 text-4xl leading-none"
                >
                  <span></span>
                  {skill}
                </li>
              </ul>
            ))}
          </ul>
          <span className="text-graysharetwo text-sm">
            *Currently studying & experimenting
          </span>
        </div>
      </section>
    </div>
  );
};
export default KnowMwe;
