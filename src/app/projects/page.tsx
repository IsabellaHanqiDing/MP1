// src/app/projects/page.tsx
'use client'

import { useState } from 'react'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { projectHeadLine, projectIntro, projects, type ProjectCategory } from '@/config/infoConfig'
import { ProjectCard } from '@/components/project/ProjectCard'
import { Gamepad2, Dices, Box, Palette, Code, Sparkles } from 'lucide-react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles, color: 'from-purple-600 to-pink-600' },
    { id: 'video-games', label: 'Video Games', icon: Gamepad2, color: 'from-purple-600 to-blue-600' },
    { id: 'board-games', label: 'Board Games', icon: Dices, color: 'from-pink-600 to-purple-600' },
    { id: '3d-modeling', label: '3D Modeling', icon: Box, color: 'from-blue-600 to-cyan-600' },
    { id: '2d-arts', label: '2D Arts', icon: Palette, color: 'from-pink-600 to-orange-600' },
    { id: 'programming', label: 'Programming', icon: Code, color: 'from-cyan-600 to-blue-600' },
    { id: 'others', label: 'Others', icon: Sparkles, color: 'from-purple-600 to-pink-600' },
  ]
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)
  
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.id
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as ProjectCategory | 'all')}
                className={`
                  group relative px-6 py-3 rounded-lg font-semibold
                  transition-all duration-300 transform hover:scale-105
                  ${isActive 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/25`
                    : 'bg-purple-900/20 text-purple-300 hover:bg-purple-900/30 border border-purple-500/30'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Icon size={20} />
                  <span className="text-sm uppercase tracking-wider">{category.label}</span>
                  {isActive && (
                    <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                      {filteredProjects.length}
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="relative">
        {filteredProjects.length > 0 ? (
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        ) : (
          <div className="text-center py-20">
            <p className="text-purple-400 text-xl">No projects in this category yet</p>
            <p className="text-white/60 mt-2">Check back soon for updates!</p>
          </div>
        )}
      </div>
    </SimpleLayout>
  )
}