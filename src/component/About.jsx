import React from "react";

const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto p-10 text-white flex justify-center items-start">
      <div className="max-w-4xl space-y-8">
        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Yash Thakur</h1>
          <h3 className="text-xl text-gray-300">Software Engineer</h3>
        </div>

        {/* Contact */}
        <section className="space-y-2">
          <h4 className="text-red-500 text-sm font-semibold">CONTACT</h4>
          <p>Email: yash.thakur@copods.co</p>
          <p>Location: Pune, India</p>
        </section>

        {/* About Me */}
        <section className="space-y-2">
          <h4 className="text-red-500 text-sm font-semibold">ABOUT ME</h4>
          <p>
            With expertise in Product Experience Engineering, I thrive on
            exploring cutting-edge technologies and crafting solutions that
            prioritize exceptional user experiences. I collaborate closely with
            cross-functional teams, aligning business objectives with user needs
            to build innovative and impactful products.
          </p>
          <p>
            Proficient in full-stack development, including infrastructure
            management with AWS, I seamlessly translate complex requirements
            into scalable solutions. Experienced in fast-paced startup
            ecosystems, I excel in adapting to challenges, driving technical
            excellence, and enhancing product strategy. Passionate about
            creative problem-solving and leveraging technology to push
            boundaries in product development.
          </p>
        </section>

        {/* Experience & Technical Proficiency */}
        <section className="space-y-2">
          <h4 className="text-red-500 text-sm font-semibold">
            EXPERIENCE & TECHNICAL PROFICIENCY
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              Frontend: JavaScript, TypeScript, HTML5, CSS3, Micro-frontend
              (Webpack Module Federation), StencilJS, Zustand
            </li>
            <li>JavaScript Frameworks: React, Remix.js, Meteor</li>
            <li>
              Testing & Cloud: Cypress, AWS (S3, EC2, MediaConverter, Lightsail,
              Route53, CloudFront, Lambda)
            </li>
            <li>Backend & Databases: Node.js, Postgres, MySQL, PrismaORM</li>
            <li>Version Control: Git, GitHub</li>
            <li>Visualization Libraries: Highcharts</li>
            <li>SDLC Methods: Agile and Waterfall</li>
            <li>CMS & Platforms: WordPress, Shopify</li>
          </ul>
        </section>

        {/* Key Responsibilities */}
        <section className="space-y-2">
          <h4 className="text-red-500 text-sm font-semibold">
            KEY RESPONSIBILITIES
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              Collaborating with Stakeholders – align product strategies with
              business objectives and user needs.
            </li>
            <li>
              Requirement Analysis – use data-driven research to define success
              criteria and shape product interventions.
            </li>
            <li>
              Technical Implementation – build scalable full-stack solutions.
            </li>
            <li>
              Infrastructure & Deployment – manage cloud infrastructure (AWS).
            </li>
            <li>
              Continuous Improvement – gather feedback and refine
              implementations.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
