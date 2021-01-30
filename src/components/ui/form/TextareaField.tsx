import React, { ComponentPropsWithoutRef } from 'react'
import { Field } from 'react-final-form'
import BaseTextarea from '@material-ui/core/TextareaAutosize'
import Textarea from './Textarea'

type Props = ComponentPropsWithoutRef<typeof BaseTextarea> &
  ComponentPropsWithoutRef<typeof Field> & {
    label: string
  }

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
