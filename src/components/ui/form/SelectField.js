/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Select from './Select'

function SelectField({ name, validate, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      validate={validate}
      {...fieldProps}
      render={({ input, meta }) => (
        <Select input={input} meta={meta} {...rest} />
      )}
    />
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  fieldProps: PropTypes.shape({}),
}

SelectField.defaultProps = {
  validate: null,
  fieldProps: null,
}

export default SelectField
