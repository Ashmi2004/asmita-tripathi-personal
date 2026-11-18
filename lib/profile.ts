export const profile = {
  name: 'Asmita Tripathi',
  title: 'Software Engineer',
  summary:
    'I am a Software Engineer with over 4 years of software development experience in industry.',
  email: 'tripathiasmita0420@gmail.com',
  linkedin: 'https://www.linkedin.com/in/asmita-tripathi-51a1021a6/',
  github: 'https://github.com/Ashmi2004',
}

export type ExperienceItem = {
  company: string
  role: string
  team: string
  period: string
  location: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Oracle',
    role: 'Member of Technical Staff I',
    team: 'Full-Stack Developer, OCI Infrastructure Platform',
    period: 'Jul 2025 — Sep 2026',
    location: 'Bengaluru, India',
    highlights: [
      'Designed and implemented Java and Spring Boot backend services with React.js frontends for a full-stack platform delivering monitoring, provisioning, and resource tracking across OCI infrastructure components.',
      'Re-architected data fetching in the Cloud Fleet dashboard with server-side aggregation, pagination, and caching, reducing page load time by 40 seconds and removing the top source of user-reported latency.',
      'Built a GenAI Copilot workflow integrating an LLM with a Jira agent that runs proximity analysis on incoming incidents against historical SRE remediation actions and returns ranked probable solutions.',
      'Improved proximity-analysis accuracy by ~25% (top-3 solution match from ~60% to ~85%) by restructuring prompts, engineering richer context payloads, and retraining and evaluating the underlying models.',
      'Established a Playwright end-to-end automation suite covering critical provisioning and dashboard flows, wired into the CI pipeline.',
    ],
  },
  {
    company: 'Oracle',
    role: 'Software Engineering Intern',
    team: 'Alert Management & Observability',
    period: 'May 2024 — Jul 2024',
    location: 'Bengaluru, India',
    highlights: [
      'Delivered an end-to-end proof of concept integrating a monitoring tool into an alert management dashboard using Core Java, Kafka, OCI Streams, JEasy Rules, and React.js; converted to a full-time offer.',
    ],
  },
  {
    company: 'Avaya',
    role: 'Software Development Engineer I',
    team: 'Device Management & Provisioning Platform',
    period: 'Jul 2019 — Oct 2022',
    location: 'Pune, India',
    highlights: [
      'Architected and shipped a WebSocket-based service for Avaya IP phones that replaced polling with persistent bidirectional connectivity, enabling near real-time configuration push.',
      'Delivered authentication, security hardening, and zero-touch provisioning features in Java, Spring Boot, and PostgreSQL.',
      'Designed and developed the NLP chatbot for documentation.avaya.com, owning backend implementation and containerization; awarded Ovation for its production deployment.',
      'Containerized and automated service deployment with Docker, Kubernetes, and Jenkins CI/CD pipelines.',
    ],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'JavaScript (ES6+)', 'Python', 'SQL'] },
  {
    group: 'Backend',
    items: ['Spring Boot', 'REST APIs', 'Microservices', 'Apache Kafka', 'OCI Streams', 'Maven', 'JWT Authentication'],
  },
  { group: 'Frontend', items: ['React.js', 'React Native', 'State Management', 'Responsive UI'] },
  {
    group: 'AI / GenAI',
    items: [
      'LLM Integration',
      'Prompt Engineering',
      'Agentic & Copilot Workflows',
      'Context Grounding',
      'Model Fine-Tuning',
      'NLP (Rasa, BERT)',
      'Knowledge Graphs (Neo4j)',
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Oracle Cloud Infrastructure', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git', 'Ansible', 'AWS S3'],
  },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'Neo4j'] },
  {
    group: 'Testing',
    items: ['Playwright', 'End-to-End Test Automation', 'Unit & Integration Testing', 'Code Review'],
  },
  {
    group: 'Practices',
    items: [
      'Full SDLC Ownership',
      'System Design',
      'Observability & Monitoring',
      'Latency Optimization',
      'Agile/Scrum',
      'Mentorship',
    ],
  },
]

export const education = [
  {
    school: 'International Institute of Information Technology, Bangalore',
    degree: 'M.Tech in Computer Science and Engineering',
    period: '2023 — 2025',
  },
  {
    school: 'MKSSS Cummins College of Engineering, Pune',
    degree: 'B.E. in Information Technology',
    period: '2015 — 2019',
  },
]

export type Project = {
  name: string
  period?: string
  stack?: string
  description: string
  github?: string
}

export const projects: Project[] = [
  {
    name: 'Blockchain-Based Consent-Driven Job Portal',
    period: 'May 2024',
    stack: 'Spring Boot, React.js, Blockchain in Java, Jenkins, Docker Compose, Ansible, ELK Stack',
    description:
      'A consent-management job portal on a Java blockchain layer giving applicants control over data access, with an automated delivery pipeline and centralized logging via the ELK stack.',
    github: 'https://github.com/Ashmi2004/SPE',
  },
  {
    name: 'Suhrud — Mental Health Platform',
    period: 'May 2024',
    stack: 'Spring Boot, MySQL, React.js, React Native, JWT, AES Encryption',
    description:
      'A secure web and mobile platform providing appointment scheduling, peer-support forums, self-assessment tooling, and real-time expert consultation channels.',
  },
  {
    name: 'NLP Chatbot for Avaya Documentation Portal',
    stack: 'NLP (Rasa), Neo4j, Docker',
    description:
      'Q&A chatbot covering all Avaya products for documentation.avaya.com, with knowledge-graph user context and an admin analytics portal.',
  },
  {
    name: 'Security to IoT Devices using KMIP and Fog Computation',
    description: 'Part of my BE project. KMIP — Key Management Interoperability Protocol.',
    github: 'https://github.com/Ashmi2004/KMIP',
  },
]

export const achievements = [
  '1st Runner-up, Avaya New Hires Hackathon.',
  'Ovation Award for production deployment of the NLP chatbot on the Avaya documentation portal, and a second Ovation Award for an innovative approach in product feature implementation.',
  'Excellence Badge for developing an interdisciplinary internal tool.',
]
