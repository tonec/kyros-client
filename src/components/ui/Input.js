import React from 'react'
import PropTypes from 'prop-types'
import { useLinkType } from 'types'
import { makeStyles } from 'styles'
import BaseInput from '@material-ui/core/OutlinedInput'
import ConditionalWrap from './ConditionalWrap'
import FormControl from './form/FormControl'
import InputLabel from './form/InputLabel'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
}))

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

  const error = $value ? $value.error : null

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <ConditionalWrap
        condition={isWrapped}
        wrap={child => (
          <FormControl fullWidth={fullWidth} className={classes.control}>
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

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  $value: useLinkType,
  inputProps: PropTypes.object,
  disabled: PropTypes.bool,
  isWrapped: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

Input.defaultProps = {
  placeholder: null,
  label: null,
  type: 'text',
  $value: null,
  inputProps: {},
  disabled: false,
  isWrapped: false,
  fullWidth: false,
  className: null,
  onChange: null,
  onBlur: null,
}

export default Input
