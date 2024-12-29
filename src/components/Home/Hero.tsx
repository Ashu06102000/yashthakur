const Hero = () => {
  return (
    <div>
      <div className="flex border-bot">
        {[1, 2, 3, 4].map((_, index) => {
          return (
            <div
              className={`h-16 w-full border-ra  ${
                index === 3 ? "border-r-0" : "border-r-[1px]"
              }`}
              key={index}
            ></div>
          );
        })}
      </div>
      <div className="flex w-full border-bot">
        {[1, 2, 3].map((_, index) => {
          return (
            <div
              className={`${
                index === 0
                  ? "w-2/4 bg-white text-black text-6xl font-play overflow-hidden"
                  : "w-1/4"
              } p-10 border-ra text-center flex items-center justify-center ${
                index === 2 ? "border-r-0" : "border-r-[1px]"
              }`}
              key={index}
            >
              {index === 0 ? (
                <div className="infinite-marquee">YASH THAKUR</div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className="flex w-full border-bot">
        {[1, 2, 3].map((_, index) => {
          return (
            <div
              className={`${
                index === 2 ? "w-2/4 text-black text-2xl " : "w-1/4"
              } p-10 border-ra text-center flex items-center justify-center ${
                index === 2 ? "border-r-0" : "border-r-[1px]"
              }`}
              key={index}
            >
              {index === 2 ? "FRONTEND DEVELOPER" : ""}
            </div>
          );
        })}
      </div>
      <div className="flex w-full border-bot">
        <div className="border-r-[1px] border-b-0 border-ra w-1/4 border-bot flex flex-col justify-between p-6">
          <div className=" flex flex-col gap-4 justify-start text-6xl uppercase ">
            <span className="text-9xl text-orange-500">2+</span>
            Years of experiance
          </div>
          <img
            className="max-h-[40em] p-10 w-full object-contain object-top "
            src="/src/assets/white_pip.webp"
            alt=""
          />
        </div>

        <img
          className="w-full max-h-[40em] p-10 object-cover object-top "
          src="/src/assets/me.jpg"
          alt=""
        />
        <div className="border-r-0 border-b-0 border-ra w-full flex justify-between items-start border-l-[1px]">
          <div className="flex gap-2 w-full flex-col">
            {[
              "Product Development",
              "Web development",
              "UI/UX",
              "ResponsiveDesign",
              "SEO Optimization",
            ].map((data, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-2 items-center p-4 border-ra border-bot `}
                >
                  <span className="h-2 w-2 bg-orange-500 flex"></span> {data}
                </div>
              );
            })}
          </div>
          <span className=" p-4 flex items-center font-thin gap-2 w-min text-8xl border-l-[1px] border-ra h-full gap-4 flex-col">
            ようこそ
            <span className="hand_wave">👋🏽</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
