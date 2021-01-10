import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonsSpacer, Form, InputField } from 'components'
import validate from './validate'

function ClientForm({ isEdit, initialValues, handleCancel, handleOnSubmit }) {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      render={({ submitting, pristine, handleSubmit, hasValidationErrors }) => {
        return (
          <form onSubmit={handleSubmit}>
            <InputField
              label="Client name"
              name="name"
              type="text"
              placeholder="Client name"
              validate={validate.name}
              required
            />

            <ButtonsSpacer>
              <Button type="button" onClick={handleCancel}>
                Cancel
              </Button>

              <Button
                type="submit"
                color="primary"
                disabled={submitting || pristine || hasValidationErrors}
              >
                {isEdit ? 'Save' : 'Create'}
              </Button>
            </ButtonsSpacer>
          </form>
        )
      }}
    />
  )
}

ClientForm.propTypes = {
  isEdit: PropTypes.bool,
  initialValues: PropTypes.object,
  handleCancel: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
}

ClientForm.defaultProps = {
  isEdit: false,
  initialValues: {},
}

export default ClientForm
