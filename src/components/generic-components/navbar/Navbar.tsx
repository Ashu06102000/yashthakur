import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const navItems = ["Background", "Work", "Resume"];

const Navbar = () => {
  const location = useLocation();

  const textColorClass = "text-white";

  return (
    <header className="w-full fixed top-0 py-8 flex justify-between items-center z-50 max-w-main-screen backdrop-blur-lg">
      <Link
        to="/"
        className={`text-2xl uppercase font-light tracking-tighter transition-colors duration-300 ${textColorClass}`}
      >
        YASH THAKUR
      </Link>

      <nav
        className={`hidden lg:flex gap-10 uppercase text-sm font-medium tracking-wide transition-colors duration-300 ${textColorClass}`}
      >
        {navItems.map((item, index) => {
          const slug = item.toLowerCase();
          return (
            <Link
              key={index}
              to={slug === "home" ? "/" : `/${slug}`}
              className={`link-animation ${textColorClass}`}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      <div className="lg:hidden">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
