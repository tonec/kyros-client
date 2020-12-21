import React from 'react'
import { func } from 'prop-types'
import { Form } from 'react-final-form'
import { TextInputFormField } from 'components'

function LoginForm({ handleOnSubmit }) {
  return (
    <Form
      onSubmit={handleOnSubmit}
      initialValues={{ remember: true }}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <TextInputFormField
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
              autoCapitalize="off"
              // validate={validation.email}
            />
            {/* <Field
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
              render={TextInputForm}
              // validate={validation.email}
              autoCapitalize="off"
            /> */}
          </form>
        )
      }}
    />
  )
}

LoginForm.propTypes = {
  handleOnSubmit: func.isRequired,
}

export default LoginForm