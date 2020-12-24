import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Textarea from './Textarea'

function TextareaField({ name, validate, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      validate={validate}
      {...fieldProps}
      render={({ input, meta }) => (
        <Textarea input={input} meta={meta} {...rest} />
      )}
    />
  )
}

TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.func,
  fieldProps: PropTypes.shape({}),
}

TextareaField.defaultProps = {
  label: null,
  validate: null,
  fieldProps: null,
}

export default TextareaField
