import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonsSpacer, Form, Grid, InputField } from 'components'
import validate from './validate'

function UserForm({ isEdit, initialValues, handleCancel, handleOnSubmit }) {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      render={({ submitting, pristine, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputField
                  label="First name"
                  name="firstName"
                  type="text"
                  validate={validate.firstName}
                />

                <InputField
                  label="Last name"
                  name="lastName"
                  type="text"
                  validate={validate.lastName}
                />

                <InputField
                  label="Email"
                  name="email"
                  type="text"
                  validate={validate.email}
                />

                <InputField
                  label="Phone"
                  name="phone"
                  type="text"
                  validate={validate.phone}
                />

                <InputField label="Rate" name="rate" type="number" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField label="Address" name="address1" type="text" />

                <InputField name="address2" type="text" />

                <InputField placeholder="City" name="city" type="text" />

                <InputField
                  placeholder="Postcode"
                  name="postcode"
                  type="text"
                />

                <InputField
                  label="Date of birth"
                  name="dateOfBirth"
                  type="text"
                />
              </Grid>
            </Grid>

            <ButtonsSpacer>
              <Button type="button" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>

              <Button
                type="submit"
                color="primary"
                disabled={submitting || pristine}
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

UserForm.propTypes = {
  isEdit: PropTypes.bool,
  initialValues: PropTypes.object,
  handleCancel: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
}

UserForm.defaultProps = {
  isEdit: false,
  initialValues: {},
}

export default UserForm
