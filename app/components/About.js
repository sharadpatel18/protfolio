"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-gray-300 py-16 px-6 md:px-12">
      <motion.h2 
        className="text-5xl font-light mb-8 text-white" 
        initial={{ x: -200 }} 
        animate={{ x: 0 }} 
        transition={{ type: 'spring', stiffness: 60 }}
      >
        About Me
      </motion.h2>
      <div className="space-y-16">
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <p className="leading-relaxed mb-4 text-lg">
            I'm Sharad, a passionate developer specializing in MERN stack technologies. I love creating dynamic and interactive applications, solving problems, and learning new technologies to grow as a developer.
          </p>
          <p className="leading-relaxed text-lg">
            In my journey, I have worked with various tools and frameworks, including MongoDB, Express.js, React, and Node.js, building web applications that solve real-world problems. I’m always excited to take on new challenges and expand my skills.
          </p>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-light mb-6 text-white">Skills</h3>
          <ul className="space-y-2 text-lg">
            <li>Proficient in JavaScript, HTML, CSS</li>
            <li>Experienced with Frontend frameworks like React.js and Next.js</li>
            <li>Skilled in Backend development using Node.js and Express.js</li>
            <li>Knowledgeable in database management with MongoDB</li>
            <li>Understanding of version control systems like Git</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-light mb-6 text-white">Hobbies & Interests</h3>
          <p className="leading-relaxed mb-6 text-lg">
            Besides coding, I have a keen interest in exploring new technologies, reading tech blogs, and contributing to open-source projects. In my leisure time, I enjoy:
          </p>
          <ul className="space-y-2 text-lg">
            <li>Reading sci-fi novels and tech magazines</li>
            <li>Playing chess and puzzle games</li>
            <li>Traveling and exploring new places</li>
            <li>Attending tech meetups and conferences</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-light mb-6 text-white">Goals & Aspirations</h3>
          <p className="leading-relaxed mb-6 text-lg">
            My ultimate goal is to become a full-fledged software engineer who creates impactful web applications that improve people's lives. I aspire to:
          </p>
          <ul className="space-y-2 text-lg">
            <li>Contribute to meaningful projects that solve real-world problems</li>
            <li>Keep up with the latest trends and advancements in web development</li>
            <li>Mentor and share knowledge with fellow developers and tech enthusiasts</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
