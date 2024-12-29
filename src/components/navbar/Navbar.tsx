const Navbar = () => {
  const NavItems = ["About", "Contact"];
  return (
    <div className="w-full border-bot py-6 px-6 font-semibold flex justify-between">
      <h2 className="uppercase text-4xl">Y-ashu</h2>
      <div className="flex gap-8">
        {NavItems.map((item) => (
          <div className="font-normal text-xl">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
