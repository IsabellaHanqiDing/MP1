// src/app/layout.tsx
import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'
import './globals.css'

export const metadata: Metadata = {
  title: { template: `%s - ${name}`, default: `${name} - ${headline}` },
  description: `${introduction}`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full" style={{ fontFamily: 'Schoolbell, cursive, sans-serif' }}>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}