import React, { ComponentPropsWithoutRef } from 'react'
import PropTypes from 'prop-types'
import { Form as BaseForm } from 'react-final-form'

type Props = ComponentPropsWithoutRef<typeof BaseForm>

function Form({ onSubmit, initialValues, render }: Props): JSX.Element {
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
