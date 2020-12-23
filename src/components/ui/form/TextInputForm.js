/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import TextInputFormWrap from './TextInputFormWrap';

function TextInputForm({ name, type, validate, fieldProps, ...rest }) {
  return (
    <Field
      name={name}
      type={type}
      validate={validate}
      {...fieldProps}
      render={({ input, meta }) => (
        <TextInputFormWrap input={input} meta={meta} {...rest} />
      )}
    />
  );
}

TextInputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.func,
  fieldProps: PropTypes.shape({}),
};

TextInputForm.defaultProps = {
  label: null,
  validate: null,
  fieldProps: null,
};

export default TextInputForm;
