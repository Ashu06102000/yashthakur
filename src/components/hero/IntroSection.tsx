import CircularText from "../generic-components/CircularText";

const IntroSection = () => {
  return (
    <div className="flex gap-36 bg-secondry rounded-xl p-36 my-36 items-center flex-col">
      <div className="flex items-center flex-col justify-center gap--2">
        <CircularText />
        <h2 className="text-black text-4xl flex flex-col items-center tracking-tighter font-light">
          The Story Behind <span>My Craft</span>
        </h2>
      </div>
      <p className="font-thin text-7xl text-center">
        I’m a <span className="text-gray-500">Software Developer </span> focused
        on building intuitive and impactful digital experiences. Driven by
        curiosity and a passion for problem-solving, I create products that
        inspire and perform seamlessly
      </p>
      <div className="grid grid-cols-2 justify-between gap-20">
        <div className="flex flex-col gap-1">
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
          <p className="font-opensans text-sm text-justify">
            My day starts with a cup of tea ☕ and ends with ideas swirling in
            my head. In between, you’ll find me solving complex problems,
            crafting interactive and modern user interfaces, or collaborating
            with clients during demos to align on timelines and expectations. I
            dedicate time daily to exploring innovative designs, studying
            developed websites, and diving into other products for inspiration.
            I also enjoy discussing fresh perspectives with designers—it’s a
            constant source of creativity. Currently, I’m learning Spline to
            create immersive 3D experiences for web development. I also play
            video games and watch Animes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
