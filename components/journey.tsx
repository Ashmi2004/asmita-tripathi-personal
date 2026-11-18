import { education, experience } from '@/lib/profile'

export function Experience() {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-slate-300 pl-6">
      {experience.map((item, index) => (
        <li key={`${item.company}-${item.role}`} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[1.85rem] top-1.5 size-2.5 rounded-full ring-4 ring-slate-50 ${
              index === 0 ? 'bg-slate-900' : 'bg-slate-400'
            }`}
          />
          <p className="font-mono text-xs text-slate-500">{item.period}</p>
          <h3 className="mt-1 font-medium text-slate-900">
            {item.role} <span className="text-slate-500">· {item.company}</span>
          </h3>
          <p className="text-sm text-slate-600">
            {item.team} · {item.location}
          </p>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-4 text-sm leading-relaxed text-slate-600 marker:text-slate-400">
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
    <ul className="flex flex-col gap-6">
      {education.map((item) => (
        <li key={item.school}>
          <p className="font-mono text-xs text-slate-500">{item.period}</p>
          <h3 className="mt-1 font-medium text-slate-900">{item.school}</h3>
          <p className="text-sm text-slate-600">{item.degree}</p>
        </li>
      ))}
    </ul>
  )
}
