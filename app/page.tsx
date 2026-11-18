import { Mail } from 'lucide-react'
import { getTopicStats } from '@/app/actions/topics'
import { Personal } from '@/components/personal'
import { Professional } from '@/components/professional'
import { ProfileTabs } from '@/components/profile-tabs'
import { SiteHeader } from '@/components/site-header'
import { profile } from '@/lib/profile'

export default async function Page() {
  const stats = await getTopicStats()

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
      <SiteHeader />

      <ProfileTabs professional={<Professional />} personal={<Personal stats={stats} />} />

      <section
        aria-labelledby="contact-heading"
        className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-amber-950/40 p-6 sm:flex-row sm:items-center sm:p-8"
      >
        <div>
          <h2 id="contact-heading" className="text-xl font-semibold text-slate-50">
            Get in touch
          </h2>
          <p className="text-slate-400">The best way to reach me is by email.</p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 break-all rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          <Mail aria-hidden="true" className="size-4 shrink-0" />
          {profile.email}
        </a>
      </section>

      <footer className="border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  )
}
