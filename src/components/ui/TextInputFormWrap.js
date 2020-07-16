import React from 'react'
import PropTypes from 'prop-types'
import { TextInput as BaseInput } from 'grommet'
import FormControl from './FormControl'

function TextInputFormWrap(props) {
  const {
    input: { name, value, type, onChange, ...restInput },
    meta,
    ...rest
  } = props

  const { error, touched } = meta

  return (
    <FormControl isError={error && touched} error={error}>
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
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default TextInputFormWrap
