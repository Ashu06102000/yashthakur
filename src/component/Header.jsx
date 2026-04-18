const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-6 md:px-14 py-7 max-w-screen-lg m-auto">
        <div className="font-sans text-xl md:text-2xl text-black bg-transparent">
          iamyash
        </div>
        <a href="mailto:yash6102000thakur@gmail.com" className="font-sans text-xs md:text-sm text-black bg-transparent border-b border-gray-800">
          Let's Work
        </a>
      </nav>
    </header>
  );
};

export default Header;
