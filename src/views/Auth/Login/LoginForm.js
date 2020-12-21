import React from 'react'
import { func } from 'prop-types'
import { Form } from 'react-final-form'
import { InputField } from 'components/Form'
import validate from './validate'

function LoginForm({ handleOnSubmit }) {
  return (
    <Form
      onSubmit={handleOnSubmit}
      initialValues={{ remember: true, checky: 1 }}
      render={({ handleSubmit }) => {
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
