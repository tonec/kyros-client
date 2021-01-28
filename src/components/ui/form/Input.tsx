import React, { ReactElement } from 'react'
import BaseInput from '@material-ui/core/OutlinedInput'
import { FieldInputProps, FieldMetaState } from 'react-final-form'
import { makeStyles } from '../../../styles'
import FormControl from './FormControl'
import InputLabel from './InputLabel'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
}))

interface Props {
  input: FieldInputProps<string, HTMLElement>
  meta: FieldMetaState<string>
  label?: string
  disabled?: boolean
  required?: boolean
}

function InputForm({
  input: { name, ...restInput },
  meta,
  label,
  disabled,
  required,
  ...rest
}: Props): ReactElement {
  const classes = useStyles()

  console.log('rest', rest)

  const { error, touched } = meta

  const isError = Boolean(error) && touched

  return (
    <FormControl
      fullWidth
      disabled={disabled}
      isError={isError}
      error={error}
      className={classes.control}
    >
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
