import React, { ComponentPropsWithoutRef } from 'react'
import { FieldInputProps } from 'react-final-form'
import BaseRadio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from 'styles'

const useStyles = makeStyles({
  label: {
    display: 'block',
  },
})

type InputProps = ComponentPropsWithoutRef<typeof BaseRadio>
type OwnProps = {
  fieldInput: FieldInputProps<string, HTMLElement>
  label: string
}
type Props = InputProps & OwnProps

function RadioForm({ fieldInput, label, ...rest }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <FormControlLabel
      label={label}
      className={classes.label}
      control={<BaseRadio color="primary" {...fieldInput} {...rest} />}
    />
  )
}

export default RadioForm
