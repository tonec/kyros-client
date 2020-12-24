import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import BaseRadio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles({
  label: {
    display: 'block',
  },
})

function RadioForm({ input, label, ...rest }) {
  const classes = useStyles()

  return (
    <FormControlLabel
      label={label}
      className={classes.label}
      control={<BaseRadio color="primary" {...input} {...rest} />}
    />
  )
}

RadioForm.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
}

RadioForm.defaultProps = {
  label: null,
}

export default RadioForm
