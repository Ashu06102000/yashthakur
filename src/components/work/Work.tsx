import Footer from "../generic-components/footer/Footer";
import WorkSection from "./WorkSection";

const Work = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <div className="py-32 pt-0 relative mx-auto max-w-main-screen">
        {" "}
        <WorkSection />
      </div>
      <Footer />
    </>
  );
};

export default Work;
