import { normalize, schema } from 'normalizr'
import { APIPayload, Normalized } from 'types'

export default (message: APIPayload['payload']): Normalized => {
  const entity = new schema.Entity(
    message.entity.toLowerCase(),
    {},
    { idAttribute: 'id' },
  )
  const entitySchema = { entities: [entity] }
  return normalize(message.data, entitySchema)
}
