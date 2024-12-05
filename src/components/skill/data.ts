interface Skill {
  name: string;
  icon: string;
  type: string[];
  iconAlt?: string;
}

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    icon: '/images/HTML.webp',
    type: ['WEBSITE'],
    iconAlt: 'HTML - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'CSS',
    icon: '/images/CSS.webp',
    type: ['WEBSITE'],
    iconAlt: 'CSS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Javascript',
    icon: '/images/Javascript.webp',
    type: ['WEBSITE'],
    iconAlt: 'Javascript - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Typescript',
    icon: '/images/Typescript.webp',
    type: ['WEBSITE'],
    iconAlt: 'Typescript - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'React',
    icon: '/images/React.webp',
    type: ['WEBSITE'],
    iconAlt: 'React - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Angular',
    icon: '/images/Angular.webp',
    type: ['WEBSITE'],
    iconAlt: 'Angular - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'React Native',
    icon: '/images/ReactNative.webp',
    type: ['MOBILE_DESKTOP'],
    iconAlt: 'Angular - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Vue',
    icon: '/images/Vue.webp',
    type: ['WEBSITE'],
    iconAlt: 'Vue - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NextJS',
    icon: '/images/NextJS.webp',
    type: ['WEBSITE'],
    iconAlt: 'NextJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Universal',
    icon: '/images/AngularUniversal.webp',
    type: ['WEBSITE'],
    iconAlt: 'NuxtJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NuxtJS',
    icon: '/images/NuxtJS.webp',
    type: ['WEBSITE'],
    iconAlt: 'NuxtJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'ElectronJS',
    icon: '/images/ElectronJS.webp',
    type: ['MOBILE_DESKTOP'],
    iconAlt: 'ElectronJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NodeJS',
    icon: '/images/NodeJS.webp',
    type: ['BACKEND'],
    iconAlt: 'NodeJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'ExpressJS',
    icon: '/images/ExpressJS.webp',
    type: ['BACKEND'],
    iconAlt: 'ExpressJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'NestJS',
    icon: '/images/NestJS.webp',
    type: ['BACKEND'],
    iconAlt: 'NestJS - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'MongoDB',
    icon: '/images/MongoDB.webp',
    type: ['BACKEND'],
    iconAlt: 'MongoDB - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'CI CD',
    icon: '/images/CICD.webp',
    type: ['DEPLOY'],
    iconAlt: 'Nginx - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Docker',
    icon: '/images/Docker.webp',
    type: ['DEPLOY'],
    iconAlt: 'Nginx - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Nginx',
    icon: '/images/Nginx.webp',
    type: ['DEPLOY'],
    iconAlt: 'Nginx - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'PM2',
    icon: '/images/PM2.webp',
    type: ['DEPLOY'],
    iconAlt: 'PM2 - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Vercel',
    icon: '/images/Vercel.webp',
    type: ['DEPLOY'],
    iconAlt: 'Vercel - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Railway',
    icon: '/images/Railway.webp',
    type: ['DEPLOY'],
    iconAlt: 'Railway - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Koyeb',
    icon: '/images/Koyeb.webp',
    type: ['DEPLOY'],
    iconAlt: 'Koyeb - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Github',
    icon: '/images/Github.webp',
    type: ['OTHER'],
    iconAlt: 'Github - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Gitlab',
    icon: '/images/Gitlab.webp',
    type: ['OTHER'],
    iconAlt: 'Gitlab - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Figma',
    icon: '/images/Figma.webp',
    type: ['OTHER'],
    iconAlt: 'Figma - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Photoshop',
    icon: '/images/Photoshop.webp',
    type: ['OTHER'],
    iconAlt: 'Photoshop - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Jira',
    icon: '/images/Jira.webp',
    type: ['OTHER'],
    iconAlt: 'Jira - Nguyễn Hồng Đức Portfolio'
  },
  {
    name: 'Agile Scrum',
    icon: '/images/AgileScrum.webp',
    type: ['OTHER'],
    iconAlt: 'Agile Scrum - Nguyễn Hồng Đức Portfolio'
  }
];

export const TABS = [
  {
    title: 'Website',
    value: 'WEBSITE'
  },
  {
    title: 'Mobile & Desktop',
    value: 'MOBILE_DESKTOP'
  },
  {
    title: 'Back-End',
    value: 'BACKEND'
  },
  {
    title: 'Deployment',
    value: 'DEPLOY'
  },
  {
    title: 'Other',
    value: 'OTHER'
  }
];
