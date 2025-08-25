'use client'

import React, { useState, useEffect } from 'react'

interface TypeWriterProps {
  words: string[]
  speed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

export function TypeWriter({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  delaySpeed = 2000 
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        } else {
          // Word complete, start deleting after delay
          setTimeout(() => setIsDeleting(true), delaySpeed)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delaySpeed])

  return (
    <span className="relative">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
