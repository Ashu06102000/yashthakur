import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experiance from "./Experiance";
import Blogs from "./Blogs";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Experiance />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
