import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Checkbox from './Checkbox'

function CheckboxField({ name, label, value, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      type="checkbox"
      value={value}
      {...fieldProps}
      render={({ input }) => <Checkbox input={input} label={label} {...rest} />}
    />
  )
}

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldProps: PropTypes.object,
  value: PropTypes.string,
}

CheckboxField.defaultProps = {
  fieldProps: null,
  value: undefined,
}

export default CheckboxField
