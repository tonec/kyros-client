import { fk } from 'utils'
import * as types from './actions'
import { LOGOUT } from '../auth/actions'

export const initialState = {
  isFetching: false,
  visibleUsers: [],
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

    case LOGOUT:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
