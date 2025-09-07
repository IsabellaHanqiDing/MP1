// src/components/home/Education.tsx
'use client'

import { GraduationCap, Calendar } from 'lucide-react'
import { type EducationItemType, educationList } from '@/config/infoConfig'

function EducationItem({ educationItem }: { educationItem: EducationItemType }) {
  return (
    <li className="group relative">
      <div className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300">
        <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30">
          <GraduationCap size={20} className="text-cyan-400" />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">School</dt>
          <dd className="w-full flex-none text-sm text-white uppercase tracking-wider tech-heading">
            {educationItem.school}
          </dd>
          <dt className="sr-only">Major</dt>
          <dd className="text-xs text-cyan-400">
            {educationItem.major}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-xs text-purple-400 flex items-center gap-1">
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
    <div className="relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative rounded-lg bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur border border-blue-500/20 p-6">
        <h2 className="flex items-center gap-3 text-lg uppercase tracking-wider mb-6 tech-heading">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30">
            <GraduationCap size={20} className="text-cyan-400" />
          </div>
          <span className="text-white">Academic <span className="text-cyan-400">Journey</span></span>
        </h2>
        <ol className="space-y-4">
          {educationList.map((educationItem, index) => (
            <EducationItem key={index} educationItem={educationItem} />
          ))}
        </ol>
      </div>
    </div>
  )
}