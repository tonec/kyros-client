import * as actions from './actions'

const initialState = {
  isFetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS:
      return {
        ...state,
        isFetching: true,
      }

    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }

    case actions.FETCH_USERS_FAIL:
      return {
        ...state,
        isFetching: false,
      }

    default:
      return state
  }
}
