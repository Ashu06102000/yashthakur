import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experiance from "./Experiance";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Experiance />
    </div>
  );
};

export default Home;
