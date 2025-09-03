
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
      school: 'Henan Experimental High School',
      major: 'High School',
      logo: 'college',
      start: '2016',
      end: '2019'
    },
  ]