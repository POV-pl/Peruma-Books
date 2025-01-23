import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

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
    <div className="md:min-h-fit bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-16 mt-8 relative">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Sidebar Thumbnails */}
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
                    ? "border-black-500 shadow-2xl"
                    : "border-black-700 opacity-50"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
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
            className="relative md:col-span-10 bg-black/30 rounded-2xl p-4 shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[500px] md:h-[700px] object-cover rounded-xl"
                  onClick={() => setPopupImage(images[currentImageIndex])}
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500/50 hover:bg-blue-500/70 text-white p-3 rounded-full"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500/50 hover:bg-orange-500/70 text-white p-3 rounded-full"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Indicator Dots */}
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
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
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
                src={popupImage}
                alt="Fullscreen view"
                className="max-w-full max-h-[90vh] object-contain rounded-xl"
              />
              <div className="absolute top-4 right-4 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleFullscreen}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
                >
                  <Maximize2 />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPopupImage(null)}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
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
