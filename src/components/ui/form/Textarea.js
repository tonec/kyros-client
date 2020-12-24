import React from 'react'
import PropTypes from 'prop-types'
import { formInputType, formMetaType } from 'types'
import { makeStyles } from 'styles'
import BaseTextarea from '@material-ui/core/TextareaAutosize'
import FormControl from './FormControl'
import InputLabel from './InputLabel'
import FormInputError from './FormInputError'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },

  textarea: {
    width: '100%',
    borderColor: '#0000003b',
    padding: '18.5px 14px',
  },
}))

function TextareaForm({
  input: { name, ...restInput },
  meta,
  label,
  disabled,
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
      className={classes.control}
    >
      {label && (
        <InputLabel htmlFor={name} disabled={disabled}>
          {label}
        </InputLabel>
      )}
      <BaseTextarea
        name={name}
        disabled={disabled}
        className={classes.textarea}
        {...restInput}
        {...rest}
      />
      {isError && <FormInputError error={error} />}
    </FormControl>
  )
}

TextareaForm.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  input: formInputType.isRequired,
  meta: formMetaType.isRequired,
}

TextareaForm.defaultProps = {
  label: null,
  disabled: false,
}

export default TextareaForm
