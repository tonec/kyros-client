import React from 'react'
import { Values } from './Login'
import { Button, ButtonsSpacer, Form, InputField } from 'components'
import validate from './validate'

interface Props {
  handleOnSubmit: (data: Values) => void
}

function LoginForm({ handleOnSubmit }: Props): JSX.Element {
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

export default LoginForm
