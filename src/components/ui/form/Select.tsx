import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { FieldInputProps, FieldMetaState } from 'react-final-form'
import BaseSelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '../../../styles'
import FormControl from './FormControl'
import InputLabel from './InputLabel'

const useStyles = makeStyles({
  icon: {
    marginRight: 4,
  },
})

type SelectProps = ComponentPropsWithoutRef<typeof BaseSelect>
type OwnProps = {
  fieldInput: FieldInputProps<string, HTMLElement>
  meta: FieldMetaState<string>
  options: Record<string, unknown>
  icons?: Record<string, unknown>
}
type Props = SelectProps & OwnProps

function SelectForm({
  fieldInput: { name, ...restInput },
  meta,
  label,
  disabled,
  required,
  options,
  icons = {},
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
          {required && <span> *</span>}
        </InputLabel>
      )}
      <BaseSelect
        name={name}
        inputProps={{ ...restInput, 'data-testid': `input-${name}` }}
        variant="outlined"
        displayEmpty
        renderValue={(selected: unknown): ReactNode => {
          if (Array.isArray(selected) && selected.length === 0) {
            return <em>Select...</em>
          }

          return selected as ReactNode
        }}
        {...rest}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Object.keys(options).map(option => {
          const Icon = icons[option] as React.ElementType

          return (
            <MenuItem
              key={option}
              value={option}
              aria-label={options[option] as string}
            >
              <>
                {Icon && <Icon className={classes.icon} />}
                {options[option]}
              </>
            </MenuItem>
          )
        })}
      </BaseSelect>
    </FormControl>
  )
}

export default SelectForm
