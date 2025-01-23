"use client";

import { motion } from 'framer-motion';

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
    <section id="projects" className="bg-gray-900 py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl font-light mb-12 text-white" 
          initial={{ scale: 0.5 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleBlog}
          >
            <h3 className="text-2xl font-semibold text-white">Blog App</h3>
            <p className="text-gray-400 mt-2">A platform for sharing and discovering insightful blogs.</p>
            <ul className="mt-4 text-gray-300">
              <li>React.js & Node.js</li>
              <li>MongoDB for storing blog data</li>
              <li>User authentication using JWT</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleRecipeApp}
          >
            <h3 className="text-2xl font-semibold text-white">Recipe App</h3>
            <p className="text-gray-400 mt-2">Discover and save your favorite recipes in one place.</p>
            <ul className="mt-4 text-gray-300">
              <li>React.js & Express.js</li>
              <li>Recipe API integration</li>
              <li>Responsive design with Tailwind CSS</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleEcommerceApp}
          >
            <h3 className="text-2xl font-semibold text-white">E-Commerce Site</h3>
            <p className="text-gray-400 mt-2">An intuitive online shopping platform.</p>
            <ul className="mt-4 text-gray-300">
              <li>Full-stack application with MERN</li>
              <li>Payment integration with Stripe</li>
              <li>Product search and filtering</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleTaskApp}
          >
            <h3 className="text-2xl font-semibold text-white">Task Management Site</h3>
            <p className="text-gray-400 mt-2">Stay productive and organized with task tracking.</p>
            <ul className="mt-4 text-gray-300">
              <li>React.js for front-end</li>
              <li>Node.js for task management API</li>
              <li>Interactive drag-and-drop features</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleDiesMover}
          >
            <h3 className="text-2xl font-semibold text-white">Dies-Mover</h3>
            <p className="text-gray-400 mt-2">Like choose your dies and move in chess board.</p>
            <ul className="mt-4 text-gray-300">
              <li>React.js for front-end</li>
              <li>Responsive design with Tailwind CSS</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
