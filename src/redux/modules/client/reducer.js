import get from 'lodash/get'
import { fk } from 'utils'
import createReducer from '../../createReducer'
import * as types from './actions'
import { LOGOUT } from '../auth/actions'

export const initialState = {
  visibleClients: [],
}

export default createReducer(initialState, {
  [types.FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    visibleClients: get(payload, 'data.entities', []).map(fk('id')),
  }),

  [types.CREATE_SUCCESS]: (state, { payload }) => ({
    ...state,
    visibleClients: state.visibleClients.concat([
      get(payload, 'data.entities.id'),
    ]),
  }),

  [LOGOUT]: () => initialState,
})
