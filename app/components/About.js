"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <motion.h2 
        className="text-3xl font-bold mb-6" 
        initial={{ x: -200 }} 
        animate={{ x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }}
      >
        About Me
      </motion.h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        I'm Sharad, a passionate developer specializing in MERN stack technologies. I love creating dynamic and interactive applications, solving problems, and learning new technologies to grow as a developer.
      </p>
      <p className="text-gray-700 leading-relaxed">
        In my journey, I have worked with various tools and frameworks, including MongoDB, Express.js, React, and Node.js, building web applications that solve real-world problems. I’m always excited to take on new challenges and expand my skills.
      </p>
    </section>
  );
}
