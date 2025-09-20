// src/components/IntroOverlay.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function IntroOverlay() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#015697', zIndex: 1000 }}>
      <div className="flex flex-col items-center gap-6">
        {/* Put your cartoon image in /public and set the src below */}
        <Image src="/intro-illustration.png" alt="intro" width={360} height={360} priority />
        <button
          onClick={() => setOpen(false)}
          className="px-6 py-3 rounded-md"
          style={{ background: '#fff2df', color: '#015697', border: '2px solid #015697' }}
        >
          start
        </button>
      </div>
    </div>
  )
}
