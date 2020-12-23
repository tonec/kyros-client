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

function TextInputFormWrap(props) {
  const classes = useStyles()

  const {
    input: { name, value, type, onChange, ...restInput },
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
      {label && <InputLabel disabled={disabled}>{label}</InputLabel>}
      <BaseInput
        name={name}
        value={value}
        type={type}
        inputProps={restInput}
        disabled={disabled}
        error={isError}
        onChange={onChange}
        {...rest}
      />
      {isError && <FormInputError error={error} />}
    </FormControl>
  )
}

TextInputFormWrap.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  input: formInputType.isRequired,
  meta: formMetaType.isRequired,
}

TextInputFormWrap.defaultProps = {
  label: null,
  disabled: false,
}

export default TextInputFormWrap
