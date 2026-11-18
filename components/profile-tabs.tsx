'use client'

import { Tabs } from '@base-ui/react/tabs'

const tabClass =
  'relative z-10 rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 data-[active]:text-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900'

export function ProfileTabs({
  professional,
  personal,
}: {
  professional: React.ReactNode
  personal: React.ReactNode
}) {
  return (
    <Tabs.Root defaultValue="professional" className="flex flex-col gap-10">
      <Tabs.List className="relative flex w-fit gap-1 rounded-lg border border-slate-200 bg-white p-1">
        <Tabs.Tab value="professional" className={tabClass}>
          Know me professionally
        </Tabs.Tab>
        <Tabs.Tab value="personal" className={tabClass}>
          Know me personally
        </Tabs.Tab>
        <Tabs.Indicator className="absolute left-[var(--active-tab-left)] top-[var(--active-tab-top)] h-[var(--active-tab-height)] w-[var(--active-tab-width)] rounded-md bg-slate-900 transition-all duration-200" />
      </Tabs.List>
      <Tabs.Panel value="professional">{professional}</Tabs.Panel>
      <Tabs.Panel value="personal">{personal}</Tabs.Panel>
    </Tabs.Root>
  )
}
