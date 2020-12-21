import React from 'react'
import PropTypes from 'prop-types'
import { TextInput as BaseInput } from 'grommet'
import FormControl from './FormControl'

function TextInputFormWrap(props) {
  const {
    input: { name, value, type, onChange, ...restInput },
    meta,
    label,
    ...rest
  } = props

  const { error, touched } = meta

  return (
    <FormControl
      name={name}
      label={label}
      isError={error && touched}
      error={error}
    >
      <BaseInput
        name={name}
        value={value}
        type={type}
        inputProps={restInput}
        onChange={onChange}
        {...rest}
      />
    </FormControl>
  )
}

TextInputFormWrap.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default TextInputFormWrap
