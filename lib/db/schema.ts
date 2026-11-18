import { primaryKey, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const topicLikes = pgTable(
  'topic_likes',
  {
    topicSlug: text('topic_slug').notNull(),
    visitorId: text('visitor_id').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.topicSlug, t.visitorId] })],
)

export const topicComments = pgTable('topic_comments', {
  id: serial('id').primaryKey(),
  topicSlug: text('topic_slug').notNull(),
  authorName: text('author_name').notNull(),
  body: text('body').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
