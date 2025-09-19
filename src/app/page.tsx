'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/layout/Container'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { BlogCard } from '@/components/home/BlogCard'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { 
  headline, 
  introduction, 
  projects, 
  projectHeadLine, 
  projectIntro, 
  blogHeadLine, 
  blogIntro 
} from '@/config/infoConfig'
import { 
  awards, 
  awardsHeadLine, 
  activities, 
  activitiesHeadLine, 
  activitiesIntro 
} from '@/config/projects'
import { Award, Briefcase, Heart, BookOpen, ArrowRight } from 'lucide-react'
import { getAllBlogs, type BlogType } from '@/lib/blogs'

export default function Home() {
  const [showHome, setShowHome] = useState(false)
  const [blogList, setBlogList] = useState<BlogType[]>([])
  const featuredProjects = projects.slice(0, 3)

  useEffect(() => {
    const loadBlogs = async () => {
      const blogs = await getAllBlogs()
      setBlogList(blogs.slice(0, 4))
    }
    loadBlogs()
  }, [])

  if (!showHome) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#015697',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        <div 
          style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#fff2df',
            border: '2px solid #fff2df',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px'
          }}
        >
          <span style={{ color: '#015697', fontFamily: 'Inter' }}>
            Your Cartoon Image
          </span>
        </div>
        <button 
          onClick={() => setShowHome(true)}
          style={{
            backgroundColor: '#fff2df',
            color: '#015697',
            padding: '16px 48px',
            border: '2px solid #015697',
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          start
        </button>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#fff2df', minHeight: '100vh' }}>
      <Container className="pt-9">
        <div 
          style={{ 
            backgroundColor: '#fff2df',
            border: '2px solid #015697',
            padding: '24px',
            marginTop: '40px'
          }}
        >
          <h1 
            style={{ 
              fontSize: '48px',
              marginBottom: '24px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              color: '#015697'
            }}
          >
            {headline}
          </h1>
          <p 
            style={{ 
              fontSize: '16px',
              marginBottom: '32px',
              fontFamily: 'Inter, sans-serif',
              color: '#015697'
            }}
          >
            {introduction}
          </p>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
            <a 
              href="#projects" 
              style={{
                backgroundColor: '#fff2df',
                color: '#015697',
                border: '2px solid #015697',
                padding: '12px 32px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              View My Work
            </a>
            <a 
              href="/about" 
              style={{
                backgroundColor: '#fff2df',
                color: '#015697',
                border: '2px solid #015697',
                padding: '12px 32px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              About Me
            </a>
          </div>
          
          <SocialLinks />
        </div>

        {awards && awards.length > 0 && (
          <div 
            style={{ 
              backgroundColor: '#fff2df',
              border: '2px solid #015697',
              padding: '24px',
              marginTop: '40px'
            }}
          >
            <h2 
              style={{ 
                fontSize: '32px',
                marginBottom: '24px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                color: '#015697',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Award size={24} style={{ marginRight: '12px' }}/>
              {awardsHeadLine}
            </h2>
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '24px' 
              }}
            >
              {awards.map((award) => (
                <ActivityCard key={award.name} activity={award} titleAs="h3"/>
              ))}
            </div>
          </div>
        )}

        {featuredProjects && featuredProjects.length > 0 && (
          <div 
            id="projects"
            style={{ 
              backgroundColor: '#fff2df',
              border: '2px solid #015697',
              padding: '24px',
              marginTop: '40px'
            }}
          >
            <h2 
              style={{ 
                fontSize: '32px',
                marginBottom: '16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                color: '#015697',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Briefcase size={24} style={{ marginRight: '12px' }}/>
              Featured {projectHeadLine}
            </h2>
            <p 
              style={{ 
                fontSize: '14px',
                marginBottom: '32px',
                fontFamily: 'Inter, sans-serif',
                color: '#015697'
              }}
            >
              {projectIntro}
            </p>
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '24px' 
              }}
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} titleAs="h3"/>
              ))}
            </div>
            
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              
                href="/projects"
                style={{
                  backgroundColor: '#fff2df',
                  color: '#015697',
                  border: '2px solid #015697',
                  padding: '12px 32px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                View All Projects
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        )}

        {activities && activities.length > 0 && (
          <div 
            style={{ 
              backgroundColor: '#fff2df',
              border: '2px solid #015697',
              padding: '24px',
              marginTop: '40px'
            }}
          >
            <h2 
              style={{ 
                fontSize: '32px',
                marginBottom: '16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                color: '#015697',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Heart size={24} style={{ marginRight: '12px' }}/>
              {activitiesHeadLine}
            </h2>
            <p 
              style={{ 
                fontSize: '14px',
                marginBottom: '32px',
                fontFamily: 'Inter, sans-serif',
                color: '#015697'
              }}
            >
              {activitiesIntro}
            </p>
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '24px' 
              }}
            >
              {activities.map((activity) => (
                <ActivityCard key={activity.name} activity={activity} titleAs="h3"/>
              ))}
            </div>
          </div>
        )}

        <div 
          style={{ 
            backgroundColor: '#fff2df',
            border: '2px solid #015697',
            padding: '24px',
            marginTop: '40px'
          }}
        >
          <h2 
            style={{ 
              fontSize: '32px',
              marginBottom: '16px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              color: '#015697',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <BookOpen size={24} style={{ marginRight: '12px' }}/>
            {blogHeadLine}
          </h2>
          <p 
            style={{ 
              fontSize: '14px',
              marginBottom: '32px',
              fontFamily: 'Inter, sans-serif',
              color: '#015697'
            }}
          >
            {blogIntro}
          </p>
        </div>
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '40px', 
            marginBottom: '40px',
            marginTop: '40px'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {blogList.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} titleAs="h3"/>
            ))}
          </div>
          <div>
            <Education />
          </div>
        </div>
      </Container>
    </div>
  )
}