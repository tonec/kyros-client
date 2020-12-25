import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

const loginSuccessResponse = {
  user: {
    _id: '1234',
    firstName: 'Test',
    lastName: 'Tester',
  },
  auth: {
    accessToken: '1234',
    expires: 1,
  },
}

const loginErrorResponse = {
  code: 'Unauthorized',
  message: 'User not found',
}

describe('app reducer', () => {
  it('handles LOGIN action', () => {
    expect(
      reducer(initialState, {
        type: actions.LOGIN,
      }),
    ).toEqual({
      ...initialState,
      isFetching: true,
    })
  })

  it('handles LOGIN_SUCCESS action', () => {
    expect(
      reducer(initialState, {
        type: actions.LOGIN_SUCCESS,
        payload: loginSuccessResponse,
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
      user: loginSuccessResponse.user,
      token: loginSuccessResponse.auth.accessToken,
    })
  })

  it('handles LOGIN_FAIL action', () => {
    expect(
      reducer(initialState, {
        type: actions.LOGIN_FAIL,
        payload: loginErrorResponse,
        error: true,
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
      error: loginErrorResponse,
    })
  })
})
