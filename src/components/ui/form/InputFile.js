import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ConditionalWrap from '../ConditionalWrap'
import FormControl from './FormControl'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  control: {
    display: 'block',
    margin: theme.spacing(2, 0),
  },
  label: {
    display: 'inline-block',
  },
  input: {
    width: '0.1px',
    height: '0.1px',
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },
}))

const InputFile = forwardRef(
  ({ buttonText, directory, isWrapped, disabled, onChange }, ref) => {
    const classes = useStyles()

    return (
      <ConditionalWrap
        condition={isWrapped}
        wrap={child => (
          <FormControl className={classes.control}>{child}</FormControl>
        )}
      >
        <Button
          variant="contained"
          component="label"
          className={classes.label}
          disabled={disabled}
        >
          {buttonText}
          <input
            ref={ref}
            type="file"
            className={classes.input}
            webkitdirectory={directory}
            directory={directory}
            onChange={onChange}
          />
        </Button>
      </ConditionalWrap>
    )
  },
)

InputFile.propTypes = {
  buttonText: PropTypes.string,
  directory: PropTypes.string,
  isWrapped: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

InputFile.defaultProps = {
  buttonText: 'Choose file',
  directory: 'false',
  isWrapped: false,
  disabled: false,
}

export default InputFile