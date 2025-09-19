// src/components/home/ActivityCard.tsx - COMPLETE REPLACEMENT
"use client"

import { Calendar, Clock, MapPin } from 'lucide-react'
import { ActivityItemType } from '@/config/projects'
import Link from 'next/link'

export function ActivityCard({ activity, titleAs }: { activity: ActivityItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h2'
  
  return (
    <li className='group relative'>
      <div style={{
        position: 'relative',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '20px',
        backgroundColor: '#fcebe4',
        padding: '24px',
        border: '3px dashed #338bcc',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotate(1deg)';
        e.currentTarget.style.boxShadow = '4px 4px 0px #9cd6ef';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotate(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              padding: '8px',
              borderRadius: '10px',
              backgroundColor: '#338bcc'
            }}>
              <Calendar size={16} style={{ color: '#fcebe4' }} />
            </div>
            <Component style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#d92f2f',
              fontFamily: 'Kalam, cursive'
            }}>
              {activity.name}
            </Component>
          </div>
        </div>
        
        <p style={{
          fontSize: '0.875rem',
          color: '#9cd6ef',
          lineHeight: '1.6',
          fontFamily: 'Mali, serif',
          marginBottom: '16px'
        }}>
          {activity.description}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={12} style={{ color: '#338bcc' }} /> 
            <span style={{ color: '#9cd6ef' }}>{activity.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={12} style={{ color: '#338bcc' }} /> 
            <span style={{ color: '#9cd6ef' }}>{activity.location}</span>
          </div>
        </div>
        
        {activity.link && (
          <Link
            href={activity.link}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 20
            }}
          />
        )}
      </div>
    </li>
  )
}