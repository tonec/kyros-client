import React, { ComponentPropsWithoutRef } from 'react'
import BaseTabs from '@material-ui/core/Tabs'
import BaseTab from '@material-ui/core/Tab'
import Box from './Box'

// Tabs
type TabsProps = ComponentPropsWithoutRef<typeof BaseTabs> & {
  testid?: string
}

function Tabs({
  children,
  value,
  indicatorColor,
  textColor,
  variant,
  centered,
  onChange,
  testid,
}: TabsProps): JSX.Element {
  return (
    <BaseTabs
      value={value}
      indicatorColor={indicatorColor}
      textColor={textColor}
      variant={variant}
      onChange={onChange}
      centered={centered}
      data-testid={testid}
    >
      {children}
    </BaseTabs>
  )
}

Tabs.muiName = 'Tabs'

// Tab
type TabProps = ComponentPropsWithoutRef<typeof BaseTab>

function Tab({
  label,
  value,
  disabled,
  className,
  onChange,
}: TabProps): JSX.Element {
  const testid =
    typeof label === 'string' ? label.toLowerCase().split(' ').join('-') : ''

  return (
    <BaseTab
      label={label}
      value={value}
      disabled={disabled}
      className={className}
      data-testid={`tab-${testid}`}
      onChange={onChange}
    />
  )
}

// Tab panel
type TabPanelProps = {
  children: React.ReactNode
  value: string
  index: string
  className?: string
  testid?: string
}

function TabPanel({
  children,
  value,
  index,
  className,
  testid,
}: TabPanelProps): JSX.Element {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className={className}
      aria-labelledby={`simple-tab-${index}`}
      data-testid={testid}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

Tabs.Tab = Tab
Tabs.TabPanel = TabPanel

export default Tabs
