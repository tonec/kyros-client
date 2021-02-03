import { Select, User } from 'types'

export const getAuthUser: Select<User> = ({ auth }) => auth.user
export const getAuthError: Select<string> = ({ auth }) => auth.error
