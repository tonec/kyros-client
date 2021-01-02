import { fk } from 'utils'
import clientResponse from 'test/data/clientResponse'
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('client reducer', () => {
  it('FETCH_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.FETCH_SUCCESS,
        payload: clientResponse,
      }),
    ).toEqual({
      ...initialState,
      visibleClients: clientResponse.data.entities.map(fk('id')),
    })
  })
})
