import { fk } from 'utils'
import { createUserResponse, fetchUsersResponse } from 'test/data/userResponse'
import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import { RECEIVED } from '../../app/actions'

describe('user reducer', () => {
  it('FETCH_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actions.FETCH_SUCCESS,
        payload: createUserResponse,
      }),
    ).toEqual({
      ...initialState,
      visibleUsers: createUserResponse.data.entities.map(fk('id')),
    })
  })

  it('CREATE_SUCCESS', () => {
    const state = reducer(initialState, {
      type: actions.FETCH_SUCCESS,
      payload: fetchUsersResponse,
    })

    expect(
      reducer(state, {
        type: RECEIVED,
        payload: createUserResponse,
      }),
    ).toEqual({
      ...initialState,
      visibleUsers: fetchUsersResponse.data.entities
        .map(fk('id'))
        .concat([createUserResponse.data.entities[0].id]),
    })
  })
})
