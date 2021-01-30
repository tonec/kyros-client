import React, { ComponentPropsWithoutRef } from 'react'
import { FieldInputProps } from 'react-final-form'
import BaseCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from 'styles'

type Props = ComponentPropsWithoutRef<typeof BaseCheckbox> & {
  input: FieldInputProps<string, HTMLElement>
  label: string
}

const useStyles = makeStyles({
  label: {
    display: 'block',
  },
})

function CheckboxForm({ input, label, ...rest }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <FormControlLabel
      label={label}
      className={classes.label}
      control={<BaseCheckbox color="primary" {...input} {...rest} />}
    />
  )
}

export default CheckboxForm
