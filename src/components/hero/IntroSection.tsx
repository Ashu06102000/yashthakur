import CircularText from "../generic-components/CircularText";

const IntroSection = () => {
  return (
    <div className="flex gap-10 bg-white p-36 items-center">
      <div className="flex items-center justify-center gap-8">
        <CircularText />
        <h2 className="text-black text-4xl flex flex-col tracking-tighter font-light opacity-90">
          The Story Behind <span>My Craft</span>
        </h2>
      </div>
    </div>
  );
};

export default IntroSection;
