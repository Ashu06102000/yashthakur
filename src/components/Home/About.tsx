const About = () => {
  return (
    <div className="flex w-full">
      <div className="h-auto mt-[10em] border-ra flex flex-col gap-2 border-bot">
        <div className=" relative bg-white p-8 border-ra border-y-[1px]">
          <span className="h-2 w-2 bg-orange-400 flex absolute top-4 left-4"></span>
          <span className="text-4xl uppercase flex flex-col">
            <span>location: </span> pune
          </span>
        </div>
        <img src="/src/assets/vec.png" alt="" />
        <div className="border-ra border-y-[1px] mt-[20em]">
          <div className="flex gap-2 items-center border-ra border-bot p-4">
            <img src="/src/assets/tick.svg" className="flex" />
            <span className=" uppercase flex flex-col">frontend</span>
          </div>
          <div className="flex gap-2 items-center border-ra border-bot p-4">
            <img src="/src/assets/tick.svg" className="flex" />
            <span className=" uppercase flex flex-col">Backend</span>
          </div>
          <div className="flex gap-2 items-center border-ra border-bot p-4">
            <img src="/src/assets/tick.svg" className="flex" />
            <span className=" uppercase flex flex-col">Testing</span>
          </div>
          <div className="flex gap-2 items-center border-ra border-bot p-4">
            <img src="/src/assets/tick.svg" className="flex" />
            <span className=" uppercase flex flex-col">Web Development</span>
          </div>
          <div className="flex gap-2 items-center p-4">
            <img src="/src/assets/tick.svg" className="flex" />
            <span className=" uppercase flex flex-col">Cloud</span>
          </div>
        </div>
        <img className="pt-20" src="/src/assets/vec2.png" alt="" />
      </div>

      <div className="border-[1px] relative border-t-0 border-ra h-full w-full">
        <div className="absolute w-full  z-10 top-[50%] bg-white flex">
          <div className="relative p-16 border-ra border-l-[0px] border-[1px] text-nowrap">
            <span className="h-2 w-2 bg-black flex absolute top-4 left-4"></span>
            <h3 className="text-2xl uppercase font-light">Tech Stacks</h3>
          </div>
          <div className="relative p-16 border-ra border-y-[1px] w-full">
            <span className="h-2 w-2 bg-black flex absolute top-4 left-4"></span>
            <h3 className="text-2xl uppercase font-light">技術スタック</h3>
          </div>
        </div>
        <div className="h-full relative flex justify-center p-8">
          <video
            className="h-72 absolute top-[8%]"
            src="/src/assets/robo.mp4"
            autoPlay
            muted
            loop
          ></video>
          <img
            className="h-52 absolute bottom-[22%]"
            src="/src/assets/stack.svg"
            alt=""
          />
          <img
            className="sticky top-0 max-h-[800px] w-full max-w-[450px]"
            src="/src/assets/elivat.webp"
            alt=""
          />
        </div>
      </div>
      <div className="h-full p-8 flex flex-col gap-16 w-2/3 border-bot">
        <h3 className="uppercase text-6xl font-light">About me</h3>
        <div className="flex flex-col gap-4 text-3xl">
          <span className="border-ra border-[1px] p-4 card_cut font-light">
            I'm Yash Thakur, a dedicated software developer based in Pune with a
            passion for creating impactful digital solutions. My journey in the
            tech world has equipped me with a deep understanding of frontend and
            backend development, allowing me to craft user-friendly and
            efficient applications.
          </span>
          <span className="border-ra border-[1px] p-4 font-light">
            Driven by a desire to innovate and improve, I approach every project
            with enthusiasm and attention to detail. Whether it's coding a
            complex feature or refining the user interface, I aim to exceed
            expectations and deliver solutions that make a difference.
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-[15em]">
          <div className="relative flex bg-white  p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">ReactJs</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">html</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">JavaScript</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">CSS</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">TypeScript</h3>
          </div>

          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">RemixJs</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">StencilJs</h3>
          </div>
          <div className="relative flex bg-white    p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Cypress</h3>
          </div>

          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">JavaScript</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">AWS</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Wordpress</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Micro-frontend</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Zustand</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Prisma-orm</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Tailwind</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Wordpress</h3>
          </div>
          <div className="relative flex bg-white p-6 gap-2">
            <span className="h-2 w-2 bg-black flex  top-4 left-4"></span>
            <h3 className=" uppercase font-light">Webflow</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
