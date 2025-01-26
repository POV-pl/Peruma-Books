import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./assests/PRM_Logo-removebg-preview.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const runningMessage =
    "Prajñā Package: 💰 Original Price Rs. 614/- | 🔥 Discounted Price Rs. 449/-| Prameya Package: 💰 Original Price Rs. 974/- | 💥 Discounted Price Rs. 699/- | 📚 6 Workshops | ";

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
    { title: "Contact", link: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 bg-white shadow-md transition-transform duration-500 ${
        isVisible ? "translate-y-0 " : "-translate-y-full  "
      }`}
    >
      <div className="w-full bg-blue-600 hover:bg-orange-600 text-white text-center p-2 cursor-pointer text-sm overflow-hidden">
        <Link to={"workshops"} smooth duration={500} offset={-80}>
          <div className="animate-marquee whitespace-nowrap inline-block">
            {runningMessage.repeat(5)}
          </div>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <RouterLink to="/owner-data">
              <img src={Logo} alt="PRM Logo" className="h-14 w-auto" />
            </RouterLink>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="group relative cursor-pointer">
                <Link
                  to={item.link}
                  smooth
                  duration={500}
                  offset={-80}
                  className="relative text-gray-700 hover:text-blue-800 font-medium 
                    text-sm uppercase tracking-wide z-10 block"
                >
                  {item.title}
                </Link>
                <span
                  className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-blue-300 
                    to-blue-500 rounded-full opacity-0 group-hover:opacity-50 
                    transition-opacity duration-300 z-0"
                ></span>
              </div>
            ))}
          </nav>

          <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-600 p-3 z-60"
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="group relative cursor-pointer">
                  <Link
                    to={item.link}
                    smooth
                    duration={500}
                    offset={-80}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-800 
                      font-medium z-10 relative"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  <span
                    className="absolute left-3 top-0 w-[calc(100%-1.5rem)] h-full 
                      bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-0 
                      group-hover:opacity-50 transition-opacity duration-300 z-0"
                  ></span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
