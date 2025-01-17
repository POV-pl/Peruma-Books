import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import Logo from "./assests/PRM_Logo-removebg-preview.png"; // Update the path to your logo file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-transparent to-blue-300 shadow-md fixed w-full z-10">
      {/* Logo on the top-left */}
      <div className="flex items-center">
        <img src={Logo} alt="PRM Logo" className="h-16 w-auto" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <FiMenu size={24} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 transform lg:transform-none transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {[
          "About Us",
          "Books",
          "Workshops",
          "Gallery",
          "Lets Collaborate",
          "Shop",
          "Contact",
        ].map((item, index) => (
          <Link
            key={index}
            to={item.toLowerCase().replace(" ", "-")} // Matches the id in Section
            smooth
            duration={500}
            offset={-64} // Adjust offset for header
            className="cursor-pointer text-black font-semibold hover:underline transform transition duration-300 ease-in-out hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
