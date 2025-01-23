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
  return (
    <section id="projects" className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-6" 
          initial={{ scale: 0.5 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gray-100 p-4 rounded shadow"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleBlog}
          >
            <h3 className="text-xl font-bold">Blog App</h3>
            <p className="text-gray-600 mt-2">A platform for sharing and discovering insightful blogs.</p>
            <ul className="mt-2">
              <li>React.js & Node.js</li>
              <li>MongoDB for storing blog data</li>
              <li>User authentication using JWT</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-100 p-4 rounded shadow"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleRecipeApp}
          >
            <h3 className="text-xl font-bold">Recipe App</h3>
            <p className="text-gray-600 mt-2">Discover and save your favorite recipes in one place.</p>
            <ul className="mt-2">
              <li>React.js & Express.js</li>
              <li>Recipe API integration</li>
              <li>Responsive design with Tailwind CSS</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-100 p-4 rounded shadow"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleEcommerceApp}
          >
            <h3 className="text-xl font-bold">E-Commerce Site</h3>
            <p className="text-gray-600 mt-2">An intuitive online shopping platform.</p>
            <ul className="mt-2">
              <li>Full-stack application with MERN</li>
              <li>Payment integration with Stripe</li>
              <li>Product search and filtering</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-100 p-4 rounded shadow"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleTaskApp}
          >
            <h3 className="text-xl font-bold">Task Management Site</h3>
            <p className="text-gray-600 mt-2">Stay productive and organized with task tracking.</p>
            <ul className="mt-2">
              <li>React.js for front-end</li>
              <li>Node.js for task management API</li>
              <li>Interactive drag-and-drop features</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
