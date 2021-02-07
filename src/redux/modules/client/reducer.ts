import get from 'lodash/get'
import { APIPayload, Client } from 'types'
import { fk } from 'utils'
import createReducer from '../../createReducer'
import * as types from './actions'
import { RECEIVED } from '../app/actions'
import { LOGOUT } from '../auth/actions'

interface ClientState {
  visibleClients: string[]
}

export const initialState: ClientState = {
  visibleClients: [],
}

export default createReducer(initialState, {
  [types.FETCH_SUCCESS]: (state: ClientState, { payload }: APIPayload<Client>) => ({
    ...state,
    visibleClients: get(payload, 'data.entities', []).map(fk('id')),
  }),

  [RECEIVED]: (state: ClientState, { payload }: APIPayload<Client>) => {
    if (payload.action === 'store' && payload.entity === 'client') {
      return {
        ...state,
        visibleClients: state.visibleClients.concat(
          payload.data.entities.reduce((acc, client) => {
            if (!state.visibleClients.includes(client.id)) {
              return acc.concat(client.id)
            }
            return acc
          }, [] as string[]),
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
