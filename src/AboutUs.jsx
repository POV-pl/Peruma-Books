import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Sprout, MapPin, Compass, Brain, Network } from "lucide-react";
import Logo from "./assests/PRM_Logo-removebg-preview.png";

const AboutUs = () => {
  const benefits = [
    {
      title: "Active Engagement",
      description:
        "Students actively participate in the learning process. This approach enhances understanding and retention through hands-on activities.",
      icon: Rocket,
    },
    {
      title: "Holistic Development",
      description:
        "We promote comprehensive growth across cognitive, physical, social, and emotional domains. Our collaborative learning experiences support well-rounded student development.",
      icon: Sprout,
    },
    {
      title: "Real-Life Application",
      description:
        "Our activities simulate authentic real-world scenarios. Students learn to connect classroom knowledge with practical, meaningful applications.",
      icon: MapPin,
    },
    {
      title: "Student-Centered Learning",
      description:
        "Our approach prioritizes individual needs and interests. We empower students to take ownership of their unique learning journey.",
      icon: Compass,
    },
    {
      title: "Critical Thinking",
      description:
        "Through carefully designed engaging activities, students develop essential problem-solving skills. We focus on nurturing analytical thinking and intellectual curiosity.",
      icon: Brain,
    },
    {
      title: "Collaborative Spirit",
      description:
        "Our Innovative activity books foster robust teamwork environments. Students develop crucial interpersonal communication skills through structured group activities.",
      icon: Network,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setIsVisible(true);
    }, 1000);

    const benefitsTimer = setInterval(() => {
      if (showContent) {
        setCurrentIndex((prev) => (prev + 1) % benefits.length);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(benefitsTimer);
    };
  }, [showContent]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden font-sans">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src={Logo}
          alt="Background Logo"
          className="w-4/5 max-w-3xl object-contain opacity-10"
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 pt-16 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-8 mb-16">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={Logo}
              alt="PRM Logo"
              className="h-32 md:h-40 object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-800 mb-8">
              Welcome to PERUMA
            </h1>
            <p className="text-xl text-gray-600 mb-10 px-4 leading-relaxed font-serif">
              We specialize in creating innovative educational activity books
              for Schools, NGOs, and Distributers. Our focus is on
              Activity-Based Learning (ABL) that makes education engaging,
              interactive, and meaningful.
            </p>
          </motion.div>
        </div>

        {showContent && (
          <>
            <div className="relative h-auto min-h-[24rem] flex justify-center items-center overflow-hidden px-4">
              <AnimatePresence initial={false} custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full max-w-lg"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full">
                    <div className="mb-6 md:mb-8 flex justify-center">
                      {React.createElement(benefits[currentIndex].icon, {
                        size: 48, // Reduced size for mobile
                        className: "text-blue-700 stroke-[1.5]",
                      })}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-800 text-center font-serif  mb-4 md:mb-6">
                      {benefits[currentIndex].title}
                    </h4>
                    <p className="text-base md:text-xl text-gray-700  leading-relaxed font-serif text-center font-medium">
                      {benefits[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-blue-500 w-6"
                      : "bg-gray-300 hover:bg-blue-300"
                  }`}
                  aria-label={`View benefit ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AboutUs;
