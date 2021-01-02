import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import { Typography } from '../ui'

const useStyles = makeStyles(theme => ({
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
  },
}))

function PageHeader({ title, renderActions }) {
  const classes = useStyles()

  return (
    <div className={classes.pageHeader}>
      <Typography variant="h1">{title}</Typography>
      {renderActions && renderActions()}
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  renderActions: PropTypes.func,
}

PageHeader.defaultProps = {
  renderActions: null,
}

export default PageHeader
