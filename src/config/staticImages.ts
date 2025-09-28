// src/config/staticImages.ts
// Configuration for static background images across your site

export const staticImagesConfig = {
  // Home page - subtle decorative images
  home: [
    { 
      src: '/images/home/cat-1.png', 
      alt: 'cat1', 
      width: 1000, 
      height: 1000, 
      x: 85,  // 85% from left
      y: 25,  // 15% from top
      opacity: 0.3,
      hoverScale: 1.3 
    },
    { 
      src: '/images/home/cat-2.png', 
      alt: 'cat2', 
      width: 800, 
      height: 800, 
      x: 40, 
      y: 70, 
      opacity: 0.4,
      hoverScale: 1.2
    },
    { 
      src: '/images/home/cat-4.png', 
      alt: 'cat4', 
      width: 600, 
      height: 600, 
      x: 20, 
      y: 30, 
      opacity: 0.5,
      hoverScale: 1.3
    },
    { 
      src: '/images/home/dog-1.png', 
      alt: 'dog1', 
      width: 8000, 
      height: 8000, 
      x: 80, 
      y: 80, 
      opacity: 0.3,
      hoverScale: 1.2
    },
  ]
  
}