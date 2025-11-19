// src/components/sections/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MovingBorder } from "../ui/moving-border";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Private Limited Company",
    "LLP Registration",
    "GST Registration",
    "Trademark Registration",
    "Start-up India Registration",
    "FSSAI License",
    "ISO Certification",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your business journey? Let's talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-3xl border border-neutral-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Office Address */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-3xl border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Our Office
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-3xl border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="text-4xl">✉️</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@bizexpress.in"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    info@bizexpress.in
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-3xl border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Call Us
                  </h3>
                  <a
                    href="tel:+911234567890"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-3xl border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🕐</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Working Hours
                  </h3>
                  <p className="text-gray-400">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
