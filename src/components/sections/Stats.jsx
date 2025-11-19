// src/components/sections/Stats.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function Stats() {
  const stats = [
    {
      value: 5000,
      suffix: "+",
      label: "Clients Served",
      icon: "👥",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: 2000,
      suffix: "+",
      label: "Companies Incorporated",
      icon: "🏢",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      value: 2500,
      suffix: "+",
      label: "GST Registrations",
      icon: "📋",
      gradient: "from-green-500 to-teal-500",
    },
    {
      value: 3000,
      suffix: "+ Crs",
      label: "Funds Raised (₹)",
      icon: "💰",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by thousands of businesses across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center cursor-default"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Counter */}
              <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <p className="text-gray-400 text-lg font-medium">
                {stat.label}
              </p>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
