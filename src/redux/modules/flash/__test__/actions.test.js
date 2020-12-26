import * as actions from '../actions'

describe('showFlash action creator', () => {
  it('dispatches the correct action type', () => {
    const expected = {
      type: actions.SHOW,
      status: 'info',
      message: 'Test error message',
      dismissable: true,
      timeout: 3000,
    }

    expect(actions.showFlash('info', 'Test error message', true, 3000)).toEqual(
      expected,
    )
  })
})
