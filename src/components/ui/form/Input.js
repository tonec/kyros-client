import React from 'react'
import PropTypes from 'prop-types'
import { formInputType, formMetaType } from 'types'
import { makeStyles } from 'styles'
import BaseInput from '@material-ui/core/OutlinedInput'
import FormControl from './FormControl'
import InputLabel from './InputLabel'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
}))

function InputForm({
  input: { name, ...restInput },
  meta,
  label,
  disabled,
  required,
  ...rest
}) {
  const classes = useStyles()

  const { error, touched } = meta

  const isError = Boolean(error) && touched

  return (
    <FormControl
      fullWidth
      disabled={disabled}
      isError={isError}
      error={error}
      className={classes.control}
    >
      {label && (
        <InputLabel htmlFor={name} disabled={disabled}>
          {label}
          {required && <span> *</span>}
        </InputLabel>
      )}
      <BaseInput
        name={name}
        inputProps={restInput}
        disabled={disabled}
        error={isError}
        {...rest}
      />
    </FormControl>
  )
}

InputForm.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  input: formInputType.isRequired,
  meta: formMetaType.isRequired,
}

InputForm.defaultProps = {
  label: null,
  disabled: false,
  required: false,
}

export default InputForm
