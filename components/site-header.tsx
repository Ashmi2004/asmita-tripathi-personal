import { profile } from '@/lib/profile'

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-6">
      <p className="font-mono text-sm text-slate-500">{profile.title}</p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-600">{profile.summary}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Email me
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </header>
  )
}
