import { required, email } from 'utils/validation'

const validation = {
  email: (value: string): string | undefined => required(value) || email(value),
  password: required,
}

export default validation
