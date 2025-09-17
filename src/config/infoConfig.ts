// ============================================
// TYPES
// ============================================
export type ProjectCategory = 'video-games' | 'board-games' | '3d-modeling' | '2d-arts' | 'programming' | 'others'

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  category: ProjectCategory
  thumbnail?: string
  downloadLink?: string
  demoLink?: string
  images?: string[] 
  thoughts?: string
}

export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

// ============================================
// PERSONAL INFO
// ============================================
export const name = 'Isabella Hanqi Ding'
export const headline = 'Game Developer, Digital Meadia Designer, Creative Technologist'
export const introduction = "My name is Isabella Hanqi Ding. I graduated from York University Digital Media program. Since then, I've been exploring the intersection of technology, creativity, and play."
export const email = 'isabellalading@gmail.com'
export const githubUsername = 'IsabellaHanqiDing'

// ============================================
// ABOUT PAGE
// ============================================
export const aboutMeHeadline = 'About Isabella'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Isabella Hanqi Ding. I graduated from York University Digital Media program. Since then, I've been exploring the intersection of technology, creativity, and play.",
  "I'm currently focused on game, UIUX and website design.",
  "I started this blog to share the insights I learn every day. Most blogs focus on Game analysis, Game design, website design and interactive art, while others share the life lessons I've learned.",
  "When I'm not designing or coding, I'm making music (Logic Pro, Adobe Audition) or out with my camera capturing everyday stories."
] 

// ============================================
// BLOG SECTION
// ============================================
export const blogHeadLine = "What I've been thinking about."
export const blogIntro = "I've written something about game, programming, arts and life."

// ============================================
// PROJECTS SECTION
// ============================================
export const projectHeadLine = "Projects"
export const projectIntro = "Projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Dear Diary',
    description: 'Contributed to the development of a Unity-based open-world story-driven game as part of a collaborative team, focusing on game design, narrative writing, and artistic illustration.',
    link: { href: 'https://hahajace.itch.io/dear-diary', label: 'Play Game' },
    tags: ['Unity', 'Maya', 'C#', 'SketchBook'],
    category: 'video-games',    
    images: [
      '/images/projects/dear-diary-1.png',
      '/images/projects/dear-diary-2.png',
      '/images/projects/dear-diary-3.png',
      '/images/projects/dear-diary-4.png',
      '/images/projects/dear-diary-5.png'
    ],
    thoughts: `This project was a journey into narrative-driven game design. I wanted to create an experience that felt personal and immersive.
    
    The biggest challenge was balancing open-world exploration with a cohesive story. We solved this by creating environmental storytelling elements that players could discover at their own pace.
    
    Working with a team taught me the importance of clear communication and iterative design. Every week brought new insights that shaped the final product.`
  },
  {
    name: 'Data Visualization - Music',
    description: 'Developed a data visualization artwork using p5.js, where different instruments and tracks of a musical piece were represented through distinct visual patterns.',
    link: { href: 'https://editor.p5js.org/hanqi666/sketches/Ly8fRr9-O', label: 'View Demo' },
    tags: ['P5.js', 'Music'],
    category: 'programming',
    images: [
      '/images/projects/datamusi-0.png',
      '/images/projects/datamusi-1.png'
    ],
    thoughts: `.`
  },
    {
    name: 'Data Visualization - listening preference',
    description: 'Developed a data visualization artwork using p5.js, where different instruments and tracks of a musical piece were represented through distinct visual patterns.',
    link: { href: 'https://editor.p5js.org/hanqi666/sketches/GaZ7aE4mV', label: 'View Demo' },
    tags: ['P5.js', 'Data Visualization','Excel'],
    category: 'programming',
    images: [
      '/images/projects/datalisten-1.png',
      '/images/projects/datalisten-2.png'
    ],
    thoughts: `.`
  },
  {
    name: 'Board Game: Extraterrestrial Battle',
    description: 'Worked with a team to create a fun, accessible board game designed for social play. The game is fully printable—just download the files, print them out, and enjoy with friends.',
    link: { href: 'https://drive.google.com/drive/folders/1zEEgVlDO0uB2pgUipRHMNMz9p4t1VPf9?usp=drive_link', label: 'View Project' },
    tags: ['BoardGame','GroupWork'],
    category: 'board-games',
    images: [
      '/images/projects/Extraterrestrial Battle-1.png',
      '/images/projects/Extraterrestrial Battle-2.png',
      '/images/projects/Extraterrestrial Battle-3.png',
    ],
    thoughts: `This is a board game designed for both adults and children. The inspiration for its creation comes from a children's picture book called "Mr. Wuffles!". 
    Players can simply download and print the files to learn about and play this game. 
    It is suitable for family gatherings.`
  },
  {
    name: 'Fiigma UI Design',
    description: 'Conducted research and developed the user interface of a campus app in collaboration with team members.',
    link: { href: 'https://drive.google.com/drive/folders/1hP0wZQPw2q3LFL_edjThpzfbrDokqwR8?usp=drive_link', label: 'View Project' },
    tags: ['Figma', 'UI','Excel'],
    category: 'others'
  },
  {
    name: 'Board Game: The World',
    description: 'A combat - themed board game, accompanied by a detailed gameplay introduction and a video.',
    link: { href: 'https://drive.google.com/drive/folders/1fFxUqG_PmV519y6nqHiQZyfKSfJPqD2b?usp=drive_link', label: 'View Project' },
    tags: ['BoardGame','Premiere Pro'],
    category: 'board-games'
  },
  {
    name: '3D Modeling - Camera',
    description: 'A 3D camera model created based on real photos, made using Maya.',
    link: { href: 'https://drive.google.com/file/d/1OZd5I9yNgfvqs5mD2EeTEpw5CNnHyp8O/view?usp=drive_link', label: 'View Project' },
    tags: ['MAYA','3D MODEL'],
    category: '3d-modeling'
  },
  {
    name: '3D Modeling - Girl',
    description: 'A 3D girl model created based on 2d picture, made using Maya.',
    link: { href: 'https://drive.google.com/file/d/1OZd5I9yNgfvqs5mD2EeTEpw5CNnHyp8O/view?usp=drive_link', label: 'View Project' },
    tags: ['MAYA','3D MODEL'],
    category: '3d-modeling'
  },
  {
    name: '2D Painting',
    description: 'A 3D girl model created based on 2d picture, made using Maya.',
    link: { href: 'https://drive.google.com/file/d/1OZd5I9yNgfvqs5mD2EeTEpw5CNnHyp8O/view?usp=drive_link', label: 'View Project' },
    tags: ['MAYA','3D MODEL'],
    category: '3d-modeling'
  }
]

// ============================================
// EDUCATION
// ============================================
export const educationList: Array<EducationItemType> = [
  {
    school: 'York University',
    major: 'Digital Media',
    logo: 'college',
    start: '2019',
    end: '2024'
  },
  {
    school: 'Henan Experimental High School',
    major: 'High School',
    logo: 'college',
    start: '2016',
    end: '2019'
  },
]

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/isabellalad?igsh=MWdmZjN2eDdoYXZ6ZA==',
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: 'https://discord.gg/efvb78zu',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/59417088',
  },
  {
    name: 'Music',
    icon: 'neteasecloudmusic',
    href: 'https://music.163.com/#/artist?id=35605021',
  },
]

// ============================================
// TECH ICONS (for animations)
// ============================================
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
]