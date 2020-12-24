import React from 'react'
import {
  Card,
  Centered,
  CheckboxField,
  Form,
  InputField,
  SelectField,
  RadioField,
} from 'components'

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

                <CheckboxField name="checkbox-1" label="Checkbox 1" />

                <CheckboxField name="checkbox-2" label="Checkbox 2" />

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
