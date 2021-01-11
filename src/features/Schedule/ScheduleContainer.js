import React from 'react'
import { provideHooks } from 'redial'
import { Main } from 'components'
import ScheduleHeader from './ScheduleHeader'

function Schedule() {
  const title = 'Schedule'

  const $timescale = useLink('week')

  return <ScheduleHeader />
}

const hooks = {}

export default provideHooks(hooks)(Schedule)
