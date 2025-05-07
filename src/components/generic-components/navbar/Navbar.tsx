import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const navItems = ["Home", "Background", "Work"];

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 py-8  flex justify-between items-center z-50 max-w-main-screen">
      {/* Logo */}
      <Link
        to="/"
        className="text-white text-2xl uppercase font-light font-oreni tracking-wider"
      >
        YASH THAKUR
      </Link>

      {/* Desktop Navigation - show on large screens (≥1024px) */}
      <nav className="hidden lg:flex gap-10 text-white uppercase text-sm font-medium tracking-wide">
        {navItems.map((item, index) => {
          const slug = item.toLowerCase();
          return (
            <Link
              key={index}
              to={slug === "home" ? "/" : `/${slug}`}
              className="link-animation"
            >
              {item}
            </Link>
          );
        })}
      </nav>

      {/* Hamburger - only visible on smaller screens (<1024px) */}
      <div className="lg:hidden">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
