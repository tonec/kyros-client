import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, InputField } from 'components'
import validate from './validate'

function ClientForm({ handleOnSubmit }) {
  return (
    <Form
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
  handleOnSubmit: PropTypes.func.isRequired,
}

export default ClientForm
