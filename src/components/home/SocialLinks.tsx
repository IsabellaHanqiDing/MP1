// src/components/home/SocialLinks.tsx
"use client"

import { email, socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-200"
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-pink-600/20 hover:shadow-[0_0_15px_rgba(219,39,119,0.25)] transition-all duration-200"
            >
                <CustomIcon name='email' />
                <span className="sr-only">Email</span>
            </Link>
        </div>
    )
}