import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, InputField } from 'components'
import validate from './validate'

function ClientForm({ initialValues, handleOnSubmit }) {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <InputField
              label="Client name"
              name="name"
              type="text"
              placeholder="Client name"
              validate={validate.name}
            />

            <Button type="submit" color="primary">
              Create client
            </Button>
          </form>
        )
      }}
    />
  )
}

ClientForm.propTypes = {
  initialValues: PropTypes.object,
  handleOnSubmit: PropTypes.func.isRequired,
}

ClientForm.defaultProps = {
  initialValues: {},
}

export default ClientForm
