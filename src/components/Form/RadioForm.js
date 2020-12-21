import React from 'react'
import PropTypes from 'prop-types'
import { RadioButton as BaseRadio } from 'grommet'

function RadioForm(props) {
  const {
    input: { name, ...restInput },
    label,
  } = props

  return <BaseRadio type="radio" name={name} label={label} {...restInput} />
}

RadioForm.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default RadioForm
