import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import TextInputFormWrap from './TextInputFormWrap'

function TextInputForm({ name, type, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      type={type}
      {...fieldProps}
      render={({ input, meta }) => (
        <TextInputFormWrap
          input={input}
          meta={meta}
          name={name}
          type={type}
          {...rest}
        />
      )}
    />
  )
}

TextInputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fieldProps: PropTypes.object,
}

export default TextInputForm
