import AnimatedList from "../generic-components/AnimatedLine";
import Footer from "../generic-components/footer/Footer";
import Hero from "./hero/Hero";
import IntroSection from "./hero/IntroSection";
import SkillSection from "./SkillSection";

const items = [
  {
    title: "Background",
    description: "  Learn more about me, read my resumé and see my accolades",
  },
  {
    title: "Thoughts",
    description:
      "An unfiltered look into my thoughts on the design Industry as a whole",
  },
];
const Landing = ({ loading }: { loading: boolean }) => {
  return (
    <div className="bg-white">
      <Hero loading={loading} />

      <IntroSection />
      <div className="flex flex-col bg-white rounded-3xl">
        {/* <Work /> */}
        <SkillSection />
      </div>
      <AnimatedList items={items} />
      <Footer />
    </div>
  );
};
export default Landing;
