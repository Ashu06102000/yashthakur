import Hero from "../hero/Hero";

const Home = () => {
  return (
    <div className="w-full flex flex-col h-[calc(100vh-96px)] overflow-scroll">
      <Hero />
    </div>
  );
};

export default Home;
