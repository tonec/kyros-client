import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Input from './InputForm'

function InputField({ name, label, type, validate, ...rest }) {
  return (
    <Field
      name={name}
      type={type}
      validate={validate}
      render={({ input, meta }) => (
        <Input input={input} meta={meta} label={label} {...rest} />
      )}
    />
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validate: PropTypes.func,
}

InputField.defaultProps = {
  validate: null,
}

export default InputField
