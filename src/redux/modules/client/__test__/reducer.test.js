import { fk } from 'utils'
import {
  createClientResponse,
  fetchClientsResponse,
} from 'test/data/clientResponse'
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('client reducer', () => {
  it('FETCH_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.FETCH_SUCCESS,
        payload: fetchClientsResponse,
      }),
    ).toEqual({
      ...initialState,
      visibleClients: fetchClientsResponse.data.entities.map(fk('id')),
    })
  })

  it('CREATE_SUCCESS', () => {
    const state = reducer(initialState, {
      type: actions.FETCH_SUCCESS,
      payload: fetchClientsResponse,
    })

    expect(
      reducer(state, {
        type: actions.CREATE_SUCCESS,
        payload: createClientResponse,
      }),
    ).toEqual({
      ...initialState,
      visibleClients: fetchClientsResponse.data.entities
        .map(fk('id'))
        .concat([createClientResponse.data.entities[0].id]),
    })
  })
})
