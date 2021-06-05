import React, { ComponentPropsWithoutRef } from 'react'
import { Field } from 'react-final-form'
import BaseSelect from '@material-ui/core/Select'
import Select from './Select'

type Props = ComponentPropsWithoutRef<typeof BaseSelect> &
  ComponentPropsWithoutRef<typeof Field> & {
    options: Record<string, unknown>
  }

function SelectField({ name, validate, fieldProps, options, ...rest }: Props): JSX.Element {
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
