'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Trophy, Code } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Computer Science Engineering',
      organization: 'Techno International Newtown',
      location: 'Kolkata, West Bengal',
      period: '2022 - Present',
      description: 'Currently pursuing Bachelor of Technology in Computer Science Engineering. Maintaining excellent academic performance while actively participating in coding competitions and cultural events.',
      achievements: [
        'CGPA: 8.5+',
        'Dean\'s List Student',
        'Active member of Computer Science Society',
        'Participated in multiple hackathons'
      ],
      icon: GraduationCap,
      color: 'blue'
    },
    {
      id: 2,
      type: 'work',
      title: 'Frontend Developer Intern',
      organization: 'TechStartup Solutions',
      location: 'Remote',
      period: 'June 2024 - August 2024',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components and optimize application performance.',
      achievements: [
        'Built 5+ reusable React components',
        'Improved app performance by 30%',
        'Mentored 2 junior developers',
        'Implemented accessibility standards'
      ],
      icon: Briefcase,
      color: 'blue'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Photography Competition Winner',
      organization: 'State Photography Contest',
      location: 'Kolkata, West Bengal',
      period: 'March 2024',
      description: 'Won first place in the portrait category of the state-level photography competition with my series "Urban Souls". The work was exhibited in various galleries across the city.',
      achievements: [
        'First Place - Portrait Category',
        'Featured in local newspapers',
        'Gallery exhibition opportunity',
        'Mentorship with professional photographers'
      ],
      icon: Award,
      color: 'red'
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Dance Performance Lead',
      organization: 'College Cultural Fest',
      location: 'Techno International Newtown',
      period: 'February 2024',
      description: 'Choreographed and led a contemporary fusion dance performance for the annual cultural festival. The performance received standing ovation and was selected for inter-college competition.',
      achievements: [
        'Choreographed for 15+ dancers',
        'Best Performance Award',
        'Selected for inter-college fest',
        'Featured in college magazine'
      ],
      icon: Trophy,
      color: 'purple'
    },
    {
      id: 5,
      type: 'work',
      title: 'Freelance Photographer',
      organization: 'Self-Employed',
      location: 'Kolkata, West Bengal',
      period: '2023 - Present',
      description: 'Providing professional photography services for events, portraits, and commercial projects. Built a strong client base and reputation for delivering high-quality work.',
      achievements: [
        '50+ successful projects',
        '5-star client ratings',
        'Featured in wedding magazines',
        'Growing social media presence'
      ],
      icon: Briefcase,
      color: 'red'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-bg dark:bg-blue-900/20',
          icon: 'bg-primary-blue text-white',
          border: 'border-primary-blue'
        }
      case 'red':
        return {
          bg: 'bg-red-bg dark:bg-red-900/20',
          icon: 'bg-primary-red text-white',
          border: 'border-primary-red'
        }
      case 'purple':
        return {
          bg: 'bg-purple-50 dark:bg-purple-900/20',
          icon: 'bg-purple-600 text-white',
          border: 'border-purple-600'
        }
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-800',
          icon: 'bg-gray-600 text-white',
          border: 'border-gray-600'
        }
    }
  }

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
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-light-gray dark:bg-gray-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Experience & Achievements
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My journey through education, work, and creative accomplishments
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            {experiences.map((experience, index) => {
              const colors = getColorClasses(experience.color)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Icon */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${colors.icon} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                    <experience.icon size={16} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    isEven ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`card ${colors.bg} border-l-4 ${colors.border} hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-dark dark:text-white font-display mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {experience.organization}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {experience.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-dark dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                            >
                              <span className={`w-1.5 h-1.5 ${colors.icon.split(' ')[0]} rounded-full mt-2 mr-2 flex-shrink-0`}></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Skills Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="card bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-center text-dark dark:text-white font-display mb-8">
              Current Focus Areas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={24} />
                </div>
                <h4 className="text-lg font-semibold text-dark dark:text-white mb-2">
                  Full Stack Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Advancing skills in modern web technologies and cloud platforms
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h4 className="text-lg font-semibold text-dark dark:text-white mb-2">
                  Creative Projects
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Expanding photography portfolio and dance choreography work
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy size={24} />
                </div>
                <h4 className="text-lg font-semibold text-dark dark:text-white mb-2">
                  Leadership & Mentoring
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Leading teams and mentoring fellow students in various projects
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
