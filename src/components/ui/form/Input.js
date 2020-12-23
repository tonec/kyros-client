import React from 'react'
import PropTypes from 'prop-types'
import { formInputType, formMetaType } from 'types'
import { makeStyles } from '@material-ui/core/styles'
import BaseInput from '@material-ui/core/OutlinedInput'
import FormControl from './FormControl'
import InputLabel from './InputLabel'
import FormInputError from './FormInputError'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
}))

function InputForm(props) {
  const classes = useStyles()

  const {
    input: { name, ...restInput },
    meta,
    label,
    disabled,
    ...rest
  } = props

  const { error, touched } = meta

  const isError = Boolean(error) && touched

  return (
    <FormControl
      fullWidth
      disabled={disabled}
      isError={isError}
      className={classes.control}
    >
      {label && (
        <InputLabel htmlFor={name} disabled={disabled}>
          {label}
        </InputLabel>
      )}
      <BaseInput
        name={name}
        inputProps={restInput}
        disabled={disabled}
        error={isError}
        {...rest}
      />
      {isError && <FormInputError error={error} />}
    </FormControl>
  )
}

InputForm.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  input: formInputType.isRequired,
  meta: formMetaType.isRequired,
}

InputForm.defaultProps = {
  label: null,
  disabled: false,
}

export default InputForm
