const Navbar = () => {
  const NavItems = ["About", "Contact"];
  return (
    <div className="w-full py-4 font-semibold flex justify-between">
      <h2 className="uppercase">Y-ashu</h2>
      <div className="flex gap-8">
        {NavItems.map((item) => (
          <div className="font-normal">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
