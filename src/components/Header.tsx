import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = ["Home", "About", "Products", "Specilists", "Contact"];

  // Enable Dark Mode on HTML tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll Spy Effect
  useEffect(() => {
    const handleSpy = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
      className="
        fixed top-0 left-0 right-0 z-[100]
        bg-white dark:bg-black
        text-black dark:text-white
        shadow-md
        transition-all duration-100
        py-2
      "
    >
      <div className="container mx-auto px-2 md:px-10 flex items-center justify-between">

        {/* Logo with Image */}
        <div className="flex items-center space-x-2">
          {/* IMAGE BEFORE LOGO */}
          <img
            src="/logo.png"  // MUST be inside public/logo.png
            alt="Protech Logo"
            className="w-20 h-20 object-contain"
          />

          <div className="flex flex-col leading-tight">
            <a 
              href="#home" 
              className="text-xl md:text-xl font-bold tracking-wide"
            >
              PRO<span className="text-Black-600"> TECH</span> INTERNATIONAL
            </a>

            <span className="text-[2px] md:text-xs text-gray-600 dark:text-gray-300 mt-1">
              Specialty Chemical Products for the Sugar Industry
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav
          key={darkMode}
          className="hidden md:flex items-center space-x-2 text-sm md:text-base font-medium"
        >
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`
                  px-3 py-2 rounded-lg
                  transition-all duration-300 ease-in-out
                  transform hover:scale-105
                  
                  ${
                    activeSection === id
                      ? "text-emerald-600 font-semibold"
                      : "text-black dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
                  }
                `}
              >
                {item}
              </a>
            );
          })}

          {/* Theme Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          key={darkMode}
          className="
            md:hidden bg-white dark:bg-black 
            py-4 space-y-3 text-center shadow-md
            transition-all duration-500
          "
        >
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="
                  block text-sm py-2
                  transition-all duration-300 ease-in-out
                  transform hover:scale-105
                  text-black dark:text-white
                  hover:text-emerald-500 dark:hover:text-emerald-400
                "
              >
                {item}
              </a>
            );
          })}

          {/* Mobile Theme Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mx-auto transition-all duration-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      )}
    </header>
  );
}
