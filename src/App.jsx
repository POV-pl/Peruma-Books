import React from 'react';
import Header from './header';
import AboutUs from './AboutUs';
import Gallery from './Tempgallery';
import Footer from './footer';
import Logo from "./assests/PRM_Logo-removebg-preview.png";
import Logo2 from "./assests/full-logo-peruma.png";


import 'animate.css';

const Books = ({ children }) => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Books</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      {children}
    </div>
  </div>
);

const App = () => (
  <div className="min-h-screen bg-white">
    <Header />
    
    <section className="relative min-h-screen bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 pt-16">
  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
    <img
      src={Logo2}
      alt="Background Logo"
      className="w-full max-w-5xl object-contain animate__animated animate__pulse animate__infinite animate__slower"
    />
  </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate__animated animate__fadeInLeft">
              Transform Learning Through Activity
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeInLeft animate__delay-1s">
              Empowering education through interactive and engaging experiences
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s hover:scale-105 transform">
              Discover More
            </button>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="animate__animated animate__fadeInRight hover:animate__pulse">
              <img
                src={Logo}
                alt="PERUMA Logo"
                className="h-48 md:h-64 object-contain mb-8 transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            {/* Enhanced What We Do Section */}
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 text-center animate__animated animate__fadeInDown">
                    What We Do
                  </h2>
                  <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="grid gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors animate__animated animate__fadeInLeft animate__delay-1s">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl">
                        📚
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Educational Books</h3>
                        <p className="text-sm text-gray-600">Creating innovative materials for schools</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors animate__animated animate__fadeInLeft animate__delay-2s">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl">
                        🤝
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">NGO Partnerships</h3>
                        <p className="text-sm text-gray-600">Collaborating for educational initiatives</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors animate__animated animate__fadeInLeft animate__delay-3s">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl">
                        📖
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Publisher Collaboration</h3>
                        <p className="text-sm text-gray-600">Working with leading educational publishers</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors animate__animated animate__fadeInLeft animate__delay-4s">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl">
                        🎯
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Activity-Based Learning</h3>
                        <p className="text-sm text-gray-600">Designing engaging learning materials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main>
      <section id="about-us">
        <AboutUs />
      </section>

      <section id="books">
        <Books>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Add your book cards here */}
          </div>
        </Books>
      </section>
    </main>

    <Footer />
  </div>
);

export default App;