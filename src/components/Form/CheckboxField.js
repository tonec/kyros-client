import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import CheckboxForm from './CheckboxForm'

function CheckboxField({ name, label, ...rest }) {
  return (
    <Field
      name={name}
      type="checkbox"
      render={({ input, meta }) => (
        <CheckboxForm input={input} meta={meta} label={label} {...rest} />
      )}
    />
  )
}

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.func,
}

CheckboxField.defaultProps = {
  validate: null,
}

export default CheckboxField
