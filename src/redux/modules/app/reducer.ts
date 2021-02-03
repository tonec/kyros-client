import { LocationChangeAction } from 'connected-react-router'
import get from 'lodash/get'
import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as types from './actions'

interface AppState {
  isFirstLoad: boolean
  connecting: boolean
  connected: boolean
  online: boolean
  pathHistory: []
  previousPath: null
}

export const initialState: AppState = {
  isFirstLoad: true,
  connecting: false,
  connected: false,
  online: true,
  pathHistory: [],
  previousPath: null,
}

export default createReducer(initialState, {
  [types.FIRST_LOAD]: (state: AppState) => ({
    ...state,
    isFirstLoad: false,
  }),

  [types.CONNECT]: (state: AppState) => ({
    ...state,
    connecting: true,
  }),

  [types.CONNECTED]: (state: AppState) => ({
    ...state,
    connecting: false,
    connected: true,
  }),

  [types.CLOSED]: (state: AppState) => ({
    ...state,
    connected: false,
  }),

  [types.IS_ONLINE]: (state: AppState) => ({
    ...state,
    online: true,
  }),

  [types.IS_OFFLINE]: (state: AppState) => ({
    ...state,
    online: false,
  }),

  [LOCATION_CHANGE]: (state: AppState, action: LocationChangeAction) => {
    const prevPath = get(state, 'pathHistory[0].location.pathname')
    const nextPath = get(action, 'payload.location.pathname')

    if (nextPath === prevPath) {
      return state
    }

    return {
      ...state,
      pathHistory: [action.payload.location, ...state.pathHistory.slice(0, 8)],
      previousPath: prevPath,
    }
  },
})
