import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import { Typography } from '../ui'

const useStyles = makeStyles(theme => ({
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
  },
}))

function PageHeader({ title }) {
  const classes = useStyles()

  return (
    <div className={classes.pageHeader}>
      <Typography variant="h1">{title}</Typography>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader
