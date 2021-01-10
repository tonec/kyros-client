import { required, email } from 'utils/validation'

export default {
  firstName: required,
  lastName: required,
  email: value => email(value) || required(value),
  password: required,
  permissions: required,
}
