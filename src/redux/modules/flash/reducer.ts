import { LOCATION_CHANGE } from 'react-router-redux'
import { AnyAction } from 'redux'
import { Status } from 'types'
import createReducer from '../../createReducer'
import * as actions from './actions'

interface FlashState {
  visible: boolean
  status: Status
  message: string
  dismissable: boolean
  timeout: number | null
}

export const initialState: FlashState = {
  visible: false,
  status: 'error',
  message: '',
  dismissable: false,
  timeout: null,
}

export default createReducer(initialState, {
  [actions.SHOW]: (state: FlashState, action: AnyAction) => ({
    ...state,
    visible: true,
    status: action.status,
    message: action.message,
    dismissable: action.dismissable,
    timeout: action.timeout,
  }),

  [actions.HIDE]: () => initialState,

  [LOCATION_CHANGE]: () => initialState,
})
