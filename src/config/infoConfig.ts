export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Isabella Hanqi Ding'
export const headline = 'A Game Creator, Digital Media Designer with a passion for crafting immersive experiences that blend storytelling, interaction, and visual design.'
export const introduction =
  "My name is Isabella Hanqi Ding. I graduated from York University Digital Media program. Since then, I’ve been exploring the intersection of technology, creativity, and play."
export const email = 'isabellalading@gmail.com'
export const githubUsername = 'IsabellaHanqiDing'


// about page
export const aboutMeHeadline = 'About Isabella'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Isabella Hanqi Ding. I graduated from York University Digital Media program. Since then, I’ve been exploring the intersection of technology, creativity, and play.",
  "I'm currently focused on game, UIUX and website design.",
  "I started this blog to share the insights I learn every day. Most blogs focus on Game analysis, Game design, website design and interactive art, while others share the life lessons I've learned.",
  "When I'm not designing or coding, I'm making music (Logic Pro, Adobe Audition) or out with my camera capturing everyday stories."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about game, programming, arts and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

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
    icon: 'applemusic',
    href: 'https://music.163.com/#/artist?id=35605021',
  },
]

// https://simpleicons.org/
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
  'wechat',
]
