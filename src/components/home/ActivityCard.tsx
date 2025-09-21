// src/components/home/ActivityCard.tsx
'use client'

import Link from 'next/link'
import { type ActivityItemType } from '@/config/projects'

export function ActivityCard({ activity, titleAs }: { activity: ActivityItemType; titleAs?: keyof JSX.IntrinsicElements }) {
  const Component = titleAs ?? 'h3'
  const Wrapper = activity.link ? Link : 'div'
  const wrapperProps = activity.link ? { href: activity.link, target: '_blank', rel: 'noopener noreferrer', className: 'hoverable block' } : { className: 'hoverable block' }

  return (
    <Wrapper {...(wrapperProps as any)}>
      <div className="box--home p-4">
        <Component className="headline text-base mb-1" style={{ color: '#FFFFFF' }}>{activity.name}</Component>
        <p className="text-sm" style={{ color: '#FFFFFF' }}>{activity.description}</p>
        {(activity.date || activity.location) && (
          <div className="mt-2 text-xs opacity-80" style={{ color: '#f6f1e5' }}>
            {activity.date}{activity.date && activity.location ? ' · ' : ''}{activity.location}
          </div>
        )}
      </div>
    </Wrapper>
  )
}