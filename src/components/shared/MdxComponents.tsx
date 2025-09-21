import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/')) return <Link href={href} {...props} style={{ color: '#d9c1a1' }} />
  if (href?.startsWith('#')) return <a {...props} style={{ color: '#d9c1a1' }} />
  return <a target="_blank" rel="noopener noreferrer nofollow" {...props} style={{ color: '#d9c1a1' }} />
}

export const mdxComponents: MDXComponents = {
  Image: (props: ImageProps) => <Image {...props} className="my-6 rounded-3xl" style={{ border: '2px solid #d9c1a1' }} />,
  a: CustomLink,
  h1: (props: any) => <h1 className="headline my-6 text-4xl sm:text-5xl" style={{ color: '#f6f1e5' }} {...props} />,
  h2: (props: any) => <h2 className="headline my-6 text-3xl sm:text-4xl" style={{ color: '#f6f1e5' }} {...props} />,
  h3: (props: any) => <h3 className="headline my-6 text-2xl sm:text-3xl" style={{ color: '#f6f1e5' }} {...props} />,
  p:  (props: any) => <p className="font-body my-6 text-base opacity-90" style={{ color: '#f6f1e5' }} {...props} />,
  ul: (props: any) => <ul className="font-body my-6 list-inside list-disc text-base opacity-90" style={{ color: '#f6f1e5' }} {...props} />,
  ol: (props: any) => <ol className="font-body my-6 list-inside list-decimal text-base opacity-90" style={{ color: '#f6f1e5' }} {...props} />,
  blockquote: (props: any) => <blockquote className="my-6 border-l-4 pl-4 italic" style={{ borderColor: '#d9c1a1', color: '#f6f1e5' }} {...props} />,
  code: (props: any) => <code className="my-6 rounded-lg px-1 py-0.5" style={{ backgroundColor: '#d9c1a1', color: '#203655' }} {...props} />,
  pre:  (props: any) => <pre className="my-6 overflow-x-auto rounded-3xl p-6 text-sm tracking-tight" style={{ background: 'rgba(236, 188, 65, 0.1)', border: '2px solid #d9c1a1', color: '#f6f1e5' }} {...props} />,
}