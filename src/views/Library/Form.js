import React from 'react'
import { Form } from 'react-final-form'
import { Card, Centered } from 'components'
import { CheckboxField, InputField, RadioField } from 'components/Form'
import validate from './validate'

function FormLibrary() {
  const handleOnSubmit = () => {}

  return (
    <Centered title="Form library">
      <Card>
        <Form
          onSubmit={handleOnSubmit}
          initialValues={{ remember: true, checky: 1 }}
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

                <RadioField label="1" name="checky" value="1" />

                <RadioField label="2" name="checky" value="2" />

                {JSON.stringify(values, 0, 2)}
              </form>
            )
          }}
        />
      </Card>
    </Centered>
  )
}

export default FormLibrary
