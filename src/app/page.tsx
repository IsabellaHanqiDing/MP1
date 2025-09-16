// src/app/page.tsx
import { Container } from '@/components/layout/Container'
import Newsletter from '@/components/home/Newsletter'
import Education from '@/components/home/Education'
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
  techIcons 
} from '@/config/infoConfig'
import { 
  awards, 
  awardsHeadLine, 
  activities, 
  activitiesHeadLine, 
  activitiesIntro 
} from '@/config/projects'
import IconCloud from "@/components/ui/icon-cloud"
import { Award, Briefcase, Heart, BookOpen, ArrowRight } from 'lucide-react'

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 4)
  // Only show first 3 projects
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Container className="mt-9 relative z-10">
        {/* Hero Section - Same as before */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className='md:mt-20 space-y-6'>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight tech-heading">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient bg-300%">
                {headline}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {introduction}
            </p>
            
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-500/30"
              >
                View My Work
              </a>
              <a
                href="/about"
                className="px-6 py-3 rounded-lg border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-200"
              >
                About Me
              </a>
            </div>
            
            <SocialLinks className='md:mt-12'/>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-10 blur-3xl"></div>
            <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
              <IconCloud iconSlugs={techIcons} />
            </div>
          </div>
        </div>

        {/* Awards Section - Same as before */}
        {awards && awards.length > 0 && (
          <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-purple-800/30">
            <h2 className="flex flex-row items-center justify-start gap-3 text-xl md:text-3xl mb-4 tech-heading">
              <Award size={24} className="text-purple-400"/>
              <span className="text-white uppercase">{awardsHeadLine || 'Awards & Honors'}</span>
            </h2>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
            >
              {awards.map((award) => (
                <ActivityCard key={award.name} activity={award} titleAs='h3'/>
              ))}
            </ul>
          </div>
        )}

        {/* Projects Section - NOW WITH ONLY 3 PROJECTS */}
        {featuredProjects && featuredProjects.length > 0 && (
          <div id="projects" className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-purple-800/30">
            <h2 className="flex flex-row items-center justify-start gap-3 text-xl md:text-3xl mb-4 tech-heading">
              <Briefcase size={24} className="text-pink-400"/>
              <span className="text-white uppercase">Featured {projectHeadLine || 'Projects'}</span>
            </h2>
            <p className="text-base text-white/70 max-w-2xl mb-8">
              {projectIntro}
            </p>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} titleAs='h3'/>
              ))}
            </ul>
            
            {/* MORE BUTTON */}
            <div className="mt-8 text-center">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-audiowide uppercase tracking-wider rounded-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
              >
                View All Projects
                <ArrowRight size={20} className="animate-pulse" />
              </a>
            </div>
          </div>
        )}

        {/* Activities Section - Same as before */}
        {activities && activities.length > 0 && (
          <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-purple-800/30">
            <h2 className="flex flex-row items-center justify-start gap-3 text-xl md:text-3xl mb-4 tech-heading">
              <Heart size={24} className="text-blue-400"/>
              <span className="text-white uppercase">{activitiesHeadLine || 'Hobbies & Volunteer'}</span>
            </h2>
            <p className="text-base text-white/70 max-w-2xl mb-8">
              {activitiesIntro}
            </p>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
            >
              {activities.map((activity) => (
                <ActivityCard key={activity.name} activity={activity} titleAs='h3'/>
              ))}
            </ul>
          </div>
        )}

        {/* Blog Section - Same as before */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 py-8 my-8 lg:max-w-none border-t border-purple-800/30">
          <h2 className="flex flex-row items-center justify-start gap-3 text-xl md:text-3xl mb-4 tech-heading">
            <BookOpen size={24} className="text-purple-400"/>
            <span className="text-white uppercase">{blogHeadLine}</span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mb-8">
            {blogIntro}
          </p>
        </div>
        
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} titleAs='h3'/>
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}