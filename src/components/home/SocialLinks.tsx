'use client'

import { email, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'

export default function SocialLinks() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      {socialLinks.map((socialLink) => (
        
          key={socialLink.name}
          href={socialLink.href} 
          target="_blank"
          rel="noreferrer"
          aria-label={socialLink.ariaLabel || `Follow on ${socialLink.name}`}
          style={{
            display: 'inline-flex',
            width: '32px',
            height: '32px',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #015697',
            color: '#015697',
            backgroundColor: 'transparent',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget
            target.style.backgroundColor = '#015697'
            const svg = target.querySelector('svg')
            if (svg) {
              svg.style.color = '#fff2df'
            }
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget
            target.style.backgroundColor = 'transparent'
            const svg = target.querySelector('svg')
            if (svg) {
              svg.style.color = '#015697'
            }
          }}
        >
          <CustomIcon name={socialLink.icon} />
        </a>
      ))}
      
        href={`mailto:${email}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
        style={{
          display: 'inline-flex',
          width: '32px',
          height: '32px',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #015697',
          color: '#015697',
          backgroundColor: 'transparent',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget
          target.style.backgroundColor = '#015697'
          const svg = target.querySelector('svg')
          if (svg) {
            svg.style.color = '#fff2df'
          }
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget
          target.style.backgroundColor = 'transparent'
          const svg = target.querySelector('svg')
          if (svg) {
            svg.style.color = '#015697'
          }
        }}
      >
        <CustomIcon name="email" />
      </a>
    </div>
  )
}