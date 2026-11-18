const range = (n: number) => Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, '0'))

export const trekkingPhotos = range(15).map((n) => `/images/trekking/${n}.jpg`)
export const photographyPhotos = range(12).map((n) => `/images/photography/${n}.jpg`)
export const paintingPhotos = range(14).map((n) => `/images/paintings/${n}.jpg`)

export type Book = {
  title: string
  author: string
  rating: number
  opinion: string
}

// Placeholder entries — replace with real books, ratings (1–5), and opinions.
export const books: Book[] = [
  { title: 'Book title', author: 'Author name', rating: 0, opinion: 'My thoughts on this book are coming soon.' },
  { title: 'Book title', author: 'Author name', rating: 0, opinion: 'My thoughts on this book are coming soon.' },
  { title: 'Book title', author: 'Author name', rating: 0, opinion: 'My thoughts on this book are coming soon.' },
]

export type Topic = {
  slug: string
  title: string
  category: 'Science' | 'Philosophy'
  view: string
}

// Topic titles are starters; replace `view` with my own thoughts.
export const topics: Topic[] = [
  { slug: 'free-will', title: 'Do we really have free will?', category: 'Philosophy', view: 'My views coming soon.' },
  { slug: 'consciousness', title: 'What is consciousness?', category: 'Science', view: 'My views coming soon.' },
  { slug: 'time', title: 'Is time real, or just a perception?', category: 'Science', view: 'My views coming soon.' },
  { slug: 'ai-minds', title: 'Can machines ever truly think?', category: 'Philosophy', view: 'My views coming soon.' },
  { slug: 'multiverse', title: 'Are we alone in a multiverse?', category: 'Science', view: 'My views coming soon.' },
  { slug: 'meaning', title: 'Where does meaning come from?', category: 'Philosophy', view: 'My views coming soon.' },
]

export const topicSlugs = new Set(topics.map((t) => t.slug))
