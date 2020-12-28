import React from 'react'
import { makeStyles } from 'styles'
import {
  Card,
  Centered,
  CheckboxField,
  Form,
  InputField,
  SelectField,
  TextareaField,
  RadioField,
} from 'components'

import validate from './validate'

const useStyles = makeStyles({
  card: {
    width: 350,
  },
})

function FormLibrary() {
  const classes = useStyles()

  const handleOnSubmit = () => {}

  return (
    <Centered title="Form library">
      <Card className={classes.card}>
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
                  placeholder="Password"
                  autoComplete="current-password"
                  validate={validate.password}
                />

                <CheckboxField name="checkbox-1" label="Checkbox 1" />

                <CheckboxField name="checkbox-2" label="Checkbox 2" />

                <SelectField
                  name="Selecty"
                  label="Select"
                  value=""
                  options={{
                    arti: 'Artificial surfaces',
                    agri: 'Agricultural areas',
                    forest: 'Forest & semi-natural areas',
                    wetlands: 'Wetlands',
                  }}
                />

                <TextareaField
                  label="Description needed"
                  name="description"
                  validate={validate.password}
                />

                <RadioField label="Radio 1" name="radio" value="1" />

                <RadioField label="Radio 2" name="radio" value="2" />

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
