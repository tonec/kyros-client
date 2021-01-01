import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as actions from './actions'

export const initialState = {
  visible: false,
  status: null,
  message: null,
  dismissable: false,
  timeout: null,
}

export default createReducer(initialState, {
  [actions.SHOW]: (state, action) => ({
    ...state,
    visible: true,
    status: action.status,
    message: action.message,
    dismissable: action.dismissable,
    timeout: action.timeout,
  }),

  [actions.HIDE]: () => initialState,

  [LOCATION_CHANGE]: () => initialState,
})
