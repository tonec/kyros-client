import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as actions from './actions'

export const initialState = {
  open: false,
  modalKey: null,
}

export default createReducer(initialState, {
  [actions.OPEN]: (state, { modalKey }) => ({
    ...state,
    open: true,
    modalKey,
  }),

  [actions.CLOSE]: () => initialState,

  [LOCATION_CHANGE]: () => initialState,
})
