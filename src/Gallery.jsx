import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const images = [
    "../gallery/pic3.jpg",
    "../gallery/pic1.jpg",
    "../gallery/pic2.jpg",
    "../gallery/pic4.jpg",
    "../gallery/pic5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8 w-full relative">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
              Gallery
            </h1>
            <p className="text-gray-600">
              Capturing Moments, Sharing Experiences
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-[500px] object-cover cursor-pointer"
                onClick={() => openPopup(images[currentImageIndex])}
              />

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                <ChevronRight />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {popupImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                onClick={closePopup}
              >
                <div className="relative max-w-full max-h-full">
                  <img
                    src={popupImage}
                    alt="Popup"
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 bg-white/20 text-white p-2 rounded-full"
                  >
                    <X />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
