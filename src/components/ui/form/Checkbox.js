import React from 'react'
import PropTypes from 'prop-types'
import BaseCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

function CheckboxForm({ input, label, ...rest }) {
  return (
    <FormControlLabel
      label={label}
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
