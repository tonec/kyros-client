import React, { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react'
import { Obj, UseLink } from 'types'
import BaseSelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from './form/InputLabel'

type Props = ComponentPropsWithoutRef<typeof BaseSelect> & {
  onChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => void
  options: Obj<string>
  icons?: Obj<unknown>
  $value?: UseLink
}

function Select({
  label,
  placeholder,
  options,
  icons,
  $value,
  value,
  inputProps,
  className,
  disabled,
  onChange,
  onBlur,
}: Props): JSX.Element {
  const handleOnChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    if ($value) {
      $value.set(event.target.value)
    }

    if (typeof onChange === 'function') {
      onChange(event)
    }
  }

  const val = $value ? $value.value : value

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}

      <BaseSelect
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        value={val}
        inputProps={{ ...inputProps }}
        variant="outlined"
        onChange={handleOnChange}
        onBlur={onBlur}
      >
        {Object.keys(options).map(option => {
          const Icon = icons && (icons[option] as React.ElementType)

          return (
            <MenuItem key={option} value={option} aria-label={options[option]}>
              {Icon && <Icon size={14} />}
              {options[option]}
            </MenuItem>
          )
        })}
      </BaseSelect>
    </>
  )
}

export default Select
