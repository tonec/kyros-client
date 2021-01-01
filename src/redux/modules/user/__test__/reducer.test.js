import { fk } from 'utils'
import userResponse from 'test/data/userResponse'
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('user reducer', () => {
  it('FETCH_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.FETCH_SUCCESS,
        payload: userResponse,
      }),
    ).toEqual({
      ...initialState,
      visibleUsers: userResponse.data.entities.map(fk('id')),
    })
  })
})
