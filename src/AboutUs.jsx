import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "./assests/PRM_Logo-removebg-preview.png";

const AboutUs = () => {
  const benefits = [
    {
      title: "Active Engagement",
      description: "Students actively participate in the learning process, enhancing understanding and retention through hands-on activities.",
      icon: "🎯"
    },
    {
      title: "Holistic Development",
      description: "We promote cognitive, physical, social, and emotional growth through collaborative learning experiences.",
      icon: "🌱"
    },
    {
      title: "Real-Life Application",
      description: "Our activities simulate real-world scenarios, helping students connect classroom learning with practical applications.",
      icon: "🌍"
    },
    {
      title: "Student-Centered Learning",
      description: "Our approach focuses on individual needs and interests, empowering students to take charge of their learning journey.",
      icon: "👤"
    },
    {
      title: "Critical Thinking",
      description: "Through engaging activities, students develop essential problem-solving and analytical skills.",
      icon: "🧩"
    },
    {
      title: "Collaborative Spirit",
      description: "Our books foster teamwork and develop crucial interpersonal communication skills through group activities.",
      icon: "🤝"
    }
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
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src={Logo}
          alt="Background Logo"
          className="w-4/5 max-w-3xl object-contain opacity-5"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 pt-16 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <motion.div
            className="flex justify-center mb-8"
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Welcome to PERUMA</h1>
            <p className="text-lg text-gray-600 mb-8 px-4">
              We specialize in creating innovative educational materials for Schools, NGOs, and Publishers, 
              emphasizing Activity-Based Learning (ABL) that makes education engaging, interactive, and meaningful.
            </p>
          </motion.div>
        </div>

        {/* Rotating Benefits Section */}
        {showContent && (
          <>
            <div className="relative h-96 flex justify-center items-center overflow-hidden">
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
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full max-w-lg"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl mb-6 flex justify-center">{benefits[currentIndex].icon}</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{benefits[currentIndex].title}</h4>
                    <p className="text-gray-600 text-lg">{benefits[currentIndex].description}</p>
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
                      ? 'bg-blue-500 w-6'
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                  aria-label={`View benefit ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Mission Statement */}
      </motion.div>
    </div>
  );
};

export default AboutUs;