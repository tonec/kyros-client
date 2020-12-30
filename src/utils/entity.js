import get from 'lodash/get'

export const getFullName = entity =>
  `${get(entity, 'firstName')} ${get(entity, 'lastName')}`

export default null
