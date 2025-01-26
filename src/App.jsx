import React from "react";
import Header from "./header";
import AboutUs from "./AboutUs";
import Footer from "./footer";
import Logo from "./assests/PRM_Logo-removebg-preview.png";
import Logo2 from "./assests/full-logo-peruma.png";
import BookGallery from "./Books";
import WorkshopGallery from "./workshops";
import CollaborationForm from "./collaborate";
import Gallery from "./Gallery";
import ImageCarousel from "./imagescrol";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      {/* Main background with subtle gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
        <div
          className="absolute inset-0 opacity-[0.04] bg-center bg-no-repeat bg-contain block lg:block"
          style={{
            backgroundImage: `url(${Logo2})`,
          }}
        />
      </div>

      <main className="flex-1 lg:mt-16">
        <section className="relative pt-24 md:pt-16">
          <ImageCarousel />
          {/* Statistics Section */}
          <div className="relative z-10 bg-blue-900 text-white py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { number: "13+", label: "Educational Books" },
                  { number: "100+", label: "Happy Students" },
                  { number: "25+", label: "Schools" },
                  { number: "2+", label: "Years Experience" },
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
      </main>
      <section id="about-us" className="px-4">
        <AboutUs />
      </section>
      <section id="books" className="px-4">
        <BookGallery />
      </section>
      <section id="workshops" className="px-4">
        <WorkshopGallery />
      </section>
      <section id="gallery" className="px-4">
        <Gallery />
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
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
