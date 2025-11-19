// src/components/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { CardSpotlight } from "../ui/card-spotlight";

export default function About() {
  const teamMembers = [
    { title: "Chartered Accountants", icon: "📊" },
    { title: "M.B.A.", icon: "🎓" },
    { title: "Company Secretary", icon: "📝" },
    { title: "Chartered Financial Analysts", icon: "💼" },
    { title: "Lawyers", icon: "⚖️" },
    { title: "Tax Professionals", icon: "💰" },
  ];

  return (
    <div className="relative bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BizExpress</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Think of us as the <span className="text-blue-400 font-semibold">Big4 for MSMEs</span>. 
            The idea is clear, work dedicatedly with MSMEs to unlock their full potential. 
            Our entire team is focused on ensuring just one thing, <span className="text-purple-400 font-semibold italic">excellence</span>.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { value: "5,000+", label: "Businesses Served" },
            { value: "2,500+", label: "GST Registrations Done" },
            { value: "2,000+", label: "Companies Incorporated" },
            { value: "₹3,000+ Crs", label: "Raised" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Our Philosophy
          </h3>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm p-10 rounded-3xl border border-neutral-800">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              The dynamics of business have changed tremendously, what felt impossible then is now the normal. 
              Such businesses driven by <span className="text-blue-400 font-semibold">technology</span>, need professionals 
              that have upgraded themselves with time. Traditional methods of consulting are just not good enough anymore.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are therefore building a <span className="text-purple-400 font-semibold">technology focused one-stop-shop</span> for 
              anything finance and compliance. From setting up your business to managing it, from GST Registration to Fund Raise, 
              we are building services that can keep pace with the demands of the modern businesses. 
              We consider ourselves as your <span className="text-pink-400 font-semibold">extended partners</span> – 
              a team of professionals dedicated to driving your business to success.
            </p>
          </div>
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our Team
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 rounded-2xl border border-neutral-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.icon}
                </div>
                <h4 className="text-white font-semibold text-sm leading-tight">
                  {member.title}
                </h4>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
