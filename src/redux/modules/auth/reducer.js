import * as actions from './actions'

export const initialState = {
  isFetching: false,
  user: null,
  error: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isFetching: true,
      }

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload.user,
        error: null,
      }

    case actions.LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.error && action.payload,
      }

    case actions.LOGOUT:
      return initialState

    default:
      return state
  }
}
