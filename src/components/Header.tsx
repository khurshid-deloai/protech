import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    "Home",
    "About",
    "Products",
    "Services",
    "Service Specialist",
    "About Us",
  ];

  // Transparent header ONLY inside home section
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");

      if (homeSection) {
        const bottom = homeSection.offsetHeight;

        // Navbar becomes black only after leaving home
        setIsScrolled(window.scrollY > bottom - 120);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const handleSpy = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.toLowerCase().replace(/\s+/g, "-"))
      );

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleSpy);
    return () => window.removeEventListener("scroll", handleSpy);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="text-4xl font-bold tracking-wide">
          <a href="#home">
            Pro<span className="text-green-500">Tech</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
          {menuItems.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`transition ${
                  activeSection === id
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
                }`}
              >
                {item}
              </a>
            );
          })}
          <a
            href="#contact"
            className="bg-green-500 px-4 py-1 rounded-full hover:bg-green-600 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md py-4 space-y-3 text-center">
          {menuItems.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg block py-2 hover:text-green-400"
              >
                {item}
              </a>
            );
          })}
          <a
            href="#contact"
            className="bg-green-500 mx-10 rounded-full py-2 block text-white text-lg"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
