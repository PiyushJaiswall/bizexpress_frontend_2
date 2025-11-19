// src/components/sections/Process.jsx
import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "../ui/timeline";

export default function Process() {
  const steps = [
    {
      title: "Step 1: Consultation",
      description: "Free consultation to understand your business needs and requirements. We discuss your goals and recommend the best solutions.",
      icon: "📞",
    },
    {
      title: "Step 2: Documentation",
      description: "We help you prepare all necessary documents. Our team guides you through every document requirement.",
      icon: "📄",
    },
    {
      title: "Step 3: Filing",
      description: "We file your application with relevant authorities. All paperwork is handled by our expert team.",
      icon: "📤",
    },
    {
      title: "Step 4: Follow-up",
      description: "Regular follow-ups and updates on your application status. We keep you informed at every stage.",
      icon: "🔄",
    },
    {
      title: "Step 5: Completion",
      description: "Receive your certificates and documents. We ensure smooth delivery and explain all post-registration requirements.",
      icon: "✅",
    },
  ];

  return (
    <div className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Simple Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From consultation to completion in <span className="text-blue-400 font-semibold">just 7 days</span>
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{step.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-black z-10">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex h-14 px-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}
