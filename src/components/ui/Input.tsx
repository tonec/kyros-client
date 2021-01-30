import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { UseLink } from 'types'
import BaseInput from '@material-ui/core/OutlinedInput'
import ConditionalWrap from './ConditionalWrap'
import FormControl from './form/FormControl'
import InputLabel from './form/InputLabel'

type Props = ComponentPropsWithoutRef<typeof BaseInput> & {
  $value: UseLink
  isWrapped: boolean
}

function Input({
  name,
  label,
  placeholder,
  type,
  $value,
  inputProps,
  isWrapped,
  fullWidth,
  className,
  disabled,
  onChange,
  onBlur,
}: Props): JSX.Element {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if ($value) {
      $value.set((event.target as HTMLInputElement).value)
    }

    if (typeof onChange === 'function') {
      onChange(event)
    }
  }

  const error = $value ? $value.error : ''

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <ConditionalWrap
        condition={isWrapped}
        wrap={child => (
          <FormControl fullWidth={fullWidth} error={error}>
            {child}
          </FormControl>
        )}
      >
        <BaseInput
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={className}
          value={$value.value}
          inputProps={{ ...inputProps, 'data-testid': `input-${name}` }}
          onChange={handleOnChange}
          onBlur={onBlur}
        />
        {error && <span>{error}</span>}
      </ConditionalWrap>
    </>
  )
}

export default Input
