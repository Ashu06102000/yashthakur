const groupedSkills = [
  "Development Strategy",
  "Full-Stack Execution",
  "Performance Optimization",
  "Cross-Platform Builds",
  "Responsive UI Design",
  "SEO-Friendly Development",
  "Accessibility Best Practices",
  "Problem Solving",
  "Agile Workflow",
  "Code Management",
  "Continuous Learning",
  "Client Communication",
];

const CapabilityHover = () => {
  return (
    <section className="min-h-screen px-10 sm:px-20 py-24 flex items-start justify-between cursor-default">
      <div className="text-left flex justify-between mb-16 sticky top-96">
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-semibold uppercase text-black">
            Capabilities
          </h2>
          <p className="text-xl font-light text-black">
            Here's what I bring to the table
          </p>
        </div>
      </div>

      <div className="relative w-1/2">
        <ul className="space-y-4 text-2xl font-light gap-3 flex flex-col">
          {groupedSkills.map((skill) => (
            <ul className="space-y-3">
              <li
                key={skill}
                className="relative list-none text-black font-noraml transition-all duration-500 
                                hover:text-black hover:font-semibold hover:-translate-x-24 text-4xl leading-none"
              >
                <span></span>
                {skill}
              </li>
            </ul>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CapabilityHover;
