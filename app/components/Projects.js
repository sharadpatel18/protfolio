"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const handleBlog = () => {
    window.open('https://github.com/sharadpatel18/blog-app', '_blank');
  }

  const handleRecipeApp = () => {
    window.open('https://github.com/sharadpatel18/recipebook', '_blank');
  }

  const handleTaskApp = () => {
    window.open('https://github.com/sharadpatel18/task-management-app', '_blank');
  }

  const handleEcommerceApp = () => {
    window.open('https://github.com/sharadpatel18/e-commers-site', '_blank');
  }

  const handleDiesMover = () => {
    window.open('https://github.com/sharadpatel18/chess', '_blank');
  }

  return (
    <section id="projects" className="bg-gradient-to-b from-black to-gray-800 text-gray-100 py-20 px-8">
      {/* Section Header */}
      <motion.h2
        className="text-6xl font-bold text-center mb-16 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Blog App */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleBlog}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Blog App</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            A platform for sharing and discovering insightful blogs.
          </p>
          <ul className="mt-4 text-gray-400">
            <li>React.js & Node.js</li>
            <li>MongoDB for storing blog data</li>
            <li>User authentication using JWT</li>
          </ul>
        </motion.div>

        {/* Recipe App */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          onClick={handleRecipeApp}
        >
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Recipe App</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Discover and save your favorite recipes in one place.
          </p>
          <ul className="mt-4 text-gray-400">
            <li>React.js & Express.js</li>
            <li>Recipe API integration</li>
            <li>Responsive design with Tailwind CSS</li>
          </ul>
        </motion.div>

        {/* E-Commerce Site */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onClick={handleEcommerceApp}
        >
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">E-Commerce Site</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            An intuitive online shopping platform.
          </p>
          <ul className="mt-4 text-gray-400">
            <li>Full-stack application with MERN</li>
            <li>Payment integration with Stripe</li>
            <li>Product search and filtering</li>
          </ul>
        </motion.div>

        {/* Task Management Site */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          onClick={handleTaskApp}
        >
          <h3 className="text-2xl font-semibold mb-4 text-red-400">Task Management Site</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Stay productive and organized with task tracking.
          </p>
          <ul className="mt-4 text-gray-400">
            <li>React.js for front-end</li>
            <li>Node.js for task management API</li>
            <li>Interactive drag-and-drop features</li>
          </ul>
        </motion.div>

        {/* Dies-Mover */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          onClick={handleDiesMover}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Dies-Mover</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Like choose your dice and move in chess board.
          </p>
          <ul className="mt-4 text-gray-400">
            <li>React.js for front-end</li>
            <li>Responsive design with Tailwind CSS</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
