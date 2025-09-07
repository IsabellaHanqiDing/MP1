// src/components/home/ActivityCard.tsx
"use client"

import { Calendar, Clock, MapPin } from 'lucide-react'
import { ActivityItemType } from '@/config/projects'
import Link from 'next/link'

export function ActivityCard({ activity, titleAs }: { activity: ActivityItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h2'
  
  return (
    <li className='group relative'>
      <div className="relative h-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6 backdrop-blur border border-blue-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)]">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
        
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className="p-2 rounded-lg bg-purple-600/20 border border-purple-400/30">
              <Calendar size={16} className="text-purple-400" />
            </div>
            <Component className="text-base font-medium text-white">
              {activity.name}
            </Component>
          </div>
          
          <p className="text-sm text-white/60 leading-relaxed font-light">
            {activity.description}
          </p>
          
          <div className='flex items-center gap-4 text-xs'>
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-blue-400" /> 
              <span className="text-blue-300">{activity.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-purple-400" /> 
              <span className="text-purple-300">{activity.location}</span>
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