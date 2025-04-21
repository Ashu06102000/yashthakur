import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-50 pointer-events-none">
      <div className="p-6 sm:p-8 font-semibold flex justify-between items-center pointer-events-auto">
        <HamburgerMenu />

        {/* <div className="text-black text-sm sm:text-base font-roboto">
          yourname.dev
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
