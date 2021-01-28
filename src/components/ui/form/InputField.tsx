import React from 'react'
import { Field } from 'react-final-form'
import Input from './Input'

type Props = {
  name: string
  type: string
  label?: string
  autoComplete?: string
  validate?: (value: string) => string | undefined
  fieldProps?: Record<string, unknown>
}

function InputField({
  name,
  type,
  validate,
  fieldProps,
  ...rest
}: Props): JSX.Element {
  return (
    <Field
      name={name}
      type={type}
      validate={validate}
      {...fieldProps}
      render={({ input, meta }) => (
        <Input input={input} meta={meta} {...rest} />
      )}
    />
  )
}

export default InputField
