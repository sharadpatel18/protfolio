"use client";

import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <motion.a
                href="#about"
                className="text-3xl font-bold mb-6"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#projects"
                className="text-3xl font-bold mb-6"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Projects
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#contact"
                className="text-3xl font-bold mb-6"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
