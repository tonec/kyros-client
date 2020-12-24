import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Radio from './Radio'

function RadioField({ name, label, value, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      type="radio"
      value={value}
      {...fieldProps}
      render={({ input }) => <Radio input={input} label={label} {...rest} />}
    />
  )
}

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldProps: PropTypes.object,
  value: PropTypes.string,
}

RadioField.defaultProps = {
  fieldProps: null,
  value: undefined,
}

export default RadioField
