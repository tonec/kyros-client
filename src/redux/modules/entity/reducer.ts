import get from 'lodash/get'
import isArray from 'lodash/isArray'
import merge from 'lodash/merge'
import mergeWith from 'lodash/mergeWith'
import union from 'lodash/union'
import { del } from 'object-path-immutable'
import { APIPayload, Obj } from 'types'
import createReducer from '../../createReducer'
import { RECEIVED } from '../app/actions'
import { LOGOUT } from '../auth/actions'
import normalized from './schema'

function mergeCopyArrays(objValue: Obj<unknown>, srcValue: Obj<unknown>) {
  if (isArray(objValue)) {
    return srcValue
  }
  return null
}

type EntityById<E> = Obj<E>

export interface EntityStore<E> {
  byId: EntityById<E>
  allIds: string[]
}

interface EntityState {
  [key: string]: EntityStore<any>
}

export const initialState: EntityState = {}

export default createReducer<EntityState>(initialState, {
  [RECEIVED]: (state: EntityState, { payload }: APIPayload) => {
    if (payload && payload.action === 'store') {
      const entity = payload.entity.toLowerCase()
      const data = normalized(payload)
      const byId = data.entities[entity]
      const allIds = data.result.entities

      return merge({}, state, {
        [entity]: merge({}, state[entity], {
          byId: mergeWith(
            {},
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
      const id = get(payload, 'data.entities[0].id')

      if (!id) return state

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
