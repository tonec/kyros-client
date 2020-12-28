import * as actions from '../actions'

describe('login action creator', () => {
  it('dispatches the correct action types', () => {
    const expectedTypes = [
      actions.LOGIN,
      actions.LOGIN_SUCCESS,
      actions.LOGIN_FAIL,
    ]

    expect(actions.login().types).toEqual(expectedTypes)
  })
})

describe('logout action creator', () => {
  it('dispatches the correct action type', () => {
    const expectedType = { type: actions.LOGOUT }

    expect(actions.logout()).toEqual(expectedType)
  })
})
