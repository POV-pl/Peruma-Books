import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const BookGallery = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    const scrollAmount = window.innerWidth < 640 ? 200 : 300;
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
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Featured Books
          </h1>
          <p className="text-gray-600">
            Explore our collection of educational books
          </p>
        </div>

        {/* Book Gallery */}
        <div className="relative">
          <div
            id="book-gallery"
            className="flex overflow-x-auto scroll-smooth gap-8 py-8 px-4 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-none transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                onClick={() => {
                  setSelectedBook(book);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative group cursor-pointer">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-48 sm:w-56 h-72 sm:h-80 object-contain rounded-lg shadow-lg transform transition-shadow duration-300 group-hover:shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Enhanced Book Detail Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBook(null);
          }}
        >
          <div className="bg-white rounded-2xl p-6 max-w-5xl w-full mx-auto max-h-[90vh] overflow-y-auto animate-modalEntry">
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
