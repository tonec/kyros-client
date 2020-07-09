import get from 'lodash/get'
import { LOCATION_CHANGE } from 'react-router-redux'

export const initialState = {
  pathHistory: [],
  previousPath: null
}

export default function reducer(state = initialState, action = {}) {
  const prevPath = get(state, 'pathHistory[0].pathname')
  const nextPath = get(action, 'payload.location.pathname')

  switch (action.type) {
    case LOCATION_CHANGE:
      if (nextPath === prevPath) {
        return state
      }

      return {
        ...state,
        pathHistory: [
          action.payload.location,
          ...state.pathHistory.slice(0, 8)
        ],
        previousPath: prevPath
      }

    default:
      return state
  }
}
