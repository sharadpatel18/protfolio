"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="bg-gradient-to-b from-black to-gray-800 text-white text-center py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold">
            Welcome! I’m <span className="text-blue-500">Sharad</span>
          </h1>
          <p className="text-2xl mt-4 md:text-3xl text-green-400 font-medium">
            A MERN Stack Developer in the Making
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.p
          className="text-lg mt-6 md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I specialize in building dynamic, user-friendly web applications. 
          My mission is to combine creativity and technical skills to create impactful digital solutions.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-400">Location</h3>
            <p className="mt-2 text-lg">Gandhinagar, Gujarat, India</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-green-400">Experience</h3>
            <p className="mt-2 text-lg">1 year of coding and project building</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-yellow-400">Tech Stack</h3>
            <p className="mt-2 text-lg">MongoDB, Express.js, React, Node.js</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center mt-12 space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Animated Icons */}
        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
          <img
            src="https://img.icons8.com/fluency/48/000000/node-js.png"
            alt="Node.js Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
