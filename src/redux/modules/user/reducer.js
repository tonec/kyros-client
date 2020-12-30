import { fk } from 'utils'
import * as types from './actions'

export const initialState = {
  isFetching: false,
  visibleUsers: null,
}

export default (state = initialState, action) => {
  const { payload } = action

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
        visibleUsers: payload.data.entities.map(fk('id')),
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
