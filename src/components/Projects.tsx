'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Camera, Music, Filter } from 'lucide-react'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'coding',
      description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
      image: '/placeholder-project1.jpg',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/srimoyee/ecommerce',
      live: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'coding',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder-project2.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Material-UI'],
      github: 'https://github.com/srimoyee/taskmanager',
      live: 'https://taskmanager-demo.vercel.app',
      featured: false
    },
    {
      id: 3,
      title: 'Portrait Series - "Urban Souls"',
      category: 'photography',
      description: 'A compelling portrait series capturing the essence of urban life and the stories written in people\'s faces.',
      image: '/placeholder-photo1.jpg',
      technologies: ['Canon EOS R5', 'Adobe Lightroom', 'Photoshop'],
      github: null,
      live: 'https://behance.net/srimoyee/urban-souls',
      featured: true
    },
    {
      id: 4,
      title: 'Nature\'s Symphony',
      category: 'photography',
      description: 'Landscape photography project showcasing the beauty of natural environments across different seasons.',
      image: '/placeholder-photo2.jpg',
      technologies: ['Canon EOS R5', 'Drone Photography', 'HDR Processing'],
      github: null,
      live: 'https://behance.net/srimoyee/nature-symphony',
      featured: false
    },
    {
      id: 5,
      title: 'Contemporary Fusion Performance',
      category: 'dance',
      description: 'An innovative dance performance blending contemporary and classical Indian dance forms, performed at cultural fest.',
      image: '/placeholder-dance1.jpg',
      technologies: ['Contemporary', 'Classical', 'Choreography'],
      github: null,
      live: 'https://youtube.com/watch?v=example1',
      featured: true
    },
    {
      id: 6,
      title: 'ML Recommendation System',
      category: 'coding',
      description: 'A machine learning-based movie recommendation system using collaborative filtering and content-based algorithms.',
      image: '/placeholder-project3.jpg',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'React'],
      github: 'https://github.com/srimoyee/ml-recommender',
      live: 'https://ml-recommender-demo.herokuapp.com',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'coding', label: 'Coding', icon: Code },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'dance', label: 'Dance', icon: Music }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            A showcase of my work across coding, photography, and dance
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-blue text-white shadow-glow'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter} // Re-trigger animation when filter changes
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`card hover:scale-105 transform transition-all duration-300 group overflow-hidden ${
                project.featured ? 'ring-2 ring-primary-blue ring-opacity-50' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-blue-accent/20 to-red-accent/20 h-48 flex items-center justify-center">
                {/* Placeholder for project image */}
                <div className="text-6xl opacity-50">
                  {project.category === 'coding' && '💻'}
                  {project.category === 'photography' && '📸'}
                  {project.category === 'dance' && '💃'}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <Github size={20} className="text-dark" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={20} className="text-dark" />
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-primary-blue text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-dark dark:text-white font-display">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.category === 'coding' 
                      ? 'bg-blue-bg text-primary-blue' 
                      : project.category === 'photography'
                      ? 'bg-red-bg text-primary-red'
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline text-center text-sm py-2"
                    >
                      <Github size={16} className="inline mr-1" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      <ExternalLink size={16} className="inline mr-1" />
                      {project.category === 'coding' ? 'Demo' : 'View'}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-outline hover:bg-primary-blue hover:text-white group">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
