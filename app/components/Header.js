"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="bg-gradient-to-b from-gray-800 to-black text-gray-200 p-4 sticky top-0 z-50 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Sharad's Portfolio
        </motion.h1>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ul className="flex space-x-6 text-lg">
            <motion.li
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#about" className="hover:text-blue-400 transition-colors duration-300">
                About
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#projects" className="hover:text-green-400 transition-colors duration-300">
                Projects
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
}
