import robopipes from "/src/assets/robopipes.png";
const Blogs = () => {
  return (
    <div className="flex flex-col border-bot">
      <div className="flex w-full border-bot">
        {[1, 2, 3, 4].map((_, index) => {
          return (
            <div
              className={`h-20 w-full border-ra  ${
                index === 3 ? "border-r-0" : "border-r-[1px]"
              }`}
              key={index}
            ></div>
          );
        })}
      </div>
      <div className="flex w-full md:flex-row flex-col ">
        <div className="w-full ">
          <h3 className="uppercase text-4xl md:text-8xl p-4 w-full border-bot bg-white">
            Blogs
          </h3>
          <div className="flex flex-col items-center">
            <img
              className="w-[25em] h--[25em] border-x-[1px] border-ra"
              src={robopipes}
              alt=""
            />
            <div className="flex gap-2 w-full flex-col border-t-[1px] border-ra">
              {[
                {
                  id: "1",
                  name: "Here’s How We Took On and Solved the Video Security Challenge for an LMS Platform.",
                  link: "https://www.linkedin.com/posts/yash-thakur-0b71051b9_lms-problemsolved-hlsstreaming-activity-7267630219329462273-e1qc?utm_source=share&utm_medium=member_desktop",
                },
                {
                  id: "2",
                  name: " Ever wondered how a web page transforms from code into the interactive experience you see on your screen?",
                  link: "https://www.linkedin.com/posts/yash-thakur-0b71051b9_how-your-browser-renders-the-screen-a-high-level-activity-7233946197206401026--t-v?utm_source=share&utm_medium=member_desktop",
                },
                {
                  id: "3",
                  name: "Delighted to share my in-depth exploration on Hashnode: Unlocking the CSSOM: How Browsers Render Your Web Pages",
                  link: "https://www.linkedin.com/posts/yash-thakur-0b71051b9_unlocking-the-cssom-how-browsers-render-activity-7216528404777488385-4KbJ?utm_source=share&utm_medium=member_desktop",
                },
                {
                  id: "4",
                  name: "Building a Great Product: The Importance of UI",
                  link: "https://www.linkedin.com/posts/yash-thakur-0b71051b9_frontenddevelopment-uiux-userexperience-activity-7214317966920732675-hTWv?utm_source=share&utm_medium=member_desktop",
                },
              ].map((data) => {
                return (
                  <a
                    key={data.id}
                    target="blank"
                    className={`flex gap-2 items-center p-4 border-ra border-bot `}
                    href={data.link}
                  >
                    <span className="h-2 w-2 bg-orange-500 flex"></span>{" "}
                    {data.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full border-l-[1px] border-ra">
          <h3 className="uppercase text-4xl md:text-8xl p-4 w-full border-bot ">
            Find me
          </h3>
          <div className="grid grid-cols-3 px-2">
            <a
              href="https://www.linkedin.com/in/yash-thakur-0b71051b9/"
              target="_blank"
              className=" bg-white uppercase relative text-center w-full p-4 md:p-16 flex justify-center items-center"
            >
              <span className="h-2 w-2 bg-orange-500 flex absolute -top-2 -left-2"></span>
              <span className="h-2 w-2 bg-orange-500 flex -top-2 -right-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -left-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -right-2 absolute"></span>
              Linkedin
            </a>
            <div></div>
            <a
              href="mailto:yash6102000thakur@gmail.com"
              target="_blank"
              className=" bg-white uppercase relative text-center w-full p-4 md:p-16 flex justify-center items-center"
            >
              <span className="h-2 w-2 bg-orange-500 flex absolute -top-2 -left-2"></span>
              <span className="h-2 w-2 bg-orange-500 flex -top-2 -right-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -left-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -right-2 absolute"></span>
              email
            </a>
          </div>
          <div className="grid grid-cols-3 px-2">
            <div></div>
            <a
              href="https://yashthakur.hashnode.dev/"
              target="_blank"
              className=" bg-white uppercase relative text-center w-full p-4 md:p-16 flex justify-center items-center"
            >
              <span className="h-2 w-2 bg-orange-500 flex absolute -top-2 -left-2"></span>
              <span className="h-2 w-2 bg-orange-500 flex -top-2 -right-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -left-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -right-2 absolute"></span>
              Hashnode
            </a>
            <div></div>
          </div>
          <div className="grid grid-cols-3 px-2">
            <span className=" bg-white uppercase relative text-center w-full p-16 flex items-center justify-center">
              <span className="h-2 w-2 bg-orange-500 flex absolute -top-2 -left-2"></span>
              <span className="h-2 w-2 bg-orange-500 flex -top-2 -right-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -left-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -right-2 absolute"></span>
              While Gaming
            </span>
            <span></span>
            <span className=" bg-white uppercase relative text-center w-full p-4 md:p-16 flex justify-center items-center">
              <span className="h-2 w-2 bg-orange-500 flex absolute -top-2 -left-2"></span>
              <span className="h-2 w-2 bg-orange-500 flex -top-2 -right-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -left-2 absolute"></span>
              <span className="h-2 w-2 bg-orange-500 flex -bottom-2 -right-2 absolute"></span>
              Watching anime
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
