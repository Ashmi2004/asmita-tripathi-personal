'use client'

import { Heart, MessageCircle, X } from 'lucide-react'
import { useActionState, useEffect, useOptimistic, useRef, useState, useTransition } from 'react'
import { addComment, toggleLike, type CommentState, type TopicStats } from '@/app/actions/topics'
import { topics, type Topic } from '@/lib/personal'

function LikeButton({ slug, count, liked }: { slug: string; count: number; liked: boolean }) {
  const [, startTransition] = useTransition()
  const [optimistic, setOptimistic] = useOptimistic({ count, liked })

  return (
    <button
      type="button"
      aria-pressed={optimistic.liked}
      aria-label={optimistic.liked ? 'Unlike' : 'Like'}
      onClick={(e) => {
        e.stopPropagation()
        startTransition(async () => {
          setOptimistic((s) => ({ liked: !s.liked, count: s.count + (s.liked ? -1 : 1) }))
          await toggleLike(slug)
        })
      }}
      className={`inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
        optimistic.liked
          ? 'border-amber-400 bg-amber-400 text-slate-950'
          : 'border-slate-700 text-slate-300 hover:border-amber-400/60 hover:text-amber-200'
      }`}
    >
      <Heart aria-hidden="true" className={`size-4 ${optimistic.liked ? 'fill-current' : ''}`} />
      <span className="tabular-nums">{optimistic.count}</span>
    </button>
  )
}

const fieldClass =
  'rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none'

function CommentForm({ slug }: { slug: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, pending] = useActionState<CommentState, FormData>(addComment, {})

  useEffect(() => {
    if (state.ok) formRef.current?.reset()
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-2">
      <input type="hidden" name="slug" value={slug} />
      <label htmlFor={`name-${slug}`} className="sr-only">
        Your name
      </label>
      <input id={`name-${slug}`} name="name" required maxLength={60} placeholder="Your name" className={fieldClass} />
      <label htmlFor={`body-${slug}`} className="sr-only">
        Your comment
      </label>
      <textarea
        id={`body-${slug}`}
        name="body"
        required
        minLength={2}
        maxLength={1000}
        rows={3}
        placeholder="Share your thoughts"
        className={`resize-none ${fieldClass}`}
      />
      {state.error && (
        <p role="alert" className="text-sm text-red-400">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="self-end rounded-md bg-amber-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-300 disabled:opacity-60"
      >
        {pending ? 'Posting…' : 'Post comment'}
      </button>
    </form>
  )
}

const categoryTone: Record<Topic['category'], string> = {
  Science: 'text-sky-300',
  Philosophy: 'text-teal-300',
}

export function Discussions({ stats }: { stats: TopicStats }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeSlug, setActiveSlug] = useState<string>(topics[0].slug)
  const active = topics.find((t) => t.slug === activeSlug) as Topic
  const activeComments = stats.comments[activeSlug] ?? []

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {topics.map((t) => (
          <li
            key={t.slug}
            className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-amber-400/40"
          >
            <button
              type="button"
              onClick={() => {
                setActiveSlug(t.slug)
                dialogRef.current?.showModal()
              }}
              className="flex flex-col gap-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              <span className={`font-mono text-xs uppercase tracking-wider ${categoryTone[t.category]}`}>
                {t.category}
              </span>
              <span className="font-medium text-slate-50">{t.title}</span>
              <span className="line-clamp-2 text-sm text-slate-400">{t.view}</span>
            </button>
            <div className="mt-auto flex items-center gap-3">
              <LikeButton slug={t.slug} count={stats.likes[t.slug] ?? 0} liked={stats.liked.includes(t.slug)} />
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                <MessageCircle aria-hidden="true" className="size-4" />
                <span className="tabular-nums">{stats.comments[t.slug]?.length ?? 0}</span>
                <span className="sr-only">comments</span>
              </span>
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="topic-dialog-title"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto max-h-[88vh] w-[min(36rem,92vw)] rounded-xl border border-slate-700 bg-slate-900 p-0 text-slate-100 shadow-xl backdrop:bg-slate-950/70"
      >
        <div className="flex flex-col gap-5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className={`font-mono text-xs uppercase tracking-wider ${categoryTone[active.category]}`}>
                {active.category}
              </span>
              <h3 id="topic-dialog-title" className="text-lg font-semibold text-slate-50">
                {active.title}
              </h3>
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
          <p className="leading-relaxed text-slate-300">{active.view}</p>
          <LikeButton
            key={activeSlug}
            slug={activeSlug}
            count={stats.likes[activeSlug] ?? 0}
            liked={stats.liked.includes(activeSlug)}
          />

          <div className="flex flex-col gap-3 border-t border-slate-800 pt-5">
            <h4 className="text-sm font-medium text-slate-50">Comments ({activeComments.length})</h4>
            {activeComments.length === 0 ? (
              <p className="text-sm text-slate-400">No comments yet. Start the conversation.</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {activeComments.map((c) => (
                  <li key={c.id} className="rounded-md border border-slate-800 bg-slate-950 p-3">
                    <p className="text-sm font-medium text-slate-100">
                      {c.authorName}{' '}
                      <time dateTime={c.createdAt} className="font-normal text-slate-500">
                        · {new Date(c.createdAt).toLocaleDateString()}
                      </time>
                    </p>
                    <p className="mt-1 whitespace-pre-wrap text-sm text-slate-300">{c.body}</p>
                  </li>
                ))}
              </ul>
            )}
            <CommentForm key={activeSlug} slug={activeSlug} />
          </div>
        </div>
      </dialog>
    </>
  )
}
