import { AnyAction } from 'redux'
import { User } from 'types'
import createReducer from '../../createReducer'
import * as types from './actions'

interface AuthState {
  user: User | null
  error: string | null
}

export const initialState: AuthState = {
  user: null,
  error: null,
}

export default createReducer(initialState, {
  [types.LOGIN_SUCCESS]: (state: AuthState, { payload }: AnyAction) => ({
    ...state,
    user: payload.user,
    error: null,
  }),

  [types.LOGIN_FAIL]: (state: AuthState, { payload, error }: AnyAction) => ({
    ...state,
    user: null,
    error: error && payload,
  }),

  [types.LOGOUT]: () => initialState,
})
