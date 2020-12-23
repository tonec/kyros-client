import React from 'react'
import PropTypes from 'prop-types'
import { Form as BaseForm } from 'react-final-form'

function Form({ onSubmit, initialValues, render }) {
  return (
    <BaseForm
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={render}
    />
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  render: PropTypes.func.isRequired,
}

Form.defaultProps = {
  initialValues: null,
}

export default Form
