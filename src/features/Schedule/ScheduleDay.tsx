import React from 'react'
import format from 'date-fns/format'
import { makeStyles, Theme } from 'styles'

const borderStyle = (theme: Theme) => `1px solid ${theme.palette.grey[400]}`

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

interface Props {
  date: Date
}

function ScheduleDay({ date }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.day}>
      <div className={classes.heading}>{format(date, 'eee d MMM')}</div>
      <div className={classes.body}>body</div>
    </div>
  )
}

export default ScheduleDay
