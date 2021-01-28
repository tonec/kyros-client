import React, { ComponentProps } from 'react'
import { Field } from 'react-final-form'
import BaseInput from '@material-ui/core/OutlinedInput'
import Input from './Input'

type InputProps = ComponentProps<typeof BaseInput>

type FieldProps = ComponentProps<typeof Field>

type OwnProps = {
  label: string
}

type Props = InputProps & FieldProps & OwnProps

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
        <Input fieldInput={input} meta={meta} {...rest} />
      )}
    />
  )
}

export default InputField
