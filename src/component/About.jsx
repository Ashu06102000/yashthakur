import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 md:gap:0 justify-between">
      <h3 className="text-white text-lg">About Me</h3>

      <div className="relative md:w-2/3 w-full flex flex-col gap-4 text-left">
        <p className="tracking-tight font-light text-base text-white m-0 text-opacity-55">
          With expertise in Product Experience Engineering, I thrive on
          exploring cutting-edge technologies and crafting solutions that
          prioritize exceptional user experiences..
        </p>
        <p className="tracking-tight font-light text-base text-white m-0 text-opacity-55">
          I collaborate closely with cross-functional teams, aligning business
          objectives with user needs to build innovative and impactful products.
        </p>
        <p className="tracking-tight font-light text-base text-white m-0 text-opacity-55">
          Proficient in full-stack development, including infrastructure
          management with AWS, I seamlessly translate complex requirements into
          scalable solutions.
        </p>
        <p className="tracking-tight font-light text-base text-white m-0 text-opacity-55">
          Experienced in fast-paced startup ecosystems, I excel in adapting to
          challenges, driving technical excellence, and enhancing product
          strategy.
        </p>
        <p className="tracking-tight font-light text-base text-white m-0 text-opacity-55">
          Passionate about creative problem-solving and leveraging technology to
          push boundaries in product development.
        </p>
      </div>
    </section>
  );
};

export default About;
