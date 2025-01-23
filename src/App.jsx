import React from "react";
import Header from "./header";
import AboutUs from "./AboutUs";
import Footer from "./footer";
import Logo from "./assests/PRM_Logo-removebg-preview.png";
import Logo2 from "./assests/full-logo-peruma.png";
import BookGallery from "./Books";
import WorkshopGallery from "./workshops";
import CollaborationForm from "./collaborate";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      {/* Main background with subtle gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
        <div
          className="absolute inset-0 opacity-[0.03] bg-center bg-no-repeat bg-contain hidden lg:block"
          style={{
            backgroundImage: `url(${Logo2})`,
          }}
        />
      </div>

      <main className="flex-1">
        <section className="relative pt-24 md:pt-16">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Content Side */}
              <div className="text-center lg:text-left space-y-6">
                {/* Logo for Mobile */}
                <div className="flex justify-center lg:hidden animate-fade-in">
                  <img
                    src={Logo}
                    alt="PERUMA Logo"
                    className="h-28 w-auto object-contain"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-title">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                      PERUMA
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 animate-content">
                    Innovative Activity Books
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 animate-content-delayed">
                    Transform Learning Through Activity
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start pt-4">
                  <Link
                    to={"books"}
                    smooth
                    duration={500}
                    offset={-80}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-medium 
                    shadow-lg transition-all duration-300 animate-button
                    hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer"
                  >
                    Explore Our Collection
                  </Link>
                </div>
              </div>

              {/* Logo Side - Desktop Only */}
              <div className="hidden lg:block relative">
                <div className="relative w-full h-[400px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-2xl blur-3xl transform rotate-6" />
                  <img
                    src={Logo}
                    alt="PERUMA Logo"
                    className="h-64 w-auto object-contain relative z-10 animate-float"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="relative z-10 bg-blue-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { number: "13+", label: "Educational Books" },
                  { number: "1000+", label: "Happy Students" },
                  { number: "100+", label: "Schools" },
                  { number: "15+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 transform transition-all duration-300 hover:-translate-y-1 animate-stats"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="px-4">
          <AboutUs />
        </section>
      </main>
      <section id="books" className="px-4">
        <BookGallery />
      </section>
      <section id="workshops" className="px-4">
        <WorkshopGallery />
      </section>
      <section id="collaborate" className="px-4">
        <CollaborationForm />
      </section>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-title {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out forwards;
        }

        .animate-content {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out 0.2s forwards;
        }

        .animate-content-delayed {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out 0.3s forwards;
        }

        .animate-button {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease-out 0.4s forwards;
        }

        .animate-stats {
          opacity: 0;
          animation: fadeSlideUp 0.6s ease-out forwards;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default App;
