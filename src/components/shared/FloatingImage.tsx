// src/components/shared/FloatingImage.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface FloatingImageProps {
  src: string
  alt: string
  width: number
  height: number
  initialX?: number // Initial X position (percentage)
  initialY?: number // Initial Y position (percentage)
  floatSpeed?: number // Animation duration in seconds
  floatRange?: number // How far it floats (in pixels)
  opacity?: number // Base opacity
  hoverScale?: number // Scale on hover
  className?: string
}

export function FloatingImage({
  src,
  alt,
  width,
  height,
  initialX = Math.random() * 80, // Random position between 0-80%
  initialY = Math.random() * 80,
  floatSpeed = 20 + Math.random() * 10, // Random speed between 20-30s
  floatRange = 30,
  opacity = 0.4,
  hoverScale = 1.2,
  className = ''
}: FloatingImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  
  // Generate unique animation name for each instance
  const animationName = `float-${Math.random().toString(36).substr(2, 9)}`
  
  useEffect(() => {
    // Create dynamic keyframes for this specific image
    const style = document.createElement('style')
    style.textContent = `
      @keyframes ${animationName} {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg);
        }
        25% {
          transform: translate(${floatRange}px, -${floatRange}px) rotate(5deg);
        }
        50% {
          transform: translate(-${floatRange}px, ${floatRange}px) rotate(-5deg);
        }
        75% {
          transform: translate(${floatRange}px, ${floatRange}px) rotate(3deg);
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [animationName, floatRange])
  
  return (
    <div
      className={`floating-image-container ${className}`}
      style={{
        position: 'fixed',
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: 10,
        pointerEvents: isHovered ? 'auto' : 'none', // Pass through clicks when not hovered
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform: isHovered ? `scale(${hoverScale})` : 'scale(1)',
        opacity: isHovered ? 1 : opacity,
        animation: `${animationName} ${floatSpeed}s ease-in-out infinite`,
        cursor: isHovered ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        // Optional: Add click interaction
        // You can add fun interactions here like:
        // - Change position
        // - Play a sound
        // - Show a message
        const newX = Math.random() * 80
        const newY = Math.random() * 80
        setPosition({ x: newX, y: newY })
      }}
    >
      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="drop-shadow-lg"
        priority={false}
      />
      
      {/* Optional: Add a tooltip on hover */}
      {isHovered && (
        <div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                     bg-[#d9c1a1] text-[#203655] px-2 py-1 rounded-md text-xs 
                     whitespace-nowrap font-body pointer-events-none"
        >
          Click me to move!
        </div>
      )}
    </div>
  )
}