import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Typography from '../Typography'

const useStyles = makeStyles(theme => ({
  errorContainer: {
    position: 'absolute',
    color: theme.palette.error.main,

    '& > svg': {
      verticalAlign: 'middle',
      marginRight: 2,
      marginTop: -2,
      fontSize: 15,
    },
  },
}))

function FormInputError({ error }) {
  const classes = useStyles()

  return (
    <div className={classes.errorContainer}>
      <ErrorOutlineIcon />
      <Typography variant="caption" className={classes.text}>
        {error}
      </Typography>
    </div>
  )
}

FormInputError.propTypes = {
  error: PropTypes.string.isRequired,
}

export default FormInputError
