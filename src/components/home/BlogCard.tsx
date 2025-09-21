// src/components/home/BlogCard.tsx
'use client'

import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'

export function BlogCard({ blog, titleAs }: { blog: BlogType; titleAs?: keyof JSX.IntrinsicElements }) {
  const Component = titleAs ?? 'h3'
  return (
    <article className="hoverable">
      <Link href={`/blogs/${blog.slug}`} className="block">
        <div className="box--home p-4">
          <Component className="headline text-lg mb-1" style={{ color: '#FFFFFF' }}>{blog.title}</Component>
          <div className="text-xs opacity-80 mb-2" style={{ color: '#FFFFFF' }}>
            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
          </div>
          <p className="text-sm" style={{ color: '#f6f1e5' }}>{blog.description}</p>
        </div>
      </Link>
    </article>
  )
}