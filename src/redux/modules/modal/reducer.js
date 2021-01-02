import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as actions from './actions'

export const initialState = {
  open: false,
  id: null,
}

export default createReducer(initialState, {
  [actions.OPEN]: (state, { id }) => ({
    ...state,
    open: true,
    id,
  }),

  [actions.CLOSE]: () => initialState,

  [LOCATION_CHANGE]: () => initialState,
})
