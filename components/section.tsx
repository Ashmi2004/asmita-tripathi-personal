export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-[10rem_1fr]">
      <h2 id={`${id}-heading`} className="font-mono text-sm uppercase tracking-wider text-slate-500">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  )
}
