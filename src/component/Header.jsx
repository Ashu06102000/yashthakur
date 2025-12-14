import { useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
  const linksRef = useRef([]);

  // Split text into individual spans
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block relative">
        {char}
      </span>
    ));

  const handleMouseEnter = (index) => {
    const letters = linksRef.current[index].querySelectorAll("span");
    gsap.fromTo(
      letters,
      { y: 100, opacity: 0 }, // start below
      { y: 0, opacity: 1, stagger: 0.03, duration: 0.3, ease: "power2.out" }
    );
  };

  const handleMouseLeave = (index) => {
    // return letters to normal without hiding
    const letters = linksRef.current[index].querySelectorAll("span");
    gsap.to(letters, { y: 0, opacity: 1, duration: 0.2 });
  };

  const links = [
    { name: "Hashnode", url: "https://hashnode.com/@yourusername" },
    { name: "Email", url: "mailto:youremail@example.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yourusername/" },
  ];

  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-white text-xl">Yash Thakur</h1>
      <div className="flex space-x-6 text-white">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (linksRef.current[index] = el)}
            className="overflow-hidden relative inline-block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {splitText(link.name)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
