import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
  User,
  Mail,
  Send,
  Star,
} from "lucide-react";

const BookGallery = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInterestMessage, setShowInterestMessage] = useState(false);

  const books = [
    {
      id: 1,
      title: "BINARY CODING ACTIVITIES",
      price: "₹399.00",
      pages: "48",
      cover: "../books/book1.png",
      insideImages: [
        "../books/book1.1.png",
        "../books/book1.2.png",
        "../books/book1.3.png",
        "../books/book1.4.png",
      ],
      description:
        "Coding concepts 🔹 Instructions 🔹 Quiz 🔹 Answers 🔹 120 Activities 🔹 Illustrations 🔹 Self-assessment Activity",
      highlights: [
        "120 Coding Activities",
        "Self-assessment Modules",
        "Illustrated Examples",
        "Interactive Learning",
      ],
    },
    {
      id: 2,
      title: "GRAPHS",
      price: "₹199.00",
      pages: "36",
      cover: "../books/book2.png",
      insideImages: [
        "../books/book2.1.png",
        "../books/book2.2.png",
        "../books/book2.3.png",
        "../books/book2.4.png",
      ],
      description:
        "Concepts of graphs 🔹 Instructions 🔹 Quiz 🔹 Answers 🔹 16 Activities 🔹 Illustrations 🔹 4 types of graphs",
      highlights: [
        "16 Graph Activities",
        "4 Different Graph Types",
        "Step-by-step Instructions",
        "Practice Problems",
      ],
    },
    {
      id: 3,
      title: "INSPIRING PERSONALITIES",
      price: "₹199.00",
      pages: "72",
      cover: "../books/book3.png",
      insideImages: [
        "../books/book3.1.png",
        "../books/book3.2.png",
        "../books/book3.3.png",
        "../books/book3.4.png",
      ],
      description:
        "Covers 30 Personalities 🔹 Highlights education, field of work, lifestyle, achievements, and legacy 🔹 Quiz 🔹 Answers",
      highlights: [
        "30 Inspiring Stories",
        "Detailed Biographies",
        "Achievement Highlights",
        "Educational Journey",
      ],
    },
    {
      id: 4,
      title: "NUMBERS",
      price: "₹99.00",
      pages: "32",
      cover: "../books/book4.png",
      insideImages: [
        "../books/book4.1.png",
        "../books/book4.2.png",
        "../books/book4.3.png",
        "../books/book4.4.png",
      ],
      description:
        "Number Concepts 🔹 Instructions 🔹 Answers 🔹 13 Activities 🔹 Illustrations",
      highlights: [
        "13 Math Activities",
        "Basic Number Theory",
        "Visual Learning",
        "Practice Exercises",
      ],
    },
    {
      id: 5,
      title: "MATHEMATICAL CONCEPTS",
      price: "₹299.00",
      pages: "64",
      cover: "../books/book5.png",
      insideImages: [
        "../books/book5.1.png",
        "../books/book5.2.png",
        "../books/book5.3.png",
        "../books/book5.4.png",
      ],
      description:
        "Advanced mathematical concepts with practical examples 🔹 Problem-solving techniques 🔹 Step-by-step solutions 🔹 Practice exercises",
      highlights: [
        "25 Math Topics",
        "Real-world Applications",
        "Detailed Solutions",
        "Practice Sets",
      ],
    },
    {
      id: 6,
      title: "SCIENCE EXPERIMENTS",
      price: "₹249.00",
      pages: "56",
      cover: "../books/book6.png",
      insideImages: [
        "../books/book6.1.png",
        "../books/book6.2.png",
        "../books/book6.3.png",
        "../books/book6.4.png",
      ],
      description:
        "Hands-on science experiments 🔹 Safety guidelines 🔹 Material lists 🔹 Expected outcomes 🔹 Scientific explanations",
      highlights: [
        "30 Experiments",
        "Safety First Approach",
        "Simple Materials",
        "Clear Instructions",
      ],
    },
    {
      id: 7,
      title: "LOGICAL REASONING",
      price: "₹199.00",
      pages: "48",
      cover: "../books/book7.png",
      insideImages: [
        "../books/book7.1.png",
        "../books/book7.2.png",
        "../books/book7.3.png",
        "../books/book7.4.png",
      ],
      description:
        "Develop critical thinking skills 🔹 Pattern recognition 🔹 Logical puzzles 🔹 Brain teasers",
      highlights: [
        "40 Logic Puzzles",
        "Critical Thinking",
        "Pattern Recognition",
        "Progressive Difficulty",
      ],
    },
    {
      id: 8,
      title: "ENVIRONMENTAL SCIENCE",
      price: "₹179.00",
      pages: "52",
      cover: "../books/book8.png",
      insideImages: [
        "../books/book8.1.png",
        "../books/book8.2.png",
        "../books/book8.3.png",
        "../books/book8.4.png",
      ],
      description:
        "Learn about environment 🔹 Ecosystem studies 🔹 Conservation tips 🔹 Practical activities",
      highlights: [
        "20 Eco Projects",
        "Conservation Tips",
        "Interactive Learning",
        "Real-world Examples",
      ],
    },
    {
      id: 9,
      title: "CREATIVE WRITING",
      price: "₹159.00",
      pages: "44",
      cover: "../books/book9.png",
      insideImages: [
        "../books/book9.1.png",
        "../books/book9.2.png",
        "../books/book9.3.png",
        "../books/book9.4.png",
      ],
      description:
        "Writing techniques 🔹 Story development 🔹 Character creation 🔹 Writing exercises",
      highlights: [
        "Writing Prompts",
        "Story Structure",
        "Character Development",
        "Creative Exercises",
      ],
    },
    {
      id: 10,
      title: "GEOGRAPHY EXPLORER",
      price: "₹229.00",
      pages: "60",
      cover: "../books/book10.png",
      insideImages: [
        "../books/book10.1.png",
        "../books/book10.2.png",
        "../books/book10.3.png",
        "../books/book10.4.png",
      ],
      description:
        "World geography 🔹 Map reading 🔹 Cultural studies 🔹 Interactive activities",
      highlights: [
        "Map Activities",
        "Cultural Studies",
        "Geographic Features",
        "World Exploration",
      ],
    },
    {
      id: 11,
      title: "VOCABULARY BUILDER",
      price: "₹149.00",
      pages: "40",
      cover: "../books/book11.png",
      insideImages: [
        "../books/book11.1.png",
        "../books/book11.2.png",
        "../books/book11.3.png",
        "../books/book11.4.png",
      ],
      description:
        "Word power 🔹 Usage examples 🔹 Practice exercises 🔹 Word games",
      highlights: [
        "Word Games",
        "Usage Examples",
        "Memory Techniques",
        "Daily Practice",
      ],
    },
    {
      id: 12,
      title: "HISTORY CHRONICLES",
      price: "₹189.00",
      pages: "58",
      cover: "../books/book12.png",
      insideImages: [
        "../books/book12.1.png",
        "../books/book12.2.png",
        "../books/book12.3.png",
        "../books/book12.4.png",
      ],
      description:
        "Historical events 🔹 Timeline activities 🔹 Important figures 🔹 Interactive learning",
      highlights: [
        "Timeline Studies",
        "Historical Figures",
        "Event Analysis",
        "Interactive Timeline",
      ],
    },
    {
      id: 13,
      title: "ART AND CRAFT",
      price: "₹169.00",
      pages: "46",
      cover: "../books/book13.png",
      insideImages: [
        "../books/book13.1.png",
        "../books/book13.2.png",
        "../books/book13.3.png",
        "../books/book13.4.png",
      ],
      description:
        "Creative projects 🔹 Step-by-step guides 🔹 Material lists 🔹 Skill development",
      highlights: [
        "DIY Projects",
        "Skill Building",
        "Creative Expression",
        "Basic Techniques",
      ],
    },
  ];

  const handleShowInterest = (e, bookTitle) => {
    e.stopPropagation();
    setShowInterestMessage(true);
    setTimeout(() => setShowInterestMessage(false), 3000);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedBook) {
      setCurrentImageIndex((prev) =>
        prev === selectedBook.insideImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedBook) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedBook.insideImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {showInterestMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Interest registered! We'll contact you soon.
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Educational Book Collection
          </h1>
          <p className="text-lg text-blue-600">
            Discover our comprehensive range of learning materials
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
          {[
            { icon: BookOpen, title: "Total Books", value: "13 Books" },
            { icon: User, title: "Author", value: "Dr. Pushpalatha G S" },
            { icon: Mail, title: "Contact", value: "perumabooks@gmail.com" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 border-2 border-blue-900"
            >
              <div className="bg-blue-100 p-3 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-blue-600 font-medium">
                  {stat.title}
                </p>
                <p className="text-lg font-semibold text-blue-900">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Books Heading */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-blue-900/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-b from-white to-blue-50 px-4 flex items-center space-x-2">
              <Star className="w-6 h-6 text-blue-900" />
              <h2 className="text-3xl font-bold text-blue-900">
                Featured Books
              </h2>
              <Star className="w-6 h-6 text-blue-900" />
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-blue-600">
              Explore our handpicked selection of educational materials
            </p>
          </div>
        </div>

        {/* Book Grid */}

        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-blue-900"
                onClick={() => {
                  setSelectedBook(book);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="p-4">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {book.title}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-blue-600 font-medium">{book.price}</p>
                    <p className="text-sm text-gray-600">Pages: {book.pages}</p>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {book.description}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleShowInterest(e, book.title)}
                      className="mt-4 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Show Interest
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    {selectedBook.title}
                  </h2>
                  <p className="text-lg text-blue-600">
                    {selectedBook.price} | {selectedBook.pages} Pages
                  </p>
                </div>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <img
                    src={selectedBook.insideImages[currentImageIndex]}
                    alt={`Page ${currentImageIndex + 1}`}
                    className="w-full rounded-lg shadow-md"
                  />
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                    <button
                      onClick={prevImage}
                      className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-blue-900" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-blue-900" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-700">{selectedBook.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Highlights
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedBook.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-700">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={(e) => handleShowInterest(e, selectedBook.title)}
                      className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Show Interest in This Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookGallery;
