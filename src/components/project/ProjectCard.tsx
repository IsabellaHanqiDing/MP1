// src/components/project/ProjectCard.tsx
'use client'

import { ArrowUpRight } from 'lucide-react'
import { type ProjectItemType } from '@/config/infoConfig'
import Link from 'next/link'
import Image from 'next/image'

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h3'
  const projectSlug = project.name.toLowerCase().replace(/\s+/g, '-')
  
  const categoryIcons = {
    'video-games': '🎮',
    'board-games': '🎲',
    '3d-modeling': '🎨',
    '2d-arts': '🖼️',
    'programming': '💻',
    'others': '✨'
  }

  // Get the first image as thumbnail, or use thumbnail property if available
  const thumbnailImage = project.thumbnail || (project.images && project.images[0])
  
  return (
    <li className='group relative'>
      <Link href={`/projects/${projectSlug}`}>
        <div className="relative h-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 cursor-pointer flex flex-col">
          
          {/* Thumbnail Image */}
          {thumbnailImage && (
            <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              <Image
                src={thumbnailImage}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}

          {/* Content */}
          <div className='relative z-10 p-6 flex-1 flex flex-col'>
            {/* Category Icon */}
            {project.category && (
              <div className="absolute top-4 right-4 text-lg opacity-50 group-hover:opacity-100 transition-opacity">
                {categoryIcons[project.category]}
              </div>
            )}
            
            <Component className="text-lg mb-3 text-white group-hover:text-cyan-300 transition-colors duration-200 uppercase tracking-wider tech-heading">
              {project.name}
            </Component>
            
            <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs uppercase rounded bg-cyan-900/30 text-cyan-400 border border-cyan-600/30 tech-heading"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs uppercase rounded bg-purple-900/30 text-purple-400 border border-purple-600/30 tech-heading">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            )}

<div className="card-cute group">
  {/* Add cute emoji decorations */}
  <div className="absolute -top-4 -right-4 text-3xl animate-bounce-slow">
    {categoryIcons[project.category]}
  </div>
  
  <Component className="text-xl font-bold mb-3 text-primary">
    {project.name}
  </Component>
  
  <p className="text-sm text-muted-foreground mb-4">
    {project.description}
  </p>
  
  {/* Cute tags */}
  <div className="flex flex-wrap gap-2">
    {project.tags.map((tag, index) => (
      <span
        key={index}
        className="px-3 py-1 text-xs rounded-full bg-secondary text-white"
      >
        {tag}
      </span>
    ))}
  </div>
</div>
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-purple-400 group-hover:text-pink-400 transition-colors tech-heading">
              View Details <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}