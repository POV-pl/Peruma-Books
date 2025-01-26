import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./assests/PRM_Logo-removebg-preview.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Running message 
  const runningMessage = "Prajñā Package: 💰 Original Price Rs. 614/- | 🔥 Discounted Price Rs. 449/-| Prameya Package: 💰 Original Price Rs. 974/- | 💥 Discounted Price Rs. 699/- | 📚 6 Workshops | ";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { title: "About Us", link: "about-us" },
    { title: "Books", link: "books" },
    { title: "Workshops", link: "workshops" },
    { title: "Gallery", link: "gallery" },
    { title: "Lets Collaborate", link: "collaborate" },
    { title: "Shop", link: "shop" },
    { title: "Contact", link: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Running Message */}
      <div className="w-full bg-red-600 text-white text-center p-2 text-sm overflow-hidden">
        <div className="inline-block animate-running-text whitespace-nowrap">
          {runningMessage.repeat(3)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <RouterLink to="/owner-data">
              <img src={Logo} alt="PRM Logo" className="h-14 w-auto" />
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                smooth
                duration={500}
                offset={-80}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm uppercase tracking-wide"
              >
                {item.title}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
              Buy Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-600 p-3 z-60"
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  smooth
                  duration={500}
                  offset={-80}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 mt-4">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;