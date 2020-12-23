import React from 'react';
import PropTypes from 'prop-types';
import { isValid } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useLinkType } from '../../types';
import InputLabel from './InputLabel';

function DatePicker({
  label,
  $value,
  variant,
  format,
  margin,
  disableToolbar,
}) {
  const handleDateChange = date => {
    if (isValid(date)) {
      $value.set(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <InputLabel>{label}</InputLabel>
      <KeyboardDatePicker
        autoOk
        fullWidth
        inputVariant="outlined"
        variant={variant}
        format={format}
        margin={margin}
        value={$value.value}
        disableToolbar={disableToolbar}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': `Change date ${label}`,
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  $value: useLinkType,
  variant: PropTypes.string,
  format: PropTypes.string,
  margin: PropTypes.string,
  disableToolbar: PropTypes.bool,
};

DatePicker.defaultProps = {
  label: null,
  $value: null,
  variant: 'inline',
  format: 'yyyy-MM-dd',
  margin: 'normal',
  disableToolbar: true,
};

export default DatePicker;
