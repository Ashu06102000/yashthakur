import Footer from "../generic-components/footer/Footer";
import Hero from "./hero/Hero";
import IntroSection from "./hero/IntroSection";
import SkillSection from "./SkillSection";
import Work from "./Work/Work";

const Landing = ({ loading }: { loading: boolean }) => {
  return (
    <div className="">
      <Hero loading={loading} />

      <IntroSection />
      <div className="flex flex-col rounded-3xl">
        <Work />
        <SkillSection />
      </div>
      <Footer />
    </div>
  );
};
export default Landing;
