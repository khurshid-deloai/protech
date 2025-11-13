import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

const menuItems = [ "Home", "About", "Products", "Services", "Service Specilist", "About Us", ];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 shadow-lg backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide flex items-center">
          <a href="#" className="flex items-center space-x-1 group">
            <span className="text-green-500 group-hover:text-green-600 transition-colors duration-300">
              Pro
            </span>
            <span className="text-white group-hover:text-gray-300 transition-colors duration-300">
              Tech
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-base font-semibold">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white hover:text-green-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-green-500 hover text-white px-3 py-1 rounded-full transition-all duration-200 font-semibold shadow-md"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-2 pb-4 border-t border-gray-700 bg-black/90 rounded-b-lg backdrop-blur-md">
          {[...menuItems, "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block py-3 text-[17px] text-center font-semibold text-white transition-colors duration-200 ${
                item === "CONTACT"
                  ? "bg-green-500 text-white rounded-full hover:bg-green-600 mx-4"
                  : "hover:text-green-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
