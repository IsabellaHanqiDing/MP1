"use client"

import { Calendar, Clock, MapPin } from 'lucide-react'
import { ActivityItemType } from '@/config/projects'
import Link from 'next/link'

export function ActivityCard({ activity, titleAs }: { activity: ActivityItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h2'
  
  return (
    <li className='group relative'>
      <div className="relative h-full overflow-hidden rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50">
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>
        
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className="p-2 rounded-lg bg-primary/10">
              <Calendar size={20} className="text-primary" />
            </div>
            <Component className="text-base font-bold">
              {activity.name}
            </Component>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {activity.description}
          </p>
          
          <div className='flex items-center gap-4 text-xs text-muted-foreground'>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary/60" /> 
              <span>{activity.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary/60" /> 
              <span>{activity.location}</span>
            </div>
          </div>
        </div>
        
        {activity.link && (
          <Link
            href={activity.link}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute inset-0 z-20'
          />
        )}
      </div>
    </li>
  )
}
