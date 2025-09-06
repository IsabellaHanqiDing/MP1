"use client"

import { ArrowRightIcon, HashIcon } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from "favicon-stealer";

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const cleanLink = project.link.href
  let Component = titleAs ?? 'h2'
return (
    <li className='group relative'>
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-border/50">
        {}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        </div>
        
        <div className='relative z-10'>
          <div className='flex items-start justify-between mb-4'>
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-inner">
                <Favicon url={project.link.href} />
              </div>
            </div>
            <ArrowUpRight 
              size={24} 
              className="text-muted-foreground group-hover:text-primary transition-colors duration-200 group-hover:rotate-12" 
            />
          </div>
          
          <Component className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200">
            {project.name}
          </Component>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
          
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <a
          href={cleanLink}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0 z-20'
        />
      </div>
    </li>
  )
}