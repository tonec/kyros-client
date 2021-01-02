import * as actions from '../actions'

describe('flash actions', () => {
  it('SHOW', () => {
    const expected = {
      type: actions.SHOW,
      status: 'info',
      message: 'Test error message',
      dismissable: true,
      timeout: 3000,
    }

    expect(
      actions.showFlash({
        status: 'info',
        message: 'Test error message',
        dismissable: true,
        timeout: 3000,
      }),
    ).toEqual(expected)
  })

  it('HIDE', () => {
    const expectedActions = { type: actions.HIDE }

    expect(actions.hideFlash()).toEqual(expectedActions)
  })
})
