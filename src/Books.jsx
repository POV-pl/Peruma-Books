import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
  User,
  Mail,
} from "lucide-react";

const BookGallery = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const books = [
    {
      id: 1,
      title: "BINARY COADING ACTIVITES",
      price: "₹. 399.00 | No.of Pages - 48",
      cover: "../books/book1.png",
      insideImages: [
        "../books/book1.1.png",
        "../books/book1.2.png",
        "../books/book1.3.png",
        "../books/book1.4.png",
      ],
      description:
        "Coading concepts 🔹 Instructions 🔹 Quiz 🔹 Answers 🔹 120 Activites 🔹 Illustrations 🔹 Self-assessment Activity",
    },
    {
      id: 2,
      title: "GRAPHS",
      price: "₹. 199.00 | No.of Pages - 36",
      cover: "../books/book2.png",
      insideImages: [
        "../books/book2.1.png",
        "../books/book2.2.png",
        "../books/book2.3.png",
        "../books/book2.4.png",
      ],
      description:
        "Concepts of graphs🔹 Instructions 🔹 Quiz 🔹 Answers 🔹 16 Activites 🔹 Illustrations 🔹 4 types of graphs",
    },
    {
      id: 3,
      title: "INSPIRING PERSONALITES",
      price: "₹. 199.00 | No.of Pages - 72",
      cover: "../books/book3.png",
      insideImages: [
        "../books/book3.1.png",
        "../books/book3.2.png",
        "../books/book3.3.png",
        "../books/book3.4.png",
      ],
      description:
        "Covers 30 Personalites 🔹 Highlights eduction, field of work, lifestyle, achievements, and legacy 🔹 Quiz 🔹 Answers",
    },
    {
      id: 4,
      title: "NUMBERS",
      price: "₹. 99.00 | No.of Pages - 32",
      cover: "../books/book4.png",
      insideImages: [
        "../books/book4.1.png",
        "../books/book4.2.png",
        "../books/book4.3.png",
        "../books/book4.4.png",
      ],
      description:
        "Number Concepts 🔹 Instructions 🔹 Answers 🔹 13 Activites 🔹 Illustrations",
    },
    {
      id: 5,
      title: "CRYPTIC MESSAGES",
      price: "₹. 99.00 | No.of Pages - 32",
      cover: "../books/book5.png",
      insideImages: [
        "../books/book5.1.png",
        "../books/book5.2.png",
        "../books/book5.3.png",
        "../books/book5.4.png",
      ],
      description:
        "Secret Code Concepts 🔹 Instructions 🔹 Answers 🔹 28 Activites 🔹 Illustrations",
    },
    {
      id: 6,
      title: "MATH PUZZLES",
      price: "₹. 99.00 | No.of Pages - 48",
      cover: "../books/book6.png",
      insideImages: [
        "../books/book6.1.png",
        "../books/book6.2.png",
        "../books/book6.3.png",
        "../books/book6.4.png",
      ],
      description:
        "Math/Problem Solving Concepts 🔹 Instructions 🔹 Answers 🔹 50 Activites 🔹 Illustrations 🔹 Self-assessment Activity",
    },
    {
      id: 7,
      title: "WISDOM IN WORDS",
      price: "₹. 99.00 | No.of Pages - 36",
      cover: "../books/book7.png",
      insideImages: [
        "../books/book7.1.png",
        "../books/book7.2.png",
        "../books/book7.3.png",
        "../books/book7.4.png",
      ],
      description:
        "Concept of motivational quotes 🔹 90+ Quotes 🔹 Answers 🔹 Quiz",
    },
    {
      id: 8,
      title: "SUDOKU",
      price: "₹. 79.00 | No.of Pages - 32",
      cover: "../books/book8.png",
      insideImages: [
        "../books/book8.1.png",
        "../books/book8.2.png",
        "../books/book8.3.png",
        "../books/book8.4.png",
      ],
      description:
        "Number Game / Problem solving🔹 Instructions 🔹 Concepts 🔹 Answers 🔹 24 Activites 🔹 Easy, Medium & Hard Levels🔹 Self-assessment Activity",
    },
    {
      id: 9,
      title: "MANDALA Colouring Art",
      price: "₹. 79.00 | No.of Pages - 36",
      cover: "../books/book9.png",
      insideImages: [
        "../books/book9.1.png",
        "../books/book9.2.png",
        "../books/book9.3.png",
        "../books/book9.4.png",
      ],
      description:
        "Colouring Concepts 🔹 Instructions 🔹 34 Activites 🔹 Self-assessment Activity",
    },
    {
      id: 10,
      title: "MANDALA for Balancing Hands",
      price: "₹. 79.00 | No.of Pages - 32",
      cover: "../books/book10.png",
      insideImages: [
        "../books/book10.1.png",
        "../books/book10.2.png",
        "../books/book10.3.png",
        "../books/book10.4.png",
      ],
      description:
        "Motor Skill improvement and Colouring Concepts 🔹 Instructions 🔹 Easy, Medium and Hard levels 🔹 30 Activites 🔹 self-assessment Activity",
    },
    {
      id: 11,
      title: "HIDDEN WORDS",
      price: "₹. 79.00 | No.of Pages - 28",
      cover: "../books/book11.png",
      insideImages: [
        "../books/book11.1.png",
        "../books/book11.2.png",
        "../books/book11.3.png",
        "../books/book11.4.png",
      ],
      description:
        "Words search Concepts 🔹 Instructions 🔹 Answers 🔹 26 Activites 🔹 self-assessment Activity",
    },
    {
      id: 12,
      title: "TRACE THE PATTERNS",
      price: "₹. 79.00 | No.of Pages - 28",
      cover: "../books/book12.png",
      insideImages: [
        "../books/book12.1.png",
        "../books/book12.2.png",
        "../books/book12.3.png",
        "../books/book12.4.png",
      ],
      description: "Handwriting improvement Concepts 🔹 50+ Activites",
    },
    {
      id: 13,
      title: "CONSTRUCT WORDS",
      price: "₹. 79.00 | No.of Pages - 32",
      cover: "../books/book13.png",
      insideImages: [
        "../books/book13.1.png",
        "../books/book13.2.png",
        "../books/book13.3.png",
        "../books/book13.4.png",
      ],
      description:
        "Word Formation Concepts 🔹 Instructions 🔹 Answers 🔹 30 Activites 🔹 sel-assessment Activity",
    },
  ];

  const scroll = (direction) => {
    const gallery = document.getElementById("book-gallery");
    const scrollAmount = isMobile ? 200 : 300;
    if (gallery) {
      gallery.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const nextImage = () => {
    if (selectedBook) {
      setCurrentImageIndex((prev) =>
        prev === selectedBook.insideImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedBook) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedBook.insideImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8 w-full relative">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 ">
              Featured Books
            </h1>
            <p className="text-gray-600">
              Explore our collection of educational books
            </p>
          </div>

          {/* Enhanced Mobile-Friendly Gallery */}
          <div className="relative mb-12">
            <div
              id="book-gallery"
              className="flex overflow-x-auto scroll-smooth gap-4 sm:gap-8 py-8 px-4 no-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: isMobile ? "x mandatory" : "none",
              }}
            >
              {books.map((book, index) => (
                <div
                  key={book.id}
                  className="flex-none scroll-snap-align-start"
                  // style={{
                  //   transform: `translateY(${
                  //     Math.sin(scrollPosition / 100 + index) * 10
                  //   }px)`,
                  //   transition: "transform 0.3s ease-out",
                  // }}
                >
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => {
                      setSelectedBook(book);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-40 sm:w-48 md:w-56 h-60 sm:h-72 md:h-80 object-contain rounded-lg shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center p-4">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg">{book.title}</h3>
                        <p className="text-blue-200 text-sm opacity-80">
                          {book.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation Buttons */}
            {!isMobile && (
              <>
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white z-10 group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition-colors" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white z-10 group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition-colors" />
                </button>
              </>
            )}
          </div>

          {/* Stats Section with Enhanced Mobile Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {[
              {
                icon: BookOpen,
                title: "Total Books",
                value: books.length,
              },
              {
                icon: User,
                title: "Author",
                value: "Dr. Pushpalatha G S",
              },
              {
                icon: Mail,
                title: "Contact",
                value: "perumabooks@gmail.com",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex items-center space-x-4">
                  <stat.icon className={`w-8 h-8 text-blue-600`} />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {stat.title}
                    </h3>
                    <p
                      className={`text-lg sm:text-xl font-medium text-blue-600`}
                    >
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* About Section with Animation */}
          <div
            className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-12 transform transition-all duration-500 hover:shadow-lg"
            style={{
              opacity: Math.min(1, (scrollPosition - 100) / 400),
              transform: `translateY(${Math.max(
                0,
                50 - scrollPosition / 10
              )}px)`,
            }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About Our Books
            </h2>
            <p className="text-gray-600 leading-relaxed font-serif">
              Our educational books are carefully crafted to provide
              comprehensive learning experiences across various subjects. From
              coding to mathematics, and from inspiring stories to practical
              knowledge, each book is designed to engage and enlighten readers
              of all ages.
            </p>
          </div>
        </div>
      </main>

      {/* Enhanced Book Detail Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBook(null);
          }}
        >
          <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-5xl w-full mx-auto max-h-[90vh] overflow-y-auto animate-modalEntry">
            <div className="flex flex-col space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedBook.title}
                  </h2>
                  <p className="text-xl text-orange-600 mt-1">
                    {selectedBook.price}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedBook.description}
              </p>

              {/* Image Carousel */}
              <div className="relative mt-6">
                <div className="relative aspect-video">
                  <img
                    src={selectedBook.insideImages[currentImageIndex]}
                    alt={`Page ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                  />
                </div>

                {/* Image Navigation */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-white/80 shadow-lg transform transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-white/80 shadow-lg transform transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Image Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {selectedBook.insideImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? "bg-blue-600 w-4"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
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
