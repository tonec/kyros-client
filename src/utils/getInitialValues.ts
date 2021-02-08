import { Obj } from 'types'

function getInitialValues<T>(values: T>): Partial<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, id, ...rest } = values
  return rest
}

export default getInitialValues
