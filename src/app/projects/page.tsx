// src/app/projects/page.tsx
'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/project/ProjectCard'
import { projects, projectHeadLine, projectIntro } from '@/config/infoConfig'
import { Filter } from 'lucide-react'

type CategoryType = 'all' | 'video-games' | 'board-games' | '3d-modeling' | '2d-arts' | 'programming' | 'others'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects.filter(p => p.name)
    : projects.filter(p => p.name && p.category === selectedCategory)

  const availableCategories = ['all', ...new Set(projects.filter(p => p.name).map(p => p.category || 'others'))] as CategoryType[]

  return (
    <div className="projects-theme" style={{ minHeight: '100vh' }}>
      <Container className="pt-16 sm:pt-32">
        <div style={{ marginBottom: '48px' }}>
          <h1 className="headline" style={{ fontSize: '48px', marginBottom: '16px' }}>
            {projectHeadLine}
          </h1>
          <p style={{ fontSize: '16px' }}>
            {projectIntro}
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Filter size={20} />
            <h2 className="headline" style={{ fontSize: '20px' }}>Filter by Category</h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {availableCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '8px 24px',
                  backgroundColor: selectedCategory === category ? '#015697' : '#fff2df',
                  color: selectedCategory === category ? '#fff2df' : '#015697',
                  border: '2px solid #015697',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {category === 'all' ? 'All' : category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', padding: 0, listStyle: 'none' }}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs="h3" />
            ))}
          </ul>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px' }}>
            No projects found in this category.
          </div>
        )}
      </Container>
    </div>
  )
}
