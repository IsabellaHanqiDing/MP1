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
    tags: ['P5.js','Data Visualization','Music'],
    category: 'programming',
    images: [
      '/images/projects/datamusi-0.png',
      '/images/projects/datamusi-1.png'
    ],
    thoughts: `This work involves converting different musical arrangements into visual videos through code. 
    The main melody represents the central circle. The various circles of different sizes and colors distributed around it represent the sounds of drums, saxophones, and so on. 
    I chose to combine this piece with dreamy pink and various circles based on the gentle and romantic style of the music.
    The play/pause button in the upper left corner makes it much easier to start and stop the playback of this work.`
  },
    {
    name: 'Data Visualization - listening preference',
    description: 'Developed a data visualization using p5.js, used an Excel table to summarize my listening music information, which revealed my music preference.',
    link: { href: 'https://editor.p5js.org/hanqi666/sketches/GaZ7aE4mV', label: 'View Demo' },
    tags: ['P5.js', 'Data Visualization','Excel'],
    category: 'programming',
    images: [
      '/images/projects/datalisten-1.png',
      '/images/projects/datalisten-2.png'
    ],
    thoughts: `In this work, I imported all the songs that I had listened to over a period of time and categorized them.
    Different song types are represented by different colors, and the larger the color proportion, the more times I have listened to it. 
    By clicking the button on the top left corner, you can switch to different dates, making it easier to view. 
    When the mouse hovers over a different color, you can view in detail the song type represented by that color and the number of times I have listened to it.`
  },
    {
    name: 'Data Visualization - match locations',
    description: 'Developed a data visualization using p5.js, displays all the match information of Manchester City for the years 2023 and 2024.',
    link: { href: 'https://editor.p5js.org/hanqi666/sketches/WmetaXZyP', label: 'View Demo' },
    tags: ['P5.js', 'Data Visualization','Excel'],
    category: 'programming',
    images: [
      '/images/projects/datacity-1.png',
      '/images/projects/datacity-2.png',
      '/images/projects/datacity-3.png'
    ],
    thoughts: `In this visualization, I have chosen the data of all match locations, dates, and outcomes for Manchester City Football Club for the 23-24 season up to the present. 
    I used “Mapbox” to display the team's journey through each stadium and the match outcomes on the map. 
    The reason for choosing this dataset is that I am a fan of Manchester City but have never been to a live match, so I wanted to document their itinerary on the map. 
    For the overall color, I chose the blue color that represents Manchester City. The small boat in the middle is also a symbol of Manchester City. 
    When the mouse hovers over the small boat, you can view detailed information such as the exact competition date and results. `
  },
  {
    name: 'Board Game-Extraterrestrial Battle',
    description: 'Worked with a team to create a fun, accessible board game designed for social play. The game is fully printable—just download the files, print them out, and enjoy with friends.',
    link: { href: 'https://drive.google.com/drive/folders/1zEEgVlDO0uB2pgUipRHMNMz9p4t1VPf9?usp=drive_link', label: 'View Project' },
    tags: ['BoardGame','GroupWork','SketchBook'],
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
    tags: ['Figma', 'UI'],
    category: 'others',
    images: [
      '/images/projects/figma-1.png',
      '/images/projects/figma-2.png',
      '/images/projects/figma-3.png',
    ],
    thoughts: `My team and I discovered some inconvenient issues when living on campus. 
    Therefore, we used Figma to create a campus app that can help students and teachers more conveniently find their destinations, use public facilities, ensure campus safety, and so on.`
  },
  {
    name: 'Board Game-The World',
    description: 'A combat - themed board game, accompanied by a detailed gameplay introduction and a video.',
    link: { href: 'https://drive.google.com/drive/folders/1fFxUqG_PmV519y6nqHiQZyfKSfJPqD2b?usp=drive_link', label: 'View Project' },
    tags: ['BoardGame','Premiere Pro'],
    category: 'board-games',
     images: [
      '/images/projects/world-1.png',
      '/images/projects/world-2.png'
    ],
    thoughts: `In this game, each player will choose a character before the game start. 
    Different type of character will have different talent, Hp, armor and basic skill. 
    Players roll dice to determine the number of steps to take on the board. 
    Some place will gain while some will lose the marks. Characters could buy different skills and items that increases the amount of Hp in the shop (health drink). 
    At the end of each roll of the dice, the player will have a chance to choose one to attack. Players could choose to attack others or not, but the one who was chosen by other must accept. 
    At the end of game, the one who survive will win the game.`
  },
  {
    name: '3D Modeling - Camera',
    description: 'A 3D camera model created based on real photos, made using Maya.',
    link: { href: 'https://drive.google.com/file/d/1OZd5I9yNgfvqs5mD2EeTEpw5CNnHyp8O/view?usp=drive_link', label: 'View Project' },
    tags: ['MAYA','3D MODEL'],
    category: '3d-modeling',
     images: [
      '/images/projects/camera-2.png',
      '/images/projects/camera-1.png'
    ],
    thoughts: `This camera was created by me using a model made in Maya based on the three-view diagrams of a real Canon camera.
    All the accessories of the camera are precisely restored in proportion.`
  },
  {
    name: '3D Modeling - Girl',
    description: 'A 3D girl model created based on 2d picture, made using Maya.',
    link: { href: 'https://drive.google.com/drive/folders/1aAKDoKH62PBOBbxEmNPE4Ypm18x2o2cI?usp=sharing', label: 'View Project' },
    tags: ['MAYA','3D MODEL'],
    category: '3d-modeling',
    images: [
      '/images/projects/girl-3.png',
      '/images/projects/girl-2.png',
      '/images/projects/girl-1.png',
    ],
    thoughts: `In this project, I made a cartoon character according to a three view drawing, a little blonde girl. 
    I first made half of her face and then smoothed the model. 
One difficulty here is that it is difficult for me to make the connection between the girl's ear and face smooth.`
  },
  {
    name: '2D Painting - Flowers',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1ChoBjOo0INqN-ZAYcNraCOutgBUGnroa/view?usp=sharing', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/flowers.PNG',
    ],
    thoughts: ``
  },
    {
    name: '2D Painting - Willow trees and swallows',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1_Jwipca_OYmtODqGIhlTB5vYqM9nmBjZ/view?usp=sharing', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/Willow trees and swallows.PNG',
    ],
    thoughts: ``
  },
  {
    name: '2D Painting - Snow and orange tree',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1txe23sHO0rXYeCwfnnvBt_gWVKIpNshi/view?usp=sharing', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/Snow and orange tree.jpg',
    ],
    thoughts: ``
  },
  {
    name: '2D Painting - Rain',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1cwERuiDSlq_EEPmPPu6WUSJ49kkQjZ2V/view?usp=drive_link', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/Rain.png',
    ],
    thoughts: ``
  },
   {
    name: '2D Painting - Myself',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1-0aXu5iweYX0WhdQvp2nZhVzr67nc0Ft/view?usp=sharing', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/Myself.png',
    ],
    thoughts: ``
  },
   {
    name: '2D Painting - Mountain and Lake',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1h5xBIwPwko41XIP1roFB4Mzzf1sEGZia/view?usp=sharing', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/Mountain and Lake.png',
    ],
    thoughts: ``
  },
   {
    name: '2D Painting - Grass',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1rpeJ2DTOfKtpxq-x2AsO8x5sNvNtxwsB/view?usp=sharing', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/Grass.png',
    ],
    thoughts: ``
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