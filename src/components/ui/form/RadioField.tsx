import React, { ComponentPropsWithoutRef } from 'react'
import { Field } from 'react-final-form'
import BaseRadio from '@material-ui/core/Radio'
import Radio from './Radio'

type Props = ComponentPropsWithoutRef<typeof BaseRadio> &
  ComponentPropsWithoutRef<typeof Field> & {
    label: string
  }

function RadioField({
  name,
  label,
  value,
  fieldProps,
  ...rest
}: Props): JSX.Element {
  return (
    <Field
      name={name}
      type="radio"
      value={value}
      {...fieldProps}
      render={({ input }) => (
        <Radio fieldInput={input} label={label} {...rest} />
      )}
    />
  )
}

export default RadioField
