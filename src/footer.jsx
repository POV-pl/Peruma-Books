import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener to show the footer slide-in effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Adjust this threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white py-16 mt-8">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex justify-between items-center text-lg font-semibold text-white animate__animated animate__fadeIn animate__delay-1s">
          {/* Footer company name */}
          <div className="text-3xl font-extrabold tracking-wide text-white">
            PERUMA
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-8">
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-orange-400 transition duration-300 ease-in-out transform hover:scale-125"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-white hover:text-orange-400 transition duration-300 ease-in-out transform hover:scale-125"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-white hover:text-orange-400 transition duration-300 ease-in-out transform hover:scale-125"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Sliding Box with Address and Services */}
        <div
          className={`mt-10 p-8 bg-white text-black rounded-2xl shadow-xl transform transition-all duration-700 ease-in-out ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          } animate__animated animate__fadeIn`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Address */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Address:
              </h3>
              <p className="text-sm text-gray-600">
                123 Business Avenue, Tech City, XYZ Country
              </p>
            </div>

            {/* Services Provided */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Services:
              </h3>
              <ul className="text-sm text-gray-600">
                <li>- Custom Software Development</li>
                <li>- Cloud Solutions</li>
                <li>- AI & Machine Learning Consulting</li>
                <li>- Business Process Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
