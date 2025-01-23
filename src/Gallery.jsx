import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ImageIcon,
} from "lucide-react";

const Gallery = () => {
  // Update image paths and add descriptive alt texts
  const images = [
    { src: "../gallery/pic3.jpg", alt: "Scenic Landscape" },
    { src: "../gallery/pic1.jpg", alt: "Urban Exploration" },
    { src: "../gallery/pic2.jpg", alt: "Artistic Composition" },
    { src: "../gallery/pic4.jpg", alt: "Nature's Beauty" },
    { src: "../gallery/pic5.jpg", alt: "Modern Architecture" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupImage, setPopupImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextImage, 5000);
    return () => clearInterval(slideInterval);
  }, [nextImage]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="bg-white text-gray-800 md:min-h-screen sm:min-h-fit flex items-center justify-center p-4 relative">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Light Mode Sidebar Thumbnails */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block md:col-span-2 space-y-4"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer border-4 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-300 opacity-60 hover:opacity-100"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-24 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Gallery Area */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative md:col-span-10 bg-gray-100 rounded-2xl p-4 shadow-md"
          >
            <div className="relative overflow-hidden rounded-xl">
              {/* Empty state handling */}
              {images.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px] bg-gray-200 rounded-xl">
                  <ImageIcon size={64} className="text-gray-500 mb-4" />
                  <p className="text-gray-600">No images available</p>
                </div>
              ) : (
                <>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-[500px] md:h-[700px] object-cover rounded-xl"
                      onClick={() => setPopupImage(images[currentImageIndex])}
                    />
                  </AnimatePresence>

                  {/* Navigation Buttons with Improved Contrast */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md text-gray-700 p-3 rounded-full"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md text-gray-700 p-3 rounded-full"
                  >
                    <ChevronRight size={24} />
                  </motion.button>

                  {/* Indicator Dots with Light Mode Colors */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 1 }}
                        animate={{
                          scale: index === currentImageIndex ? 1.5 : 1,
                          opacity: index === currentImageIndex ? 1 : 0.5,
                        }}
                        className={`h-2 w-2 rounded-full ${
                          index === currentImageIndex
                            ? "bg-blue-600"
                            : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup Modal with Light Mode Styling */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/90 flex items-center justify-center p-4"
            onClick={() => setPopupImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isFullscreen ? 1 : 0.9,
                opacity: 1,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-full max-h-full"
            >
              <img
                src={popupImage.src}
                alt={popupImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleFullscreen}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md"
                >
                  <Maximize2 />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPopupImage(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md"
                >
                  <X />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
