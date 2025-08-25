'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function FloatingParticles() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Create array of particles
  const particles = Array.from({ length: 20 }, (_, i) => i)

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-blue-accent/30 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: dimensions.height + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * dimensions.width,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
