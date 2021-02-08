import React from 'react'
import { makeStyles, color, Theme } from 'styles'
import { Timescales } from 'types'

const borderStyle = (theme: Theme) => `1px solid ${theme.palette.grey[400]}`

interface UseStylesProps {
  timescale: Timescales
}

const gridTempplate = (timescale: Timescales) => {
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
    gridTemplateColumns: ({ timescale }: UseStylesProps) => gridTempplate(timescale),
    borderLeft: borderStyle(theme),
    borderTop: borderStyle(theme),
    height: '100%',
    backgroundColor: color('white'),
  },
}))

interface Props {
  children: React.ReactNode
  timescale: Timescales
}

function ScheduleLayout({ children, timescale }: Props): JSX.Element {
  const classes = useStyles({ timescale })

  return <div className={classes.layout}>{children}</div>
}

export default ScheduleLayout
