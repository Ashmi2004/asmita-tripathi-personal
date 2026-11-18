'use client'

import { Star, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { books } from '@/lib/personal'

const coverTones = [
  'from-amber-500 to-amber-700',
  'from-teal-500 to-teal-700',
  'from-sky-500 to-sky-700',
]

function Rating({ value }: { value: number }) {
  if (!value) return <p className="text-xs text-slate-400">Rating coming soon</p>
  return (
    <p className="flex gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={`size-4 ${n <= value ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`}
        />
      ))}
    </p>
  )
}

export function Books() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const book = books[active]

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {books.map((b, i) => (
          <li key={b.title}>
            <button
              type="button"
              onClick={() => {
                setActive(i)
                dialogRef.current?.showModal()
              }}
              className={`group relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden rounded-lg bg-gradient-to-br p-4 text-left shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${coverTones[i % coverTones.length]}`}
            >
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-slate-950/25" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">Book</span>
              <span className="flex flex-col gap-1">
                <span className="text-balance text-lg font-semibold leading-tight text-white">{b.title}</span>
                <span className="text-xs text-white/80">{b.author}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="book-dialog-title"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto w-[min(32rem,92vw)] rounded-xl border border-slate-700 bg-slate-900 p-0 text-slate-100 shadow-xl backdrop:bg-slate-950/70"
      >
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="book-dialog-title" className="text-lg font-semibold text-slate-50">
                {book.title}
              </h3>
              <p className="text-sm text-slate-400">{book.author}</p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-md p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <Rating value={book.rating} />
          <p className="leading-relaxed text-slate-300">{book.opinion}</p>
        </div>
      </dialog>
    </>
  )
}
