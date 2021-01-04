import get from 'lodash/get'
import { fk } from 'utils'
import createReducer from '../../createReducer'
import * as types from './actions'
import { RECEIVED } from '../app/actions'
import { LOGOUT } from '../auth/actions'

export const initialState = {
  visibleClients: [],
}

export default createReducer(initialState, {
  [types.FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    visibleClients: get(payload, 'data.entities', []).map(fk('id')),
  }),

  [RECEIVED]: (state, { payload }) => {
    if (payload.action === 'store' && payload.entity === 'client') {
      return {
        ...state,
        visibleClients: state.visibleClients.concat(
          payload.data.entities.reduce((acc, client) => {
            if (!state.visibleClients.includes(client.id)) {
              return acc.concat(client.id)
            }
            return acc
          }, []),
        ),
      }
    }

    if (payload.action === 'remove' && payload.entity === 'client') {
      return {
        ...state,
        visibleClients: state.visibleClients.filter(
          clientId => clientId !== payload.data.entities[0].id,
        ),
      }
    }

    return state
  },

  [LOGOUT]: () => initialState,
})
