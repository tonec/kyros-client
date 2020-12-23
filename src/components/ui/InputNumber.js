import React, { useState } from 'react';
import PropTypes, { oneOfType, string, func, number } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BaseInput from '@material-ui/core/TextField';
import ConditionalWrap from './ConditionalWrap';
import FormControl from './FormControl';

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(2, 0, 0),
  },
}));

function InputNumber({
  name,
  label,
  type,
  $value,
  value,
  defaultValue,
  min,
  max,
  inputProps,
  helperText,
  isWrapped,
  fullWidth,
  noStepper,
  className,
  disabled,
  useLocalStorage,
  onChange,
}) {
  const classes = useStyles();

  const [val, setVal] = useState(value || defaultValue);

  const handleOnChange = e => {
    let v = e.target.value;

    if (v !== '') {
      if (min && v < min) {
        v = min;
      }

      if (max && v > max) {
        v = max;
      }
    }

    if ($value) {
      $value.set(v);
    } else {
      setVal(v);
    }

    if (useLocalStorage) {
      localStorage.setItem(e.target.name, e.target.value);
    }

    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  const handleOnBlur = e => {
    if (val === '') {
      setVal(defaultValue);
      e.target.value = defaultValue;
      handleOnChange(e);
    }
  };

  const error = $value ? $value.error : null;

  let styles = {};

  if (noStepper) {
    styles = {
      appearance: 'none',
      margin: 0,
    };
  }

  return (
    <ConditionalWrap
      condition={isWrapped}
      wrap={child => (
        <FormControl fullWidth={fullWidth} className={classes.control}>
          {child}
        </FormControl>
      )}
    >
      <BaseInput
        type={type}
        label={label}
        className={className}
        value={val}
        inputProps={{ ...inputProps, 'data-testid': `input-${name}` }}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        name={name}
        disabled={disabled}
        helperText={helperText}
        style={styles}
      />
      {error && <span>{error}</span>}
    </ConditionalWrap>
  );
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  $value: PropTypes.shape({
    value: oneOfType([string, number]),
    set: func,
    check: func,
    error: string,
  }),
  value: oneOfType([string, number]),
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  isWrapped: PropTypes.bool,
  fullWidth: PropTypes.bool,
  noStepper: PropTypes.bool,
  className: PropTypes.string,
  useLocalStorage: PropTypes.bool,
  onChange: PropTypes.func,
};

InputNumber.defaultProps = {
  label: '',
  type: 'text',
  $value: null,
  value: '',
  defaultValue: null,
  min: null,
  max: null,
  inputProps: {},
  helperText: '',
  disabled: false,
  isWrapped: false,
  fullWidth: false,
  noStepper: false,
  className: null,
  useLocalStorage: false,
  onChange: null,
};

export default InputNumber;
