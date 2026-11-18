import { BookOpen, Brain, Camera, Music, Mountain, Palette } from 'lucide-react'
import type { TopicStats } from '@/app/actions/topics'
import { Books } from '@/components/books'
import { Discussions } from '@/components/discussions'
import { Gallery } from '@/components/gallery'
import { SideTabs } from '@/components/side-tabs'
import { paintingPhotos, photographyPhotos, trekkingPhotos } from '@/lib/personal'

const iconClass = 'size-4'

export function Personal({ stats }: { stats: TopicStats }) {
  return (
    <SideTabs
      label="Hobbies"
      items={[
        {
          value: 'trekking',
          label: 'Trekking',
          icon: <Mountain aria-hidden="true" className={iconClass} />,
          description: 'Moments from the trails.',
          content: <Gallery photos={trekkingPhotos} label="Trekking photo" />,
        },
        {
          value: 'photography',
          label: 'Photography',
          icon: <Camera aria-hidden="true" className={iconClass} />,
          description: 'Photos clicked by me.',
          content: <Gallery photos={photographyPhotos} label="Photograph" />,
        },
        {
          value: 'reading',
          label: 'Reading',
          icon: <BookOpen aria-hidden="true" className={iconClass} />,
          description: 'Tap a book to read my opinion and rating.',
          content: <Books />,
        },
        {
          value: 'painting',
          label: 'Painting',
          icon: <Palette aria-hidden="true" className={iconClass} />,
          description: 'Creative freedom — paintings I have made.',
          content: <Gallery photos={paintingPhotos} label="Painting" />,
        },
        {
          value: 'science-philosophy',
          label: 'Science & Philosophy',
          icon: <Brain aria-hidden="true" className={iconClass} />,
          description: 'My views on big questions. Leave a like or join the conversation.',
          content: <Discussions stats={stats} />,
        },
        {
          value: 'sing-dance',
          label: 'Singing & Dancing',
          icon: <Music aria-hidden="true" className={iconClass} />,
          content: <p className="text-slate-300">I also sing and dance.</p>,
        },
      ]}
    />
  )
}
