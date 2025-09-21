// src/app/about/page.tsx
import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'
import portraitImage from '@/images/photo-1.png'

export const metadata: Metadata = {
  title: 'About',
  description: 'About',
}

export default function About() {
  return (
    <main className="page--dark">
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Isabella portrait"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl object-cover"
                style={{ border: '4px solid #d9c1a1' }}
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="headline text-4xl" style={{ color: '#f6f1e5' }}>{aboutMeHeadline || 'About Isabella'}</h1>
            <div className="mt-6 space-y-7 text-lg">
              {aboutParagraphs.map((p, i) => (<p key={i} style={{ color: '#f6f1e5' }}>{p}</p>))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
