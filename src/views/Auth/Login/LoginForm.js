import React from 'react'
import { func } from 'prop-types'
import { Form, InputField, CheckboxField } from 'components'
import validate from './validate'

function LoginForm({ handleOnSubmit }) {
  return (
    <Form
      onSubmit={handleOnSubmit}
      initialValues={{ remember: true, checky: true }}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
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

            <CheckboxField label="Remember me" name="remember" />
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
