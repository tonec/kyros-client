import React from 'react'
import { func } from 'prop-types'
import { Form, InputField, CheckboxField, SelectField } from 'components'
import validate from './validate'

function LoginForm({ handleOnSubmit }) {
  return (
    <Form
      onSubmit={handleOnSubmit}
      initialValues={{ remember: true, checky: true }}
      render={({ handleSubmit, values }) => {
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
            <CheckboxField name="checky" label="Checky" />
            <CheckboxField name="checky" label="Checky" />
            <SelectField
              name="Selecty"
              label="Selec"
              options={{
                arti: 'Artificial surfaces',
                agri: 'Agricultural areas',
                forest: 'Forest & semi-natural areas',
                wetlands: 'Wetlands',
              }}
            />
            <pre>{JSON.stringify(values, 0, 2)}</pre>
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
