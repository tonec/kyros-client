import { required, email } from 'utils/validation'

export default {
  email: (value: string): string | undefined => required(value) || email(value),
  password: required,
}
