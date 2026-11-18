import { GraduationCap } from 'lucide-react'
import { education, experience } from '@/lib/profile'

export function Experience() {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-slate-700 pl-6">
      {experience.map((item, index) => (
        <li key={`${item.company}-${item.role}`} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[1.85rem] top-1.5 size-2.5 rounded-full ring-4 ring-slate-900 ${
              index === 0 ? 'bg-amber-400' : 'bg-slate-500'
            }`}
          />
          <p className="font-mono text-xs text-teal-300">{item.period}</p>
          <h3 className="mt-1 font-medium text-slate-50">
            {item.role} <span className="text-amber-300">· {item.company}</span>
          </h3>
          <p className="text-sm text-slate-400">
            {item.team} · {item.location}
          </p>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-4 text-sm leading-relaxed text-slate-300 marker:text-amber-400/70">
            {item.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

export function Education() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {education.map((item) => (
        <li key={item.school} className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <span className="flex size-9 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
            <GraduationCap aria-hidden="true" className="size-5" />
          </span>
          <div>
            <p className="font-mono text-xs text-teal-300">{item.period}</p>
            <h3 className="mt-1 font-medium text-slate-50">{item.school}</h3>
            <p className="text-sm text-slate-400">{item.degree}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
