import { required, email } from 'utils/validation'

const validation = {
  email: value => required(value) || email(value),
  password: required,
}

export default validation
