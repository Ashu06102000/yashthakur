const AnimatedList = ({
  items,
}: {
  items: { title: string; description: string }[];
}) => {
  return (
    <div className="flex flex-col z-10 pt-16 sm:pt-24 max-w-screen-xl mx-auto w-full gap-2">
      {items.map((item, index) => (
        <button
          key={index}
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 p-6 sm:p-8 transition-all duration-300 hover:sm:px-20 hover:bg-white hover:rounded-full border-t border-t-graymain border-opacity-30 text-left"
        >
          <span className="text-2xl sm:text-4xl md:text-5xl text-graymain transition-colors duration-300 group-hover:text-black">
            {item.title}
          </span>
          <p className="text-sm sm:text-base text-graymain transition-colors duration-300 group-hover:text-black max-w-md sm:text-right">
            {item.description}
          </p>
          <span className="text-xl sm:text-2xl bg-white bg-opacity-10 rounded-full py-1.5 px-3 sm:py-2 text-white group-hover:bg-black group-hover:text-white self-start sm:self-auto">
            →
          </span>
        </button>
      ))}
      <span className="bg-graymain bg-opacity-30 h-px w-full"></span>
    </div>
  );
};

export default AnimatedList;
