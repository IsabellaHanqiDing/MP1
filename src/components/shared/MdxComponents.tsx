// src/components/shared/MdxComponents.tsx
import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/')) return <Link href={href} {...props} style={{ color: '#d9c1a1' }} />
  if (href?.startsWith('#')) return <a {...props} style={{ color: '#d9c1a1' }} />
  return <a target="_blank" rel="noopener noreferrer nofollow" {...props} style={{ color: '#d9c1a1' }} />
}

// Enhanced Image component for blog posts
const BlogImage = (props: ImageProps & { caption?: string; size?: 'small' | 'medium' | 'large' | 'full' }) => {
  const { caption, size = 'medium', alt, ...imageProps } = props
  
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'max-w-sm mx-auto'
      case 'medium':
        return 'max-w-2xl mx-auto'
      case 'large':
        return 'max-w-4xl mx-auto'
      case 'full':
        return 'w-full'
      default:
        return 'max-w-2xl mx-auto'
    }
  }

  return (
    <figure className={`my-8 ${getSizeClasses()}`}>
      <div className="relative overflow-hidden rounded-3xl" style={{ border: '2px solid #d9c1a1' }}>
        <Image
          {...imageProps}
          alt={alt || ''}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm italic opacity-80" style={{ color: '#d9c1a1' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Image gallery component for multiple images
const ImageGallery = ({ images }: { images: Array<{ src: string; alt: string; caption?: string }> }) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <BlogImage
            key={index}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            width={600}
            height={400}
            size="medium"
          />
        ))}
      </div>
    </div>
  )
}

// Side-by-side image comparison
const ImageComparison = ({ 
  leftImage, 
  rightImage 
}: { 
  leftImage: { src: string; alt: string; caption?: string }
  rightImage: { src: string; alt: string; caption?: string }
}) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BlogImage
          src={leftImage.src}
          alt={leftImage.alt}
          caption={leftImage.caption}
          width={500}
          height={400}
          size="medium"
        />
        <BlogImage
          src={rightImage.src}
          alt={rightImage.alt}
          caption={rightImage.caption}
          width={500}
          height={400}
          size="medium"
        />
      </div>
    </div>
  )
}

export const mdxComponents: MDXComponents = {
  // Enhanced Image component
  Image: BlogImage,
  
  // Image gallery component
  ImageGallery,
  
  // Image comparison component
  ImageComparison,
  
  // Regular img tag also uses our BlogImage
  img: (props: any) => (
    <BlogImage
      src={props.src}
      alt={props.alt || ''}
      width={800}
      height={600}
      caption={props.title} // Use title attribute as caption
      size="medium"
    />
  ),
  
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