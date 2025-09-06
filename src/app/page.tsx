import { Container } from '@/components/layout/Container'
import Newsletter from '@/components/home/Newsletter'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { projectHeadLine, projectIntro, projects, blogHeadLine, blogIntro, techIcons } from '@/config/infoConfig'
import { awards, awardsHeadLine, awardsIntro, activities, activitiesHeadLine, activitiesIntro } from '@/config/projects'
import IconCloud from "@/components/ui/icon-cloud"
import { Award, Briefcase, Heart } from 'lucide-react'

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className='md:mt-20 space-y-6'>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent gradient-primary animate-gradient bg-300% motion-safe:transition-all">
                {headline}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {introduction}
            </p>
            <SocialLinks className='md:mt-24'/>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>
        <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full gradient-primary text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="/about"
                className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                About Me
              </a>
              
            
            </div>
            
            <SocialLinks className='md:mt-12'/>

        {/* Awards */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Award size={28}/>
            {awardsHeadLine}
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

        {/* Research & Projects */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Briefcase size={28}/>
            {projectHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {projectIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div>

        {/* Hobbies & Volunteer */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Heart size={28}/>
            {activitiesHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
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

        {/* Blog Section */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 py-8 my-8 lg:max-w-none border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            {blogHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {blogIntro}
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* left column */}
          {/* blog */}
          <div className="flex flex-col gap-16">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} titleAs='h3'/>
            ))}
          </div>

          {/* right column */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}
