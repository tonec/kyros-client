import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import ErrorIcon from '@material-ui/icons/Error'
import Typography from '../Typography'

const useStyles = makeStyles(theme => ({
  errorContainer: {
    position: 'absolute',
    margin: theme.spacing(0.2, 0),
    color: theme.palette.error.main,

    '& > svg': {
      verticalAlign: 'middle',
      marginRight: 6,
      fontSize: 20,
    },
  },
}))

function FormInputError({ error }) {
  const classes = useStyles()

  return (
    <div className={classes.errorContainer}>
      <ErrorIcon type="exclaimation-circle" />
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
