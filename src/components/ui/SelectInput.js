import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import BaseSelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from './form/InputLabel'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
  icon: {
    marginRight: 4,
  },
  menuItem: {
    fontSize: 12,
  },
}))

function SelectInput({
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
  const classes = useStyles()

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
            <MenuItem
              key={option}
              value={option}
              className={classes.menuItem}
              aria-label={options[option]}
            >
              {Icon && <Icon size={14} className={classes.icon} />}
              {options[option]}
            </MenuItem>
          )
        })}
      </BaseSelect>
    </>
  )
}

SelectInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.shape({}).isRequired,
  icons: PropTypes.shape({}),
  $value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    set: PropTypes.func,
    check: PropTypes.func,
    error: PropTypes.string,
  }),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

SelectInput.defaultProps = {
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

export default SelectInput
