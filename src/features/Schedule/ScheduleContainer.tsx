import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getQuery } from 'redux/modules/app/selectors'
import { getScheduleDays } from 'services/date'
import ScheduleHeader from './ScheduleHeader'
import Schedule from './Schedule'
import { RootState } from 'redux/rootReducer'
import { Timescales } from 'types'
import { ParsedQs } from 'qs'

interface Props {
  query: ParsedQs
}

function ScheduleContainer({ query }: Props): JSX.Element {
  const timescale = ((query.ts || 'week') as unknown) as Timescales

  const days = getScheduleDays(timescale)

  return (
    <>
      <ScheduleHeader />
      <Schedule days={days} timescale={timescale} />
    </>
  )
}

const mapState = createStructuredSelector<RootState, Props>({
  query: getQuery,
})

export default connect(mapState)(ScheduleContainer)
