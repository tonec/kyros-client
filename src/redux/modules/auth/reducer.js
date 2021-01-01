import createReducer from '../../createReducer'
import * as types from './actions'

export const initialState = {
  isFetching: false,
  user: null,
  error: null,
}

export default createReducer(initialState, {
  [types.LOGIN]: state => ({
    ...state,
    isFetching: true,
  }),

  [types.LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    user: payload.user,
    error: null,
  }),

  [types.LOGIN_FAIL]: (state, { payload, error }) => ({
    ...state,
    isFetching: false,
    user: null,
    error: error && payload,
  }),

  [types.LOGOUT]: () => initialState,
})
