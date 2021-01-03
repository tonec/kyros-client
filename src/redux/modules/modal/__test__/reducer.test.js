import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('Modal reducer', () => {
  it('OPEN', () => {
    expect(
      reducer(initialState, {
        type: actions.OPEN,
        modalKey: 'modalKey',
      }),
    ).toEqual({
      ...initialState,
      open: true,
      modalKey: 'modalKey',
    })
  })

  it('CLOSE', () => {
    expect(
      reducer(
        {
          open: true,
        },
        {
          type: actions.CLOSE,
        },
      ),
    ).toEqual(initialState)
  })
})
