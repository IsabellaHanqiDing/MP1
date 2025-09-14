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
    description: 'Assist the speaker in explaining basic VR knowledge and help the trainees solve problems.',
    date: '2024-02-24',
    location: 'Toronto',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'Maker Day',
    description: 'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Toronto',
  },
  {
    name: 'Level Up Student Showcase',
    description: 'Volenteer in Level Up Student Showcase. Responsed for assisted judges and attendees, and troubleshot booth issues and maintained event flow during scoring windows. ',
    date: '2024-04-19',
    location: 'Toronto',
  },
]