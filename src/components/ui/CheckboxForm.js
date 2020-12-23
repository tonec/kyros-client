/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import CheckboxFormWrap from './CheckboxFormWrap';

function CheckboxForm({ name, label, value, fieldProps, ...rest }) {
  return (
    <>
      {/* {label && <InputLabel>{label}</InputLabel>} */}
      <Field
        name={name}
        type="checkbox"
        value={value}
        {...fieldProps}
        render={({ input, meta }) => (
          <CheckboxFormWrap input={input} meta={meta} label={label} {...rest} />
        )}
      />
    </>
  );
}

CheckboxForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldProps: PropTypes.object,
  value: PropTypes.string,
};

CheckboxForm.defaultProps = {
  fieldProps: null,
  value: null,
};

export default CheckboxForm;
