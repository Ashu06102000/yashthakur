import Footer from "../generic-components/footer/Footer";
import ResumePage from "./ResumePage";

const Resume = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <div className="py-32 relative mx-auto max-w-main-screen">
        <ResumePage loading={loading} />
      </div>
      <Footer />
    </>
  );
};
export default Resume;
