import { Education, Experience } from '@/components/journey'
import { Section } from '@/components/section'
import { SiteHeader } from '@/components/site-header'
import { profile, projects } from '@/lib/profile'

export default function Page() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-20 sm:py-28">
      <SiteHeader />

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

        <Section id="education" title="Education">
          <Education />
        </Section>

        <Section id="projects" title="Projects">
          <ul className="flex flex-col gap-5">
            {projects.map((project) => (
              <li key={project.name}>
                <h3 className="font-medium text-slate-900">{project.name}</h3>
                {project.description && <p className="text-sm text-slate-600">{project.description}</p>}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-slate-600">The best way to reach me is by email.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block break-all text-lg font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
          >
            {profile.email}
          </a>
        </Section>
      </div>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  )
}
