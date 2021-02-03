import { LOCATION_CHANGE } from 'react-router-redux'
import { AnyAction } from 'redux'
import { Obj } from 'types'
import createReducer from '../../createReducer'
import * as actions from './actions'

interface ModalState {
  modalKey: string | null
  modalState: Obj<any>
}

export const initialState: ModalState = {
  modalKey: null,
  modalState: {},
}

export default createReducer(initialState, {
  [actions.OPEN]: (state: ModalState, { payload }: AnyAction) => ({
    ...state,
    modalKey: payload.modalKey,
    modalState: payload.modalState || {},
  }),

  [actions.CLOSE]: () => initialState,

  [LOCATION_CHANGE]: () => initialState,
})
