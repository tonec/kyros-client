import React, { ComponentPropsWithoutRef } from 'react'
import { Field } from 'react-final-form'
import BaseSelect from '@material-ui/core/Select'
import Select from './Select'

type SelectProps = ComponentPropsWithoutRef<typeof BaseSelect>
type FieldProps = ComponentPropsWithoutRef<typeof Field>
type OwnProps = {
  options: Record<string, unknown>
}
type Props = SelectProps & FieldProps & OwnProps

function SelectField({
  name,
  validate,
  fieldProps,
  options,
  ...rest
}: Props): JSX.Element {
  return (
    <Field
      name={name}
      validate={validate}
      {...fieldProps}
      render={({ input, meta }) => (
        <Select fieldInput={input} meta={meta} options={options} {...rest} />
      )}
    />
  )
}

export default SelectField
