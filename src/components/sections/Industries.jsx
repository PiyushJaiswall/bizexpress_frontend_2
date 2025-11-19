// src/components/sections/Industries.jsx
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Industries() {
  const industries = [
    { name: "E-Commerce / Market Places", icon: "🛒" },
    { name: "Software Developers", icon: "💻" },
    { name: "Mobile Games", icon: "🎮" },
    { name: "Payment Gateways", icon: "💳" },
    { name: "Food and Beverages", icon: "🍔" },
    { name: "Hospitality / Hotels / Restaurant", icon: "🏨" },
    { name: "Hospitals / Healthcare", icon: "🏥" },
    { name: "Drugs and Pharmaceuticals", icon: "💊" },
    { name: "Digital Media / Advertisement", icon: "📱" },
    { name: "Education / Schools / Colleges", icon: "🎓" },
    { name: "Real Estate", icon: "🏢" },
    { name: "NBFC and Banking", icon: "🏦" },
  ];

  return (
    <div className="relative py-20 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            <span className="text-blue-400 font-semibold">5,000+ Clients Trust Us</span> across diverse industries
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 rounded-2xl border border-neutral-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center cursor-default"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="text-white font-semibold text-sm leading-tight">
                {industry.name}
              </h3>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
