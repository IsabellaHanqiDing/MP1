// src/app/about/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { FloatingImagesContainer } from '@/components/shared/FloatingImagesContainer'
import { FloatingImage } from '@/components/shared/FloatingImage'
import portraitImage from '@/images/photo-1.png'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Hanqi Ding',
}

// Define floating images for this page
const floatingImages = [
  { src: '/images/about/coconut.png', alt: 'coconut', width: 120, height: 120, initialX: 70, initialY: 10, opacity: 0.4 },
  { src: '/images/about/computer.png', alt: 'computer', width: 150, height: 150, initialX: 80, initialY: 30, opacity: 0.6 },
  { src: '/images/about/painting.png', alt: 'painting', width: 80, height: 80, initialX: 10, initialY: 60, opacity: 0.8 },
  { src: '/images/about/mic.png', alt: 'microphone', width: 80, height: 80, initialX: 15, initialY: 20, opacity: 0.4 },
  { src: '/images/about/piano.png', alt: 'piano', width: 150, height: 150, initialX: 75, initialY: 50, opacity: 0.6 },
  { src: '/images/about/ukliri.png', alt: 'ukulele', width: 140, height: 140, initialX: 85, initialY: 70, opacity: 0.8 },
  { src: '/images/about/xun.png', alt: 'xun', width: 70, height: 70, initialX: 5, initialY: 80, opacity: 0.5 },
  { src: '/images/about/ramen.png', alt: 'ramen', width: 150, height: 150, initialX: 90, initialY: 85, opacity: 0.4 },
  { src: '/images/about/cake.png', alt: 'cake', width: 200, height: 200, initialX: 10, initialY: 90, opacity: 0.8 },
]

// Games array
const games = [
  'The Legend of Zelda',
  'The Sims 4',
  'Genshin Impact',
  'Monster Hunter',
  "Assassin's Creed",
  'Forza Horizon',
  'GTA 5',
  'Stardew Valley',
  'Red Dead Redemption 2',
  'Death Stranding',
  'EA Sports FC',
  'Animal Crossing',
]

export default function AboutMe() {
  return (
    <main className="page--dark relative overflow-hidden">
      {/* Floating images cluster (background) */}
      <FloatingImagesContainer images={floatingImages} />

      {/* Single, large travel image (very faint background) */}
      <FloatingImage
        src="/images/about/travel.png"
        alt="from Hainan to Toronto"
        width={1000}
        height={1000}
        initialX={20}
        initialY={0}
        floatSpeed={80}
        floatRange={100}
        opacity={0.08}
        hoverScale={1.05}
      />

      {/* Main content container (ensure it's above floating art) */}
      <Container className="py-16 relative z-30">
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12">
            {/* Photo */}
            <div className="lg:pl-4">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '4px solid var(--brand-cream)' }}
              >
                <Image
                  src={portraitImage}
                  alt="Portrait of Hanqi Ding"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square object-cover"
                  priority
                />
              </div>
            </div>

            {/* About text */}
            <div className="space-y-8 text-lg leading-relaxed">
              <h1 className="headline text-4xl mb-2">About Me</h1>

              <div>
                <h2 className="headline text-2xl mb-2">🧑‍🎨 Who I Am</h2>
                <p>
                  Hi, I'm <strong>Hanqi Ding</strong> — a Digital Media designer, game creator, and multimedia artist based in Toronto, Canada. I graduated from York University's Digital Media program in 2024.
                  I come from <strong>Hainan Island</strong>, China — a tropical paradise of sea, beaches, tropical rain forest, and coconuts. Moving from Hainan to Toronto was like traveling from one end of the world to the other — from warmth to snow — a journey that shaped both my life and my creativity.
                </p>
              </div>

              <div>
                <h2 className="headline text-2xl mb-2">🎨 My Creative Vision</h2>
                <p>
                  I'm deeply inspired by all forms of art — <strong>music, painting, photography, film, and video games</strong>. I see game design as a beautiful fusion of them all: a unique medium that invites players into immersive and interactive worlds.
                  I love combining storytelling with visual design, building experiences that are playful, emotional, and memorable.
                </p>
              </div>

              <div>
                <h2 className="headline text-2xl mb-2">🎵 Music & Multimedia</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>I've studied <strong>piano and singing</strong> since childhood</li>
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
                  <li>🍜 Anime lover — especially <strong>Japanese food-related anime</strong> (I've probably watched them all!)</li>
                  <li>
                    🏁 I enjoy watching Formula 1 races. I’m a proud <strong>Tifosi</strong> fan — my favorite drivers are <strong>Charles Leclerc, Sebastian Vettel</strong>, and <strong>Zhou Guanyu</strong>.
                  </li>
                  <li>
                    🐶 I have a cute little white dog named <strong>Mifa</strong>. Mifa is three years old, full of energy, and appears in drawings across this site — try to spot them!
                  </li>
                </ul>
              </div>

              <div>
  <h2 className="headline text-2xl mb-2">🎮 Games I Enjoy</h2>

  {/* Games grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
    {games.map((game) => (
      <span
        key={game}
        className="flex items-center justify-center px-3 py-2 rounded-lg shadow text-blue-900 text-sm font-medium"
        style={{ backgroundColor: '#d9c1a1' }}
      >
        {game}
      </span>
    ))}
  </div>
</div>


              <div>
                <h2 className="headline text-2xl mb-2">💡 Let's Connect</h2>
                <p>
                  Whether you're here to explore my projects, listen to my music, or get to know me better — welcome!
                  I'd love to collaborate, connect, or just chat about design, games, and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
