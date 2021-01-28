import React, { ComponentProps } from 'react'
import { FieldInputProps, FieldMetaState } from 'react-final-form'
import BaseTextarea from '@material-ui/core/TextareaAutosize'
import { makeStyles } from '../../../styles'
import FormControl from './FormControl'
import InputLabel from './InputLabel'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },

  textarea: {
    width: '100%',
    borderColor: '#0000003b',
    padding: '18.5px 14px',
  },
}))

type InputProps = ComponentProps<typeof BaseTextarea>

type OwnProps = {
  fieldInput: FieldInputProps<string, HTMLElement>
  meta: FieldMetaState<string>
  label: string
}

type Props = InputProps & OwnProps

function TextareaForm({
  fieldInput: { name, ...restInput },
  meta,
  label,
  disabled,
  ...rest
}: Props): JSX.Element {
  const classes = useStyles()

  const { error, touched } = meta

  const isError = Boolean(error) && touched

  return (
    <FormControl fullWidth disabled={disabled} isError={isError} error={error}>
      {label && (
        <InputLabel htmlFor={name} disabled={disabled}>
          {label}
        </InputLabel>
      )}
      <BaseTextarea
        name={name}
        disabled={disabled}
        className={classes.textarea}
        {...restInput}
        {...rest}
      />
    </FormControl>
  )
}

export default TextareaForm
