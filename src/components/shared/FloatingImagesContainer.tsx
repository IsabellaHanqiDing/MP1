// src/components/shared/FloatingImagesContainer.tsx
'use client'

import { FloatingImage } from './FloatingImage'

export interface FloatingImageData {
  src: string
  alt: string
  width: number
  height: number
  initialX?: number
  initialY?: number
  opacity?: number
}

interface FloatingImagesContainerProps {
  images: FloatingImageData[]
  className?: string
}

export function FloatingImagesContainer({ 
  images, 
  className = '' 
}: FloatingImagesContainerProps) {
  return (
    <div className={`floating-images ${className}`}>
      {images.map((image, index) => (
        <FloatingImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          initialX={image.initialX}
          initialY={image.initialY}
          opacity={image.opacity}
          floatSpeed={20 + index * 2} // Vary speed for each image
          floatRange={20 + index * 5} // Vary float range
        />
      ))}
    </div>
  )
}