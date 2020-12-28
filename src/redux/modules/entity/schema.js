import { normalize, schema } from 'normalizr'

export default message => {
  const entity = new schema.Entity(message.entity.toLowerCase(), {}, { idAttribute: '_id' })
  const entitySchema = { entities: [entity] }
  return normalize(message.data, entitySchema)
}
