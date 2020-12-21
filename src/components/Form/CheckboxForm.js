import React from 'react'
import PropTypes from 'prop-types'
import { CheckBox as BaseCheckBox } from 'grommet'

function CheckBoxForm(props) {
  const {
    input: { name, ...restInput },
    label,
  } = props

  return <BaseCheckBox name={name} label={label} {...restInput} />
}

CheckBoxForm.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default CheckBoxForm
