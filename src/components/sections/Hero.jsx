// src/components/sections/Hero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Spotlight } from "../ui/spotlight";
import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <BackgroundBeams className="absolute inset-0" />
      
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
      >
        {/* Main Heading */}
        <HeroHighlight>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Company Registration
            <br />
            <Highlight className="text-white">
              Made Simple
            </Highlight>
          </motion.h1>
        </HeroHighlight>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <TextGenerateEffect 
            words="Chartered Accountants, Company Secretaries & MBAs under one roof!"
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold"
          />
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto"
        >
          {[
            {
              icon: "⏱️",
              text: "We give you a defined timeline and stick to it!"
            },
            {
              icon: "💡",
              text: "Our team will give you honest advice keeping your goals in mind!"
            },
            {
              icon: "💰",
              text: "No hidden charges. Period."
            },
            {
              icon: "✅",
              text: "Globally accepted best-practices used to ensure quality!"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="group relative bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm p-6 rounded-xl border border-neutral-800 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#services"
            className="group relative inline-flex h-14 px-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">Explore Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a
            href="#contact"
            className="inline-flex h-14 px-10 items-center justify-center rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
        >
          {[
            { value: "5000+", label: "Clients Served" },
            { value: "2000+", label: "Companies Incorporated" },
            { value: "2500+", label: "GST Registrations" },
            { value: "₹3000+ Crs", label: "Funds Raised" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
              className="text-center group cursor-default"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
