import React from 'react'
import PropTypes from 'prop-types'
import { useLinkType } from 'types'
import BaseSelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from './form/InputLabel'

function Select({
  label,
  placeholder,
  options,
  icons,
  $value,
  inputProps,
  className,
  disabled,
  onChange,
  onBlur,
}) {
  const handleOnChange = e => {
    if ($value) {
      $value.set(e.target.value)
    }

    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}

      <BaseSelect
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        value={$value.value}
        inputProps={{ ...inputProps }}
        variant="outlined"
        onChange={handleOnChange}
        onBlur={onBlur}
      >
        {Object.keys(options).map(option => {
          const Icon = icons[option]

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

Select.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.shape({}).isRequired,
  icons: PropTypes.shape({}),
  $value: useLinkType,
  value: PropTypes.string,
  inputProps: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

Select.defaultProps = {
  placeholder: null,
  label: null,
  icons: {},
  $value: null,
  value: '',
  inputProps: {},
  disabled: false,
  className: null,
  onChange: null,
  onBlur: null,
}

export default Select
