// src/app/layout.tsx
import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'
import './globals.css'

import { Caveat, Inter } from 'next/font/google'

const headlineFont = Caveat({ subsets: ['latin'], variable: '--font-headline', display: 'swap' })
const bodyFont     = Inter({   subsets: ['latin'], variable: '--font-body',     display: 'swap' })

export const metadata: Metadata = {
  title: { template: `%s - ${name}`, default: `${name} - ${headline}` },
  description: `${introduction}`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headlineFont.variable} ${bodyFont.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
