import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getQuery } from 'redux/modules/app/selectors'
import { getScheduleDays } from 'services/date'
import ScheduleHeader from './ScheduleHeader'
import Schedule from './Schedule'

function ScheduleContainer({ query }) {
  const timescale = query.ts || 'week'

  const days = getScheduleDays(timescale)

  return (
    <>
      <ScheduleHeader />
      <Schedule days={days} timescale={timescale} />
    </>
  )
}

ScheduleContainer.propTypes = {
  query: PropTypes.object,
}

ScheduleContainer.defaultProps = {
  query: null,
}

const mapState = createStructuredSelector({
  query: getQuery,
})

export default connect(mapState)(ScheduleContainer)
