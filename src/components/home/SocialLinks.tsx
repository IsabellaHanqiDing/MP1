// src/components/home/SocialLinks.tsx
"use client"

import { email, socialLinks } from '@/config/infoConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'

export default function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={cn("mt-6 flex items-center gap-2", className)}>
            {socialLinks.map((link) => (
               <a
                    key={link.name}
                    href={link.href} 
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-200"
                    style={{ color: '#d9c1a1', border: '2px solid #d9c1a1' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#d9c1a1';
                        e.currentTarget.style.color = '#203655';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#d9c1a1';
                    }}
                >
                    <CustomIcon name={link.icon} />
                    <span className="sr-only">{link.name}</span>
                </a>
            ))}
            <Link
                href={`mailto:${email}`}
                target="_blank"
                rel="noreferrer"
                aria-label='Email'
                className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-200"
                style={{ color: '#d9c1a1', border: '2px solid #d9c1a1' }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d9c1a1';
                    e.currentTarget.style.color = '#203655';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#d9c1a1';
                }}
            >
                <CustomIcon name='email' />
                <span className="sr-only">Email</span>
            </Link>
        </div>
    )
}