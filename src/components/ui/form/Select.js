/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { formInputType, formMetaType } from 'types'
import { makeStyles } from 'styles'
import BaseSelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from './FormControl'
import FormInputError from './FormInputError'

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
    options,
    icons,
    ...rest
  } = props

  const { error, touched } = meta

  const isError = Boolean(error) && touched

  return (
    <FormControl fullWidth error={isError} className={classes.control}>
      <BaseSelect
        name={name}
        inputProps={restInput}
        variant="outlined"
        {...rest}
      >
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
      {isError && <FormInputError error={error} />}
    </FormControl>
  )
}

SelectForm.propTypes = {
  label: PropTypes.string,
  input: formInputType.isRequired,
  meta: formMetaType.isRequired,
  options: PropTypes.shape({}).isRequired,
  icons: PropTypes.shape({}),
}

SelectForm.defaultProps = {
  label: null,
  icons: {},
}

export default SelectForm
