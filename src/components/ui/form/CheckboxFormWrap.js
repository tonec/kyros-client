import React from 'react'
import PropTypes from 'prop-types'
import BaseCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

function CheckboxFormWrap(props) {
  const { input, meta, label, ...rest } = props

  return (
    <FormControlLabel
      label={label}
      control={<BaseCheckbox color="primary" {...input} {...rest} />}
    />
  )
}

CheckboxFormWrap.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

CheckboxFormWrap.defaultProps = {
  label: null,
}

export default CheckboxFormWrap
