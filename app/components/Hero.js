"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="bg-gray-800 text-white text-center py-20 px-4"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold">Hi, I'm Sharad</h2>
      <p className="text-xl mt-4 md:text-2xl">A MERN Stack Developer in the Making</p>
      <p className="text-lg mt-2">Passionate about building web applications with the latest technologies</p>
      
      <p className="text-md mt-2">Location: Gandhinagar, Gujarat, India</p>
      <p className="text-md mt-2">Experience: 1 year of hands-on coding and project building</p>
      <p className="text-md mt-2">Tech Stack: MongoDB, Express.js, React, Node.js</p>
      
      <motion.div 
        className="flex justify-center mt-8"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <a 
          href="#projects" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
