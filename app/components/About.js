"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-800 to-black text-gray-200 py-20 px-8">
      {/* Section Header */}
      <motion.h2
        className="text-6xl font-bold text-center mb-16 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Card 1: Who I Am */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
          <p className="text-lg leading-relaxed">
            I’m Sharad, a MERN Stack Developer in the making, passionate about creating dynamic, interactive web
            applications. My journey is fueled by curiosity and the drive to build impactful solutions.
          </p>
        </motion.div>

        {/* Card 2: Skills */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Skills</h3>
          <ul className="space-y-2 text-lg">
            <li>⚡ Proficient in JavaScript, HTML, CSS</li>
            <li>⚡ Experienced with React.js and Next.js</li>
            <li>⚡ Skilled in Node.js and Express.js</li>
            <li>⚡ Database Management with MongoDB</li>
            <li>⚡ Version Control with Git</li>
          </ul>
        </motion.div>

        {/* Card 3: Hobbies & Interests */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Hobbies & Interests</h3>
          <ul className="space-y-2 text-lg">
            <li>📚 Reading sci-fi and tech blogs</li>
            <li>♟️ Playing chess and strategy games</li>
            <li>✈️ Traveling and exploring new places</li>
            <li>🤝 Participating in tech meetups</li>
          </ul>
        </motion.div>

        {/* Card 4: Goals & Aspirations */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-red-400">Goals & Aspirations</h3>
          <ul className="space-y-2 text-lg">
            <li>🚀 Master advanced full-stack development</li>
            <li>🌍 Contribute to meaningful open-source projects</li>
            <li>👨‍🏫 Mentor aspiring developers</li>
            <li>📈 Stay ahead of the latest tech trends</li>
          </ul>
        </motion.div>

        {/* Card 5: Fun Facts */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Fun Facts</h3>
          <ul className="space-y-2 text-lg">
            <li>🎨 Built my first website at 16!</li>
            <li>🏆 Won 2 hackathons for innovative ideas</li>
            <li>🧩 Solves Rubik’s cubes in under a minute</li>
            <li>🌟 Contributed to open-source projects</li>
          </ul>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition-all duration-300"
        >
          Let’s Connect!
        </a>
      </motion.div>
    </section>
  );
}
