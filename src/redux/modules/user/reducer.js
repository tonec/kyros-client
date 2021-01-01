import { fk } from 'utils'
import createReducer from '../../createReducer'
import * as types from './actions'
import { LOGOUT } from '../auth/actions'

export const initialState = {
  visibleUsers: [],
}

export default createReducer(initialState, {
  [types.FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    visibleUsers: payload.data.entities.map(fk('id')),
  }),

  [LOGOUT]: () => initialState,
})
