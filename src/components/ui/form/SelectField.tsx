import React, { ComponentProps } from 'react'
import { Field } from 'react-final-form'
import BaseSelect from '@material-ui/core/Select'
import Select from './Select'

type FieldProps = ComponentProps<typeof Field>

type SelectProps = ComponentProps<typeof BaseSelect>

type OwnProps = {
  options: Record<string, unknown>
}

type Props = FieldProps & SelectProps & OwnProps

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
        <Select ffInput={input} meta={meta} options={options} {...rest} />
      )}
    />
  )
}

export default SelectField
