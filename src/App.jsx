import React from "react";
import { motion } from "framer-motion";
import Header from "./header";
import AboutUs from "./AboutUs";
import Footer from "./footer";
import Logo2 from "./assests/full-logo-peruma.png";
import BookGallery from "./Books";
import WorkshopGallery from "./workshops";
import CollaborationForm from "./collaborate";
import Gallery from "./Gallery";
import ImageCarousel from "./imagescrol";

const StatisticsSection = () => {
  const stats = [
    { number: "13+", label: "Educational Books" },
    { number: "100+", label: "Happy Students" },
    { number: "25+", label: "Schools" },
    { number: "2+", label: "Years Experience" }
  ];

  return (
    <div className="relative z-10 bg-gradient-to-br from-blue-900/90 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5 
              }}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-bold mb-2 text-cyan-300">
                {stat.number}
              </div>
              <div className="text-sm uppercase tracking-wider text-blue-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
          <StatisticsSection />
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

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;