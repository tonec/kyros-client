import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Input from './Input'

function InputField({ name, type, validate, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      type={type}
      validate={validate}
      {...fieldProps}
      render={({ input, meta }) => (
        <Input input={input} meta={meta} {...rest} />
      )}
    />
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.func,
  fieldProps: PropTypes.shape({}),
}

InputField.defaultProps = {
  label: null,
  validate: null,
  fieldProps: null,
}

export default InputField
