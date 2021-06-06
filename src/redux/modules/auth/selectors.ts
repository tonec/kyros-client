import { Select, User } from 'types'

export const getAuthUser: Select<User | null> = ({ auth }) => auth.user
export const getAuthError: Select<string | null> = ({ auth }) => auth.error
