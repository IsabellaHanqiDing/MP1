// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'YU Automatic Ectrance Scholarship',
    description: 'All Entrance Scholarships are confirmed on final grades. Scholarships are based on final admission average which is calculated including perequisite courses.',
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

// Research & Projects
export const projectHeadLine = "Projects"
export const projectIntro = "Projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Dear Diary',
    description: 'Contributed to the development of a Unity-based open-world story-driven game as part of a collaborative team, focusing on game design, narrative writing, and artistic illustration.',
    link: { href: 'https://hahajace.itch.io/dear-diary', label: '' },
    tags: ['UnityGame', 'Maya', 'C#', 'SketchBook', 'Portfolio']
  },
  {
    name: 'Data Visualization',
    description: 'Developed a data visualization artwork using p5.js, where different instruments and tracks of a musical piece were represented through distinct visual patterns.',
    link: { href: 'https://editor.p5js.org/hanqi666/sketches/Ly8fRr9-O', label: '' },
    tags: ['P5.js', 'Music']
  },
  {
    name: 'Board Game',
    description: 'Worked with a team to create a fun, accessible board game designed for social play. The game is fully printable—just download the files, print them out, and enjoy with friends.',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: '' },
    tags: ['BoardGame']
  },
  {
    name: 'AI Camp Course Development',
    description: 'Developed a comprehensive AI curriculum for high school students, incorporating real-world projects and startup concepts.',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: '' },
    tags: ['Education', 'AI']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'VR Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
