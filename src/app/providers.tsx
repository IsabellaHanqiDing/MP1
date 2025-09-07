// src/app/providers.tsx
'use client'

import { createContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const AppContext = createContext<{ previousPathname?: string }>({})

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)
  
  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <AppContext.Provider value={{ previousPathname }}>
      {children}
    </AppContext.Provider>
  )
}