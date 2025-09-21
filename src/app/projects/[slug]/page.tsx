// src/app/projects/[slug]/page.tsx
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { projects } from '@/config/infoConfig'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Download, Play } from 'lucide-react'

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === params.slug)
  if (!project) return { title: 'Project not found' }
  return { title: project.name, description: project.description }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === params.slug)
  if (!project) notFound()

  return (
    <main className="projects-theme min-h-screen">
      <Container className="mt-16">
        {/* Back */}
        <Link href="/projects" className="inline-flex items-center gap-2 mb-8" style={{ color: '#d9c1a1' }}>
          <ArrowLeft size={20} />
          <span className="headline">Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-6">
            <div className="rounded-soft overflow-hidden" style={{ border: '2px solid #d9c1a1' }}>
              {project?.images && project.images[0] ? (
                <Image src={project.images[0]} alt={project.name} width={800} height={600} className="w-full h-auto" />
              ) : (
                <div className="w-full h-96 flex items-center justify-center">🎮</div>
              )}
            </div>

            {project?.images && project.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="rounded-soft overflow-hidden" style={{ border: '2px solid #d9c1a1' }}>
                    <Image src={image} alt={`${project.name} ${index + 2}`} width={400} height={300} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="headline" style={{ fontSize: '40px', color: '#f6f1e5' }}>{project?.name}</h1>
              <p style={{ fontSize: '18px', color: '#f6f1e5' }}>{project?.description}</p>
            </div>

            {project?.thoughts && (
              <div className="rounded-soft p-6" style={{ border: '2px solid #d9c1a1' }}>
                <h2 className="headline" style={{ fontSize: '24px', marginBottom: '12px', color: '#f6f1e5' }}>My Thoughts</h2>
                <div className="space-y-4">
                  {project.thoughts.split('\n').map((paragraph, idx) => (<p key={idx} style={{ color: '#f6f1e5' }}>{paragraph}</p>))}
                </div>
              </div>
            )}

            {project?.tags && project.tags.length > 0 && (
              <div>
                <h3 className="headline" style={{ fontSize: '20px', marginBottom: '12px', color: '#f6f1e5' }}>Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-soft px-4 py-2" style={{ border: '2px solid #d9c1a1', color: '#f6f1e5' }}>{tag}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4">
              <a href={project?.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-soft" style={{ background: '#d9c1a1', color: '#203655', border: '2px solid #d9c1a1' }}>
                <ExternalLink size={18} />
                View Project
              </a>

              {project?.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-soft" style={{ background: '#d9c1a1', color: '#203655', border: '2px solid #d9c1a1' }}>
                  <Play size={18} />
                  Play Demo
                </a>
              )}

              {project?.downloadLink && (
                <a href={project.downloadLink} download className="inline-flex items-center gap-2 px-6 py-3 rounded-soft" style={{ background: '#d9c1a1', color: '#203655', border: '2px solid #d9c1a1' }}>
                  <Download size={18} />
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}