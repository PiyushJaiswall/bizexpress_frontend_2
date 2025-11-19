// src/components/sections/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Its been 5 years since the incorporation of my private limited company and they are expert at what they do. The best thing about them is that they call us and follow up over emails so that we Entrepreneurs don't lose track of the compliance aspect of our business. They were very professional, friendly and took a good care of Clients.",
      name: "Satisfied Client",
      title: "Private Limited Company Owner",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by thousands of businesses across India
          </p>
        </motion.div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 p-10 rounded-3xl border border-neutral-800"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4" />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
