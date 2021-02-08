import React from 'react'
import { Timescales } from 'types'
import ScheduleLayout from './ScheduleLayout'
import ScheduleDay from './ScheduleDay'

interface Props {
  timescale: Timescales
  days: Date[]
}

function Schedule({ timescale, days }: Props): JSX.Element {
  return (
    <ScheduleLayout timescale={timescale}>
      {days.map(date => (
        <ScheduleDay key={date.getTime()} date={date} />
      ))}
    </ScheduleLayout>
  )
}

export default Schedule
