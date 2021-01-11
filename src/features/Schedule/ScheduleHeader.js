import React from 'react'
import { makeStyles } from 'styles'
import TimescaleControl from './TimescaleControl'

const useStyles = makeStyles(theme => ({
  scheduleHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
  },
}))

function ScheduleHeader() {
  const classes = useStyles()

  return (
    <div className={classes.scheduleHeader}>
      <TimescaleControl />
    </div>
  )
}

export default ScheduleHeader
