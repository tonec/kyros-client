import { fk } from 'utils'
import createReducer from '../../createReducer'
import * as types from './actions'
import { RECEIVED } from '../app/actions'
import { LOGOUT } from '../auth/actions'

export const initialState = {
  visibleUsers: [],
}

export default createReducer(initialState, {
  [types.FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    visibleUsers: payload.data.entities.map(fk('id')),
  }),

  [RECEIVED]: (state, { payload }) => {
    if (payload.action === 'store' && payload.entity === 'user') {
      return {
        ...state,
        visibleUsers: state.visibleUsers.concat(
          payload.data.entities.reduce((acc, user) => {
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
