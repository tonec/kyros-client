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
  it('LOGIN action', () => {
    expect(
      reducer(initialState, {
        type: actions.LOGIN,
      }),
    ).toEqual({
      ...initialState,
    })
  })

  it('LOGIN_SUCCESS action', () => {
    expect(
      reducer(initialState, {
        type: actions.LOGIN_SUCCESS,
        payload: loginSuccessResponse,
      }),
    ).toEqual({
      ...initialState,
      user: loginSuccessResponse.user,
    })
  })

  it('LOGIN_FAIL action', () => {
    expect(
      reducer(initialState, {
        type: actions.LOGIN_FAIL,
        payload: loginErrorResponse,
        error: true,
      }),
    ).toEqual({
      ...initialState,
      error: loginErrorResponse,
    })
  })
})

it('LOGOUT action', () => {
  const state = {
    ...initialState,
    user: loginSuccessResponse.user,
  }

  expect(
    reducer(state, {
      type: actions.LOGOUT,
    }),
  ).toEqual(initialState)
})
