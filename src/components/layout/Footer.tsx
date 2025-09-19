// src/components/layout/Footer.tsx - COMPLETE REPLACEMENT
import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/layout/Container'
import { footerItems } from '@/config/siteConfig'
import { name } from '@/config/infoConfig'
import SocialLinks from '@/components/home/SocialLinks'

export function Footer() {
  return (
    <footer style={{
      marginTop: '80px',
      borderTop: '2px solid #015697',
      backgroundColor: '#fff2df'
    }}>
      <ContainerOuter>
        <ContainerInner>
          <div style={{
            padding: '40px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <div style={{
              display: 'flex',
              gap: '32px'
            }}>
              {footerItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#015697',
                    textDecoration: 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#015697'
            }}>
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
            
            <SocialLinks />
          </div>
        </ContainerInner>
      </ContainerOuter>
    </footer>
  )
}