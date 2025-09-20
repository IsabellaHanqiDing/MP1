// src/components/layout/Header.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { navItems } from '@/config/siteConfig'
import { name } from '@/config/infoConfig'

export function Header() {
  const pathname = usePathname()
  const isDark = true; // all three main areas are dark (blue) now

  return (
    <header style={{ backgroundColor: isDark ? '#015697' : '#fff', borderBottom: '2px solid #ffffff' }}>
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="headline text-xl" style={{ color: '#ffffff', textDecoration: 'none' }}>
            {name}
          </Link>
          <nav>
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderBottom: pathname === item.href ? '2px solid #ffffff' : 'none',
                      paddingBottom: 2,
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
