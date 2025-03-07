import React, { useState, useEffect } from "react";
import MobileImage1 from "./assests/1.png";
import MobileImage2 from "./assests/2.png";
import MobileImage3 from "./assests/3.png";
import MobileImage4 from "./assests/4.png";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mobileImages = [MobileImage1, MobileImage2, MobileImage3, MobileImage4];
  // const largeImages = [LargeImage1, LargeImage2, LargeImage3, LargeImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mobileImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-[240px] sm:h-[400px] md:h-[600px] lg:h-[800px] 
                    max-h-[80vh] 
                    overflow-hidden 
                    border-y-2 border-orange-600"
    >
      {mobileImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform  ${
            index === currentIndex
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-110 translate-x-full"
          }`}
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={mobileImages[index]} />
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain sm:object-cover"
            />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
