interface Timeline {
  workplace: string;
  duration: string;
  description: string;
  workplaceLogo: string;
  technologies: string[];
  workplaceLink: string;
}

export const TIMELINES: Timeline[] = [
  {
    workplace: 'FPT Software',
    duration: '10/2024 - Now',
    description: 'Participate in developing telecommunications outsourcing projects.',
    workplaceLogo: '/images/FPTSoftware.webp',
    workplaceLink: 'https://fptsoftware.com',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS']
  },
  {
    workplace: 'Vndirect',
    duration: '01/2022 - 09/2024',
    description: 'Participate in developing support projects for securities users.',
    workplaceLogo: '/images/Vndirect.webp',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS'],
    workplaceLink: 'https://www.vndirect.com.vn'
  },
  {
    workplace: 'Egroup',
    duration: '06/2020 - 12/2021',
    description: 'Participate in developing an online English teaching website system.',
    workplaceLogo: '/images/Egroup.webp',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS'],
    workplaceLink: 'https://egroup.vn'
  },
  {
    workplace: 'UTC',
    duration: '09/2017 - 06/2021',
    description: 'Studied and graduated in 2021 (IT Engineer).',
    workplaceLogo: '/images/UTC.webp',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS'],
    workplaceLink: 'https://www.utc.edu.vn'
  }
];
