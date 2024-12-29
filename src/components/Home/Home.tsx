import Hero from "./Hero";
import About from "./About";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
