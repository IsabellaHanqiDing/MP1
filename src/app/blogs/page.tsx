// src/app/blogs/page.tsx
import { type Metadata } from 'next'
import { type BlogType, getAllBlogs } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Blogs', description: 'Blog posts' }

export default async function BlogsIndex() {
  const blogs = await getAllBlogs()
  return (
    <main className="page--dark">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="headline text-4xl mb-8" style={{ color: '#f6f1e5' }}>Blog and Article</h1>
        <div className="space-y-10">
          {blogs.map((blog: BlogType) => (
            <article key={blog.slug} className="hoverable">
              <Link href={`/blogs/${blog.slug}`} className="block">
                <h2 className="headline text-2xl" style={{ color: '#f6f1e5' }}>{blog.title}</h2>
                <div className="text-sm opacity-80 mb-1" style={{ color: '#d9c1a1' }}>
                  <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                </div>
                <p style={{ color: '#f6f1e5' }}>{blog.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}