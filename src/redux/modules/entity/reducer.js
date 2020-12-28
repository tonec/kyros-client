import immutable from 'object-path-immutable'
import merge from 'lodash/merge'
import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'
import union from 'lodash/union'
import { RECEIVED } from '../api/actions'
import { LOGOUT } from '../auth/actions'
import normalized from './schema'

function mergeCopyArrays(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue
  }
  return null
}

export const initialState = {}

export default function reducer(state = initialState, action = {}) {
  const { message } = action

  switch (action.type) {
    case RECEIVED:
      if (message && message.action === 'store') {
        const entity = message.entity.toLowerCase()
        const data = normalized(message)
        const byId = data.entities[entity]
        const allIds = data.result.entities

        return merge({}, state, {
          [entity]: merge({}, state[entity], {
            byId: mergeWith(
              state[entity] && state[entity].byId,
              byId,
              mergeCopyArrays,
            ),
            allIds: union(state[entity] && state[entity].allIds, allIds),
          }),
        })
      }

      if (message && message.action === 'remove') {
        const entity = message.entity.toLowerCase()
        const { _id } = message.meta

        return {
          ...state,
          [entity]: {
            ...state[entity],
            byId: immutable.del(state[entity].byId, `${_id}`),
            allIds: [
              ...state[entity].allIds.filter(entityId => entityId !== _id),
            ],
          },
        }
      }

      return state

    case LOGOUT:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
