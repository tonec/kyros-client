import reducer, { initialState } from '../reducer'
import * as actions from '../actions'

describe('Modal reducer', () => {
  it('OPEN', () => {
    expect(
      reducer(initialState, {
        type: actions.OPEN,
      }),
    ).toEqual({
      ...initialState,
      open: true,
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
