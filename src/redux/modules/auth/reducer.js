import * as types from './actions'

export const initialState = {
  isFetching: false,
  user: null,
  error: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isFetching: true,
      }

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload.user,
        error: null,
      }

    case types.LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.error && action.payload,
      }

    case types.LOGOUT:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
