/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { formInputType, formMetaType } from 'types'
import { makeStyles } from 'styles'
import BaseSelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from './FormControl'
import InputLabel from './InputLabel'

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
  icon: {
    marginRight: 4,
  },
}))

function SelectForm(props) {
  const classes = useStyles()

  const {
    input: { name, ...restInput },
    meta,
    label,
    disabled,
    options,
    icons,
    ...rest
  } = props

  const { error, touched } = meta

  const isError = Boolean(error) && touched

  return (
    <FormControl
      fullWidth
      disabled={disabled}
      error={isError}
      error={error}
      className={classes.control}
    >
      {label && (
        <InputLabel htmlFor={name} disabled={disabled}>
          {label}
        </InputLabel>
      )}
      <BaseSelect
        name={name}
        inputProps={restInput}
        variant="outlined"
        displayEmpty
        renderValue={selected => {
          if (selected.length === 0) {
            return <em>Select...</em>
          }

          return selected
        }}
        {...rest}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Object.keys(options).map(option => {
          const Icon = icons[option]

          return (
            <MenuItem key={option} value={option} aria-label={options[option]}>
              {Icon && <Icon size={14} className={classes.icon} />}
              {options[option]}
            </MenuItem>
          )
        })}
      </BaseSelect>
    </FormControl>
  )
}

SelectForm.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  input: formInputType.isRequired,
  meta: formMetaType.isRequired,
  options: PropTypes.shape({}).isRequired,
  icons: PropTypes.shape({}),
}

SelectForm.defaultProps = {
  label: null,
  disabled: false,
  icons: {},
}

export default SelectForm
