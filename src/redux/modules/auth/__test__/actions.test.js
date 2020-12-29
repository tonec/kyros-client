import * as actions from '../actions'

describe('Auth actions', () => {
  it('LOGIN', () => {
    const expectedTypes = [
      actions.LOGIN,
      actions.LOGIN_SUCCESS,
      actions.LOGIN_FAIL,
    ]

    expect(actions.login().types).toEqual(expectedTypes)
  })

  it('LOGOUT', () => {
    const expectedType = { type: actions.LOGOUT }

    expect(actions.logout()).toEqual(expectedType)
  })
})
