'use client'

import { Tabs } from '@base-ui/react/tabs'

export type SideItem = {
  value: string
  label: string
  icon: React.ReactNode
  description?: string
  content: React.ReactNode
}

export function SideTabs({ items, label }: { items: SideItem[]; label: string }) {
  return (
    <Tabs.Root
      defaultValue={items[0].value}
      orientation="vertical"
      className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8"
    >
      <Tabs.List
        aria-label={label}
        className="flex gap-1 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70 p-2 lg:sticky lg:top-6 lg:flex-col lg:self-start"
      >
        {items.map((item) => (
          <Tabs.Tab
            key={item.value}
            value={item.value}
            className="group flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 data-[active]:bg-amber-400/10 data-[active]:text-amber-300"
          >
            <span className="flex size-8 items-center justify-center rounded-md bg-slate-800 text-slate-300 transition-colors group-data-[active]:bg-amber-400 group-data-[active]:text-slate-950">
              {item.icon}
            </span>
            {item.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {items.map((item) => (
        <Tabs.Panel
          key={item.value}
          value={item.value}
          className="min-w-0 rounded-xl border border-slate-800 bg-slate-900/40 p-5 focus-visible:outline-2 focus-visible:outline-amber-400 sm:p-8"
        >
          <header className="mb-6 flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-slate-50">{item.label}</h2>
            {item.description && <p className="text-sm text-slate-400">{item.description}</p>}
          </header>
          {item.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  )
}
