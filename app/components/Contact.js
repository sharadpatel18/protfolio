"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6" 
          initial={{ y: -50 }} 
          animate={{ y: 0 }} 
          transition={{ type: 'spring', stiffness: 50 }}
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-300 mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
        <motion.a 
          href="mailto:sharadpatel1807@gmail.com" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
          whileHover={{ scale: 1.1 }} 
        >
          Email Me
        </motion.a>
      </div>
    </section>
  );
}
