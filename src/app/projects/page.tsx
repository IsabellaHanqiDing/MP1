// src/app/projects/[slug]/page.tsx
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { projects } from '@/config/infoConfig'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Download, Play } from 'lucide-react'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  )
  
  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: project.name,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  )
  
  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <Container className="mt-16 relative z-10">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="tech-heading">Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              {project.images && project.images[0] ? (
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <span className="text-4xl">🎮</span>
                </div>
              )}
            </div>

            {/* Additional Images Gallery */}
            {project.images && project.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-purple-500/20">
                    <Image
                      src={image}
                      alt={`${project.name} ${index + 2}`}
                      width={400}
                      height={300}
                      className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Title & Category */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-white tech-heading uppercase">
                  {project.name}
                </h1>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold uppercase rounded">
                  {project.category?.replace('-', ' ')}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-lg text-white/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* My Thoughts Section */}
            {project.thoughts && (
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 tech-heading">
                  My Thoughts
                </h2>
                <div className="text-white/70 space-y-4">
                  {project.thoughts.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 tech-heading">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm uppercase rounded bg-cyan-900/30 text-cyan-400 border border-cyan-600/30 tech-heading"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase rounded-lg hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <ExternalLink size={18} />
                View Project
              </a>
              
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase rounded-lg hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Play size={18} />
                  Play Demo
                </a>
              )}
              
              {project.downloadLink && (
                <a
                  href={project.downloadLink}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold uppercase rounded-lg hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Download size={18} />
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}