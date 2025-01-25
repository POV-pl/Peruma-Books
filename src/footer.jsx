import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBookOpen,
  FaFileContract,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-800">
            Terms and Conditions
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="text-gray-700">
          <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
          <p className="mb-4">
            By accessing and using Peruma's services, you agree to these terms.
          </p>

          <h3 className="font-semibold mb-2">2. Book Services</h3>
          <p className="mb-4">
            All book sales are final. Digital content is non-refundable.
          </p>

          <h3 className="font-semibold mb-2">3. Privacy Policy</h3>
          <p className="mb-4">
            We protect your personal and purchase information.
          </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
    <>
      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-16 mt-8 relative">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-between items-center text-lg font-semibold text-white animate__animated animate__fadeIn animate__delay-1s">
            <div className="text-3xl font-extrabold tracking-wide text-white flex items-center">
              <FaBookOpen className="mr-2" /> PERUMA
            </div>

            <div className="flex space-x-8 items-center">
              {[
                { Icon: FaInstagram, link: "https://www.instagram.com/peruma" },
                {
                  Icon: FaLinkedin,
                  link: "https://www.linkedin.com/company/peruma",
                },
                { Icon: FaTwitter, link: "https://www.twitter.com/peruma" },
                {
                  Icon: FaFileContract,
                  onClick: () => setIsTermsModalOpen(true),
                },
              ].map(({ Icon, link, onClick }, index) =>
                link ? (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-125"
                  >
                    <Icon size={28} />
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={onClick}
                    className="text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-125"
                  >
                    <Icon size={28} />
                  </button>
                )
              )}
            </div>
          </div>

          <div
            className={`mt-10 p-8 bg-white text-black rounded-2xl shadow-2xl transform transition-all duration-700 ease-in-out ${
              isVisible ? "translate-x-0" : "-translate-x-full"
            } animate__animated animate__fadeIn`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  Our Bookstore
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                    <span>
                      #302, Book Haven Complex, Literature Lane, Bangalore-72
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-blue-600" />
                    <span>Mon-Sat: 10 AM - 8 PM | Sun: 11 AM - 6 PM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  Our Book Services
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  {[
                    "Online Book Store",
                    "E-book Collections",
                    "Book Recommendation Engine",
                    "Literary Events & Workshops",
                    "Book Club Memberships",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  Contact Information
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-600" />
                    <a
                      href="mailto:perumabooks@gmail.com"
                      className="hover:text-blue-800 transition duration-300"
                    >
                      perumabooks@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-blue-600" />
                    <span>+91 86183 31380</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Support available: Mon-Sat, 9 AM - 6 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </>
  );
};

export default Footer;
