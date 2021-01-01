import get from 'lodash/get'
import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as types from './actions'

export const initialState = {
  isFirstLoad: true,
  pathHistory: [],
  previousPath: null,
}

export default createReducer(initialState, {
  [types.FIRST_LOAD]: state => ({
    ...state,
    isFirstLoad: false,
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
