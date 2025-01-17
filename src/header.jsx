import React from 'react';
import { Link } from 'react-scroll';
import Logo from './assests/PRM Logo.jpg'; // Update the path to your logo file

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-blue-300 shadow-md fixed w-full z-10">
    {/* Logo on the top-left */}
    <div className="flex items-center">
      <img src={Logo} alt="PRM Logo" className="h-16 w-auto" />
    </div>
    
    {/* Navigation Menu */}
    <nav className="space-x-6">
      {['About Us', 'Books', 'Workshops', 'Gallery', 'Lets Collaborate', 'Shop', 'Contact'].map((item) => (
        <Link
          key={item}
          to={item.toLowerCase().replace(' ', '-')} // Matches the id in Section
          smooth
          duration={500}
          offset={-64} // Adjust offset for header
          className="cursor-pointer text-black font-bold hover:underline transform transition duration-300 ease-in-out hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg hover:text-blue-600"
        >
          {item}
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
