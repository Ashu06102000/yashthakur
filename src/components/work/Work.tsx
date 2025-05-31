import Footer from "../generic-components/footer/Footer";
import WorkSection from "./WorkSection";

const Work = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <div className="py-32 relative mx-auto max-w-main-screen w-full">
        {" "}
        <WorkSection />
      </div>
      <Footer />
    </>
  );
};

export default Work;
