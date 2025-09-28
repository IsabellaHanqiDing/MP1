// src/config/floatingImages.ts
// Centralized configuration for floating images across your site

export const floatingImagesConfig = {
  // Home page images
  home: [
    { src: '/images/about/coconut.png', alt: 'coconut', width: 100, height: 100, initialX: 85, initialY: 15, opacity: 0.3 },
    { src: '/images/about/piano.png', alt: 'piano', width: 120, height: 120, initialX: 10, initialY: 70, opacity: 0.4 },
    { src: '/images/about/mic.png', alt: 'mic', width: 60, height: 60, initialX: 90, initialY: 60, opacity: 0.3 },
    { src: '/images/about/painting.png', alt: 'painting', width: 70, height: 70, initialX: 5, initialY: 30, opacity: 0.5 },
    { src: '/images/about/computer.png', alt: 'computer', width: 130, height: 130, initialX: 75, initialY: 80, opacity: 0.3 },
  ],
  
  // About page images
  about: [
    { src: '/images/about/coconut.png', alt: 'coconut', width: 120, height: 120, initialX: 70, initialY: 10, opacity: 0.4 },
    { src: '/images/about/travel.png', alt: 'travel', width: 200, height: 200, initialX: 5, initialY: 40, opacity: 0.1 },
    { src: '/images/about/computer.png', alt: 'computer', width: 150, height: 150, initialX: 80, initialY: 30, opacity: 0.6 },
    { src: '/images/about/painting.png', alt: 'painting', width: 80, height: 80, initialX: 10, initialY: 60, opacity: 0.8 },
    { src: '/images/about/mic.png', alt: 'microphone', width: 80, height: 80, initialX: 15, initialY: 20, opacity: 0.4 },
    { src: '/images/about/piano.png', alt: 'piano', width: 150, height: 150, initialX: 75, initialY: 50, opacity: 0.6 },
    { src: '/images/about/ukliri.png', alt: 'ukulele', width: 140, height: 140, initialX: 85, initialY: 70, opacity: 0.8 },
    { src: '/images/about/xun.png', alt: 'xun', width: 70, height: 70, initialX: 5, initialY: 80, opacity: 0.5 },
    { src: '/images/about/ramen.png', alt: 'ramen', width: 150, height: 150, initialX: 90, initialY: 85, opacity: 0.4 },
    { src: '/images/about/cake.png', alt: 'cake', width: 200, height: 200, initialX: 10, initialY: 90, opacity: 0.8 },
  ],
  
  // Projects page images - game themed
  projects: [
    { src: '/images/about/computer.png', alt: 'computer', width: 110, height: 110, initialX: 88, initialY: 20, opacity: 0.3 },
    { src: '/images/about/painting.png', alt: 'painting', width: 90, height: 90, initialX: 8, initialY: 75, opacity: 0.4 },
    { src: '/images/about/mic.png', alt: 'mic', width: 70, height: 70, initialX: 92, initialY: 65, opacity: 0.3 },
    { src: '/images/about/piano.png', alt: 'piano', width: 140, height: 140, initialX: 12, initialY: 25, opacity: 0.2 },
  ],
  
  // Blogs page images - creative themed
  blogs: [
    { src: '/images/about/painting.png', alt: 'painting', width: 100, height: 100, initialX: 80, initialY: 18, opacity: 0.4 },
    { src: '/images/about/xun.png', alt: 'xun', width: 60, height: 60, initialX: 10, initialY: 65, opacity: 0.3 },
    { src: '/images/about/mic.png', alt: 'mic', width: 75, height: 75, initialX: 85, initialY: 70, opacity: 0.3 },
    { src: '/images/about/cake.png', alt: 'cake', width: 120, height: 120, initialX: 15, initialY: 85, opacity: 0.2 },
    { src: '/images/about/ukliri.png', alt: 'ukulele', width: 110, height: 110, initialX: 70, initialY: 40, opacity: 0.3 },
  ]
}

// Example: How to use in your pages:
/*
// In src/app/projects/page.tsx
import { FloatingImagesContainer } from '@/components/shared/FloatingImagesContainer'
import { floatingImagesConfig } from '@/config/floatingImages'

export default function ProjectsPage() {
  return (
    <div className="projects-theme relative overflow-hidden" style={{ minHeight: '100vh' }}>
      <FloatingImagesContainer images={floatingImagesConfig.projects} />
      <Container className="pt-16 sm:pt-32 relative z-20">
        // ... your existing content
      </Container>
    </div>
  )
}

// In src/app/blogs/page.tsx
import { FloatingImagesContainer } from '@/components/shared/FloatingImagesContainer'
import { floatingImagesConfig } from '@/config/floatingImages'

export default async function BlogsIndex() {
  const blogs = await getAllBlogs()
  return (
    <main className="page--dark relative overflow-hidden">
      <FloatingImagesContainer images={floatingImagesConfig.blogs} />
      <div className="mx-auto max-w-3xl px-6 py-16 relative z-20">
        // ... your existing content
      </div>
    </main>
  )
}
*/