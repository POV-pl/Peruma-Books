import React, { useState, useEffect } from "react";
import Image1 from "./assests/1.png";
import Image2 from "./assests/2.png";
import Image3 from "./assests/3.png";
import Image4 from "./assests/4.png";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Image1, Image2, Image3, Image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
                    max-h-[80vh] 
                    overflow-hidden 
                    border-2 border-orange-600"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentIndex
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-110 translate-x-full"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain sm:object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
