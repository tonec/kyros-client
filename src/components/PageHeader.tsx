import React from 'react'
import { makeStyles } from 'styles'
import { Typography } from './ui'

const useStyles = makeStyles(theme => ({
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
  },
}))

interface Props {
  title: string
  renderActions: () => React.ReactNode
}

function PageHeader({ title, renderActions }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.pageHeader}>
      <Typography variant="h1">{title}</Typography>
      {renderActions && renderActions()}
    </div>
  )
}

export default PageHeader
