import { fk } from 'utils'
import createReducer from '../../createReducer'
import * as types from './actions'
import { LOGOUT } from '../auth/actions'

export const initialState = {
  isFetching: false,
  visibleUsers: [],
}

export default createReducer(initialState, {
  [types.FETCH]: state => ({
    ...state,
    isFetching: true,
  }),

  [types.FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    visibleUsers: payload.data.entities.map(fk('id')),
  }),

  [types.FETCH_FAIL]: state => ({
    ...state,
    isFetching: false,
  }),

  [LOGOUT]: () => initialState,
})
