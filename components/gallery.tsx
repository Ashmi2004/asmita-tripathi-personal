'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

export function Gallery({ photos, label }: { photos: string[]; label: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)

  const open = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }
  const step = (d: number) => setIndex((i) => (i + d + photos.length) % photos.length)

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {photos.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-md bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <Image
                src={src}
                alt={`${label} ${i + 1} by Asmita Tripathi`}
                fill
                sizes="(min-width: 640px) 240px, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${label} viewer`}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        className="m-auto max-h-[90vh] w-[min(64rem,92vw)] bg-transparent p-0 backdrop:bg-slate-950/85"
      >
        <div className="relative flex flex-col items-center gap-3">
          <div className="relative h-[78vh] w-full">
            <Image
              src={photos[index]}
              alt={`${label} ${index + 1} by Asmita Tripathi`}
              fill
              sizes="92vw"
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-3 text-slate-100">
            <button
              type="button"
              onClick={() => step(-1)}
              className="rounded-full bg-slate-800 p-2 hover:bg-slate-700"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <p className="font-mono text-sm tabular-nums">
              {index + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={() => step(1)}
              className="rounded-full bg-slate-800 p-2 hover:bg-slate-700"
              aria-label="Next photo"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="ml-4 rounded-full bg-slate-800 p-2 hover:bg-slate-700"
              aria-label="Close viewer"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
