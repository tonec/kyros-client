import { required, email, Value } from 'utils/validation'

export default {
  firstName: required,
  lastName: required,
  email: (value: Value): string | undefined => email(value) || required(value),
  password: required,
  permissions: required,
}
