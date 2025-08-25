'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Heart, Code, MapPin } from 'lucide-react'

export function About() {
  const stats = [
    { label: 'Years of Coding', value: '3+', icon: Code },
    { label: 'Photography Projects', value: '50+', icon: '📸' },
    { label: 'Dance Performances', value: '25+', icon: '💃' },
    { label: 'Current Year', value: '3rd', icon: GraduationCap },
  ]

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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-dark px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Get to know me better - my journey, passions, and what drives me
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient rounded-lg opacity-20 blur"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark dark:text-white font-display">
                      Srimoyee Pal
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Multi-talented Creative Professional
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <GraduationCap className="w-5 h-5 mr-3 text-primary-blue" />
                    <span>3rd Year Computer Science Engineering</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-primary-red" />
                    <span>Techno International Newtown, Kolkata</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Computer Science student who believes in the power of 
                  creativity and technology. When I'm not coding innovative solutions, 
                  you'll find me capturing the world through my camera lens or expressing 
                  myself through dance. I love bringing ideas to life through clean, 
                  efficient code and creating digital experiences that make a difference.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center hover:scale-105 transform transition-all duration-300"
                >
                  <div className="text-3xl mb-2">
                    {typeof stat.icon === 'string' ? (
                      <span>{stat.icon}</span>
                    ) : (
                      <stat.icon className="w-8 h-8 mx-auto text-primary-blue" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-gradient font-display mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <div className="card">
              <h4 className="text-xl font-semibold text-dark dark:text-white mb-4 font-display">
                My Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Web Development', 'Mobile App Development', 'UI/UX Design',
                  'Portrait Photography', 'Nature Photography', 'Photo Editing',
                  'Contemporary Dance', 'Classical Dance', 'Choreography',
                  'Machine Learning', 'Data Structures', 'Problem Solving'
                ].map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-3 py-1 bg-blue-bg dark:bg-gray-700 text-primary-blue dark:text-blue-accent rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="card bg-gradient-light dark:bg-gray-700">
              <h4 className="text-xl font-semibold text-dark dark:text-white mb-3 font-display">
                My Mission
              </h4>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "To blend technology with creativity, creating innovative solutions that 
                inspire and make a positive impact on people's lives through code, 
                visual storytelling, and artistic expression."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
