import { LOCATION_CHANGE } from 'react-router-redux'
import createReducer from '../../createReducer'
import * as actions from './actions'

export const initialState = {
  open: false,
}

export default createReducer(initialState, {
  [actions.OPEN]: state => ({
    ...state,
    open: true,
  }),

  [actions.CLOSE]: () => initialState,

  [LOCATION_CHANGE]: () => initialState,
})
