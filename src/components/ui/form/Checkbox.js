import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import BaseCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles({
  label: {
    display: 'block',
  },
})

function CheckboxForm({ input, label, ...rest }) {
  const classes = useStyles()

  return (
    <FormControlLabel
      label={label}
      className={classes.label}
      control={<BaseCheckbox color="primary" {...input} {...rest} />}
    />
  )
}

CheckboxForm.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
}

CheckboxForm.defaultProps = {
  label: null,
}

export default CheckboxForm
