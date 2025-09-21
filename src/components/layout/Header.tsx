// src/components/layout/Header.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { navItems } from '@/config/siteConfig'
import { name } from '@/config/infoConfig'

export function Header() {
  const pathname = usePathname()

  return (
    <header style={{ backgroundColor: '#203655', borderBottom: '2px solid #d9c1a1' }}>
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="headline text-xl" style={{ color: '#f6f1e5', textDecoration: 'none' }}>
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
                      color: '#f6f1e5',
                      textDecoration: 'none',
                      borderBottom: pathname === item.href ? '2px solid #d9c1a1' : 'none',
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