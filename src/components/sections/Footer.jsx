// src/components/sections/Footer.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = {
    "Company": [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    "Services": [
      { name: "Private Limited Company", href: "#services" },
      { name: "GST Registration", href: "#services" },
      { name: "Trademark Registration", href: "#services" },
      { name: "Start-up India", href: "#services" },
      { name: "ISO Certification", href: "#services" },
    ],
    "Industries": [
      { name: "E-Commerce", href: "#industries" },
      { name: "Software", href: "#industries" },
      { name: "Food & Beverages", href: "#industries" },
      { name: "Healthcare", href: "#industries" },
    ],
    "Legal": [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              BizExpress
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Think of us as the Big4 for MSMEs. Excellence in every service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                💼
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-lg mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 BizExpress. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
