// src/app/about/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
// If your image lives in /src/images/photo-1.png:
import portraitImage from '@/images/photo-1.png'
// If it’s in /public/photo-1.png instead, delete the import above
// and use src="/photo-1.png" on the <Image /> below.

export const metadata: Metadata = {
  title: 'About',
  description: 'About Hanqi Ding',
}

export default function AboutMe() {
  return (
    <main className="page--dark">
      <Container className="py-16">
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12">
            {/* Photo (kept) */}
            <div className="lg:pl-4">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '4px solid var(--brand-cream)' }}
              >
                {/* If using the import above: */}
                <Image
                  src={portraitImage}
                  alt="Portrait of Hanqi Ding"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square object-cover"
                  priority
                />
                {/* If using /public/photo-1.png instead, replace with:
                <Image
                  src="/photo-1.png"
                  alt="Portrait of Hanqi Ding"
                  width={512}
                  height={512}
                  className="aspect-square object-cover"
                  priority
                />
                */}
              </div>
            </div>

            {/* About text */}
            <div className="space-y-8 text-lg leading-relaxed">
              <h1 className="headline text-4xl mb-2">About Me</h1>

              <div>
                <h2 className="headline text-2xl mb-2">🧑‍🎨 Who I Am</h2>
                <p>
                  Hi, I’m <strong>Hanqi Ding </strong> — a Digital Media designer, game creator, and multimedia artist based in Toronto, Canada. I graduated from York University’s Digital Media program in 2024.
                  I come from <strong>Hainan Island</strong>, China — a tropical paradise of beaches and coconuts. Moving from Hainan to Toronto was like traveling from one end of the world to the other — from warmth to snow — a journey that shaped both my life and my creativity.
                </p>
              </div>

              <div>
                <h2 className="headline text-2xl mb-2">🎨 My Creative Vision</h2>
                <p>
                  I’m deeply inspired by all forms of art — <strong>music, painting, photography, film, and video games</strong>. I see game design as a beautiful fusion of them all: a unique medium that invites players into immersive and interactive worlds.
                  I love combining storytelling with visual design, building experiences that are playful, emotional, and memorable.
                </p>
              </div>

              <div>
                <h2 className="headline text-2xl mb-2">🎵 Music & Multimedia</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>I’ve studied <strong>piano</strong> since childhood</li>
                  <li>Taught myself the <strong>ukulele</strong> and some traditional Chinese instruments</li>
                  <li>Compose and edit with <strong>Logic Pro</strong> and <strong>Adobe Audition</strong></li>
                  <li>Blogger on Chinese video/music platforms — my most popular video reached <strong>48,000 views</strong></li>
                </ul>
              </div>

              <div>
                <h2 className="headline text-2xl mb-2">📸 Photography & Visual Storytelling</h2>
                <p>
                  I enjoy photography as a way to capture emotions, light, and storytelling in a single frame. It helps me refine my visual instincts and supports my creative process in game design and interface building.
                </p>
              </div>

              <div>
                <h2 className="headline text-2xl mb-2">⚽ A Few Fun Facts</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>⚽ Football Fan — I support <strong>Manchester City</strong> and love <strong>Haaland</strong> &amp; <strong>De Bruyne</strong></li>
                  <li>🎂 I love <strong>cooking and baking</strong> — especially watching cakes rise in the oven</li>
                  <li>🎬 Favorite movie: <strong>La La Land</strong> — I even created a full travel guide for Los Angeles based on the film</li>
                  <li>🍜 Anime lover — especially <strong>Japanese food-related anime</strong> (I’ve probably watched them all!)</li>
                </ul>
              </div>

              <div>
                <h2 className="headline text-2xl mb-2">💡 Let’s Connect</h2>
                <p>
                  Whether you’re here to explore my projects, hear my music, or get to know me better — welcome!
                  I’d love to collaborate, connect, or just chat about design, games, and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
