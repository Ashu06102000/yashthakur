import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="w-full p-8 font-semibold flex gap-12 justify-between fixed top-0 z-50 fade-in">
      <span className="text-xl tracking-wider  font-light"></span>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
