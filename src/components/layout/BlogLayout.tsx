// src/components/layout/BlogLayout.tsx
'use client'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AppContext } from '@/app/providers'
import { Container } from '@/components/layout/Container'
import { type BlogType } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BlogLayout({ blog, children }: { blog: BlogType; children: React.ReactNode }) {
  const router = useRouter()
  const { previousPathname } = useContext(AppContext)

  return (
    <main className="page--dark">
      <Container className="pt-16 lg:pt-32">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
              className="hoverable mb-6 inline-flex items-center justify-center rounded-full px-4 py-2"
              style={{ background: '#203655', color: '#f6f1e5', border: '2px solid #d9c1a1' }}
            >
              <ArrowLeftIcon className="h-4 w-4" style={{ stroke: '#d9c1a1' }} />
            </button>
          )}

          <article>
            <header className="flex flex-col">
              <h1 className="headline text-4xl sm:text-5xl break-words" style={{ color: '#f6f1e5' }}>{blog.title}</h1>
              <time dateTime={blog.date} className="order-first text-base opacity-90" style={{ color: '#d9c1a1' }}>
                {formatDate(blog.date)}
                {blog.author && ` · ${blog.author}`}
              </time>
            </header>

            <div className="mt-8 prose prose-invert max-w-none" style={{ color: '#f6f1e5' }}>{children}</div>
          </article>
        </div>
      </Container>
    </main>
  )
}