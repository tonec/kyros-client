import get from 'lodash/get'
import { LOCATION_CHANGE } from 'react-router-redux'
import * as types from './actions'

export const initialState = {
  appLoaded: true,
  pathHistory: [],
  previousPath: null,
}

export default function reducer(state = initialState, action = {}) {
  // pathHistory
  const prevPath = get(state, 'pathHistory[0].pathname')
  const nextPath = get(action, 'payload.pathname')

  switch (action.type) {
    case types.LOADED:
      return {
        ...state,
        appLoaded: false,
      }

    case LOCATION_CHANGE:
      if (nextPath === prevPath) {
        return state
      }

      return {
        ...state,
        pathHistory: [action.payload, ...state.pathHistory.slice(0, 8)],
        previousPath: prevPath,
      }

    default:
      return state
  }
}
