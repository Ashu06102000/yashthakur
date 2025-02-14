import CircularText from "../generic-components/CircularText";

const IntroSection = () => {
  return (
    <div className="flex gap-36 bg-secondry rounded-xl p-36 items-start flex-col">
      <div className="flex items-center justify-center gap-12">
        <CircularText />
        <h2 className="text-black text-4xl flex flex-col tracking-tighter font-light opacity-90">
          The Story Behind <span>My Craft</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 justify-between gap-20">
        <div className="flex flex-col gap-1">
          <h3 className="text-base tracking-tighter text-secondry ">
            The Spark That Became My Craft
          </h3>
          <p className="font-opensans text-sm text-justify">
            As a kid, I was obsessed with computers—even though I didn’t have
            one. That didn’t stop me from exploring how they worked or imagining
            all the incredible things I could do with them. I’d borrow time on
            my friends’ computers, and before I knew it, I became the go-to
            person in my circle for anything tech-related. What started as pure
            curiosity grew into a lifelong passion. Along the way, I realized
            that the ability to create with technology isn’t just about coding;
            it’s about solving real-world problems. Today, I take pride in
            turning that early fascination into seamless, impactful digital
            experiences that make a difference.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base tracking-tighter text-secondry">
            The TL;DR of ME
          </h3>
          <p className="font-opensans text-sm text-justify">
            <span className="font-semibold">From:</span> Pune, India, I work as
            a <span className="font-semibold">Software Developer</span> at
            Copods since 2022. My focus is on{" "}
            <span className="font-semibold">
              crafting seamless, intuitive, and impactful digital experiences
            </span>{" "}
            that bridge user needs with innovation. I believe{" "}
            <span className="font-semibold">
              passion transforms into craft when driven by curiosity
            </span>
            . With a love for problem-solving and attention to detail, I aim to
            build products that not only function flawlessly but also inspire.
            Outside of work, I’m an avid learner, exploring new technologies and
            sharpening my skills to stay ahead in the ever-evolving tech
            landscape. My goal is to push boundaries, and create meaningful
            digital interactions that leave a lasting impact.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base tracking-tighter text-secondry">
            A Day in the Life of Yash Thakur
          </h3>
          <p className="font-opensans text-sm text-justify">
            My day starts with a cup of tea ☕ and ends with ideas swirling in
            my head. In between, you’ll find me solving complex problems,
            crafting interactive and modern user interfaces, or collaborating
            with clients during demos to align on timelines and expectations. I
            dedicate time daily to exploring innovative designs, studying
            developed websites, and diving into other products for inspiration.
            I also enjoy discussing fresh perspectives with designers—it’s a
            constant source of creativity. Currently, I’m learning Spline to
            create immersive 3D experiences for web development.Apart from the
            coding, I also play video games and watch Animes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
