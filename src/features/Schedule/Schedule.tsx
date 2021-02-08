import React from 'react'
import PropTypes from 'prop-types'
import { timescaleType } from 'types'
import ScheduleLayout from './ScheduleLayout'
import ScheduleDay from './ScheduleDay'

interface Props {
  timescale: Timesca
}

function Schedule({ timescale, days }): JSX.Element {
  return (
    <ScheduleLayout timescale={timescale}>
      {days.map(date => (
        <ScheduleDay key={date.getTime()} date={date} />
      ))}
    </ScheduleLayout>
  )
}

Schedule.propTypes = {
  timescale: timescaleType.isRequired,
  days: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
}

Schedule.defaultProps = {
  days: [],
}

export default Schedule
