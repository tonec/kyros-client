import * as actions from './actions'

export const initialState = {
  isFetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH:
      return {
        ...state,
        isFetching: true,
      }

    case actions.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }

    case actions.FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
      }

    default:
      return state
  }
}
