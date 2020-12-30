import { fk } from 'utils'
import userResponse from 'test/data/userResponse'
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('user reducer', () => {
  it('FETCH', () => {
    expect(
      reducer(initialState, {
        type: actions.FETCH,
      }),
    ).toEqual({
      ...initialState,
      isFetching: true,
    })
  })

  it('FETCH_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.FETCH_SUCCESS,
        payload: userResponse,
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
      visibleUsers: userResponse.data.entities.map(fk('id')),
    })
  })

  it('FETCH_FAIL', () => {
    expect(
      reducer(initialState, {
        type: actions.FETCH_FAIL,
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
    })
  })
})
