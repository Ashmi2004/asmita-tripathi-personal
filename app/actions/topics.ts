'use server'

import { and, asc, count, eq } from 'drizzle-orm'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'
import { topicComments, topicLikes } from '@/lib/db/schema'
import { topicSlugs } from '@/lib/personal'

const VISITOR_COOKIE = 'visitor_id'

export type TopicComment = { id: number; authorName: string; body: string; createdAt: string }
export type TopicStats = {
  likes: Record<string, number>
  liked: string[]
  comments: Record<string, TopicComment[]>
}

async function getVisitorId(create: boolean) {
  const store = await cookies()
  const existing = store.get(VISITOR_COOKIE)?.value
  if (existing || !create) return existing
  const id = crypto.randomUUID()
  store.set(VISITOR_COOKIE, id, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 365 * 2,
  })
  return id
}

export async function getTopicStats(): Promise<TopicStats> {
  const visitorId = await getVisitorId(false)
  const [likeRows, likedRows, commentRows] = await Promise.all([
    db.select({ slug: topicLikes.topicSlug, total: count() }).from(topicLikes).groupBy(topicLikes.topicSlug),
    visitorId
      ? db.select({ slug: topicLikes.topicSlug }).from(topicLikes).where(eq(topicLikes.visitorId, visitorId))
      : Promise.resolve([]),
    db.select().from(topicComments).orderBy(asc(topicComments.createdAt)),
  ])

  const comments: Record<string, TopicComment[]> = {}
  for (const c of commentRows) {
    ;(comments[c.topicSlug] ??= []).push({
      id: c.id,
      authorName: c.authorName,
      body: c.body,
      createdAt: c.createdAt.toISOString(),
    })
  }

  return {
    likes: Object.fromEntries(likeRows.map((r) => [r.slug, Number(r.total)])),
    liked: likedRows.map((r) => r.slug),
    comments,
  }
}

export async function toggleLike(slug: string) {
  if (!topicSlugs.has(slug)) throw new Error('Unknown topic')
  const visitorId = (await getVisitorId(true))!
  const deleted = await db
    .delete(topicLikes)
    .where(and(eq(topicLikes.topicSlug, slug), eq(topicLikes.visitorId, visitorId)))
    .returning()
  if (deleted.length === 0) {
    await db.insert(topicLikes).values({ topicSlug: slug, visitorId }).onConflictDoNothing()
  }
  revalidatePath('/')
}

export type CommentState = { error?: string; ok?: boolean }

export async function addComment(_prev: CommentState, formData: FormData): Promise<CommentState> {
  const slug = String(formData.get('slug') ?? '')
  const name = String(formData.get('name') ?? '').trim()
  const body = String(formData.get('body') ?? '').trim()

  if (!topicSlugs.has(slug)) return { error: 'Unknown topic.' }
  if (name.length < 1 || name.length > 60) return { error: 'Please enter a name (up to 60 characters).' }
  if (body.length < 2 || body.length > 1000) return { error: 'Comment must be 2–1000 characters.' }

  await db.insert(topicComments).values({ topicSlug: slug, authorName: name, body })
  revalidatePath('/')
  return { ok: true }
}
