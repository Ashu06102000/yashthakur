import CircularText from "../generic-components/CircularText";
import sahilImage from "../../assets/sahil-website.png";
const Work = () => {
  return (
    <div className="flex gap-36 py-36 items-start flex-col">
      <div className="flex items-center justify-center gap-12">
        <CircularText />
        <h2 className="text-black text-5xl flex flex-col font-extralight">
          Selection<span>of Work</span>
        </h2>
      </div>
      <div className="flex flex-col gap-28 w-full">
        <div className="flex bg-tangyOrange hover:bg-orange-300 transition-all duration-500 ease-in-out p-8 w-full gap-10">
          <div className="w-1/2 relative">
            <img
              className="rounded-xl absolute top-1 object-top z-10 w-[600px] object-cover h-[600px] border border-gray-400"
              src={sahilImage}
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between gap-44">
            <div className="flex justify-between">
              <span className="bg-white text-xs font-opensans px-3 rounded-full font-semibold flex items-center">
                PORTFOLIO, WEBSITE
              </span>
              <span className="text-2xl italic">SW.001</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="italic text-3xl ">Sahil</h3>
              <p className="text-5xl font-extralight">
                This portfolio reflects Sahil's vision—clean, modern, and
                focused on seamless digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
