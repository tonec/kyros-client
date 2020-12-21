import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import RadioForm from './RadioForm'

function RadioField({ name, label, value, ...rest }) {
  return (
    <Field
      name={name}
      type="radio"
      value={value}
      render={({ input, meta }) => (
        <RadioForm input={input} meta={meta} label={label} {...rest} />
      )}
    />
  )
}

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validate: PropTypes.func,
}

RadioField.defaultProps = {
  validate: null,
}

export default RadioField
