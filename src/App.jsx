import React from 'react';
import Header from './header';
import AboutUs from './AboutUs';
import Footer from './footer';
import Logo from "./assests/PRM_Logo-removebg-preview.png";
import Logo2 from "./assests/full-logo-peruma.png";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main background with subtle gradient and image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
        <div 
          className="absolute inset-0 opacity-[0.03] bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${Logo2})`,
          }}
        />
      </div>
      
      <section className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-7xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 animate-gradient">
                    PERUMA
                  </span>
                </h1>
                <h2 className="text-4xl font-bold text-gray-800">
                  Educational Books
                </h2>
                <p className="text-xl text-gray-600 max-w-lg">
                  Transform Learning Through Activity
                </p>
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Explore Our Collection
              </button>
            </div>

            {/* Logo Display - Subtle float animation */}
            <div className="relative">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-2xl blur-3xl transform rotate-6" />
                <img
                  src={Logo}
                  alt="PERUMA Logo"
                  className="h-64 w-64 object-contain relative z-10 animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative z-10 bg-blue-900 text-white py-16 mt-16 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Educational Books" },
                { number: "1000+", label: "Happy Students" },
                { number: "100+", label: "Schools" },
                { number: "15+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>

      <section id="about-us">
        <AboutUs />
      </section>

      <Footer />
    </div>
  );
};

export default App;