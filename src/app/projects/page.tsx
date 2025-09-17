// src/app/projects/page.tsx
'use client'

import { useState } from 'react'
import { type Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/project/ProjectCard'
import { projects, projectHeadLine, projectIntro } from '@/config/infoConfig'
import { Briefcase, Filter } from 'lucide-react'

type CategoryType = 'all' | 'video-games' | 'board-games' | '3d-modeling' | '2d-arts' | 'programming' | 'others'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all')
  
  const categoryLabels = {
    'all': 'All Projects',
    'video-games': 'Video Games',
    'board-games': 'Board Games',
    '3d-modeling': '3D Modeling',
    '2d-arts': '2D Arts',
    'programming': 'Programming',
    'others': 'Others'
  }

  const categoryIcons = {
    'all': '🌟',
    'video-games': '🎮',
    'board-games': '🎲',
    '3d-modeling': '🎨',
    '2d-arts': '🖼️',
    'programming': '💻',
    'others': '✨'
  }

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects.filter(p => p.name) // Filter out projects with empty names
    : projects.filter(p => p.name && p.category === selectedCategory)

  // Get unique categories that have projects
  const availableCategories = ['all', ...new Set(projects.filter(p => p.name).map(p => p.category || 'others'))] as CategoryType[]

  return (
    <>
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Container className="mt-16 sm:mt-32 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl tech-heading uppercase">
            {projectHeadLine}
          </h1>
          <p className="mt-6 text-lg text-white/70">
            {projectIntro}
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="mb-12 relative">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="text-purple-400" size={24} />
            <h2 className="text-xl font-bold text-white tech-heading uppercase">
              Filter by Category
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {availableCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-lg font-bold uppercase transition-all duration-300 tech-heading
                  flex items-center gap-2
                  ${selectedCategory === category 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105' 
                    : 'bg-purple-900/20 text-purple-400 border border-purple-500/30 hover:bg-purple-900/40 hover:border-purple-400/50'
                  }
                `}
              >
                <span className="text-xl">{categoryIcons[category]}</span>
                <span className="text-sm">
                  {categoryLabels[category]}
                  {category !== 'all' && (
                    <span className="ml-2 text-xs opacity-70">
                      ({projects.filter(p => p.name && (category === 'all' || p.category === category)).length})
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          {/* Category Header */}
          <div className="mb-8 pb-4 border-b border-purple-500/30">
            <h2 className="flex items-center gap-3 text-2xl font-bold tech-heading">
              <span className="text-3xl">{categoryIcons[selectedCategory]}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                {categoryLabels[selectedCategory]}
              </span>
              <span className="ml-auto text-base text-purple-400 font-normal">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            </h2>
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 ? (
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} titleAs='h3'/>
              ))}
            </ul>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-white/50">No projects found in this category.</p>
            </div>
          )}
        </div>
      </Container>
    </>
  )
}