import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaBookOpen,
  FaFileContract,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaUser,
  FaInfoCircle,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaBook,
} from "react-icons/fa";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-blue-800">
            Terms and Conditions
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="text-gray-700 text-sm md:text-base">
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

const AuthorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const authorSections = [
    {
      icon: FaGraduationCap,
      title: "Academic Background",
      content: [
        "Ph.D. in Cryptography, Visvesvaraya Technological University, 2025.",
        "M.Tech in VLSI and Embedded Systems, Visvesvaraya Technological University, 2014.",
        "B.E in Telecommunication Engineering, Visvesvaraya Technological University, 2006.",
      ],
    },
    {
      icon: FaBriefcase,
      title: "Professional Experience",
      content: [
        "Assistant Professor in the Department of Electronics and Communication Engineering at Dr. Ambedkar Institute of Technology.",
        "19 years of teaching experience.",
        "Additional Roles: Mentor, Researcher, Evaluator,Student Coordinator etc.",
      ],
    },
    {
      icon: FaBook,
      title: "Books Written",
      content: [
        "Binary Coding Activities",
        "Inspiring Personalities",
        "Graphs",
        "Math Puzzles",
        "Cryptic Messages",
        "Numbers",
        "Mandala Art",
        "Construct Words",
        "Hidden Words",
        "Wisdom in Words",
        "Sudoku",
        "Trace the Patterns",
      ],
    },
    {
      icon: FaAward,
      title: "Achievements",
      content: [
        "Published academic and research papers in the fields of cryptography, signal processing, Image processing etc. in reputed journals.",
        "Self-Publisher of Innovative Children's Activity Books.",
        "Published Indian patent on research work.",
        "Granted one Indian design patent for social work.",
        "Teaching expertise in various subjects such as Cryptography, Signal processing, Image processing, Basic Electronics, Network theory, Information theory and coding, Hardware description language, MATLAB etc.",
        "Organised many activity-based workshops for students.",
        "Engaged in entrepreneurship development activities.",
        "Participated in technical events and faculty development programs.",
        "Certified Yoga Instructor from S-VYASA University.",
        "Participated in extracurricular activities like yoga, dance, sports etc.",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-800">
            About the Author
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md mb-6">
                <img
                  src="public/books/author.png"
                  alt="Author"
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-700">
                  Dr. Pushpalatha G S
                </h3>
                <p className="text-gray-500 mb-4">
                  Founder & Author at Peruma Books
                </p>

                <div className="flex justify-center mt-4">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=perumabooks@gmail.com"
                    className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition text-sm"
                  >
                    <FaEnvelope className="mr-2" /> Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 text-gray-700">
            <div className="p-5 bg-blue-50 rounded-lg mb-6">
              <p className="text-center italic text-blue-800">
                "My mission is to create books that not only educate but also
                ignite curiosity and foster a love for learning in children.
                Through storytelling, I aim to preserve our cultural heritage
                while preparing young minds for the challenges of tomorrow."
              </p>
            </div>

            <p className="text-justify mb-5">
              Dr. Pushpalatha G S is a dedicated author and educator with a
              passion for creating engaging and educational activity books for
              children. Holding a Ph.D. in the field of cryptography, she has
              spent 19 years in academia, teaching, and mentoring students in
              the department of Electronics and Communication Engineering at Dr.
              Ambedkar Institute of Technology. With a strong foundation in both
              research and pedagogy, she uses her academic expertise to craft
              activity books that are not only fun but also enhance children's
              cognitive and creative development. Driven by a love for
              interactive learning, Dr. Pushpalatha G S began writing children's
              activity books to foster curiosity and problem-solving skills in
              young minds.
            </p>
            <p className="text-justify">
              Each of her books is designed to captivate children while
              encouraging them to explore new ideas, develop fine motor skills,
              and build confidence through hands-on learning. Beyond writing,
              Dr. Pushpalatha G S is deeply involved in the academic world,
              where she continues to contribute in teaching, research, and
              academic activities. She is a firm believer in the power of
              play-based learning and strive to create books that help children
              develop essential life skills while having fun.
            </p>

            <div className="space-y-8 mt-6">
              {authorSections.map((section, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-600 p-2 rounded-full mr-3">
                      <section.icon className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-800">
                      {section.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

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
      <footer className="bg-gradient-to-r from-blue-600 via-blue-900 to-blue-700 text-white py-8 md:py-16 mt-8 relative">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-lg font-semibold text-white">
            <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-white flex items-center mb-4 md:mb-0">
              <FaBookOpen className="mr-2" /> PERUMA
            </div>

            <div className="flex space-x-6 md:space-x-8 items-center">
              {[
                {
                  Icon: FaInstagram,
                  link: "https://www.instagram.com/perumabooks/",
                },
                { Icon: FaTwitter, link: "https://x.com/perumabooks" },
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
                    <Icon size={24} />
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={onClick}
                    className="text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-125"
                  >
                    <Icon size={24} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Author Card - Added Before Main Content */}
          <div className="mt-6 p-4 bg-blue-800 bg-opacity-40 rounded-xl border border-blue-400 border-opacity-30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-4 bg-blue-100 p-2 rounded-full">
                  <FaUser className="text-blue-800 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Dr. Pushpalatha G S</h3>
                  <p className="text-blue-100 text-sm">Founder & Author</p>
                </div>
              </div>
              <button
                onClick={() => setIsAuthorModalOpen(true)}
                className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition flex items-center text-sm font-medium"
              >
                <FaInfoCircle className="mr-2" /> Know More
              </button>
            </div>
          </div>

          <div
            className={`mt-6 md:mt-10 p-4 md:p-8 bg-white text-black rounded-2xl shadow-2xl transform transition-all duration-700 ease-in-out ${
              isVisible ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-20">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800">
                  Office Address
                </h3>
                <div className="text-xs md:text-sm text-gray-700 space-y-2">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-600 flex-shrink-0" />
                    <span className="break-words">
                      No 9, 1st main road, 11th cross, NGEF Layout, 2nd stage
                      Nagarbhavi, Bengaluru, Karnataka, India.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-blue-600 flex-shrink-0" />
                    <span className="break-words">
                      Mon-Sat: 10 AM - 8 PM | Sun: 11 AM - 6 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800">
                  Our Services
                </h3>
                <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                  {["Online Book Store", "Workshops"].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800">
                  Our Clients
                </h3>
                <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                  {["Schools", "Educational Activity Clubs", "NGOs"].map(
                    (client, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        {client}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800">
                  Contact Information
                </h3>
                <div className="text-xs md:text-sm text-gray-700 space-y-2">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-600 flex-shrink-0" />
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=perumabooks@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-800 transition duration-300 truncate"
                    >
                      perumabooks@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-blue-600 flex-shrink-0" />
                    <span>+91 86183 31380</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Support available: Mon-Sat, 10 AM - 8 PM
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

      <AuthorModal
        isOpen={isAuthorModalOpen}
        onClose={() => setIsAuthorModalOpen(false)}
      />
    </>
  );
};

export default Footer;
