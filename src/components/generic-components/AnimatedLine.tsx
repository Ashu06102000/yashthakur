const AnimationLine = () => {
  return (
    <div className="flex flex-col z-10 mb-10">
      <div className="group border-t border-t-graymain border-opacity-30 flex items-center justify-between p-8 transition-all duration-300 hover:px-20 hover:bg-white hover:rounded-full">
        <h4 className="text-5xl text-graymain transition-colors duration-300 group-hover:text-black">
          Background
        </h4>
        <p className="text-sm text-graymain transition-colors duration-300 group-hover:text-black">
          Learn more about me, read my resumé and see my accolades
        </p>
        <span className="text-2xl bg-white bg-opacity-10 rounded-full py-2 text-white px-3 group-hover:bg-black group-hover:text-white">
          {" "}
          →
        </span>
      </div>

      <div className="group border-t border-t-graymain border-opacity-30 flex items-center justify-between p-8 transition-all duration-300 hover:px-20 hover:bg-white hover:rounded-full">
        <h4 className="text-5xl text-graymain transition-colors duration-300 group-hover:text-black">
          Thoughts
        </h4>
        <p className="text-sm text-graymain transition-colors duration-300 group-hover:text-black">
          An unfiltered look into my thoughts on the design Industry as a whole
        </p>
        <span className="text-2xl bg-white bg-opacity-10 rounded-full py-2 text-white px-3 group-hover:bg-black group-hover:text-white">
          →
        </span>
      </div>
    </div>
  );
};
export default AnimationLine;
