import { PayloadAction } from '@reduxjs/toolkit'
import { fk } from '../../../utils'
import createReducer from '../../createReducer'
import * as types from './actions'
import { RECEIVED } from '../app/actions'
import { LOGOUT } from '../auth/actions'
import { User } from '../../../types'

type Payload = PayloadAction<{
  action: string
  entity: string
  data: { entities: User[] }
}>

interface UserState {
  visibleUsers: string[]
}

export const initialState: UserState = {
  visibleUsers: [],
}

export default createReducer<UserState>(initialState, {
  [types.FETCH_SUCCESS]: (state: UserState, { payload }: Payload) => ({
    ...state,
    visibleUsers: payload.data.entities.map(fk('id')),
  }),

  [RECEIVED]: (state: UserState, { payload }: Payload) => {
    if (payload.action === 'store' && payload.entity === 'user') {
      return {
        ...state,
        visibleUsers: state.visibleUsers.concat(
          payload.data.entities.reduce((acc: string[], user) => {
            if (!state.visibleUsers.includes(user.id)) {
              return acc.concat(user.id)
            }
            return acc
          }, []),
        ),
      }
    }

    if (payload.action === 'remove' && payload.entity === 'user') {
      return {
        ...state,
        visibleUsers: state.visibleUsers.filter(
          userId => userId !== payload.data.entities[0].id,
        ),
      }
    }

    return state
  },

  [LOGOUT]: () => initialState,
})
