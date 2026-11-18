import { ArrowUpRight, Award, Briefcase, Code2, FolderGit2, GraduationCap } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Education, Experience } from '@/components/journey'
import { SideTabs } from '@/components/side-tabs'
import { achievements, profile, projects, skills } from '@/lib/profile'

const chipTones = [
  'border-amber-400/30 bg-amber-400/10 text-amber-200',
  'border-teal-400/30 bg-teal-400/10 text-teal-200',
  'border-sky-400/30 bg-sky-400/10 text-sky-200',
]

const iconClass = 'size-4'

function Skills() {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {skills.map((s, i) => (
        <div key={s.group} className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <dt className="text-sm font-semibold text-slate-50">{s.group}</dt>
          <dd>
            <ul className="flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <li key={item} className={`rounded-md border px-2 py-0.5 text-xs ${chipTones[i % chipTones.length]}`}>
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}

function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-amber-400/40"
          >
            <div className="flex flex-col gap-1">
              {project.period && <p className="font-mono text-xs text-teal-300">{project.period}</p>}
              <h3 className="font-medium text-slate-50">{project.name}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
            {project.stack && <p className="font-mono text-xs leading-relaxed text-slate-400">{project.stack}</p>}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-amber-300 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <GithubIcon className="size-4" />
                View on GitHub
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-1 text-sm text-slate-400 underline underline-offset-4 hover:text-slate-100"
      >
        All repositories on GitHub
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}

function Achievements() {
  return (
    <ul className="flex flex-col gap-3">
      {achievements.map((a) => (
        <li key={a} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-amber-400/10 text-amber-300">
            <Award aria-hidden="true" className="size-4" />
          </span>
          <p className="text-sm leading-relaxed text-slate-300">{a}</p>
        </li>
      ))}
    </ul>
  )
}

export function Professional() {
  return (
    <SideTabs
      label="Professional sections"
      items={[
        {
          value: 'experience',
          label: 'Experience',
          icon: <Briefcase aria-hidden="true" className={iconClass} />,
          description: 'Where I have worked and what I built.',
          content: (
            <>
              <Experience />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1 text-sm text-slate-400 underline underline-offset-4 hover:text-slate-100"
              >
                Full profile on LinkedIn
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </>
          ),
        },
        {
          value: 'skills',
          label: 'Skills',
          icon: <Code2 aria-hidden="true" className={iconClass} />,
          description: 'Languages, frameworks, and tools I work with.',
          content: <Skills />,
        },
        {
          value: 'projects',
          label: 'Projects',
          icon: <FolderGit2 aria-hidden="true" className={iconClass} />,
          description: 'Selected work, with GitHub links where the code is public.',
          content: <Projects />,
        },
        {
          value: 'achievements',
          label: 'Achievements',
          icon: <Award aria-hidden="true" className={iconClass} />,
          description: 'Recognition along the way.',
          content: <Achievements />,
        },
        {
          value: 'education',
          label: 'Education',
          icon: <GraduationCap aria-hidden="true" className={iconClass} />,
          content: <Education />,
        },
      ]}
    />
  )
}
