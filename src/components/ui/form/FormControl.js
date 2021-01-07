import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { makeStyles, color } from 'styles'
import FormInputError from './FormInputError'

const width = ({ fullWidth }) => (fullWidth ? '100%' : 'auto')

const useStyles = makeStyles(theme => ({
  control: {
    position: 'relative',
    margin: theme.spacing(0.5, 0, 0),
    padding: theme.spacing(0, 0, 2.5),

    width,

    '& > div': {
      width,
    },

    '& input': {
      width,
      borderColor: ({ disabled, isError }) => {
        if (disabled) {
          return color('disabled')
        }

        return isError ? color('error') : 'initial'
      },
    },
  },
}))

function FormControl({ children, fullWidth, disabled, isError, error }) {
  const classes = useStyles({ fullWidth, disabled, isError })

  return (
    <div className={classes.control}>
      {children}
      {isError && <FormInputError error={error} />}
    </div>
  )
}

FormControl.propTypes = {
  children: childrenType.isRequired,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.string,
  fullWidth: PropTypes.bool,
}

FormControl.defaultProps = {
  disabled: false,
  isError: false,
  error: null,
  fullWidth: false,
}

export default FormControl
