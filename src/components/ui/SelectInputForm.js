/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import InputLabel from './InputLabel';
import SelectInputFormWrap from './SelectInputFormWrap';

function SelectInputForm({ name, label, validate, fieldProps, ...rest }) {
  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <Field
        name={name}
        validate={validate}
        {...fieldProps}
        render={({ input, meta }) => (
          <SelectInputFormWrap input={input} meta={meta} {...rest} />
        )}
      />
    </>
  );
}

SelectInputForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.func,
  fieldProps: PropTypes.shape({}),
};

SelectInputForm.defaultProps = {
  label: null,
  validate: null,
  fieldProps: null,
};

export default SelectInputForm;
