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
      </div>
    </div>
  );
};

export default About;
