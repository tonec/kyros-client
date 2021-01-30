import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { UseLink } from 'types'
import { makeStyles } from 'styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import BaseCheckbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(1),
  },
}))

type Props = ComponentPropsWithoutRef<typeof BaseCheckbox> & {
  label?: string
  $value: UseLink & { value: boolean }
  onChange: (event: ChangeEvent) => void
}

function Checkbox({
  name,
  label,
  $value,
  checked,
  disabled = false,
  onChange,
}: Props): JSX.Element {
  const classes = useStyles()

  const val = $value ? $value.value : checked

  const handleOnChange = (event: ChangeEvent) => {
    if ($value) {
      $value.set((value: boolean) => !value)
    }

    if (typeof onChange === 'function') {
      onChange(event)
    }
  }

  if (!label) {
    return (
      <BaseCheckbox
        name={name}
        checked={val}
        disabled={disabled}
        data-testid={`input-${name}`}
        color="primary"
        onChange={handleOnChange}
      />
    )
  }

  return (
    <FormControlLabel
      className={classes.control}
      control={
        <BaseCheckbox
          name={name}
          checked={val}
          disabled={disabled}
          data-testid={`input-${name}`}
          color="primary"
          onChange={handleOnChange}
        />
      }
      label={label}
    />
  )
}

export default Checkbox
