const AnimatedList = ({
  items,
}: {
  items: { title: string; description: string }[];
}) => {
  return (
    <div className="flex flex-col z-10 pt-24 max-w-screen-xl mx-auto w-full gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="group flex items-center justify-between p-8 transition-all duration-300 hover:px-20 hover:bg-white hover:rounded-full border-t border-t-graymain border-opacity-30"
        >
          <h4 className="text-5xl text-graymain transition-colors duration-300 group-hover:text-black">
            {item.title}
          </h4>
          <p className="text-sm text-graymain transition-colors duration-300 group-hover:text-black">
            {item.description}
          </p>
          <span className="text-2xl bg-white bg-opacity-10 rounded-full py-2 text-white px-3 group-hover:bg-black group-hover:text-white">
            →
          </span>
        </div>
      ))}
      <span className="bg-graymain bg-opacity-30 h-px w-full"></span>
    </div>
  );
};

export default AnimatedList;
