import { BookOpen, Brain, Camera, Mic, Mountain, Palette, type LucideIcon } from 'lucide-react'
import type { TopicStats } from '@/app/actions/topics'
import { Books } from '@/components/books'
import { Discussions } from '@/components/discussions'
import { Gallery } from '@/components/gallery'
import { paintingPhotos, photographyPhotos, trekkingPhotos } from '@/lib/personal'

type Hobby = { id: string; title: string; icon: LucideIcon; blurb: string }

const hobbies: Hobby[] = [
  { id: 'trekking', title: 'Trekking', icon: Mountain, blurb: 'Trails and summits' },
  { id: 'photography', title: 'Photography', icon: Camera, blurb: 'Photos clicked by me' },
  { id: 'reading', title: 'Reading', icon: BookOpen, blurb: 'Books and my takes' },
  { id: 'painting', title: 'Painting', icon: Palette, blurb: 'Creative freedom' },
  { id: 'science-philosophy', title: 'Science & Philosophy', icon: Brain, blurb: 'Let’s discuss' },
  { id: 'sing-dance', title: 'Singing & Dancing', icon: Mic, blurb: 'I also sing and dance' },
]

function HobbySection({
  hobby,
  description,
  children,
}: {
  hobby: Hobby
  description?: string
  children?: React.ReactNode
}) {
  const Icon = hobby.icon
  return (
    <section id={hobby.id} aria-labelledby={`${hobby.id}-heading`} className="scroll-mt-8 border-t border-slate-200 pt-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-md bg-slate-900 text-slate-50">
          <Icon aria-hidden="true" className="size-4" />
        </span>
        <div>
          <h2 id={`${hobby.id}-heading`} className="text-lg font-semibold text-slate-900">
            {hobby.title}
          </h2>
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </div>
      </div>
      {children}
    </section>
  )
}

export function Personal({ stats }: { stats: TopicStats }) {
  const [trek, photo, read, paint, sci, sing] = hobbies

  return (
    <div className="flex flex-col gap-12">
      <nav aria-label="Hobbies">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {hobbies.map((h) => {
            const Icon = h.icon
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className="flex h-full flex-col gap-3 rounded-md border border-slate-200 bg-white p-4 transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  <Icon aria-hidden="true" className="size-5 text-slate-700" />
                  <span className="flex flex-col">
                    <span className="font-medium text-slate-900">{h.title}</span>
                    <span className="text-sm text-slate-500">{h.blurb}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <HobbySection hobby={trek} description="Moments from the trails.">
        <Gallery photos={trekkingPhotos} label="Trekking photo" />
      </HobbySection>

      <HobbySection hobby={photo} description="Photos clicked by me.">
        <Gallery photos={photographyPhotos} label="Photograph" />
      </HobbySection>

      <HobbySection hobby={read} description="Tap a book to read my opinion and rating.">
        <Books />
      </HobbySection>

      <HobbySection hobby={paint} description="Paintings I have made.">
        <Gallery photos={paintingPhotos} label="Painting" />
      </HobbySection>

      <HobbySection hobby={sci} description="My views on big questions. Leave a like or join the conversation.">
        <Discussions stats={stats} />
      </HobbySection>

      <HobbySection hobby={sing} description="I also sing and dance." />
    </div>
  )
}
