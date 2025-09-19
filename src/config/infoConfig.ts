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
    thoughts: `First, I downloaded a song from a free audio material website and imported it into my p5.js project. 
    Then, I decided to use various shapes to represent different parts of the audio. 
    For example, I used larger pink circles to show amplitude changes, smaller blue circles to display the frequency spectrum, and a white irregular circle in the center of the screen for beat detection. 
    Additionally, I used vertical lines to form a wave pattern, changing their colors and sizes to represent the audio's spectral centroid. I chose the piece of music "good night" because the entire song has a very chill vibe, just like its name, making it perfect for relaxation at night.
    I opted to use two different colors for the circles to simulate the bubbles in a bathtub during a nighttime bath, creating a dreamy atmosphere. The white circle in the middle, which shows beat detection, doesn't have sharp changes or movements. 
    Against the black background, it appears somewhat cute.
    Link to Music: https://pixabay.com/music/beats-good-night-160166/`
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
    thoughts: `I used a portion of my data, including dates I previously collected,
the genres of songs listened to, and the number of songs listened to in each genre. I chose to
represent each music genre with a color bar, where the height of the color bar is determined by the
count of genres. The purpose of using this method is to combine music genres with colors. I
selected colors that I thought were suitable for each music genre, displaying only the genres I
listened to on the same day. By switching dates through a button next to it, one can clearly see the
types of songs listened to each day and their respective quantities. In the setup, I updated the
"genreColors" object to display the colors I wanted for each genre, and in drawGenres, I used
noStroke() to remove the borders. Lastly, I used drawGenres to check the position of the mouse,
showing the corresponding song genre and the number of songs listened to in that genre on the day
only when the mouse hovers over the color bar. Additionally, I called redraw() in mouseMoved to
ensure the screen is redrawn every time the mouse moves.`
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
    In Mapbox, I utilized a photo of the Etihad Stadium as the base map's color scheme, and placed it in P5.js. I drew a boat-shaped location marker with the “drawBoat()” function to represent Manchester City, as there is a boat in the club's emblem. 
    The "mouseMoved()" function is used to display the details of the match in the top-left corner of the screen when the mouse hovers over the boat. 
    When Manchester City wins a match, the boat representing the team is colored blue, turns black when they lose, and white in the event of a draw. 
    The most challenging part of this project was creating a world map and using dots to display the locations of each match, connecting them with lines. 
    Clicking on each dot zooms in on the map to enter the stadium area, where specific details of the match can be viewed. 
    For this part, I used “loadGlobalViewMap()” to display the overall world map and “drawGlobalView()” to show the points on the map. 
`
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
    thoughts: ``
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
    thoughts: `In this project, I made a cartoon character, a little blonde girl. I first made
half of her face and then smoothed the model. One difficulty here is that it is difficult
for me to make the connection between the girl's ear and face smooth. I first thought
of dividing the face and ear into two models, but later, after repeated attempts, I found
that it would be easier to make the ears and face together. After filling the eyes, I added
eyelashes and eyebrows to the anime girl's face.

Next, I hid the face and started to work on the left side of the body, which
was a difficult step in my model because I needed to make the top first and then add
the arms and hands. To make the top part of the girl look like the shoulder part in the
picture, I made an oval model and stacked it with the shoulder part of the dress by
using “Mesh”→“Booleans”→ “Difference”. The result is that the shoulder part of the
garment is empty.

The relatively easy part is the making of skirts, legs, and shoes, because
these parts don't require a lot of cutting and irregular modeling. I made the belt, the
top part of the dress and the bottom petticoat separately to better distinguish the
layers of the dress.`
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
    name: '2D Painting - Willow trees and swallows',
    description: '2D Paintings.',
    link: { href: 'https://drive.google.com/file/d/1_Jwipca_OYmtODqGIhlTB5vYqM9nmBjZ/view?usp=sharing', label: 'View Project' },
    tags: ['Procreate','2D Arts'],
    category: '2d-arts',
         images: [
      '/images/projects/Willow trees and swallows.PNG',
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