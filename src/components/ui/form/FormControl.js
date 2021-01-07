import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { makeStyles, color } from 'styles'

const width = ({ fullWidth }) => (fullWidth ? '100%' : 'auto')

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(1, 0, 0),
    padding: theme.spacing(0, 0, 3),

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

function FormControl({ children, fullWidth, disabled, isError }) {
  const classes = useStyles({ fullWidth, disabled, isError })

  return <div className={classes.control}>{children}</div>
}

FormControl.propTypes = {
  children: childrenType.isRequired,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

FormControl.defaultProps = {
  disabled: false,
  isError: false,
  fullWidth: false,
}

export default FormControl
