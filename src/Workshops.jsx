import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Users,
  Clock,
  MapPin,
} from "lucide-react";

const WorkshopGallery = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const workshops = [
    {
      id: 1,
      title: "Binary Coding Activities",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok1.png",
      images: [
        "wok1.png",
        "../workshops/web-dev-2.png",
        "../workshops/web-dev-3.png",
      ],
      description:
        "Intensive 3-day bootcamp covering modern web development technologies including React, Node.js, and MongoDB. Perfect for beginners and intermediate developers looking to upgrade their skills.",
      date: "March 15-17, 2025",
      capacity: 30,
      duration: "3 days",
      location: "Tech Hub, Downtown",
    },
    {
      id: 2,
      title: "SUDOKU",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok2.png",
      images: ["wok2.png", "../workshops/ai-ml-2.png"],
      description:
        "Deep dive into artificial intelligence and machine learning fundamentals. Learn about neural networks, deep learning, and practical applications in industry.",
      date: "April 5-6, 2025",
      capacity: 25,
      duration: "2 days",
      location: "Innovation Center",
    },
    {
      id: 3,
      title: "Math Puzzles",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok3.png",
      images: ["wok3.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 4,
      title: "Numbers",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok4.png",
      images: ["wok4.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 5,
      title: "Cryptic Messages",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok5.png",
      images: ["wok5.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 6,
      title: "Graphs",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok6.png",
      images: ["wok6.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 7,
      title: "Inspiring Personalities",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok7.png",
      images: ["wok7.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 8,
      title: "Construct Words",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok8.png",
      images: ["wok8.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 9,
      title: "Hidden Words",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok9.png",
      images: ["wok9.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 10,
      title: "Mandala Art",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok10.png",
      images: ["wok10.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 11,
      title: "Mandala Colouring Art",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok11.png",
      images: ["wok11.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 12,
      title: "Trace The Patterns",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok12.png",
      images: ["wok12.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
    {
      id: 13,
      title: "Wisdom in Words",
      instructor: "Dr. Pushpalatha G S",
      cover: "../workshop/wok13.png",
      images: ["wok13.png", "../workshops/ux-2.png"],
      description:
        "Master the art of user experience design. Learn about user research, wireframing, prototyping, and modern design tools used in industry.",
      date: "April 20, 2025",
      capacity: 20,
      duration: "1 day",
      location: "Design Studio",
    },
  ];

  const scroll = (direction) => {
    const gallery = document.getElementById("workshop-gallery");
    const scrollAmount = isMobile ? 200 : 300;
    if (gallery) {
      gallery.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const nextImage = () => {
    if (selectedWorkshop) {
      setCurrentImageIndex((prev) =>
        prev === selectedWorkshop.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedWorkshop) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedWorkshop.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8 w-full relative">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
              Upcoming Workshops
            </h1>
            <p className="text-gray-600">
              Expand your skills with our expert-led workshops
            </p>
          </div>

          <div className="relative mb-12">
            <div
              id="workshop-gallery"
              className="flex overflow-x-auto scroll-smooth gap-6 py-8 px-4 no-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: isMobile ? "x mandatory" : "none",
              }}
            >
              {workshops.map((workshop, index) => (
                <div key={index} className="flex-none scroll-snap-align-start">
                  <div
                    className="relative group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
                    onClick={() => {
                      setSelectedWorkshop(workshop);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <div className="relative">
                      <img
                        src={workshop.cover}
                        alt={workshop.title}
                        className="w-72 h-48 object-cover transform transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">
                        {workshop.title}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{workshop.capacity} seats</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-600">
                          {workshop.price}
                        </span>
                        <div className="flex justify-center items-center w-full">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!isMobile && (
              <>
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white z-10 group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white z-10 group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "Total Participants",
                value: "500+",
                color: "blue",
              },
              {
                icon: Calendar,
                title: "Workshops",
                value: workshops.length,
                color: "green",
              },
              {
                icon: Clock,
                title: "Hours of Content",
                value: "100+",
                color: "blue",
              },
              { icon: MapPin, title: "Locations", value: "3", color: "green" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">
                      {stat.title}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
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
              About Our Workshops
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our workshops are designed to provide immersive, hands-on learning
              experiences led by industry experts. Each workshop combines
              theoretical knowledge with practical applications, ensuring
              participants gain real-world skills they can immediately apply in
              their careers. From cutting-edge technology to design and
              innovation, our diverse range of workshops caters to professionals
              at all levels seeking to advance their expertise and stay ahead in
              their fields
            </p>
          </div>
        </div>
      </main>

      {selectedWorkshop && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedWorkshop(null);
          }}
        >
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-auto max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedWorkshop.title}
                  </h2>
                  <p className="text-xl text-gray-600 mt-1">
                    by {selectedWorkshop.instructor}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {selectedWorkshop.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {selectedWorkshop.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {selectedWorkshop.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {selectedWorkshop.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {selectedWorkshop.capacity} participants max
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative aspect-video">
                    <img
                      src={selectedWorkshop.images[currentImageIndex]}
                      alt={`Workshop ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>

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

                  <div className="flex justify-center gap-2 mt-4">
                    {selectedWorkshop.images.map((_, index) => (
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

              <div className="flex justify-centre mt-6">
                <div className="flex justify-center items-center w-full">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                    Register Now - {selectedWorkshop.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopGallery;
