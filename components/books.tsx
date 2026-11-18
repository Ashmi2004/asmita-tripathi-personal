'use client'

import { BookOpen, Star, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { books } from '@/lib/personal'

function Rating({ value }: { value: number }) {
  if (!value) return <p className="text-xs text-slate-500">Rating coming soon</p>
  return (
    <p className="flex gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={`size-4 ${n <= value ? 'fill-slate-900 text-slate-900' : 'text-slate-300'}`}
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
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {books.map((b, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => {
                setActive(i)
                dialogRef.current?.showModal()
              }}
              className="flex aspect-[3/4] w-full flex-col justify-between rounded-md border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <BookOpen aria-hidden="true" className="size-5 text-slate-400" />
              <span className="flex flex-col gap-1">
                <span className="font-medium text-slate-900">{b.title}</span>
                <span className="text-xs text-slate-500">{b.author}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="book-dialog-title"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto w-[min(32rem,92vw)] rounded-lg border border-slate-200 bg-white p-0 shadow-xl backdrop:bg-slate-950/60"
      >
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="book-dialog-title" className="text-lg font-semibold text-slate-900">
                {book.title}
              </h3>
              <p className="text-sm text-slate-500">{book.author}</p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <Rating value={book.rating} />
          <p className="leading-relaxed text-slate-700">{book.opinion}</p>
        </div>
      </dialog>
    </>
  )
}
