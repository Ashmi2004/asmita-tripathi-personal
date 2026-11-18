export const profile = {
  name: 'Asmita Tripathi',
  title: 'Software Engineer',
  summary:
    'I am a Software Engineer with over 4 years of software development experience in industry.',
  email: 'tripathiasmita0420@gmail.com',
  linkedin: 'https://www.linkedin.com/in/asmita-tripathi-51a1021a6/',
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: 'Oracle',
    role: 'Member of Technical Staff',
    period: 'Jul 2025 — Present',
    location: 'Bengaluru, India',
    current: true,
  },
  {
    company: 'Oracle',
    role: 'Intern',
    period: 'May 2024 — Jul 2024',
    location: 'Bengaluru, India',
  },
  {
    company: 'Avaya',
    role: 'Software Engineer',
    period: 'Jul 2019 — Oct 2022',
    location: 'Pune, India',
  },
]

export const education = [
  {
    school: 'International Institute of Information Technology Bangalore',
    degree: 'Master of Technology (MTech), Computer Science',
    period: '2023 — 2025',
  },
  {
    school: 'MKSSS Cummins College of Engineering for Women',
    degree: 'Bachelor of Engineering (BE), Information Technology',
    period: '2015 — 2019',
  },
]

export const projects = [
  {
    name: 'ChatBot implementation for Documentation portal',
    description: 'Implemented a FAQ chat-bot for the documentation portal of Avaya.',
  },
  {
    name: 'Security to IoT device using KMIP and Fog Computation',
    description: 'KMIP — Key Management Interoperability Protocol.',
  },
  {
    name: 'Warehouse management system',
  },
]
