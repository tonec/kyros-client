import React, { ComponentPropsWithoutRef } from 'react'
import { FieldInputProps, FieldMetaState } from 'react-final-form'
import BaseInput from '@material-ui/core/OutlinedInput'
import FormControl from './FormControl'
import InputLabel from './InputLabel'

type Props = ComponentPropsWithoutRef<typeof BaseInput> & {
  fieldInput: FieldInputProps<string, HTMLElement>
  meta: FieldMetaState<string>
  label: string
}

function InputForm({
  fieldInput: { name, ...restInput },
  meta,
  label,
  disabled,
  required,
  ...rest
}: Props): JSX.Element {
  const { error, touched } = meta

  const isError = Boolean(error) && touched

  return (
    <FormControl fullWidth disabled={disabled} isError={isError} error={error}>
      {label && (
        <InputLabel htmlFor={name} disabled={disabled}>
          {label}
          {required && <span> *</span>}
        </InputLabel>
      )}
      <BaseInput
        name={name}
        inputProps={{ ...restInput, 'data-testid': `input-${name}` }}
        disabled={disabled}
        error={isError}
        {...rest}
      />
    </FormControl>
  )
}

export default InputForm
