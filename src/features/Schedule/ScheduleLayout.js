import React from 'react'
import { childrenType, timescaleType } from 'types'
import { makeStyles } from 'styles'

const borderStyle = theme => `1px solid ${theme.palette.grey[400]}`

const gridTempplate = timescale => {
  switch (timescale) {
    case 'day':
      return '1fr'
    case 'fortnight':
      return 'repeat(14, 1fr)'
    default:
      return 'repeat(7, 1fr)'
  }
}

const useStyles = makeStyles(theme => ({
  layout: {
    display: 'grid',
    gridTemplateColumns: ({ timescale }) => gridTempplate(timescale),
    borderLeft: borderStyle(theme),
    borderTop: borderStyle(theme),
    height: '100%',
  },
}))

function ScheduleLayout({ children, timescale }) {
  const classes = useStyles({ timescale })

  return <div className={classes.layout}>{children}</div>
}

ScheduleLayout.propTypes = {
  children: childrenType.isRequired,
  timescale: timescaleType.isRequired,
}

export default ScheduleLayout
