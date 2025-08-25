'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { TypeWriter } from '@/components/TypeWriter'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-bg to-red-bg dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-red rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-4">
                <span className="text-dark dark:text-white">Hi, I'm </span>
                <span className="text-gradient">Srimoyee</span>
              </h1>
              <div className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                <TypeWriter 
                  words={[
                    'Computer Science Student',
                    'Professional Photographer', 
                    'Passionate Dancer',
                    'Full Stack Developer',
                    'Creative Artist'
                  ]}
                  speed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              3rd Year CSE student at Techno International Newtown, passionate about creating 
              beautiful digital experiences through code, capturing moments through photography, 
              and expressing creativity through dance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </button>
              <button 
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-secondary group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow bg-gradient-to-br from-primary-blue to-primary-red p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-accent to-red-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">SP</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around the profile */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-blue rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-2xl">💻</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-red rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-2xl">📸</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-6 w-12 h-12 bg-blue-accent rounded-lg shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-xl">💃</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-primary-blue dark:hover:text-blue-accent transition-colors duration-200 group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-6 h-6 animate-bounce group-hover:text-primary-blue" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
