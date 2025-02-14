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
      <div className="flex flex-col gap-48 w-full">
        <div className="flex bg-tangyOrange hover:bg-orange-300 transition-all duration-500 ease-in-out p-8 w-full gap-10">
          <div className="w-1/2 relative">
            <img
              className="rounded-3xl absolute top-1 object-top z-10 w-[600px] object-cover h-[600px] border border-gray-400"
              src={sahilImage}
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between gap-52">
            <div className="flex justify-between">
              <span className="bg-white text-xs font-opensans px-3 rounded-full font-semibold flex items-center">
                PORTFOLIO, WEBSITE
              </span>
              <span className="text-2xl italic">SW.001</span>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="font-light text-2xl ">Sahil Mohammad</h3>
              <p className="text-5xl font-extralight">
                Created this portfolio to reflect Sahil's vision—sleek, modern,
                and dedicated to delivering seamless digital experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="flex bg-[#e8e8e8] hover:bg-gray-200 transition-all duration-500 ease-in-out p-8 w-full gap-10">
          <div className="flex flex-col w-1/2 justify-between gap-52">
            <div className="flex justify-between">
              <span className="bg-white text-xs font-opensans px-3 rounded-full font-semibold flex items-center">
                PRODUCT
              </span>
              <span className="text-2xl italic">SW.001</span>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-light">Rator</h3>
              <p className="text-5xl font-extralight">
                A collection of front-end tools for animations, components, and
                effects.
              </p>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              className="rounded-3xl absolute top-1 right-0 object-top z-10 w-[600px] object-cover h-[600px] border border-gray-400"
              src={sahilImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
