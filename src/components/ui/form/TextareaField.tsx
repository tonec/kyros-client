import React, { ComponentPropsWithoutRef } from 'react'
import { Field } from 'react-final-form'
import BaseTextarea from '@material-ui/core/TextareaAutosize'
import Textarea from './Textarea'

type InputProps = ComponentPropsWithoutRef<typeof BaseTextarea>
type FieldProps = ComponentPropsWithoutRef<typeof Field>
type OwnProps = {
  label: string
}
type Props = InputProps & FieldProps & OwnProps

function TextareaField({
  name,
  validate,
  fieldProps,
  ...rest
}: Props): JSX.Element {
  return (
    <Field
      name={name}
      validate={validate}
      {...fieldProps}
      render={({ input, meta }) => (
        <Textarea fieldInput={input} meta={meta} {...rest} />
      )}
    />
  )
}

export default TextareaField
