import Footer from "../generic-components/footer/Footer";
import Hero from "./hero/Hero";
import IntroSection from "./hero/IntroSection";
import SkillSection from "./SkillSection";
import Work from "./Work/Work";

const Landing = ({ loading }: { loading: boolean }) => {
  return (
    <div className="relative">
      <div className="sticky top-0">
        <Hero loading={loading} />
      </div>

      <IntroSection />

      <Work />
      <SkillSection />

      <Footer />
    </div>
  );
};
export default Landing;
