import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/'))   return <Link href={href} {...props} className="font-body underline underline-offset-2 hover:decoration-2" />
  if (href?.startsWith('#'))   return <a {...props} className="font-body underline underline-offset-2 hover:decoration-2" />
  return <a target="_blank" rel="noopener noreferrer nofollow" {...props} className="font-body underline underline-offset-2 hover:decoration-2" />
}

export const mdxComponents: MDXComponents = {
  Image: (props: ImageProps) => <Image {...props} className="my-6 rounded-3xl" />,
  a: CustomLink,
  h1: (props: any) => <h1 className="headline my-6 text-4xl sm:text-5xl" {...props} />,
  h2: (props: any) => <h2 className="headline my-6 text-3xl sm:text-4xl" {...props} />,
  h3: (props: any) => <h3 className="headline my-6 text-2xl sm:text-3xl" {...props} />,
  p:  (props: any) => <p className="font-body my-6 text-base opacity-90" {...props} />,
  ul: (props: any) => <ul className="font-body my-6 list-inside list-disc text-base opacity-90" {...props} />,
  ol: (props: any) => <ol className="font-body my-6 list-inside list-decimal text-base opacity-90" {...props} />,
  blockquote: (props: any) => <blockquote className="my-6 border-l-4 pl-4 italic" style={{ borderColor: '#fff2df' }} {...props} />,
  code: (props: any) => <code className="my-6 rounded-lg px-1 py-0.5" {...props} />,
  pre:  (props: any) => <pre className="my-6 overflow-x-auto rounded-3xl p-6 text-sm tracking-tight" style={{ background: 'rgba(255,242,223,0.1)' }} {...props} />,
}
