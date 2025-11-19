// src/components/sections/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Defined Timeline",
      description: "We give you a defined timeline and stick to it! No delays, no excuses. Your business deserves certainty.",
      icon: "⏱️",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Honest Advice",
      description: "Our team will give you honest advice keeping your goals in mind! We're your partners, not just service providers.",
      icon: "💡",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges. Period. What you see is what you pay. Complete transparency in all our dealings.",
      icon: "💰",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Quality Assurance",
      description: "Globally accepted best-practices used to ensure quality! Your business gets world-class service.",
      icon: "✅",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="relative bg-black overflow-hidden py-20">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Why Choose BizExpress?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're not just service providers, we're your business partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
}
