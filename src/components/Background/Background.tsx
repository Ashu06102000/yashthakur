import Footer from "../generic-components/footer/Footer";
import KnowMe from "./KnowMe";

const Background = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <div className="py-32 relative mx-auto max-w-main-screen">
        <KnowMe loading={loading} />
      </div>
      <Footer />
    </>
  );
};
export default Background;
