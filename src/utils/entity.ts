import { User } from 'types'

export const getFullName = (user: User): string => `${user.firstName} ${user.lastName}`

export default null
