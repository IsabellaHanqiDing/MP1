// src/components/home/Education.tsx - COMPLETE REPLACEMENT
'use client'

import { GraduationCap, Calendar } from 'lucide-react'
import { type EducationItemType, educationList } from '@/config/infoConfig'

function EducationItem({ educationItem }: { educationItem: EducationItemType }) {
  return (
    <li className="group relative">
      <div style={{
        display: 'flex',
        gap: '16px',
        padding: '16px',
        borderRadius: '15px',
        backgroundColor: '#fcebe4',
        border: '2px solid #9cd6ef',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#338bcc';
        e.currentTarget.style.boxShadow = '3px 3px 0px #338bcc';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#9cd6ef';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        <div style={{
          position: 'relative',
          display: 'flex',
          height: '48px',
          width: '48px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          backgroundColor: '#338bcc'
        }}>
          <GraduationCap size={20} style={{ color: '#fcebe4' }} />
        </div>
        
        <dl style={{ display: 'flex', flex: 1, flexWrap: 'wrap', gap: '8px' }}>
          <dt className="sr-only">School</dt>
          <dd style={{
            width: '100%',
            fontSize: '0.875rem',
            color: '#d92f2f',
            fontFamily: 'Kalam, cursive'
          }}>
            {educationItem.school}
          </dd>
          
          <dt className="sr-only">Major</dt>
          <dd style={{
            fontSize: '0.75rem',
            color: '#9cd6ef',
            fontFamily: 'Mali, serif'
          }}>
            {educationItem.major}
          </dd>
          
          <dt className="sr-only">Date</dt>
          <dd style={{
            marginLeft: 'auto',
            fontSize: '0.75rem',
            color: '#338bcc',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Calendar size={12} />
            {educationItem.start} - {educationItem.end}
          </dd>
        </dl>
      </div>
    </li>
  )
}

export default function Education() {
  return (
    <div style={{
      position: 'relative',
      borderRadius: '25px',
      overflow: 'hidden',
      backgroundColor: '#015697',
      border: '3px dashed #fcebe4',
      padding: '24px'
    }}>
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '1.2rem',
        marginBottom: '24px',
        color: '#fcebe4',
        fontFamily: 'Kalam, cursive'
      }}>
        <div style={{
          padding: '8px',
          borderRadius: '10px',
          backgroundColor: '#015697'
        }}>
          <GraduationCap size={20} style={{ color: '#fcebe4' }} />
        </div>
        <span>Academic Journey</span>
      </h2>
      
      <ol style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {educationList.map((educationItem, index) => (
          <EducationItem key={index} educationItem={educationItem} />
        ))}
      </ol>
    </div>
  )
}