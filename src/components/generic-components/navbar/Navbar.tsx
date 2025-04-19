import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="w-full p-8 font-semibold flex gap-12 justify-between fixed top-0 z-50 pointer-events-none">
      {/* <div className="mb-6 md:mb-0">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-white">
            Yash
          </h1>
          <div className="relative ml-2 mix-blend-difference">
            <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
              Y
            </div>
          </div>
        </div>
      </div> */}
      <div className="pointer-events-auto">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
