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
      title: "Binary Coding Activities",
      author: "Dr. Pushpa Latha",
      cover: "../books/book1.png",
      insideImages: [
        "../books/book1.1.png",
        "../books/book1.2.png",
        "../books/book1.3.png",
      ],
      description:
        "Binary Coding Activities is an engaging and comprehensive book designed to introduce readers to the fascinating world of binary coding. Perfect for beginners, educators, and enthusiasts, this book combines foundational concepts with interactive learning to make coding fun and accessible.",
    },
    {
      id: 2,
      title: "GRAPHS",
      author: "Dr. Pushpa Latha",
      cover: "../books/book2.png",
      insideImages: ["../books/book2.1.png", "../books/book2.2.png"],
      description:
        "Mastering Graphs is an educational book crafted to help learners understand and apply graphing concepts effectively. With a structured approach, this book simplifies the subject, making it ideal for students and educators alike.",
    },
    {
      id: 3,
      title: "Inspiring Personalities",
      author: "Dr. Pushpa Latha",
      cover: "../books/book3.png",
      insideImages: ["../books/book3.1.png", "../books/book3.2.png"],
      description:
        "Inspiring Personalities is a captivating collection of stories about remarkable individuals who have made a lasting impact on the world. This book is designed to ignite curiosity, instill values, and motivate readers to pursue their dreams with determination.",
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
                        <p className="text-sm opacity-80">{book.author}</p>
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
                color: "blue",
              },
              {
                icon: User,
                title: "Author",
                value: "Dr. Pushpa Latha",
                color: "green",
              },
              {
                icon: Mail,
                title: "Contact",
                value: "info@example.com",
                color: "purple",
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
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {stat.title}
                    </h3>
                    <p
                      className={`text-lg sm:text-xl font-medium text-${stat.color}-600`}
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
            <p className="text-gray-600 leading-relaxed">
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
                  <p className="text-xl text-gray-600 mt-1">
                    {selectedBook.author}
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
