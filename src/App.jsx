// src/App.jsx
import React from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Stats from './components/sections/Stats';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingNav from './components/ui/floating-navbar';

function App() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Industries", link: "#industries" },
    { name: "Why Us", link: "#why-us" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative w-full overflow-x-hidden bg-black">
      <FloatingNav navItems={navItems} />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="industries">
        <Industries />
      </div>
      
      <div id="why-us">
        <WhyChooseUs />
      </div>
      
      <Stats />
      
      <div id="process">
        <Process />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
