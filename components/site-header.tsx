import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/profile'

const links = [
  { href: `mailto:${profile.email}`, label: `Email ${profile.name}`, icon: Mail, external: false },
  { href: profile.linkedin, label: 'LinkedIn profile', icon: LinkedinIcon, external: true },
  { href: profile.github, label: 'GitHub profile', icon: GithubIcon, external: true },
]

const stats = [
  { value: '4+', label: 'Years in industry' },
  { value: '2', label: 'Companies — Oracle & Avaya' },
  { value: 'M.Tech', label: 'IIIT Bangalore' },
]

export function SiteHeader() {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 size-96 rounded-full bg-amber-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-slate-400">Hi, I am</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              {profile.name}
            </h1>
            <ul className="flex items-center gap-2">
              {links.map(({ href, label, icon: Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex size-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                  >
                    <Icon className="size-4" />
                    <span className="sr-only">
                      {label}
                      {external ? ' (opens in a new tab)' : ''}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-3xl font-bold tracking-tight text-amber-400 sm:text-4xl">{profile.title}</p>
        </div>

        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">{profile.summary}</p>

        <dl className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-semibold text-amber-400">{s.value}</dd>
              <dd className="text-sm text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
