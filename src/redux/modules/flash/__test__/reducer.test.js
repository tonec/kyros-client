import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('Flash reducer', () => {
  it('SHOW action', () => {
    expect(
      reducer(initialState, {
        type: actions.SHOW,
        status: 'info',
        message: 'Test flash message',
        dismissable: true,
        timeout: 3000,
      }),
    ).toEqual({
      ...initialState,
      visible: true,
      status: 'info',
      message: 'Test flash message',
      dismissable: true,
      timeout: 3000,
    })
  })

  it('HIDE action', () => {
    expect(
      reducer(
        {
          visible: true,
          status: 'info',
          message: 'Test flash message',
          dismissable: true,
          timeout: 3000,
        },
        {
          type: actions.HIDE,
        },
      ),
    ).toEqual(initialState)
  })
})
