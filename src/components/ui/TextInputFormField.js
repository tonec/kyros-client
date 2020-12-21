import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import TextInputForm from './TextInputForm'

function TextInputFormField({ name, label, type, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      type={type}
      {...fieldProps}
      render={({ input, meta }) => (
        <TextInputForm input={input} meta={meta} label={label} {...rest} />
      )}
    />
  )
}

TextInputFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fieldProps: PropTypes.object,
}

export default TextInputFormField
