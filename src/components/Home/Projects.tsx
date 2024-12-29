const Projects = () => {
  return (
    <div className="flex flex-col">
      <h3 className="uppercase text-8xl p-4 w-full border-bot">Projects</h3>
      <div className="flex ">
        <div className="flex flex-col border-[1px] border-ra border-l-0 border-t-0">
          <span className="p-20 px-40 text-2xl uppercase">Gen</span>
          <div className="flex flex-1">
            <div className="flex flex-col justify-between w-full">
              <div className="flex ">
                <span className="p-6 border-ra border-t-[1px] border-r-[1px]">
                  ReactJs
                </span>
                <span className="p-6 border-ra border-t-[1px] w-full">
                  TailwindCSS
                </span>
              </div>
              <div className="flex border-ra border-t-[1px]">
                <span className="p-6 ">React Router</span>
              </div>
            </div>
            <span className="flex h-full  text-4xl justify-center items-center border-ra border-t-[1px] border-l-[1px] cursor-pointer p-8 min-w-16">
              →
            </span>
          </div>
        </div>
        <div className="flex flex-col border-[1px] border-ra border-l-0 border-t-0">
          <span className="p-20 px-40 text-2xl uppercase">Morax</span>
          <div className="flex flex-1">
            <div className="flex flex-col justify-between">
              <div className="flex ">
                <span className="p-6 border-ra border-t-[1px] border-r-[1px]">
                  ReactJs
                </span>
                <span className="p-6 border-ra border-t-[1px] w-full">
                  TailwindCSS
                </span>
              </div>
              <div className="flex border-ra border-t-[1px]">
                <span className="p-6 border-ra border-r-[1px] text-nowrap">
                  React Router
                </span>
                <span className="p-6 border-ra border-r-[1px]">Zustand</span>
                <span className="p-6 ">GSAP</span>
              </div>
            </div>
            <span className="flex h-full  text-4xl justify-center items-center border-ra border-t-[1px] border-l-[1px] cursor-pointer p-8 min-w-16">
              →
            </span>
          </div>
        </div>
        <div className="flex flex-col border-[1px] border-ra border-l-0 border-t-0">
          <span className="p-20 px-40 text-2xl uppercase">Portfolio</span>
          <div className="flex flex-1">
            <div className="flex flex-col justify-between w-full">
              <div className="flex ">
                <span className="p-6 border-ra border-t-[1px] border-r-[1px]">
                  ReactJs
                </span>
                <span className="p-6 border-ra border-t-[1px] w-full">
                  TailwindCSS
                </span>
              </div>
              <div className="flex border-ra border-t-[1px]">
                <span className="p-6 ">React Router</span>
              </div>
            </div>
            <span className="flex h-full  text-4xl justify-center items-center border-ra border-t-[1px] border-l-[1px] cursor-pointer p-8 min-w-16">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
