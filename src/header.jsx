import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./assests/PRM_Logo-removebg-preview.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden">
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
