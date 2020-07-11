import React from 'react'
import { string, object } from 'prop-types'
import cx from 'classnames'
import { FormField, Input as BaseInput } from 'grommet'

const InputForm = ({ input, meta, postfix, ...rest }) => {
  const { label } = input
  const { touched, error } = meta

  return (
    <>
      <FormField label={label}>
        <BaseInput
          {...input}
          {...rest}
          className={cx({ 'has-error': touched && error })}
        />
      </FormField>
      <span className="error-container">
        {touched && error ? (
          <small className="error-message">
            X
            <span>{error}</span>
          </small>
        ) : null}
      </span>
    </>
  )
}

InputForm.propTypes = {
  input: object.isRequired,
  meta: object.isRequired,
  postfix: string
}

InputForm.defaultProps = {}

export default InputForm
