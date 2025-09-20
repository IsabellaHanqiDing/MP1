'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function TypingAnimation({ text, duration = 200, className }: { text: string; duration?: number; className?: string }) {
  const [displayedText, setDisplayedText] = useState('')
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1))
      setI((v) => (v + 1 >= text.length ? (clearInterval(id), v + 1) : v + 1))
    }, duration)
    return () => clearInterval(id)
  }, [duration, i, text])

  return (
    <h1 className={cn('headline text-center text-4xl leading-tight drop-shadow-sm', className)}>
      {displayedText || text}
    </h1>
  )
}
