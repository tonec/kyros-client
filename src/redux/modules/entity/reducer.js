import { del } from 'object-path-immutable'
import merge from 'lodash/merge'
import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'
import union from 'lodash/union'
import createReducer from '../../createReducer'
import { RECEIVED } from '../app/actions'
import { LOGOUT } from '../auth/actions'
import normalized from './schema'

// eslint-disable-next-line consistent-return
function mergeCopyArrays(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue
  }
}

export const initialState = {}

export default createReducer(initialState, {
  [RECEIVED]: (state, { payload }) => {
    if (payload && payload.action === 'store') {
      const entity = payload.entity.toLowerCase()
      const data = normalized(payload)
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

    if (payload && payload.action === 'remove') {
      const entity = payload.entity.toLowerCase()
      const { id } = payload.meta

      return {
        ...state,
        [entity]: {
          ...state[entity],
          byId: del(state[entity].byId, `${id}`),
          allIds: [...state[entity].allIds.filter(entityId => entityId !== id)],
        },
      }
    }

    return state
  },

  [LOGOUT]: () => initialState,
})
