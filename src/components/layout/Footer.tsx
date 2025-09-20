// src/components/layout/Footer.tsx
import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/layout/Container'
import { footerItems } from '@/config/siteConfig'
import { name } from '@/config/infoConfig'

export function Footer() {
  return (
    <footer style={{ marginTop: '80px', borderTop: 'var(--border-thick) solid var(--brand-cream)', backgroundColor: 'var(--brand-blue)', color: 'var(--brand-cream)' }}>
      <ContainerOuter>
        <ContainerInner>
          <div style={{ padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '32px' }}>
              {footerItems.map((item) => (
                <Link key={item.name} href={item.href} className="font-body hoverable" style={{ fontSize: '14px', color: 'var(--brand-cream)', textDecoration: 'none' }}>
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: '14px', color: 'var(--brand-cream)' }}>
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </div>
        </ContainerInner>
      </ContainerOuter>
    </footer>
  )
}
