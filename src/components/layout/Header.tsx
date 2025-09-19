// src/components/layout/Header.tsx - COMPLETE REPLACEMENT
'use client'

import { Fragment, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { navItems } from '@/config/siteConfig'
import { name } from '@/config/infoConfig'

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  let isActive = usePathname() === href

  return (
    <li style={{ listStyle: 'none' }}>
      <Link
        href={href}
        style={{
          padding: '8px 16px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#015697',
          borderBottom: isActive ? '2px solid #015697' : 'none',
          textDecoration: 'none'
        }}
      >
        {children}
      </Link>
    </li>
  )
}

export function Header() {
  const pathname = usePathname()
  const isBlogOrAbout = pathname?.includes('/blog') || pathname === '/about'

  return (
    <header style={{
      backgroundColor: isBlogOrAbout ? '#015697' : '#fff2df',
      borderBottom: '2px solid',
      borderColor: isBlogOrAbout ? '#fff2df' : '#015697',
      padding: '20px 0'
    }}>
      <Container>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            fontSize: '20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            fontWeight: '600',
            color: isBlogOrAbout ? '#fff2df' : '#015697',
            textDecoration: 'none'
          }}>
            {name}
          </Link>
          
          <nav>
            <ul style={{
              display: 'flex',
              gap: '24px',
              margin: 0,
              padding: 0
            }}>
              {navItems.map((item) => (
                <li key={item.name} style={{ listStyle: 'none' }}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: isBlogOrAbout ? '#fff2df' : '#015697',
                      textDecoration: 'none',
                      borderBottom: pathname === item.href ? '2px solid' : 'none',
                      borderColor: isBlogOrAbout ? '#fff2df' : '#015697',
                      paddingBottom: '2px'
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