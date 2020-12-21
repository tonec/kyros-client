import React from 'react'
import { func } from 'prop-types'
import { Form } from 'react-final-form'
import { CheckboxField, InputField } from 'components/Form'
import validate from './validate'

function LoginForm({ handleOnSubmit }) {
  return (
    <Form
      onSubmit={handleOnSubmit}
      initialValues={{ remember: true }}
      render={({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
              autoCapitalize="off"
              validate={validate.email}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              validate={validate.password}
            />
            <CheckboxField label="dsdsd" name="remember" />
            {JSON.stringify(values, 0, 2)}
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
