import * as types from './actions'

export const initialState = {
  isFetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH:
      return {
        ...state,
        isFetching: true,
      }

    case types.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }

    case types.FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
      }

    default:
      return state
  }
}
