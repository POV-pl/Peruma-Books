import { Mail, Phone, MessageCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Users,
  Clock,
  MapPin,
  Folder,
} from "lucide-react";

const WorkshopGallery = () => {
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const workshopPackages = [
    {
      id: 1,
      title: "Prajñā",
      cover: "../workshop/wok1.png",
      description:
        "Includes 6 innovative activities: Hidden words, Construct words, Inspiring Personalities, Wisdom in words, Trace the patterns, Mandala art",
      workshops: [
        {
          id: 1,
          title: "Binary Coding Activities",
          instructor: "Dr. Pushpalatha G S",
          cover: "../workshop/wok1.png",
          images: [
            "../workshop/wok1.png",
            "../workshop/wok1.png",
            "../workshops/web-dev-3.png",
          ],
          description:
            "Intensive workshop exploring binary coding and computational thinking through interactive activities.",
          date: "March 15-17, 2025",
          capacity: 30,
          duration: "3 days",
          location: "Tech Hub, Downtown",
          price: "$99",
        },
        {
          id: 1,
          title: "Binary Coding Activities",
          instructor: "Dr. Pushpalatha G S",
          cover: "../workshop/wok1.png",
          images: [
            "../workshop/wok1.png",
            "../workshop/wok1.png",
            "../workshops/web-dev-3.png",
          ],
          description:
            "Intensive workshop exploring binary coding and computational thinking through interactive activities.",
          date: "March 15-17, 2025",
          capacity: 30,
          duration: "3 days",
          location: "Tech Hub, Downtown",
          price: "$99",
        }, // Other workshops (unchanged)
      ],
    },
    {
      id: 2,
      title: "Prameya",
      cover: "../workshop/package1-cover.png",
      description:
        "Includes 6 innovative activities: Sudoku, Numbers, Math Puzzles, Graphs, Cryptic Messages, BCA",
      workshops: [
        {
          id: 1,
          title: "Binary Coding Activities",
          instructor: "Dr. Pushpalatha G S",
          cover: "../workshop/wok1.png",
          images: [
            "../workshop/wok1.png",
            "../workshop/wok1.png",
            "../workshops/web-dev-3.png",
          ],
          description:
            "Intensive workshop exploring binary coding and computational thinking through interactive activities.",
          date: "March 15-17, 2025",
          capacity: 30,
          duration: "3 days",
          location: "Tech Hub, Downtown",
          price: "$99",
        },
      ],
    },
  ];

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
              Workshop
            </h1>
            <p className="text-gray-600">
              Explore comprehensive learning experiences tailored to your
              interests
            </p>
          </div>

          {/* Grid Layout for Workshop Packages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {workshopPackages.map((workshopPackage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                onClick={() => {
                  setSelectedPackage(workshopPackage);
                  setSelectedWorkshop(null);
                }}
              >
                <div className="relative">
                  <img
                    src={workshopPackage.cover}
                    alt={workshopPackage.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-2xl text-gray-800 mb-3">
                    {workshopPackage.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {workshopPackage.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Folder className="w-5 h-5" />
                      <span className="text-sm">
                        {workshopPackage.workshops.length} Workshops
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Package Details Modal */}
          {selectedPackage && (
            <div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedPackage(null);
              }}
            >
              <div className="bg-white rounded-2xl p-6 max-w-5xl w-full mx-auto max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      {selectedPackage.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {selectedPackage.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPackage(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {selectedPackage.workshops.map((workshop) => (
                    <div
                      key={workshop.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                      onClick={() => {
                        setSelectedWorkshop(workshop);
                        setCurrentImageIndex(0);
                      }}
                    >
                      <img
                        src={workshop.cover}
                        alt={workshop.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">
                          {workshop.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                          {workshop.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-600 font-bold">
                            {workshop.price}
                          </span>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{workshop.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Workshop Details Modal */}
          {selectedWorkshop && (
            <div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedWorkshop(null);
              }}
            >
              <div className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-auto max-h-[90vh] overflow-y-auto">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image Gallery Section */}
                  <div className="w-full md:w-2/3 relative">
                    {selectedWorkshop.images &&
                      selectedWorkshop.images.length > 0 && (
                        <div className="relative">
                          <img
                            src={selectedWorkshop.images[currentImageIndex]}
                            alt={`${selectedWorkshop.title} image ${
                              currentImageIndex + 1
                            }`}
                            className="w-full h-96 object-cover rounded-lg"
                          />
                          {selectedWorkshop.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full transition"
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full transition"
                              >
                                <ChevronRight className="w-6 h-6" />
                              </button>
                            </>
                          )}
                          {selectedWorkshop.images.length > 1 && (
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                              {selectedWorkshop.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full ${
                                    index === currentImageIndex
                                      ? "bg-blue-600"
                                      : "bg-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                  </div>

                  {/* Workshop Details Section */}
                  <div className="w-full md:w-1/3 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {selectedWorkshop.title}
                      </h2>
                      <p className="text-gray-600">
                        {selectedWorkshop.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>Instructor: {selectedWorkshop.instructor}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span>{selectedWorkshop.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span>Duration: {selectedWorkshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span>Location: {selectedWorkshop.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>
                          Capacity: {selectedWorkshop.capacity} participants
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-blue-600">
                        {selectedWorkshop.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default WorkshopGallery;
