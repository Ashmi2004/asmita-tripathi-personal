import { ArrowUpRight } from 'lucide-react'
import { Education, Experience } from '@/components/journey'
import { Section } from '@/components/section'
import { achievements, profile, projects, skills } from '@/lib/profile'

export function Professional() {
  return (
    <div className="flex flex-col gap-12">
      <Section id="experience" title="Experience">
        <Experience />
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900"
        >
          Full profile on LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="flex flex-col gap-5">
          {skills.map((s) => (
            <div key={s.group} className="flex flex-col gap-2">
              <dt className="text-sm font-medium text-slate-900">{s.group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="projects" title="Projects">
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <li key={project.name} className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium text-slate-900">{project.name}</h3>
                {project.period && <p className="font-mono text-xs text-slate-500">{project.period}</p>}
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
              {project.stack && <p className="font-mono text-xs text-slate-500">{project.stack}</p>}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
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
          className="mt-8 inline-block text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900"
        >
          All repositories on GitHub<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </Section>

      <Section id="achievements" title="Achievements">
        <ul className="flex list-disc flex-col gap-2 pl-4 text-sm leading-relaxed text-slate-600 marker:text-slate-400">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>
    </div>
  )
}
