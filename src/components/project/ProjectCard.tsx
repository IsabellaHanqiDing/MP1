// src/components/project/ProjectCard.tsx
'use client'

import { ArrowUpRight } from 'lucide-react'
import { type ProjectItemType } from '@/config/infoConfig'

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h3'
  
  const categoryIcons = {
    'video-games': '🎮',
    'board-games': '🎲',
    '3d-modeling': '🎨',
    '2d-arts': '🖼️',
    'programming': '💻',
    'others': '✨'
  }
  
  return (
    <li className='group relative'>
      <div className="relative h-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-6 backdrop-blur border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1">
        
        {project.category && (
          <div className="absolute top-4 right-4 text-lg opacity-50 group-hover:opacity-100 transition-opacity">
            {categoryIcons[project.category]}
          </div>
        )}
        
        <div className='relative z-10'>
          <Component className="text-lg mb-3 text-white group-hover:text-cyan-300 transition-colors duration-200 uppercase tracking-wider tech-heading">
            {project.name}
          </Component>
          
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            {project.description}
          </p>
          
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs uppercase rounded bg-cyan-900/30 text-cyan-400 border border-cyan-600/30 tech-heading"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white text-xs uppercase tracking-wider rounded hover:from-cyan-600/20 hover:to-blue-600/20 hover:border-cyan-500/30 transition-all duration-300 tech-heading"
          >
            Access <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </li>
  )
}