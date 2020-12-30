import * as types from './actions'

export const initialState = {
  connecting: false,
  connected: false,
  online: true,
  isFetching: {},
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CONNECT:
      return {
        ...state,
        connecting: true,
      }

    case types.CONNECTED:
      return {
        ...state,
        connecting: false,
        connected: true,
      }

    case types.CLOSED:
      return {
        ...state,
        connected: false,
      }

    case types.IS_ONLINE:
      return {
        ...state,
        online: true,
      }

    case types.IS_OFFLINE:
      return {
        ...state,
        online: false,
      }

    default:
      return state
  }
}
