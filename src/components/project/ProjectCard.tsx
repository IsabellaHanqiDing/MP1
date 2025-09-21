// src/components/project/ProjectCard.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { type ProjectItemType } from '@/config/infoConfig'

export function ProjectCard({ project, titleAs }: { project: ProjectItemType; titleAs?: keyof JSX.IntrinsicElements }) {
  const Component = titleAs ?? 'h3'
  const slug = project.name.toLowerCase().replace(/\s+/g, '-')
  const thumb = project.thumbnail || (project.images && project.images[0])

  return (
    <li>
      <Link href={`/projects/${slug}`} className="hoverable block">
        <div className="project-card">
          {thumb && (
            <div className="relative">
              <Image src={thumb} alt={project.name} width={800} height={600} className="project-thumb" />
            </div>
          )}
          <div className="p-4">
            <Component className="headline text-xl mb-1" style={{ color: '#f6f1e5' }}>{project.name}</Component>
            <p className="text-sm" style={{ color: '#f6f1e5' }}>{project.description}</p>
            {!!project.tags?.length && (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full" style={{ border: '2px solid #d9c1a1', color: '#f6f1e5' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </li>
  )
}