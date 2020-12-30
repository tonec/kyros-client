import { LOCATION_CHANGE } from 'react-router-redux'
import * as actions from './actions'

export const initialState = {
  visible: false,
  status: null,
  message: null,
  dismissable: false,
  timeout: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.SHOW:
      return {
        ...state,
        visible: true,
        status: action.status,
        message: action.message,
        dismissable: action.dismissable,
        timeout: action.timeout,
      }

    case actions.HIDE:
    case LOCATION_CHANGE:
      return initialState

    default:
      return state
  }
}
