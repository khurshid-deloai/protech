import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const menuItems = [
    "Home",
    "About",
    "Products",
    "Services",
    "Service Specilist",
    "About Us",
  ];

  // Show header only when user is in the top (Home) section
  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar after 80% of the viewport height
      setIsVisible(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-4 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* Transparent navbar container */}
      <div className="bg-transparent text-white mx-4 md:mx-8">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-wide flex items-center">
            <a href="#" className="flex items-center space-x-1 group">
              <span className="text-green-400 group-hover:text-green-500 transition-colors duration-300">
                Pro
              </span>
              <span className="text-white group-hover:text-gray-200 transition-colors duration-300">
                Tech
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-lg font-semibold">
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
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition-all duration-200 font-semibold shadow-md"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-2 pb-4 border-t border-gray-700 bg-transparent backdrop-blur-sm">
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
      </div>
    </header>
  );
}
