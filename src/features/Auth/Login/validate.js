import { required, email } from 'utils/validation'

export default {
  email: value => required(value) || email(value),
  password: required,
}
