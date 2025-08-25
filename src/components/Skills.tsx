'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Camera, Music, Award } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: 'Coding Skills',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React/Next.js', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'MongoDB', level: 78 },
      ]
    },
    {
      title: 'Photography',
      icon: Camera,
      color: 'red',
      skills: [
        { name: 'Portrait Photography', level: 92 },
        { name: 'Landscape Photography', level: 88 },
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Adobe Lightroom', level: 95 },
        { name: 'Photo Composition', level: 90 },
        { name: 'Color Grading', level: 87 },
        { name: 'Studio Lighting', level: 85 },
        { name: 'Event Photography', level: 88 },
      ]
    },
    {
      title: 'Dance',
      icon: Music,
      color: 'purple',
      skills: [
        { name: 'Contemporary Dance', level: 88 },
        { name: 'Classical Dance', level: 85 },
        { name: 'Hip Hop', level: 82 },
        { name: 'Choreography', level: 87 },
        { name: 'Stage Performance', level: 90 },
        { name: 'Dance Direction', level: 83 },
        { name: 'Teaching', level: 80 },
        { name: 'Competition Dance', level: 85 },
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-bg dark:bg-blue-900/20',
          icon: 'text-primary-blue',
          progress: 'bg-primary-blue',
          progressBg: 'bg-blue-200 dark:bg-blue-800/30'
        }
      case 'red':
        return {
          bg: 'bg-red-bg dark:bg-red-900/20',
          icon: 'text-primary-red',
          progress: 'bg-primary-red',
          progressBg: 'bg-red-200 dark:bg-red-800/30'
        }
      case 'purple':
        return {
          bg: 'bg-purple-50 dark:bg-purple-900/20',
          icon: 'text-purple-600',
          progress: 'bg-purple-600',
          progressBg: 'bg-purple-200 dark:bg-purple-800/30'
        }
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-800',
          icon: 'text-gray-600',
          progress: 'bg-gray-600',
          progressBg: 'bg-gray-200 dark:bg-gray-700'
        }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-light-gray dark:bg-gray-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            A comprehensive overview of my technical abilities and creative talents
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color)
            
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`card ${colors.bg} hover:scale-105 transform transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${colors.icon} mx-auto mb-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg`}>
                    <category.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark dark:text-white font-display">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-dark dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full ${colors.progressBg} rounded-full h-2`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`${colors.progress} h-2 rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="card bg-white dark:bg-gray-800">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark dark:text-white font-display">
                Additional Expertise
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">
                  Development Tools
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Git/GitHub', 'VS Code', 'Figma', 'Postman', 'Docker'].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-blue-bg dark:bg-blue-900/30 text-primary-blue dark:text-blue-accent rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">
                  Photography Gear
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Canon EOS', 'Adobe Suite', 'Capture One', 'Studio Setup'].map((gear) => (
                    <span
                      key={gear}
                      className="px-3 py-1 bg-red-bg dark:bg-red-900/30 text-primary-red dark:text-red-accent rounded-full text-sm"
                    >
                      {gear}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Leadership', 'Team Work', 'Creative Thinking', 'Problem Solving'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
