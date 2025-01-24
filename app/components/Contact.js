"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-800 to-black text-gray-200 py-20 px-8">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6" 
          initial={{ y: -50 }} 
          animate={{ y: 0 }} 
          transition={{ type: 'spring', stiffness: 50 }}
          >
          Contact Me
        </motion.h2>
        <p className="text-gray-300 mb-4">Feel free to reach out for collaborations, inquiries, or just a friendly hello!</p>
        <p className="text-gray-300 mb-6">You can also find me on social media platforms. Let's connect and share ideas!</p>

        <div className="flex justify-center gap-4 mb-6">
          <motion.a 
            href="mailto:sharadpatel1807@gmail.com" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
            whileHover={{ scale: 1.1 }} 
          >
            Email Me
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/feed/?trk=onboarding-landing" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded inline-block"
            whileHover={{ scale: 1.1 }} 
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/sharadpatel18" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-block"
            whileHover={{ scale: 1.1 }} 
          >
            GitHub
          </motion.a>
        </div>


        <div className="flex justify-center gap-4">
          <motion.a 
            href="https://twitter.com/sharadpatel" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
            whileHover={{ scale: 1.1 }} 
          >
            Twitter
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/sharad_patel___7" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded inline-block"
            whileHover={{ scale: 1.1 }} 
          >
            Instagram
          </motion.a>
          <motion.a 
            href="https://www.facebook.com/sharad.laniya.7" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-block"
            whileHover={{ scale: 1.1 }} 
          >
            Facebook
          </motion.a>
        </div>
      </div>
    </section>
  );
}
