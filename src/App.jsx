import "./index.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import WhatIBring from "./component/WhatIBring";
import BonusSkills from "./component/BonusSkills";
import FeaturedWork from "./component/FeaturedWork";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhatIBring />
      <BonusSkills />
      <FeaturedWork />
      <Footer />
    </>
  );
}

export default App;
