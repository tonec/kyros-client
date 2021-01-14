import React from 'react'
import PropTypes from 'prop-types'

function Schedule({ days }) {
  return days.map(day => <p key={day.getTime()}>{day.toString()}</p>)
}

Schedule.propTypes = {
  days: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
}

Schedule.defaultProps = {
  days: [],
}

export default Schedule
