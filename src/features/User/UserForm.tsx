import React from 'react'
import { FormRenderProps } from 'react-final-form'
import { FormState } from 'final-form'
import { PERMISSIONS_OPTIONS } from 'utils/constants'
import {
  Button,
  ButtonsSpacer,
  CheckboxField,
  Form,
  Grid,
  Hrule,
  InputField,
  SelectField,
} from 'components'
import validate from './validate'

const test = 'test'

export interface Values {
  firstName: string
  lastName: string
  email: string
  password: string
  permissions: keyof typeof PERMISSIONS_OPTIONS
  super: boolean
}

interface Props {
  isEdit: boolean
  initialValues: Partial<Values>
  handleCancel: () => void
  handleOnSubmit: (data: Values) => void
}

function UserForm({ isEdit, initialValues, handleCancel, handleOnSubmit }: Props): JSX.Element {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      render={({
        submitting,
        pristine,
        handleSubmit,
        hasValidationErrors,
      }: FormRenderProps & FormState<Values>) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputField
                  label="First name"
                  name="firstName"
                  type="text"
                  validate={validate.firstName}
                  required
                />

                <InputField
                  label="Last name"
                  name="lastName"
                  type="text"
                  validate={validate.lastName}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputField
                  label="Email"
                  name="email"
                  type="text"
                  validate={validate.email}
                  required
                />

                {!isEdit && (
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    validate={validate.password}
                    required
                  />
                )}
              </Grid>
            </Grid>

            <Hrule />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SelectField
                  name="permissions"
                  label="Permissions"
                  options={PERMISSIONS_OPTIONS}
                  validate={validate.permissions}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CheckboxField name="super" label="Super user" />
              </Grid>
            </Grid>

            <ButtonsSpacer>
              <Button type="button" onClick={handleCancel}>
                Cancel
              </Button>

              <Button
                type="submit"
                color="primary"
                disabled={submitting || pristine || hasValidationErrors}
              >
                {isEdit ? 'Save' : 'Create'}
              </Button>
            </ButtonsSpacer>
          </form>
        )
      }}
    />
  )
}

export default UserForm
