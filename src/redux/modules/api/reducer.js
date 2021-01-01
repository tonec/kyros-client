import createReducer from '../../createReducer'
import * as types from './actions'

export const initialState = {
  connecting: false,
  connected: false,
  online: true,
}

export default createReducer(initialState, {
  [types.CONNECT]: state => ({
    ...state,
    connecting: true,
  }),

  [types.CONNECTED]: state => ({
    ...state,
    connecting: false,
    connected: true,
  }),

  [types.CLOSED]: state => ({
    ...state,
    connected: false,
  }),

  [types.IS_ONLINE]: state => ({
    ...state,
    online: true,
  }),

  [types.IS_OFFLINE]: state => ({
    ...state,
    online: false,
  }),
})
