import Navbar from "../generic-components/navbar/Navbar";
import KnowMe from "./KnowMe";

const Background = () => {
  return (
    <div className="py-32 relative px-10 sm:px-20">
      <Navbar />
      <KnowMe />
    </div>
  );
};
export default Background;
