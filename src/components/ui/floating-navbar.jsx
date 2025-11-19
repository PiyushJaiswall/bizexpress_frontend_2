import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    return scrollYProgress.on("change", (current) => {
      if (current === 0) {
        setVisible(true);
      } else {
        let direction = current - scrollYProgress.getPrevious();
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });
  }, [scrollYProgress]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-neutral-800 rounded-full bg-black/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className="relative text-neutral-50 items-center flex space-x-1 hover:text-blue-400 transition-colors px-4 py-2"
          >
            <span className="text-sm">{navItem.name}</span>
          </a>
        ))}
        <button className="border text-sm font-medium relative border-neutral-700 text-white px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform">
          <span>Get Started</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
export default FloatingNav;
