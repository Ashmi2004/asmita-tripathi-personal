import { getTopicStats } from '@/app/actions/topics'
import { Personal } from '@/components/personal'
import { Professional } from '@/components/professional'
import { ProfileTabs } from '@/components/profile-tabs'
import { SiteHeader } from '@/components/site-header'
import { profile } from '@/lib/profile'

export default async function Page() {
  const stats = await getTopicStats()

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-14 px-6 py-20 sm:py-28">
      <SiteHeader />

      <ProfileTabs professional={<Professional />} personal={<Personal stats={stats} />} />

      <section aria-labelledby="contact-heading" className="grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-[10rem_1fr]">
        <h2 id="contact-heading" className="font-mono text-sm uppercase tracking-wider text-slate-500">
          Contact
        </h2>
        <div>
          <p className="text-slate-600">The best way to reach me is by email.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block break-all text-lg font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
          >
            {profile.email}
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  )
}
