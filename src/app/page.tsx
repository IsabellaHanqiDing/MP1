// src/app/page.tsx
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import {
  headline,
  introduction,
  projects,
  projectHeadLine,
  projectIntro,
  blogHeadLine,
  blogIntro,
} from '@/config/infoConfig'
import {
  awards,
  awardsHeadLine,
  activities,
  activitiesHeadLine,
  activitiesIntro,
} from '@/config/projects'

export default async function Home() {
  const blogList = (await getAllBlogs()).slice(0, 4)
  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="home-theme min-h-screen">
      <Container className="mt-9">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT: Profile image */}
          <div className="flex flex-col gap-6">
            <div style={{ width: 220 }}>
              <div style={{ border: '4px solid #f3f0e2', borderRadius: 16, overflow: 'hidden' }}>
                <Image
                  src="/src/images/photo-2.png"
                  alt="Isabella profile"
                  width={220}
                  height={220}
                  className="block"
                  priority
                />
              </div>
            </div>
            <SocialLinks />
          </div>

          {/* RIGHT: Text */}
          <div className="space-y-6">
            <h2 className="headline text-4xl sm:text-5xl" style={{ color: '#f6f1e5' }}>{headline}</h2>
            <p className="text-lg" style={{ color: '#f6f1e5' }}>{introduction}</p>
          </div>
        </section>

        {/* PROJECTS */}
        {featuredProjects?.length > 0 && (
          <section id="projects" className="section">
            <h2 className="headline text-3xl mb-2" style={{ color: '#f6f1e5' }}>Featured {projectHeadLine || 'Projects'}</h2>
            <p className="mb-6" style={{ color: '#f6f1e5' }}>{projectIntro}</p>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} titleAs="h3" />
              ))}
            </ul>
          </section>
        )}

        {/* AWARDS BOX */}
        {awards?.length > 0 && (
          <section className="section">
            <div className="box--home p-6">
              <h2 className="headline text-2xl mb-4" style={{ color: '#f6f1e5' }}>{awardsHeadLine || 'Awards & Honors'}</h2>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {awards.map((award) => (
                  <ActivityCard key={award.name} activity={award} titleAs="h3" />
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ACTIVITIES BOX */}
        {activities?.length > 0 && (
          <section className="section">
            <div className="box--home p-6">
              <h2 className="headline text-2xl mb-2" style={{ color: '#f6f1e5' }}>{activitiesHeadLine || 'Hobbies & Volunteer'}</h2>
              <p className="mb-4" style={{ color: '#f6f1e5' }}>{activitiesIntro}</p>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {activities.map((activity) => (
                  <ActivityCard key={activity.name} activity={activity} titleAs="h3" />
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* BLOG BOX */}
        <section className="section">
          <div className="box--home p-6">
            <h2 className="headline text-2xl mb-2" style={{ color: '#f6f1e5' }}>{blogHeadLine || "What I've been thinking about"}</h2>
            <p className="mb-6" style={{ color: '#f6f1e5' }}>{blogIntro}</p>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="flex flex-col gap-10">
                {blogList.map((blog: BlogType) => (
                  <BlogCard key={blog.slug} blog={blog} titleAs="h3" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}