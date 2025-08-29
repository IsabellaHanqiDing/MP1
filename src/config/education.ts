
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'York University',
      major: 'Digital Media',
      logo: 'college',
      start: '2019',
      end: '2024'
    },
    {
      school: 'University of Chicago',
      major: 'Computer Science',
      logo: 'college',
      start: '2013',
      end: '2015'
    },
  ]