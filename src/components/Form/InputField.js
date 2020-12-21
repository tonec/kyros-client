import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Input from './Input'

function InputFormField({ name, label, type, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      type={type}
      {...fieldProps}
      render={({ input, meta }) => (
        <Input input={input} meta={meta} label={label} {...rest} />
      )}
    />
  )
}

InputFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fieldProps: PropTypes.object,
}

InputFormField.defaultProps = {
  fieldProps: null,
}

export default InputFormField
