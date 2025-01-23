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
    </motion.section>
  );
}
