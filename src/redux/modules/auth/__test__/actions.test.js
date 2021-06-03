import * as actions from '../actions'

jest.mock('cookies-js', () => {
  // Works and lets you check for constructor calls:
  return { expire: jest.fn() }
})

describe('Auth actions', () => {
  it('LOGIN', () => {
    const expectedTypes = [actions.LOGIN, actions.LOGIN_SUCCESS, actions.LOGIN_FAIL]

    expect(actions.login().type).toEqual(expectedTypes)
  })

  it('LOGOUT', () => {
    const expectedType = { type: actions.LOGOUT }

    expect(actions.logout()).toEqual(expectedType)
  })
})
