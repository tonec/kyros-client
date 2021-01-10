import React from 'react'
import { func } from 'prop-types'
import { Button, ButtonsSpacer, Form, InputField } from 'components'
import validate from './validate'

function LoginForm({ handleOnSubmit }) {
  return (
    <Form
      onSubmit={handleOnSubmit}
      render={({ submitting, pristine, handleSubmit, hasValidationErrors }) => {
        return (
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              name="email"
              type="text"
              autoComplete="username"
              validate={validate.email}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              validate={validate.password}
            />

            <ButtonsSpacer>
              <Button
                type="submit"
                color="primary"
                disabled={submitting || pristine || hasValidationErrors}
              >
                Log in
              </Button>
            </ButtonsSpacer>
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
