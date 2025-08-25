'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, Github, Linkedin, Instagram, Camera, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/srimoyee',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/srimoyee-pal',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/srimoyee_photography',
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    {
      icon: Camera,
      href: 'https://behance.net/srimoyee',
      label: 'Portfolio',
      color: 'hover:text-purple-600'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Web Development',
    'Mobile App Development',
    'Photography Services',
    'Dance Choreography',
    'UI/UX Design'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="#home" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-display font-bold text-2xl">Srimoyee Pal</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A passionate Computer Science student, professional photographer, and creative dancer 
              from Kolkata. I love bringing ideas to life through technology and artistic expression.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:bg-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-blue" />
              <a 
                href="mailto:srimoyee.pal@email.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                srimoyee.pal@email.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-red" />
              <a 
                href="tel:+919876543210"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Kolkata, West Bengal</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Srimoyee Pal. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center px-4 py-2 bg-primary-blue hover:bg-light-blue text-white rounded-lg transition-colors duration-200 text-sm"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
