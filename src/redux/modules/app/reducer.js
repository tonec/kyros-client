import get from 'lodash/get'
import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as types from './actions'

export const initialState = {
  isFirstLoad: true,
  connecting: false,
  connected: false,
  online: true,
  pathHistory: [],
  previousPath: null,
}

export default createReducer(initialState, {
  [types.FIRST_LOAD]: state => ({
    ...state,
    isFirstLoad: false,
  }),

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

  [LOCATION_CHANGE]: (state, action) => {
    const prevPath = get(state, 'pathHistory[0].pathname')
    const nextPath = get(action, 'payload.pathname')

    if (nextPath === prevPath) {
      return state
    }

    return {
      ...state,
      pathHistory: [action.payload, ...state.pathHistory.slice(0, 8)],
      previousPath: prevPath,
    }
  },
})
