import Footer from "../generic-components/footer/Footer";
import KnowMe from "./KnowMe";

const Background = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <div className="py-32 relative px-10 sm:px-20 bg-black">
        <KnowMe loading={loading} />
      </div>
      <Footer />
    </>
  );
};
export default Background;
