import React from 'react'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'

const borderStyle = theme => `1px solid ${theme.palette.grey[400]}`

const useStyles = makeStyles(theme => ({
  day: {
    borderRight: borderStyle(theme),
    borderBottom: borderStyle(theme),
    textAlign: 'center',
    height: '100%',
  },
  heading: {},
  body: {},
}))

function ScheduleDay({ date }) {
  const classes = useStyles()

  return (
    <div className={classes.day}>
      <div className={classes.heading}>{format(date, 'eee d MMM')}</div>
      <div className={classes.body}>body</div>
    </div>
  )
}

ScheduleDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

export default ScheduleDay
