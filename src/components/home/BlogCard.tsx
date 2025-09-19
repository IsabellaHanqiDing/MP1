// src/components/home/BlogCard.tsx - COMPLETE REPLACEMENT
"use client"
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'
import { FileText, Calendar, ArrowRight } from 'lucide-react'

export function BlogCard({ blog, titleAs }: { blog: BlogType, titleAs?: keyof JSX.IntrinsicElements }) {
  const Component = titleAs ?? 'h3'
  
  return (
    <article className="group relative">
      <div style={{
        backgroundColor: '#fcebe4',
        border: '3px dashed #9cd6ef',
        borderRadius: '20px',
        padding: '24px',
        transition: 'all 0.3s ease'
      }}
      className="hover:scale-105"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotate(-2deg) scale(1.05)';
        e.currentTarget.style.boxShadow = '5px 5px 0px #338bcc';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotate(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        <div style={{ display: 'flex', alignItems: 'start', gap: '16px', marginBottom: '16px' }}>
          <div style={{
            padding: '8px',
            borderRadius: '12px',
            backgroundColor: '#338bcc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={20} style={{ color: '#fcebe4' }} />
          </div>
          
          <div style={{ flex: 1 }}>
            <a href={`/blogs/${blog.slug}`}>
              <Component style={{
                color: '#d92f2f',
                fontSize: '1.2rem',
                fontFamily: 'Kalam, cursive',
                marginBottom: '8px'
              }}>
                {blog.title}
              </Component>
            </a>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              color: '#9cd6ef',
              marginBottom: '12px'
            }}>
              <Calendar size={12} style={{ color: '#9cd6ef' }} />
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
            </div>
          </div>
        </div>
        
        <p style={{
          fontSize: '0.9rem',
          color: '#9cd6ef',
          lineHeight: '1.6',
          marginBottom: '16px',
          fontFamily: 'Mali, serif'
        }}>
          {blog.description}
        </p>
        
        <a 
          href={`/blogs/${blog.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            color: '#338bcc',
            fontFamily: 'Kalam, cursive'
          }}
        >
          Read Article <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}