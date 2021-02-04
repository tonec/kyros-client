import { Obj } from 'types'

function getInitialValues(values: Obj<string>): Obj<string> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, id, ...rest } = values
  return rest
}

export default getInitialValues
