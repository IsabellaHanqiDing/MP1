// src/config/projects.ts

// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  category?: 'video-games' | 'board-games' | '3d-modeling' | '2d-arts' | 'programming' | 'others'
  thumbnail?: string
  downloadLink?: string
  demoLink?: string
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards Data
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'YU Automatic Entrance Scholarship',
    description: 'All Entrance Scholarships are confirmed on final grades. Scholarships are based on final admission average which is calculated including prerequisite courses.',
    date: '2019',
    location: 'Toronto, ON',
  },
  {
    name: 'Student Life Award',
    description: 'This award is based on final average grade.',
    date: '2019',
    location: 'Toronto, ON',
  },
]

// Activities Data
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'VR Workshop',
    description: 'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description: 'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description: 'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]