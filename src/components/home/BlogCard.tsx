// src/components/home/BlogCard.tsx
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'
import { FileText, Calendar, ArrowRight } from 'lucide-react'

export function BlogCard({ blog, titleAs }: { blog: BlogType, titleAs?: keyof JSX.IntrinsicElements }) {
  const Component = titleAs ?? 'h3'
  
  return (
    <article className="group relative">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-6 backdrop-blur border border-purple-500/20 hover:border-pink-400/40 transition-all duration-300">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
        
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
            <FileText size={20} className="text-purple-400" />
          </div>
          <div className="flex-1">
            <a href={`/blogs/${blog.slug}`} className="block group-hover:text-pink-300 transition-colors">
              <Component className="text-lg text-white uppercase tracking-wider mb-2 tech-heading">
                {blog.title}
              </Component>
            </a>
            <div className="flex items-center gap-2 text-xs text-purple-400 mb-3">
              <Calendar size={12} />
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-white/60 leading-relaxed mb-4">
          {blog.description}
        </p>
        
        <a 
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors tech-heading"
        >
          Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  )
}