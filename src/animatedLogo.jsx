import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./assests/PRM_Logo-removebg-preview.png";
import Logo2 from "./assests/full-logo-peruma.png";

const AnimatedLogo = () => {
  const [currentLogo, setCurrentLogo] = useState(0);

  const logos = [
    {
      src: Logo,
      alt: "PRM Logo",
      width: "w-20", // Original logo width
    },
    {
      src: Logo2,
      alt: "Secondary Logo",
      width: "w-32", // Increased width for second logo
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLogo((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? 20 : -20,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotate: direction < 0 ? 20 : -20,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const direction = currentLogo === 0 ? -1 : 1;

  return (
    <div className="relative h-16 w-32">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentLogo}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          <RouterLink to="/">
            <img
              src={logos[currentLogo].src}
              alt={logos[currentLogo].alt}
              className={`object-contain ${logos[currentLogo].width}`}
            />
          </RouterLink>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLogo;
