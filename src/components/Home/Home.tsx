import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
