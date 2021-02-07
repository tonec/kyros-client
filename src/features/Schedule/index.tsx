import React from 'react'
import { provideHooks } from 'redial'
import { Main } from 'components'
import ScheduleContainer from './ScheduleContainer'

function ScheduleView(): JSX.Element {
  const title = 'Schedule'

  return (
    <Main title={title}>
      <ScheduleContainer />
    </Main>
  )
}

const hooks = {}

export default provideHooks(hooks)(ScheduleView)
