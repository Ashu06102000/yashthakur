const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span className="flex p-10 border-bot items-center text-gray-600 uppercase">
      @{currentYear} made with ❤️
    </span>
  );
};

export default Footer;
