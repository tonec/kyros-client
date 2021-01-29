import React, { ComponentPropsWithoutRef } from 'react'
import { Field } from 'react-final-form'
import BaseCheckbox from '@material-ui/core/Checkbox'
import Checkbox from './Checkbox'

type CheckboxProps = ComponentPropsWithoutRef<typeof BaseCheckbox>
type FieldProps = ComponentPropsWithoutRef<typeof Field>
type Props = CheckboxProps & FieldProps

function CheckboxField({
  name,
  label,
  value,
  fieldProps,
  ...rest
}: Props): JSX.Element {
  return (
    <Field
      name={name}
      type="checkbox"
      value={value}
      {...fieldProps}
      render={({ input }) => <Checkbox input={input} label={label} {...rest} />}
    />
  )
}

export default CheckboxField