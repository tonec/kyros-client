import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

function Loader({ color }) {
  const classes = useStyles()

  return (
    <div className={classes.root} data-testid="loader">
      <CircularProgress color={color} />
    </div>
  )
}

Loader.propTypes = {
  color: PropTypes.string,
}

Loader.defaultProps = {
  color: 'primary',
}

export default Loader
