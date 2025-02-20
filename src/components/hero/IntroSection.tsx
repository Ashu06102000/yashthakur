import CircularText from "../generic-components/CircularText";

const IntroSection = () => {
  return (
    <div
      id="PROFILE"
      className="flex gap-36 p-8 mt-36 mb-20 flex-col items-center mx-auto max-w-main-screen "
    >
      <div className="flex  flex-col justify-center w-full gap-2 min-h-screen">
        <div className="flex">
          <CircularText />

          <h1 className="text-secondry font-newsreader text-[162px] flex flex-col font-thin leading-none tracking-tighter">
            I am <span className="ml-36">Yash Thakur</span>
          </h1>
        </div>

        <span className="text-secondry font-newsreader text-[162px] flex flex-col font-thin leading-none tracking-tighter">
          _________Frontend
        </span>
        <span className="text-secondry font-newsreader text-[162px] flex flex-col font-thin leading-none tracking-tighter self-center">
          Developer
        </span>
      </div>
      <div className="flex flex-col gap-10 w-full">
        <h2 className="text-4xl font-thin text-white">
          The Story Behind <span>My Craft</span>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-secondry w-2/5  font-light">
            a kid, I was obsessed with computers—even though I didn’t have one,
            I explored how they worked and imagined all the incredible things I
            could do with them. I’d borrow time on my friends’ computers, and
            soon became the go-to person in my circle for anything tech-related.
            What started as pure curiosity grew into a lifelong passion, and I
            realized that creating with technology isn’t just about coding—it’s
            about solving real-world problems. Today, I take pride in turning
            that early fascination into seamless, impactful digital experiences.
          </p>
          <p className="text-secondry w-2/5  font-light">
            My day starts with a cup of tea ☕ and ends with ideas swirling in
            my head. In between, I solve complex problems, craft interactive
            user interfaces, and collaborate with clients to align on timelines
            and expectations. I dedicate time daily to exploring innovative
            designs, studying developed websites, and diving into products for
            inspiration. I also enjoy discussing fresh perspectives with
            designers—it’s a constant source of creativity. Currently, I’m
            learning Spline to create immersive 3D experiences for web
            development, and when I’m not working, I play video games and watch
            Animes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
