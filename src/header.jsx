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
        } lg:flex lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          {[
            "About Us",
            "Books",
            "Workshops",
            "Gallery",
            "Lets Collaborate",
            "Shop",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.toLowerCase().replace(" ", "-")} // Matches the id in Section
                smooth
                duration={500}
                offset={-64} // Adjust offset for header
                className="cursor-pointer text-black text-lg lg:text-base font-semibold hover:underline transform transition duration-300 ease-in-out hover:scale-105 hover:translate-y-[-2px] hover:text-orange-400"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
