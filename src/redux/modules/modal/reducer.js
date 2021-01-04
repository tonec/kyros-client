import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as actions from './actions'

export const initialState = {
  modalKey: null,
  modalState: {},
}

export default createReducer(initialState, {
  [actions.OPEN]: (state, { payload }) => ({
    ...state,
    modalKey: payload.modalKey,
    modalState: payload.modalState || {},
  }),

  [actions.CLOSE]: () => initialState,

  [LOCATION_CHANGE]: () => initialState,
})
