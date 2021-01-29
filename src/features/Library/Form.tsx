import React from 'react'
import { makeStyles } from 'styles'
import {
  Button,
  ButtonsSpacer,
  Card,
  Centered,
  CheckboxField,
  Form,
  InputField,
  Hrule,
  SelectField,
  TextareaField,
  RadioField,
  Typography,
} from 'components'
import validate from './validate'

const useStyles = makeStyles({
  card: {
    width: 350,
  },
})

function FormLibrary(): JSX.Element {
  const classes = useStyles()

  const handleOnSubmit = (): void => undefined

  return (
    <Centered title="Form library">
      <Card className={classes.card}>
        <Typography variant="h1" gutterBottom>
          Main heading
        </Typography>
        <Hrule />
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

                <ButtonsSpacer>
                  <Button type="submit" color="default">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </ButtonsSpacer>

                {JSON.stringify(values, null, 2)}
              </form>
            )
          }}
        />
      </Card>
    </Centered>
  )
}

export default FormLibrary
