'use client'

import { Tabs } from '@base-ui/react/tabs'

const tabClass =
  'relative z-10 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-slate-50 data-[active]:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:px-5'

export function ProfileTabs({
  professional,
  personal,
}: {
  professional: React.ReactNode
  personal: React.ReactNode
}) {
  return (
    <Tabs.Root defaultValue="professional" className="flex flex-col gap-8">
      <Tabs.List className="relative flex w-fit gap-1 rounded-xl border border-slate-800 bg-slate-900 p-1">
        <Tabs.Tab value="professional" className={tabClass}>
          Know me professionally
        </Tabs.Tab>
        <Tabs.Tab value="personal" className={tabClass}>
          Know me personally
        </Tabs.Tab>
        <Tabs.Indicator className="absolute left-[var(--active-tab-left)] top-[var(--active-tab-top)] h-[var(--active-tab-height)] w-[var(--active-tab-width)] rounded-lg bg-amber-400 transition-all duration-200" />
      </Tabs.List>
      <Tabs.Panel value="professional">{professional}</Tabs.Panel>
      <Tabs.Panel value="personal">{personal}</Tabs.Panel>
    </Tabs.Root>
  )
}
