import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BaseCheckbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  control: {
    margin: theme.spacing(1),
  },
}));

function Checkbox({ name, label, $value, checked, disabled, onChange }) {
  const classes = useStyles();

  const val = $value ? $value.value : checked;

  const handleOnChange = e => {
    if ($value) {
      $value.set(value => !value);
    }

    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  if (!label) {
    return (
      <BaseCheckbox
        name={name}
        checked={val}
        disabled={disabled}
        data-testid={`input-${name}`}
        color="primary"
        onChange={handleOnChange}
      />
    );
  }

  return (
    <FormControlLabel
      className={classes.control}
      control={
        <BaseCheckbox
          name={name}
          checked={val}
          disabled={disabled}
          data-testid={`input-${name}`}
          color="primary"
          onChange={handleOnChange}
        />
      }
      label={label}
    />
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  $value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.bool]),
    set: PropTypes.func,
    check: PropTypes.func,
    error: PropTypes.string,
  }),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  label: null,
  $value: null,
  checked: undefined,
  disabled: false,
  onChange: null,
};

export default Checkbox;
