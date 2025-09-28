// src/components/shared/StaticBackgroundImage.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface StaticBackgroundImageProps {
  src: string
  alt: string
  width: number
  height: number
  x: number // Position from left (percentage)
  y: number // Position from top (percentage)
  opacity?: number // Base opacity
  hoverScale?: number // Scale on hover
  zIndex?: number // Stack order
  className?: string
}

export function StaticBackgroundImage({
  src,
  alt,
  width,
  height,
  x,
  y,
  opacity = 0.4,
  hoverScale = 1.2,
  zIndex = 10,
  className = ''
}: StaticBackgroundImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      className={`static-bg-image ${className}`}
      style={{
        position: 'fixed',
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) scale(${isHovered ? hoverScale : 1})`,
        zIndex: zIndex,
        pointerEvents: isHovered ? 'auto' : 'none', // Pass through clicks when not hovered
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        opacity: isHovered ? Math.min(opacity * 1.5, 1) : opacity,
        cursor: isHovered ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="drop-shadow-lg"
        priority={false}
      />
    </div>
  )
}

// Container for multiple static images
interface StaticImagesContainerProps {
  images: Array<{
    src: string
    alt: string
    width: number
    height: number
    x: number
    y: number
    opacity?: number
    hoverScale?: number
  }>
}

export function StaticImagesContainer({ images }: StaticImagesContainerProps) {
  return (
    <>
      {images.map((image, index) => (
        <StaticBackgroundImage
          key={index}
          {...image}
          zIndex={5 + index} // Stack images properly
        />
      ))}
    </>
  )
}